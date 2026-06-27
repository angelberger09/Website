# Late Paper Surface Budget Matrix

| Field | Value |
|---|---|
| Semantic ID | DESIGN-019 / DESIGN-027 / DESIGN-028 / DESIGN-029 |
| Implementation | `app/late-paper-surface-budget-pass.css`, loaded last in `app/layout.jsx` |
| Scope | System-wide late-pass visual budget for newest About, Notes, Portfolio, Store, homepage, and shared room/docket surfaces |
| Source target | Active lessons and matrices requiring paper-first material, calm-room structure, content-bearing photo/paper cards, crinkled root paper, flattened hierarchy, and performance-safe atmosphere |
| Satisfaction state | Partially satisfied → refined |
| Visible proof | Late-loaded docket/card sections should still read as paper while feeling calmer: softer repeated shadows, fewer filter effects, normalized paper faces, reduced pseudo-layer noise, large-section containment, and mobile/reduced-motion transform cleanup |
| Boundary | Does not change copy, routes, data contracts, external feeds, product claims, project claims, note content, or private context |

## Affected surfaces

- Homepage house-rules docket
- About contact-sheet exposure desk
- Notes post title/support and Notes reader-state docket surfaces
- Portfolio future-feed public docket
- Store future-feed shelf docket
- Large late-loaded room/docket boards that previously loaded after the final budget pass

## Affected IDs

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
- DESIGN-021
- DESIGN-022
- DESIGN-024
- DESIGN-027
- DESIGN-028
- DESIGN-029
- DESIGN-030
- DESIGN-031
- LESSON-006
- LESSON-019
- LESSON-021
- LESSON-022
- LESSON-024
- LESSON-025
- LESSON-026
- METRIC-007
- METRIC-018
- METRIC-020
- METRIC-021
- METRIC-023
- METRIC-026
- METRIC-027
- METRIC-028
- METRIC-029
- METRIC-030
- METRIC-032

## Quality checks

- The newest paper surfaces should not look weightless or washed out.
- The newest paper surfaces should not stack heavy shadows and filters on top of earlier budgeted layers.
- Mobile layouts should keep paper surfaces readable without decorative rotations causing crowded edges.
- Reduced-motion users should not receive unnecessary transform-based decoration.
- The pass should preserve handmade paper texture while making the final rendered page feel calmer and more performant.
