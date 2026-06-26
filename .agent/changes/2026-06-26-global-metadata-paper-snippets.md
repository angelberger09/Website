# 2026-06-26 — Global metadata paper snippets

## Satisfaction check

- Target: remaining shared metadata chips and card cue labels that still inherited rounded UI-pill language from the base CSS.
- State: partially satisfied.
- Classification: in-bounds visual/interface refinement supported by current paper material, paper snippet, torn-edge, and shared-card lessons.

## Visible Website change

Added `app/global-metadata-paper-snippets-pass.css` and loaded it through `app/layout.jsx` after the recent status, detail-card, and eyebrow paper-label passes. The new pass recasts shared `.page-card__label`, `.source-link em`, and generic `.tag-row span` surfaces as clipped paper snippets with grain, scratch texture, pin dots, uneven silhouettes, and lifted shadows.

This keeps shared metadata from falling back to smooth rounded pill styling while preserving readable text, focus visibility, and responsive sizing.

## Why

The base Website CSS still grouped `.page-card__label`, `.status-pill`, and `.tag-row span` as rounded metadata pills. Recent runs already corrected `.status-pill` and Notes-post-specific tags, but the shared metadata/cue pattern could still reappear as a generic UI chip on cards, source links, or future tag rows.

The current `.agent` state asks repeated labels and supporting text to live as paper snippets instead of app-panel chips, so this pass applies that correction at the shared pattern level rather than adding another page-only decoration.

## Files changed

- `app/global-metadata-paper-snippets-pass.css`
- `app/layout.jsx`

## Affected semantic items

- COMP-004
- COMP-005
- COMP-006
- COMP-007
- COMP-008
- DESIGN-019
- DESIGN-022
- DESIGN-024
- DESIGN-030
- LESSON-019
- LESSON-022
- LESSON-024
- METRIC-018
- METRIC-021
- METRIC-023
- METRIC-029

## Safety / boundaries

- No routes changed.
- No copy changed.
- No fake content, fake products, fake posts, or private material added.
- The pass is CSS-only and keeps hover/focus readability intact.
