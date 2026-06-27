"""BBC (bbc.com) — English. Category -> section index URLs."""
from __future__ import annotations

import os
import sys

sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from core.pipeline import SourceSpec, run_source  # noqa: E402

SPEC = SourceSpec(
    key="bbc",
    name="BBC",
    language="en",
    categories={
        "Sport":         ["https://www.bbc.com/sport"],
        "Health":        ["https://www.bbc.com/future"],
        "Business":      ["https://www.bbc.com/business"],
        "World":         ["https://www.bbc.com/news/world"],
        "Politics":      ["https://www.bbc.com/news/politics"],
        "Lifestyle":     ["https://www.bbc.com/arts", "https://www.bbc.com/travel"],
        "Science":       ["https://www.bbc.com/technology"],
        # BBC has no single stable "climate" section index — verify this returns
        # candidates on first run; fall back to a climate topic page if empty.
        "Climate":       ["https://www.bbc.com/future-planet"],
    },
)

if __name__ == "__main__":
    run_source(SPEC)
