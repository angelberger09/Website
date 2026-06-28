# Homepage Hero Route Ledger Binding Matrix

## Target

Homepage first-screen hero route contact sheet.

## Satisfaction classification

Partially satisfied -> visible refinement.

## Underlying goal

Make the homepage read as an authored front-door studio path before it reads as a set of neighboring route cards.

## Boundary

- Stay inside `angelberger09/Website`.
- Do not invent routes, posts, products, portfolio records, photos, or private material.
- Preserve direct route links, accessible labels, readable copy, mobile layout, and reduced-motion behavior.

## Quality metric

The first-screen route choices should visibly read as one bound paper/photo ledger with tactile material, direct room cues, and readable route previews rather than four loose mini cards.

## Public source files

- `app/home-hero-route-ledger-binding-pass.css`
- `app/layout.jsx`

## Related IDs

- PAGE-001 — Homepage
- COMP-003 — Scroll Title Sequence
- COMP-004 — Studio Page Cards
- COMP-008 — Filled Page Sections
- DESIGN-019 — Paper Material Authenticity
- DESIGN-021 — Content-Bearing Polaroid Cards
- DESIGN-022 — Paper Piece Card Surfaces
- DESIGN-024 — Torn Edge Card Silhouettes
- DESIGN-028 — Flat Editorial Hierarchy
- DESIGN-029 — Text Snippets
- DESIGN-030 — Content-Bearing Photo/Image Surfaces
- LESSON-001 — Make homepage feel authored
- LESSON-002 — Use human-facing copy
- LESSON-019 — Make paper material feel primary
- LESSON-021 — Make polaroid frames carry content
- LESSON-022 — Make shared cards read as paper pieces
- LESSON-024 — Use torn-edge card silhouettes instead of rounded corners
- LESSON-025 — Render photo centers instead of background decals
- METRIC-001 — Homepage feels authored
- METRIC-002 — Copy is human-facing
- METRIC-018 — Paper Material Reads First
- METRIC-020 — Content-Bearing Polaroids
- METRIC-021 — Paper Cards Not UI Cards
- METRIC-023 — Torn Edge Card Silhouette
- METRIC-028 — Hierarchy Is Flat And Editorial
- METRIC-029 — Text Lives In Paper Snippets
- METRIC-030 — Content Uses Photo/Image Surfaces

## Implementation notes

The new CSS loads after the existing hero contact-sheet and hero entry ledger passes, so it wins over earlier first-screen route-slip styling. It adds a shared backing surface, left stitch/thread cue, explicit front-door ledger label, taped route slips, stronger tactile shadows, and mobile/reduced-motion fallbacks without changing copy or data.
