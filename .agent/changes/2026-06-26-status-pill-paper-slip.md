# 2026-06-26 — Status pill paper slip pass

## Interface mismatch

Shared `status-pill` labels still inherited the older rounded pill treatment from `app/globals.css`. That left some DetailCard metadata reading like UI badges while current paper-piece, flattened hierarchy, and text-snippet guidance asks repeated support labels to feel like placed paper slips.

## Satisfaction state

Partially satisfied.

## Visible Website change

Added `app/status-pill-paper-slip-pass.css` and loaded it from `app/layout.jsx`. The pass turns remaining `.status-pill` labels into clipped textured paper slips with tape marks, grain, scratches, lifted shadow, and non-pill silhouettes while preserving readable uppercase label text.

## Public source files changed

- `app/status-pill-paper-slip-pass.css`
- `app/layout.jsx`

## Related semantic IDs

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

## Validation note

The change is source-validated against the global `status-pill` rule in `app/globals.css` and the shared `DetailCard` component in `app/site-chrome.jsx`. It does not add content, products, posts, portfolio work, photos, routes, or private material.
