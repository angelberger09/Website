# 2026-06-26 — Detail card paper faces

## Changed

- Added a shared `detail-card__paper-face` cue inside `DetailCard` in `app/site-chrome.jsx`.
- Added `app/detail-card-paper-face-pass.css` so remaining generic `DetailCard` surfaces gain a visible abstract paper/photo face using the existing eyebrow/status copy.
- Imported the new pass from `app/layout.jsx` after the current paper asset card styling.

## Why

The current Website has replaced many route sections with custom paper boards, galleries, rails, and photo-led surfaces, but the shared `DetailCard` fallback can still appear in future or remaining filled-page support sections. That made the generic detail-card pattern only partially aligned with the paper/photo and content-bearing card lessons. This pass turns remaining shared detail cards into visibly content-bearing paper pieces without inventing fake work, products, photos, or private material.

## Satisfaction state

Partially satisfied refinement.

## Related items

- COMP-005
- COMP-008
- DESIGN-019
- DESIGN-021
- DESIGN-022
- DESIGN-024
- DESIGN-030
- DESIGN-031
- LESSON-019
- LESSON-021
- LESSON-022
- LESSON-024
- LESSON-025
- METRIC-018
- METRIC-020
- METRIC-021
- METRIC-023
- METRIC-029
- METRIC-030
