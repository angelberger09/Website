# Homepage hero route slips

Timestamp: 2026-06-25 09:09 ET

## Intent

Make the homepage first screen orient visitors faster without inventing content, adding another global nav system, or weakening the final performance budget.

## Mismatch

The homepage already had a full door board lower on the page, but METRIC-001, METRIC-002, and METRIC-017 were still partially satisfied around first-screen hierarchy, human-facing orientation, and room continuity. The hero itself could do more to tell visitors where to begin.

## Website source changed

- `app/page.jsx`
- `app/home-paper-collage-pass.css`
- `app/performance-budget-pass.css`

## What changed

- Added `home-hero-route-strip` beneath the homepage hero note.
- Rendered the existing four `homepageCards` as `home-hero-route-slip` links.
- Styled the slips as clipped paper snippets with direct room labels and visible focus states.
- Added a two-column mobile layout.
- Added the new slips to the final performance budget pass so they use cheaper shared paper backgrounds, shadows, and transform resets.

## Why this is public-safe

The pass reuses existing public route data only. It does not invent fake posts, products, portfolio items, case studies, photos, or private content.

## Related items

- PAGE-001
- COMP-003
- COMP-004
- COMP-008
- DESIGN-006
- DESIGN-019
- DESIGN-022
- DESIGN-024
- DESIGN-030
- LESSON-001
- LESSON-002
- LESSON-018
- LESSON-019
- LESSON-022
- LESSON-024
- METRIC-001
- METRIC-002
- METRIC-007
- METRIC-017
- METRIC-018
- METRIC-021
- METRIC-023
- METRIC-028
- METRIC-029
