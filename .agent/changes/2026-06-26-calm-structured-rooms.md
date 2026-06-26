# 2026-06-26 01:05 ET — Calm structured rooms layout reset

## Changed

- Added `app/calm-structured-rooms-pass.css` and loaded it last from `app/layout.jsx`.
- Reduced oversized display hierarchy across shared page intros and homepage hero surfaces.
- Reframed shared `PageIntro` as one composed paper hero board with a smaller title, readable tags, and a contained route visual card.
- Reorganized the Notes page visually through CSS into a clearer reading shelf: intro copy, latest note emphasis, calmer note grid, quieter gallery/source/state boards, and a more focused post reader surface.
- Added performance-conscious reveal motion using opacity and transform only, with `prefers-reduced-motion` support.
- Updated active lessons with the calm structured room rule.

## Why

The live Notes page needed clearer structure, stronger hierarchy, calmer spacing, and fewer competing paper/card treatments. The requested plan called for a layout reset rather than additional decoration.

## Related items

- PAGE-001
- PAGE-003
- PAGE-003A
- COMP-003
- COMP-005
- COMP-006
- COMP-008
- DESIGN-019
- DESIGN-022
- DESIGN-029
- DESIGN-034
- DESIGN-035
- LESSON-018
- LESSON-019
- LESSON-022
- METRIC-017
- METRIC-018
- METRIC-021
