# 2026-06-28 — Detail card terminal binding

## Changed

- Refined the already-loaded `app/terminal-room-render-budget-pass.css` so shared `.detail-card` surfaces receive a final terminal paper-slip binding.
- Added a top binding tape, lower `public room slip` label, clipped inner copy sheet, calmer status-pill placement, and mobile sizing rules.
- Kept all public copy, route data, page content, links, and no-fake-content boundaries unchanged.

## Why

The active `.agent` state still asks shared card primitives to read as physical paper pieces instead of rounded UI cards. Earlier passes added paper faces and a terminal budget, but `.detail-card` remained a reusable surface that could still scan as a generic card shell across filled pages. This pass makes that shared primitive visibly closer to the paper/collage target without inventing new page content.

## Satisfaction check

- Target: shared `DetailCard` paper surface.
- State before: partially satisfied.
- State after: more strongly satisfied; still subject to live visual review across pages that render `DetailCard`.

## Related items

- PAGE-001
- PAGE-002
- PAGE-003
- PAGE-003A
- PAGE-003B
- PAGE-004
- PAGE-005
- COMP-005
- COMP-008
- DESIGN-019
- DESIGN-022
- DESIGN-024
- DESIGN-028
- DESIGN-029
- DESIGN-030
- LESSON-002
- LESSON-019
- LESSON-022
- LESSON-024
- METRIC-002
- METRIC-018
- METRIC-021
- METRIC-023
- METRIC-027
- METRIC-028
- METRIC-029
