# Site shell room backing

Timestamp: 2026-06-27 11:40 ET

## Source-of-truth basis

Read the required root and `.agent` source files, then checked active lessons, feedback log/inbox, semantic index, quality metrics, recent change history, shared layout imports, global shell CSS, and shared site chrome source.

## Satisfaction check

- Target: shared non-home route shell / room canvas.
- State: partially satisfied.
- Mismatch: route pages had many improved paper cards, dockets, shelves, and snippets, but the common `.site-shell` canvas still let the route pieces float on the general background instead of reading as one calm public room.

## Visible Website change

Added `app/site-shell-room-backing-pass.css` and loaded it from `app/layout.jsx` after the calm structured room pass. The pass gives all `.site-shell` routes a large clipped paper backing field, a left vertical `room path` strip, and a small `public room` paper tag on page/readable layouts. It uses existing grain/scratch assets, shallow shadows, clipped silhouettes, and mobile fallbacks without adding routes, changing public copy, inventing content, or adding heavy animation.

## Public source changed

- `app/site-shell-room-backing-pass.css`
- `app/layout.jsx`

## Related items

- COMP-005
- DESIGN-019
- DESIGN-022
- DESIGN-024
- DESIGN-028
- DESIGN-029
- DESIGN-030
- LESSON-019
- LESSON-022
- LESSON-024
- LESSON-026
- METRIC-018
- METRIC-021
- METRIC-023
- METRIC-025
- METRIC-028
- METRIC-029
