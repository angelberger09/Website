# Store Path Return Stamps Matrix

| Field | Value |
|---|---|
| Change | Store path return stamps |
| Timestamp | 2026-06-27 05:31 ET |
| Website source | `app/store/page.jsx`, `app/store-path-return-stamps-pass.css`, `app/layout.jsx` |
| Agent source | `.agent/changes/2026-06-27-store-path-return-stamps.md`, `.agent/matrices/store-path-return-stamps.matrix.md` |
| Satisfaction state | Partially satisfied refinement |
| Target mismatch | Store `Shop path` return compass still had generic card-level CSS labels even though the surrounding route cues were direct and source-backed. |
| Visible correction | Render route-specific return stamps (`Return to archive`, `Studio anchor`) as clipped paper snippets and suppress the older generic `return` / `anchor` pseudo-labels. |
| Public-safety boundary | Uses existing route continuity only; no fake products, live inventory, fake portfolio work, fake images, or private content. |

## Affected semantic items

- PAGE-005 — Store
- COMP-008 — Filled Page Sections
- COMP-009 — Next Step Band / continuity pattern
- DESIGN-015 — Direct Unnumbered Navigation
- DESIGN-018 — Visitor Continuity Bands
- DESIGN-019 — Paper Material Authenticity
- DESIGN-022 — Paper Piece Card Surfaces
- DESIGN-024 — Torn Edge Card Silhouettes
- DESIGN-029 — Flattened Paper Hierarchy
- DESIGN-030 — Text Paper Snippets
- LESSON-002 — Use Human-Facing Copy
- LESSON-015 — Use Direct Nav Labels Without Extra Markers
- LESSON-018 — Fill Public Pages As Useful Rooms
- LESSON-019 — Make Paper Material Feel Primary
- LESSON-022 — Make Shared Cards Read As Paper Pieces
- LESSON-024 — Use Torn-Edge Card Silhouettes Instead Of Rounded Corners
- LESSON-026 — Use Alternating Scrollable Image Galleries
- METRIC-002 — Human-Facing Copy
- METRIC-014 — Direct Nav With Contrast
- METRIC-017 — Filled Page Continuity
- METRIC-018 — Paper Material Reads First
- METRIC-021 — Paper Cards Not UI Cards
- METRIC-023 — Torn Edge Card Silhouette
- METRIC-028 — Hierarchy Is Flat And Editorial
- METRIC-029 — Text Lives In Paper Snippets
- METRIC-032 — Alternating Scroll Gallery

## Quality check

- The rendered Store page should visibly change near the `Shop path` section.
- The visible card stamps should be route-specific rather than generic.
- The local path remains a return path to public studio rooms and does not imply an open store inventory.
