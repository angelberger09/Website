# Page intro copy slips

Timestamp: 2026-06-25 13:28 ET

Status: implemented

## Public-safe summary

Shared route introductions had paper subtitle labels and filled route photo-center cards, but their body copy still rendered as plain prose. The top of About, Notes, Portfolio, Store, and Blog compatibility routes was therefore only partially aligned with the paper/collage system.

## Satisfaction check

- Target: shared `PageIntro` body copy on public route pages.
- State before: partially satisfied.
- State after: improved, with deployed visual review still needed.

## Visible Website change

Added `app/page-intro-copy-slip-pass.css` and imported it from `app/layout.jsx`. The pass turns `.page-hero__text p` into clipped paper copy slips with grain, tonal variation, and lightweight shadows. The final `app/performance-budget-pass.css` now includes those slips in the cheap paper-surface budget.

## Affected items

- PAGE-002 About
- PAGE-003 Notes
- PAGE-003B Blog Compatibility Routes
- PAGE-004 Portfolio
- PAGE-005 Store
- COMP-005 Shared Site Chrome
- DESIGN-019 Paper Material Authenticity
- DESIGN-022 Paper Piece Card Surfaces
- DESIGN-024 Torn Edge Card Silhouettes
- DESIGN-030 Text Paper Snippets
- METRIC-007 Alive But Not Busy
- METRIC-018 Paper Material Reads First
- METRIC-021 Paper Cards Not UI Cards
- METRIC-023 Torn Edge Card Silhouette
- METRIC-025 Section Background Has Presence
- METRIC-028 Hierarchy Is Flat And Editorial
- METRIC-029 Text Lives In Paper Snippets
- METRIC-030 Content Uses Photo/Image Surfaces

## Boundary notes

No new content records or external assets were added. The change only restyles existing public route-intro copy.
