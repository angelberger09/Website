# 2026-06-26 — Footer current-room stamp pass

## Interface change

Added `app/footer-current-room-stamp-pass.css` and loaded it from `app/layout.jsx` after the existing footer paper/receipt passes.

## Why

The shared footer already rendered paper trail links and knew the active route through `aria-current="page"`, but the active route still felt like a modest state variation among equal scraps. Current room/continuity guidance asks repeated shared route surfaces to make the current room and next path visibly readable as placed paper objects.

## Satisfaction state

Partially satisfied → refined.

## Visible result

The active footer route now receives a clipped `current room` stamp, stronger lifted-paper state, dashed thread cue, a more prominent paper/photo center, and a readable handwritten state slip. The change applies across the shared footer on major Website routes without adding fake content, changing navigation labels, or reducing accessibility semantics.

## Affected items

- COMP-002
- COMP-005
- COMP-009
- DESIGN-015
- DESIGN-018
- DESIGN-019
- DESIGN-022
- DESIGN-024
- DESIGN-030
- LESSON-002
- LESSON-015
- LESSON-018
- LESSON-019
- LESSON-022
- LESSON-024
- METRIC-014
- METRIC-017
- METRIC-018
- METRIC-021
- METRIC-023
- METRIC-029
