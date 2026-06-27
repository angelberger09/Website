# Portfolio Room Key Compass Matrix

## Scope

This matrix records the 2026-06-27 Portfolio room-key compass pass.

## Satisfaction check

- Target: Portfolio opening room-key board should read as one guided archive compass, not three separate neighboring cards.
- State before this pass: partially satisfied.
- State after this pass: partially satisfied, visibly improved.

## Changed files

- `app/portfolio-room-key-compass-pass.css`
- `app/layout.jsx`
- `.agent/changes/change-log.md`
- `.agent/matrices/portfolio-room-key-compass.matrix.md`

## Visible interface effect

- Adds an `archive compass` paper slip to the Portfolio room-key heading.
- Adds a left stitched paper spine to connect the three opening room-key slips.
- Adds direct paper cue labels to the slips: `public first`, `preview honestly`, and `follow shelf`.
- Preserves the existing Portfolio copy, links, data, route semantics, and public-safety boundary.

## Related semantic IDs

- PAGE-004
- COMP-008
- DESIGN-015
- DESIGN-019
- DESIGN-021
- DESIGN-022
- DESIGN-024
- DESIGN-028
- DESIGN-029
- DESIGN-030
- LESSON-002
- LESSON-015
- LESSON-019
- LESSON-021
- LESSON-022
- LESSON-024
- LESSON-025
- LESSON-026
- METRIC-002
- METRIC-014
- METRIC-018
- METRIC-020
- METRIC-021
- METRIC-023
- METRIC-028
- METRIC-029
- METRIC-030
- METRIC-032

## Boundary notes

- No fake projects, fake screenshots, fake case studies, fake products, or private content were added.
- The pass is CSS-only plus import wiring, so it changes presentation without changing Portfolio source data or route behavior.
- Mobile rules keep the compass readable as a vertical guided path.
