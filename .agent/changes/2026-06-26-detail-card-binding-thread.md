# 2026-06-26 — Detail card binding thread

## Changed

- Added `app/detail-card-binding-thread-pass.css`.
- Loaded the pass from `app/layout.jsx` after the existing detail-card paper-face pass.

## Why

Shared `DetailCard` surfaces had abstract paper/photo faces, but those faces could still read as floating inserts separate from the card copy. Current paper-piece, calm-room, content-bearing photo-center, and flattened hierarchy guidance supports visibly binding the face to the copy with a small paper label, thread line, and clipped eyebrow slip so generic detail cards read more like one placed studio note.

## Satisfaction state

Partially satisfied. This is a shared refinement across remaining `DetailCard` instances rather than a new content system.

## Related items

- COMP-005
- COMP-008
- DESIGN-019
- DESIGN-021
- DESIGN-022
- DESIGN-024
- DESIGN-029
- DESIGN-030
- LESSON-019
- LESSON-021
- LESSON-022
- LESSON-024
- LESSON-025
- METRIC-018
- METRIC-020
- METRIC-021
- METRIC-023
- METRIC-028
- METRIC-029
- METRIC-030
