# Homepage House Rules Terminal Budget Load Matrix

## Semantic target

- PAGE-001 — Homepage
- COMP-004 — Studio Page Cards
- COMP-008 — Filled Page Sections

## Target classification

- Satisfaction state: partially satisfied → refined
- Scope: local homepage section
- Target confidence: confirmed from current repo source
- Public safety: safe; no new copy or private content introduced

## Underlying goal

The homepage should remain a calm, human-readable front room where each section reads as part of one bound paper path rather than as stacked, unrelated visual passes.

## Boundary

The run may load existing in-repo Website styling that affects rendered homepage surfaces. It must not invent new studio promises, fake products, fake portfolio work, fake photos, or private content.

## Quality metric

The `House rules` section should visibly show its existing terminal-budget styling: public studio pledge seal, pledge path thread, backing sheet, softened rule slips, and calmer reduced-motion/mobile behavior.

## Visible implementation

`app/layout.jsx` now imports `app/home-house-rules-terminal-budget-pass.css` after `home-check-photo-pass.css`, making the existing pass participate in the rendered cascade.

## Affected design and lesson IDs

- DESIGN-019 — Paper Material Authenticity
- DESIGN-022 — Paper Piece Card Surfaces
- DESIGN-024 — Torn Edge Card Silhouettes
- DESIGN-028 — Crinkled Paper Material
- DESIGN-029 — Flattened Paper Hierarchy
- DESIGN-030 — Text Paper Snippets
- DESIGN-031 — Photo-Led Content Surfaces
- LESSON-001 — Make Homepage Feel Authored
- LESSON-002 — Use Human-Facing Copy
- LESSON-018 — Fill Public Pages As Useful Rooms
- LESSON-019 — Make Paper Material Feel Primary
- LESSON-021 — Make Polaroid Frames Carry Content
- LESSON-022 — Make Shared Cards Read As Paper Pieces
- LESSON-024 — Use Torn-Edge Card Silhouettes Instead Of Rounded Corners
- LESSON-025 — Render Photo Centers Instead Of Background Decals
- LESSON-026 — Use Alternating Scrollable Image Galleries

## Affected metric IDs

- METRIC-001 — Homepage Authored Studio Feel
- METRIC-002 — Human-Facing Copy
- METRIC-018 — Paper Material Reads First
- METRIC-020 — Content-Bearing Polaroids
- METRIC-021 — Paper Cards Not UI Cards
- METRIC-023 — Torn Edge Card Silhouette
- METRIC-027 — Paper Feels Crinkled
- METRIC-028 — Hierarchy Is Flat And Editorial
- METRIC-029 — Text Lives In Paper Snippets
- METRIC-030 — Content Uses Photo/Image Surfaces
- METRIC-032 — Alternating Scroll Gallery

## Follow-up check

Review the live homepage after deployment and confirm the `House rules` rail now shows the pledge/path/bound-board cues from `home-house-rules-terminal-budget-pass.css`.
