# About Opening Room Table Matrix

| Field | Value |
|---|---|
| Semantic target | PAGE-002 About / COMP-008 Filled Page Sections |
| Public source | `app/about-opening-room-table-pass.css`, `app/layout.jsx` |
| Change type | Visible interface refinement |
| Satisfaction state | Partially satisfied → refined |
| Underlying goal | Make the first About content board read as one calm public studio room table instead of adjacent paper scraps or loose cards. |
| Boundary | Do not change About copy, route links, data contracts, accessibility labels, or invent new studio work, images, private material, or external content. |
| Quality metric | METRIC-018, METRIC-020, METRIC-021, METRIC-023, METRIC-028, METRIC-029, METRIC-030, METRIC-032 |
| Visible proof | The About opening `Studio shape` board gains a clipped `room table` side label, `public room` stamp, stronger desk field, stitched room-map thread, and deeper content-bearing paper/photo room pieces. |

## Related semantic IDs

- PAGE-002
- COMP-008
- DESIGN-019
- DESIGN-021
- DESIGN-022
- DESIGN-024
- DESIGN-028
- DESIGN-029
- DESIGN-030
- DESIGN-031
- LESSON-001
- LESSON-002
- LESSON-018
- LESSON-019
- LESSON-021
- LESSON-022
- LESSON-024
- LESSON-025
- LESSON-026
- METRIC-002
- METRIC-017
- METRIC-018
- METRIC-020
- METRIC-021
- METRIC-023
- METRIC-028
- METRIC-029
- METRIC-030
- METRIC-032

## Implementation notes

This pass is deliberately CSS-only and late-loaded. It reuses existing About markup and public-safe labels while strengthening the composed-room read of the opening board. The mobile fallback keeps the side label horizontal and removes the left table border so the section remains readable on narrow screens.