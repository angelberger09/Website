# 2026-06-26 — Shared list paper scraps

## Changed

- Added `app/list-paper-scraps-pass.css`.
- Loaded the pass after `app/reader-state-paper-scraps-pass.css` in `app/layout.jsx`.
- Converted shared `.detail-list` and `.process-list` items from plain indented list styling into clipped paper scraps with pin dots, light tape marks, grain/scratch texture, uneven silhouettes, and lifted shadows.

## Why

The surrounding page boards have been moving toward calm paper rooms, but the base detail/process list primitives still came from smooth text-list styling in `app/globals.css`. Current paper-material, paper-snippet, torn-edge, and flattened-hierarchy guidance supports correcting the shared list fallback so repeated requirements, process notes, and detail lists read as placed paper fragments instead of generic app copy.

## Satisfaction state

Partially satisfied. This improves a shared fallback pattern across repeated route content, but deployed visual review should still check whether any remaining list-like surfaces need route-specific treatment instead of another global pass.

## Related items

- COMP-005
- COMP-008
- DESIGN-019
- DESIGN-022
- DESIGN-024
- DESIGN-029
- DESIGN-030
- LESSON-019
- LESSON-022
- LESSON-024
- METRIC-018
- METRIC-021
- METRIC-023
- METRIC-028
- METRIC-029
