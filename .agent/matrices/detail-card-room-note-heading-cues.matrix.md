# DetailCard Room-Note Heading Cues Matrix

| Item | Value |
|---|---|
| Target | Shared `DetailCard` heading treatment |
| Public source | `app/detail-card-room-pin-pass.css`, `app/layout.jsx` |
| Mismatch | Remaining generic DetailCard headings could still read as ordinary UI headings even when the card body had paper texture, clipped faces, and lifted shadows. |
| Satisfaction state | Partially satisfied before this pass; refined after this pass. |
| Visible correction | Add a small clipped `room note` paper slip and dashed binding/thread mark to `DetailCard h2` headings. |
| Boundary | Do not change route copy, data contracts, navigation, or invent content. Apply only a shared visual/material cue. |
| Quality check | Remaining DetailCard headings should visually participate in the paper-room system rather than floating as plain UI typography. |

## Related IDs

- `COMP-008` — Filled Page Sections
- `DESIGN-019` — Paper Material Authenticity
- `DESIGN-022` — Paper Piece Card Surfaces
- `DESIGN-024` — Torn Edge Card Silhouettes
- `DESIGN-029` — Flattened Paper Hierarchy
- `DESIGN-030` — Text Paper Snippets
- `LESSON-019` — Make paper material feel primary
- `LESSON-022` — Make shared cards read as paper pieces
- `LESSON-024` — Use torn-edge card silhouettes instead of rounded corners
- `METRIC-018` — Paper Material Reads First
- `METRIC-021` — Paper Cards Not UI Cards
- `METRIC-023` — Torn Edge Card Silhouette
- `METRIC-028` — Hierarchy Is Flat And Editorial
- `METRIC-029` — Text Lives In Paper Snippets
