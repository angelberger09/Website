# 2026-06-28 — Terminal room render budget

## Changed

- Added `app/terminal-room-render-budget-pass.css`.
- Loaded it as the final stylesheet in `app/layout.jsx` so late page-specific paper/collage passes no longer bypass the shared render-budget layer.
- Applied one final inexpensive paper cut, shadow, focus, image-surface, room-backing, mobile, and reduced-motion budget across the shared room surfaces, route boards, galleries, continuity band, and footer.
- Kept public copy, routes, source contracts, links, and no-fake-content boundaries unchanged.

## Why

The active `.agent` state asks the Website to remain visibly handmade and paper-like while avoiding accumulated heavy effects. Earlier budget passes covered many surfaces, but later imported room, path, shell, asset, card, and homepage passes could still reintroduce extra filters, transforms, pseudo-elements, or heavier shadows after the shared budget. This pass makes the render budget terminal again without inventing new content or adding another page-specific visual direction.

## Satisfaction state

Partially satisfied. The interface should visibly calm across multiple routes because the final layer now wins over late imported visual passes. Deployed browser review should still confirm scroll smoothness and paper readability across Home, About, Notes, Portfolio, Store, and Blog compatibility routes.

## Related items

- PAGE-001
- PAGE-002
- PAGE-003
- PAGE-003A
- PAGE-003B
- PAGE-004
- PAGE-005
- COMP-004
- COMP-005
- COMP-006
- COMP-007
- COMP-008
- COMP-009
- DESIGN-018
- DESIGN-019
- DESIGN-021
- DESIGN-022
- DESIGN-024
- DESIGN-027
- DESIGN-028
- DESIGN-029
- DESIGN-030
- DESIGN-031
- DESIGN-032
- LESSON-001
- LESSON-002
- LESSON-004
- LESSON-006
- LESSON-018
- LESSON-019
- LESSON-021
- LESSON-022
- LESSON-024
- LESSON-025
- LESSON-026
- METRIC-007
- METRIC-017
- METRIC-018
- METRIC-020
- METRIC-021
- METRIC-023
- METRIC-025
- METRIC-026
- METRIC-027
- METRIC-028
- METRIC-029
- METRIC-030
- METRIC-031
- METRIC-032
