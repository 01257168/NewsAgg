"""Backfill: normalise a single-language source's stored `language` code.

Why: langdetect mislabels Traditional Chinese (frequently as 'ko'/'ja'/'zh-cn')
and returns lowercase codes, while the ON CONFLICT upsert never updates
`language` — so existing rows can't self-heal on re-scrape. Yahoo TW sections
are 100% zh-TW by construction, so any non-English yahoo_tw row should be
'zh-TW'. Genuine English wire copy (language LIKE 'en%') is left untouched.

Dry-run by default (like cleanup.py); pass --commit to actually write. Idempotent
— a second run changes 0 rows. Reads NEONDB_URL from env / scraper.env / server.env.

Usage:
    python scraper/backfill_lang.py                 # dry-run, source=yahoo_tw
    python scraper/backfill_lang.py --commit         # apply
    python scraper/backfill_lang.py -s yahoo_tw -l zh-TW --commit
"""
from __future__ import annotations

import argparse

from core import db


def _dist(cur, source: str) -> list[tuple]:
    cur.execute(
        "SELECT language, count(*) FROM articles WHERE source_id = %s GROUP BY 1 ORDER BY 2 DESC",
        (source,),
    )
    return cur.fetchall()


def main() -> None:
    ap = argparse.ArgumentParser(description="Normalise a source's stored language code.")
    ap.add_argument("-s", "--source", default="yahoo_tw", help="source_id to fix (default: yahoo_tw)")
    ap.add_argument("-l", "--lang", default="zh-TW", help="canonical language code (default: zh-TW)")
    ap.add_argument("--commit", action="store_true", help="actually write (default: dry-run)")
    args = ap.parse_args()

    conn = db.connect()
    cur = conn.cursor()
    cur.execute("SET statement_timeout = '60s'")

    print(f"Source={args.source!r}  ->  language={args.lang!r}   ({'COMMIT' if args.commit else 'DRY-RUN'})")
    print("\nBEFORE:")
    for lang, n in _dist(cur, args.source):
        print(f"  {lang!r:10} {n}")

    # Count the rows that would change (non-English, not already canonical).
    cur.execute(
        """
        SELECT count(*) FROM articles
         WHERE source_id = %s
           AND language IS DISTINCT FROM %s
           AND (language IS NULL OR language NOT LIKE 'en%%')
        """,
        (args.source, args.lang),
    )
    to_change = cur.fetchone()[0]
    print(f"\nRows to normalise: {to_change}")

    if not args.commit:
        print("\nDRY-RUN — no changes written. Re-run with --commit to apply.")
        cur.close(); conn.close()
        return

    cur.execute(
        """
        UPDATE articles SET language = %s
         WHERE source_id = %s
           AND language IS DISTINCT FROM %s
           AND (language IS NULL OR language NOT LIKE 'en%%')
        """,
        (args.lang, args.source, args.lang),
    )
    changed = cur.rowcount
    conn.commit()
    print(f"UPDATED {changed} rows (committed).")

    print("\nAFTER:")
    for lang, n in _dist(cur, args.source):
        print(f"  {lang!r:10} {n}")

    cur.close(); conn.close()


if __name__ == "__main__":
    main()
