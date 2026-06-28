# Homepage Hero Scale Guard Matrix

| Field | Value |
|---|---|
| Matrix ID | MATRIX-HOME-HERO-SCALE-GUARD |
| Date | 2026-06-28 11:08 ET |
| Public source files | `app/page.jsx`, `app/home-hero-scale-guard-pass.css`, `app/home-hero-front-desk-finish-pass.css`, `app/home-hero-wordless-entry-pass.css`, `app/home-room-choice-left-depth-pass.css`, `app/layout.jsx` |
| Agent files | `.agent/changes/2026-06-28-home-hero-scale-guard.md`, `.agent/changes/2026-06-28-home-hero-ux-entry-board.md`, `.agent/changes/2026-06-28-home-hero-front-desk-repair.md`, `.agent/changes/2026-06-28-home-hero-wordless-entry.md`, `.agent/changes/2026-06-28-home-hero-wordless-entry-refinement.md`, `.agent/changes/2026-06-28-home-room-choice-left-depth.md`, `.agent/matrices/home-hero-scale-guard.matrix.md` |
| Primary page | PAGE-001 Homepage |
| Components | COMP-003 Scroll Title Sequence, COMP-004 Studio Page Cards |
| Design patterns | DESIGN-002 Large Editorial Type, DESIGN-014 Paper List Hero Lockup, DESIGN-019 Paper Material Authenticity, DESIGN-021 Content-Bearing Polaroid Cards, DESIGN-022 Paper Piece Card Surfaces, DESIGN-029 Flattened Paper Hierarchy, DESIGN-030 Text Paper Snippets, DESIGN-031 Photo-Led Content Surfaces |
| Lessons | LESSON-001, LESSON-002, LESSON-018, LESSON-019, LESSON-021, LESSON-022, LESSON-025 |
| Metrics | METRIC-001, METRIC-002, METRIC-017, METRIC-018, METRIC-020, METRIC-021, METRIC-028, METRIC-029, METRIC-030, METRIC-032 |
| Feedback target | Homepage first-screen hero wording, scaling, first-screen orientation, entry-action visibility, left-docked room-choice grouping, and lifted-paper depth |
| Satisfaction state | partially satisfied; visible hero wording removed, leftover pseudo-wording suppressed, route-choice entry preserved, tightened, left-docked on desktop, and given stronger paper depth |

## Implementation notes

The scale guard pass constrained the homepage hero with a shorter `svh`-based entry area, reduced the display type clamp, placed the polaroid/open-rooms card into the same desktop grid as the title and route contact sheet, and moved the route choices into a tighter above-fold relationship with the welcome slip.

The UX entry board pass attempted to reduce title dominance and bind the Open rooms card into a smaller right column, but it still left the first screen feeling over-composed.

The front-desk repair pass tightened `app/home-hero-front-desk-finish-pass.css` as a repair layer for the over-compressed hero composition. It is now mostly a fallback/legacy hero repair layer because the later wordless entry pass removes the visible poster wording from `app/page.jsx` and overrides the active first-screen entry surface.

The wordless entry pass removes the visible hero kicker, title list, support slip, arrival ticket, and Open rooms card from `app/page.jsx`; keeps a screen-reader-only `h1`; preserves the room-choice navigation as the only visible first-screen hero content; and loads `app/home-hero-wordless-entry-pass.css` after the remaining hero passes to override older hero-wording rules.

The wordless entry refinement suppresses the old `title-lockup::after` label so inherited CSS cannot leak visible `front desk` wording into the first screen. It also narrows the entry board, reduces route-card scale, lightens the contact-sheet shadow stack, and adds a short-viewport fallback that hides nonessential room-cue microcopy before the first screen becomes crowded.

The left-depth pass loads `app/home-room-choice-left-depth-pass.css` after the wordless entry pass and before the terminal render budget. It keeps the wordless hero, but shifts the entry board to a left-docked desktop position, strengthens the backing paper sheet and contact-sheet shadows, adds a small tape tab, and gives the four room-choice slips subtle paper rotations. Mobile and reduced-motion states remove the rotations and keep the board centered/readable.

## Validation guidance

After deployment, check `/Website/` at common laptop heights around 1280×720 and 1440×800. The first screen should no longer show the oversized hero phrase, support copy, Open rooms card, arrival ticket, or inherited `front desk` label. It should show a compact paper entry surface with the room choices; on desktop that surface should sit in a clearer left-docked editorial position with stronger visible paper depth, while the accessible page title remains available to assistive technology.
