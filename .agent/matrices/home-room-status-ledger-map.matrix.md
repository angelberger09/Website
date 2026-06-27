# Homepage Room Status Ledger Map Matrix

## Semantic target

| Field | Value |
|---|---|
| Primary page | PAGE-001 Homepage |
| Primary component | COMP-008 Filled Page Sections |
| Related components | COMP-003 Scroll Title Sequence, COMP-004 Studio Page Cards |
| Source files | `app/home-room-status-ledger-map-pass.css`, `app/layout.jsx` |
| Change type | Visible interface refinement |
| Satisfaction state | Partially satisfied → improved |

## Underlying goal

The homepage should read as a human-readable left-docked editorial path, not a scattered collection of cards. The `Current rooms` section should help visitors understand the public room states as one calm status map before choosing a destination.

## Boundary

- Use only existing public-safe room marker data and existing markup.
- Do not invent new rooms, products, portfolio pieces, screenshots, or private context.
- Keep direct navigation, route anchors, and readable content unchanged.
- Keep the pass lightweight: CSS only, no JavaScript, no image filters, and no new animated layers.

## Quality metric

The rendered `Current rooms` section should visibly read as one paper ledger map with a spine, stitched thread, and shared paper field before it reads as separate status cards.

## Related lessons and metrics

- LESSON-001 — Make Homepage Feel Authored
- LESSON-002 — Use Human-Facing Copy
- LESSON-018 — Fill Public Pages As Useful Rooms
- LESSON-019 — Make Paper Material Feel Primary
- LESSON-022 — Make Shared Cards Read As Paper Pieces
- LESSON-024 — Use Torn-Edge Card Silhouettes Instead Of Rounded Corners
- LESSON-025 — Render Photo Centers Instead Of Background Decals
- METRIC-001 — Homepage Feels Authored
- METRIC-002 — Human-Facing Copy
- METRIC-017 — Filled Page Continuity
- METRIC-018 — Paper Material Reads First
- METRIC-021 — Paper Cards Not UI Cards
- METRIC-023 — Torn Edge Card Silhouette
- METRIC-027 — Paper Feels Crinkled
- METRIC-028 — Hierarchy Is Flat And Editorial
- METRIC-029 — Text Lives In Paper Snippets
- METRIC-030 — Content Uses Photo/Image Surfaces
