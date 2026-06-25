# Page intro subtitle scale pass

Timestamp: 2026-06-24 21:30 ET

## Changed

- Updated `app/site-chrome.jsx` so the shared `PageIntro` title uses a smaller, thinner, one-line subtitle treatment.
- Updated `.agent/matrices/components.matrix.md` so COMP-005 records the shared `PageIntro` responsibility for LESSON-023 / METRIC-022.

## Why

The page titles had already been shortened to 2–5 word phrases, but the shared `PageIntro` title still inherited the oversized hero-heading scale from `app/globals.css`. That left the external Website state only partially aligned with the internal subtitle rule.

## Satisfaction state

Partially satisfied → narrowed toward satisfied.

## Related items

- COMP-005
- DESIGN-006
- LESSON-023
- METRIC-022
- PAGE-002
- PAGE-003
- PAGE-003B
- PAGE-004
- PAGE-005
