# 2026-06-25 — Homepage room status photo centers

## Changed

- Added `home-room-slip__image` markup to the homepage Current rooms cards in `app/page.jsx`.
- Added `app/home-room-status-photo-pass.css` so each current-room status card has an honest abstract paper/photo center using existing room labels and titles.
- Imported the pass from `app/layout.jsx` after the performance/root paper passes so it remains visible while using cheap gradients, grain, clipped edges, and no heavy filters or animations.
- Updated `.agent/matrices/pages.matrix.md` and `.agent/matrices/quality-metrics.matrix.md` to record the interface progress.

## Why

The homepage current-room cards were already paper slips, but they were still mostly text-first. Active paper/photo lessons and metrics call for honest image-like surfaces where they can carry structure without inventing screenshots, product imagery, portfolio work, or private content. The room-status row can safely become more visual because it uses only existing public room labels, titles, and readiness states.

## Satisfaction state

Partially satisfied. This improves the homepage side of METRIC-018, METRIC-021, METRIC-023, METRIC-028, and METRIC-030, but deployed visual review is still needed.

## Related items

- PAGE-001
- COMP-008
- DESIGN-019
- DESIGN-021
- DESIGN-022
- DESIGN-024
- DESIGN-030
- DESIGN-031
- LESSON-001
- LESSON-018
- LESSON-019
- LESSON-021
- LESSON-022
- LESSON-024
- LESSON-025
- METRIC-001
- METRIC-018
- METRIC-021
- METRIC-023
- METRIC-028
- METRIC-030
