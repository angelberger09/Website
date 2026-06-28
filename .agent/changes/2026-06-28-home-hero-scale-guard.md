# 2026-06-28 — Homepage hero scale guard

## Changed

- Added `app/home-hero-scale-guard-pass.css`.
- Loaded it from `app/layout.jsx` after `app/home-hero-above-fold-board-pass.css` and before the terminal render budget.
- Reframed the homepage first screen as a bounded two-column entry board on desktop so the title, welcome slip, entry cues, route choices, and Open rooms card share one layout system instead of relying on oversized text plus a detached absolute card.
- Reduced the hero title scale, tightened vertical spacing, shortened the hero viewport demand, and moved the route contact sheet into the visible above-fold entry path.
- Kept homepage copy, links, public-safe route data, and no-fake-content boundaries unchanged.

## Why

Recent visible feedback identified the homepage hero as a scaling and UX hierarchy problem: the title was governed too much by raw viewport size, the route choices sat too low, and the right paper card behaved like a floating decoration rather than a structurally related part of the entry board. This pass addresses the layout system before adding more decorative paper effects.

## Satisfaction state

Partially satisfied. The first-screen hero should now be materially more bounded and scannable, but it still deserves live visual review across common laptop heights once GitHub Pages deploys.

## Related items

- PAGE-001
- COMP-003
- COMP-004
- DESIGN-002
- DESIGN-014
- DESIGN-019
- DESIGN-021
- DESIGN-022
- DESIGN-031
- LESSON-001
- LESSON-002
- LESSON-018
- LESSON-019
- LESSON-021
- LESSON-022
- LESSON-025
- METRIC-001
- METRIC-002
- METRIC-017
- METRIC-018
- METRIC-020
- METRIC-021
- METRIC-028
- METRIC-029
- METRIC-032
