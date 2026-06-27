-- Category taxonomy v2: merge Travel + Entertainment into the broader
-- "Lifestyle" bucket. The new "Climate" category is NOT backfilled here —
-- those articles arrive via the scraper (sources/*.py + config CATEGORY_LABELS).
-- Idempotent: re-running is a no-op once no Travel/Entertainment rows remain.

UPDATE articles SET topic = 'Lifestyle' WHERE topic IN ('Entertainment', 'Travel');
