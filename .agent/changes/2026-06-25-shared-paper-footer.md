# Shared paper footer pass

Timestamp: 2026-06-25 06:19 ET

## Intent

Make the shared Website footer visibly align with the current paper/collage material system.

## Mismatch

The header, route continuity bands, and major filled sections had moved into clipped paper surfaces and placed note/slip compositions, but the shared footer still rendered as a plain text/nav row. Because the footer appears after every route, this left the bottom chrome outside the active material language.

## Satisfaction state

Partially satisfied before this pass.

## Website source changed

- `app/site-chrome.jsx`
- `app/layout.jsx`
- `app/footer-paper-trail-pass.css`

## What changed visibly

- `StudioFooter` now renders as `studio-footer--paper`.
- The studio mark sits on a clipped paper note with a short human-facing line.
- Footer navigation renders as individual clipped paper slips with small ordered marks.
- The footer has a paper-field backing, grain texture, uneven edges, staggered link placement, hover/focus outlines, and mobile fallback.

## Why this stays in bounds

The pass uses existing public navigation data and does not invent new pages, products, posts, portfolio work, images, or private content. It applies active paper/collage lessons to shared site chrome.

## Related items

- COMP-005 Shared Site Chrome
- DESIGN-019 Paper Material Authenticity
- DESIGN-022 Paper Piece Card Surfaces
- DESIGN-024 Torn Edge Card Silhouettes
- DESIGN-029 Flattened Paper Hierarchy
- DESIGN-030 Text Paper Snippets
- LESSON-019 Make paper material feel primary
- LESSON-022 Make shared cards read as paper pieces
- LESSON-024 Use torn-edge card silhouettes instead of rounded corners
- METRIC-018 Paper Material Reads First
- METRIC-021 Paper Cards Not UI Cards
- METRIC-023 Torn Edge Card Silhouette
- METRIC-028 Hierarchy Is Flat And Editorial
- METRIC-029 Text Lives In Paper Snippets
