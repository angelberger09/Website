# Footer Exit Desk Consolidation Matrix

## Item

Footer exit desk consolidation.

## Status

Active implementation record. Satisfaction state: partially satisfied refined.

## Website files

- `app/footer-exit-desk-consolidation-pass.css`
- `app/layout.jsx`
- Related existing source: `app/site-chrome.jsx`, `app/site-footer-nav.jsx`, `app/footer-paper-trail-pass.css`, `app/footer-exit-receipts-pass.css`, `app/footer-four-room-exit-pass.css`

## Purpose

Make the shared footer read as one composed paper exit desk rather than separate footer mark, receipt shelf, and route nav widgets.

## Boundaries

- Do not change route destinations.
- Do not add fake posts, products, projects, or claims.
- Keep direct footer nav accessible and readable.
- Keep mobile layout stacked and scannable.
- Use CSS-only paper labels/backing/tape after the existing footer passes instead of creating a competing footer component system.

## Related IDs

- COMP-005 — Shared Site Chrome
- COMP-009 — Next Step Band / route continuity adjacency
- DESIGN-018 — Visitor Continuity Bands
- DESIGN-019 — Paper Material Authenticity
- DESIGN-022 — Paper Piece Card Surfaces
- DESIGN-024 — Torn Edge Card Silhouettes
- DESIGN-029 — Flattened Paper Hierarchy
- DESIGN-030 — Text Paper Snippets
- LESSON-002 — Use Human-Facing Copy
- LESSON-018 — Fill Public Pages As Useful Rooms
- LESSON-019 — Make Paper Material Feel Primary
- LESSON-022 — Make Shared Cards Read As Paper Pieces
- LESSON-024 — Use Torn-Edge Card Silhouettes Instead Of Rounded Corners
- METRIC-017 — Filled Page Continuity
- METRIC-018 — Paper Material Reads First
- METRIC-021 — Paper Cards Not UI Cards
- METRIC-023 — Torn Edge Card Silhouette
- METRIC-028 — Hierarchy Is Flat And Editorial
- METRIC-029 — Text Lives In Paper Snippets

## Quality metric

The footer should visibly read as a single calm exit surface: studio mark, four room receipts, and quick-return links should feel connected by paper backing, labels, tape, and hierarchy while preserving direct navigation.

## Result

Added a shared footer nav backing, direct paper labels, and taped route slips through `app/footer-exit-desk-consolidation-pass.css`, loaded after existing footer-specific passes in `app/layout.jsx`.
