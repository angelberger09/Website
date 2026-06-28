# Homepage Hero Scale Guard Matrix

| Field | Value |
|---|---|
| Matrix ID | MATRIX-HOME-HERO-SCALE-GUARD |
| Date | 2026-06-28 10:47 ET |
| Public source files | `app/home-hero-scale-guard-pass.css`, `app/home-hero-ux-entry-board-pass.css`, `app/layout.jsx` |
| Agent files | `.agent/changes/2026-06-28-home-hero-scale-guard.md`, `.agent/changes/2026-06-28-home-hero-ux-entry-board.md`, `.agent/matrices/home-hero-scale-guard.matrix.md` |
| Primary page | PAGE-001 Homepage |
| Components | COMP-003 Scroll Title Sequence, COMP-004 Studio Page Cards |
| Design patterns | DESIGN-002 Large Editorial Type, DESIGN-014 Paper List Hero Lockup, DESIGN-019 Paper Material Authenticity, DESIGN-021 Content-Bearing Polaroid Cards, DESIGN-022 Paper Piece Card Surfaces, DESIGN-029 Flattened Paper Hierarchy, DESIGN-030 Text Paper Snippets, DESIGN-031 Photo-Led Content Surfaces |
| Lessons | LESSON-001, LESSON-002, LESSON-018, LESSON-019, LESSON-021, LESSON-022, LESSON-025 |
| Metrics | METRIC-001, METRIC-002, METRIC-017, METRIC-018, METRIC-020, METRIC-021, METRIC-028, METRIC-029, METRIC-032 |
| Feedback target | Homepage hero scaling, first-screen orientation, entry-action visibility, and Open rooms card grouping |
| Satisfaction state | partially satisfied; improved by UX entry board pass |

## Implementation notes

The scale guard pass constrains the homepage hero with a shorter `svh`-based entry area, reduces the display type clamp, places the polaroid/open-rooms card into the same desktop grid as the title and route contact sheet, and moves the route choices into a tighter above-fold relationship with the welcome slip.

The UX entry board pass builds on that target by removing sticky poster behavior from the hero lockup, reducing title dominance again, tightening the welcome slip and contact-sheet spacing, binding the Open rooms card into a smaller right column, and adding a short-viewport desktop fallback that hides the nonessential arrival ticket before the main route choices fall below the fold.

## Validation guidance

After deployment, check `/Website/` at common laptop heights around 1280×720 and 1440×800. The title should remain expressive without pushing route choices below the fold, and the Open rooms card should read as part of the board rather than a detached sticker.
