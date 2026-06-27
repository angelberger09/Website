# 2026-06-27 — Notes source compass docket

## Target

- PAGE-003 Notes
- PAGE-003B Blog compatibility routes
- COMP-006 Notes Reader Client
- COMP-008 Filled Page Sections
- DESIGN-019 Paper Material Authenticity
- DESIGN-022 Paper Piece Card Surfaces
- DESIGN-024 Torn Edge Card Silhouettes
- DESIGN-028 Crinkled Paper Material
- DESIGN-029 Flattened Paper Hierarchy
- DESIGN-030 Text Paper Snippets
- LESSON-002 Use Human-Facing Copy
- LESSON-019 Make Paper Material Feel Primary
- LESSON-022 Make Shared Cards Read As Paper Pieces
- LESSON-024 Use Torn-Edge Card Silhouettes Instead Of Rounded Corners
- LESSON-026 Use Alternating Scrollable Image Galleries
- METRIC-002 Human-Facing Copy
- METRIC-018 Paper Material Reads First
- METRIC-021 Paper Cards Not UI Cards
- METRIC-023 Torn Edge Card Silhouette
- METRIC-028 Hierarchy Is Flat And Editorial
- METRIC-029 Text Lives In Paper Snippets
- METRIC-032 Alternating Scroll Gallery

## Satisfaction state

Partially satisfied.

The Notes source map already had public-safe writing-shelf copy, source receipts, fallback receipts, and a path-thread treatment. It still risked scanning as separate loose receipt cards rather than one guided source compass inside the Notes room.

## Visible Website change

Added `app/notes-source-compass-docket-pass.css` and loaded it in `app/layout.jsx` after the existing Notes source path/thread passes.

The new pass strengthens the Notes writing-shelf source map into a single paper compass/docket surface with:

- a visible `source compass` label,
- a clipped intro sheet with `shape → file → fallback`,
- a stronger public-note promise strip,
- a unified source ledger backing sheet,
- larger receipt photo centers,
- clearer source-step slips,
- and a more integrated backup-route slip surface.

## Boundary notes

- No fake notes, products, posts, screenshots, or private content were added.
- The public Blog feed contract and fallback copy were preserved.
- The change is visual/interface-only and stays inside the Website repo.
