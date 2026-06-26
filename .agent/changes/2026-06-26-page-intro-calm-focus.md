# 2026-06-26 — PageIntro calm focus pass

## Interface mismatch

Shared route intros had accumulated multiple parallel cue systems: room tags, room rhythm, room compass, room key, photo card, and room shelf. The pieces were individually aligned with the paper/photo lessons, but together they partially conflicted with the active calm-room rule that major pages should feel like one composed hero board with controlled rhythm rather than repeated scraps.

## Satisfaction state

Partially satisfied. The intro already had content-bearing paper/photo material, but its cue density needed consolidation.

## Visible Website change

Added `app/page-intro-calm-focus-pass.css` and loaded it after the existing PageIntro room-shelf pass. The new pass hides the redundant room tags, rhythm rail, and compass, then keeps one compact four-piece room shelf plus the photo/key stack. This should make About, Notes, Blog compatibility, Portfolio, and Store intros visibly calmer while preserving the meaningful paper/photo content.

## Public source files changed

- `app/page-intro-calm-focus-pass.css`
- `app/layout.jsx`

## Affected IDs

- PAGE-002
- PAGE-003
- PAGE-003B
- PAGE-004
- PAGE-005
- COMP-005
- COMP-008
- DESIGN-019
- DESIGN-021
- DESIGN-022
- DESIGN-023
- DESIGN-025
- DESIGN-026
- DESIGN-029
- DESIGN-030
- LESSON-019
- LESSON-021
- LESSON-022
- LESSON-023
- LESSON-025
- LESSON-026
- METRIC-018
- METRIC-020
- METRIC-021
- METRIC-022
- METRIC-024
- METRIC-025
- METRIC-028
- METRIC-029

## Validation note

This change is source-validated against current `app/site-chrome.jsx`, existing PageIntro CSS imports in `app/layout.jsx`, active lessons, semantic index, component matrix, and quality metrics. Live deployed validation should confirm the calmer intro composition after GitHub Pages rebuilds.
