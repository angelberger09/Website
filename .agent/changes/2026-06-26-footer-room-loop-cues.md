# 2026-06-26 — Footer room loop cues

## Changed

- Added direct route cue data to the shared footer room loop in `app/site-chrome.jsx`.
- Added `app/footer-room-loop-cues-pass.css` and loaded it from `app/layout.jsx`.
- The footer loop slips now show content-bearing paper/photo cue faces: `Map room`, `Read shelf`, `Work shelf`, and `Open later`.

## Why

The footer already had a `Room loop` trail, but each route slip still used a mostly generic abstract swatch. Current direct-label, content-bearing photo-center, paper-piece, and calm-room guidance supports making shared route-loop surfaces visibly explain what kind of room each link opens without adding fake content, extra routes, or decorative numbering.

## Satisfaction

Partially satisfied. This pass strengthens the shared footer loop as a reusable continuity surface while preserving the existing route labels and accessible links.

## Related items

- COMP-005
- COMP-009
- DESIGN-015
- DESIGN-018
- DESIGN-019
- DESIGN-021
- DESIGN-022
- DESIGN-030
- DESIGN-031
- LESSON-002
- LESSON-015
- LESSON-018
- LESSON-019
- LESSON-021
- LESSON-022
- LESSON-025
- METRIC-014
- METRIC-017
- METRIC-018
- METRIC-020
- METRIC-021
- METRIC-029
- METRIC-030
