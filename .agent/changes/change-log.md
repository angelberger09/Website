# Change Log

This log uses local project time in `America/New_York`.

## 2026-06-28 11:12 ET — Homepage hero wordless entry refinement

### Changed

- Refined `app/home-hero-wordless-entry-pass.css` so the active wordless homepage hero suppresses the older inherited `title-lockup::after` label instead of leaving a faint `front desk` pseudo-label visible.
- Narrowed and tightened the first-screen room-choice board, route-card gaps, route-card scale, and contact-sheet shadow stack.
- Added a short-viewport desktop fallback that hides the smallest room-cue microcopy before the first screen becomes crowded.
- Added `.agent/changes/2026-06-28-home-hero-wordless-entry-refinement.md`.
- Updated `.agent/matrices/home-hero-scale-guard.matrix.md`.

### Why

The active homepage direction is now a wordless first-screen entry with only room choices visible. The source had removed the large hero wording, but older CSS could still leak a small pseudo-label and the remaining board could still feel a little too wide and composed. This pass keeps the semantic screen-reader title while making the visible entry surface quieter.

### Related items

- PAGE-001
- COMP-003
- COMP-004
- DESIGN-002
- DESIGN-014
- DESIGN-019
- DESIGN-021
- DESIGN-022
- DESIGN-029
- DESIGN-030
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

## 2026-06-28 11:03 ET — Homepage hero wordless entry

### Changed

- Removed visible hero wording from `app/page.jsx`: the kicker, large title list, support slip, arrival ticket, and Open rooms side card.
- Kept a screen-reader-only `h1` so the homepage still has a semantic page title.
- Kept the room-choice navigation as the only visible first-screen hero content.
- Added `app/home-hero-wordless-entry-pass.css`.
- Removed the failed `app/home-hero-ux-entry-board-pass.css` load from `app/layout.jsx` and loaded the wordless entry pass after the current front-desk hero pass.
- Added `.agent/changes/2026-06-28-home-hero-wordless-entry.md`.
- Updated `.agent/matrices/home-hero-scale-guard.matrix.md`.

### Why

Angel asked to get rid of all hero wording after the previous hero pass still felt broken and over-composed. This pass stops the first screen from behaving like a giant poster and turns it into a quieter room-choice entry surface while preserving semantic HTML for accessibility.

### Related items

- PAGE-001
- COMP-003
- COMP-004
- DESIGN-002
- DESIGN-014
- DESIGN-019
- DESIGN-021
- DESIGN-022
- DESIGN-029
- DESIGN-030
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

## 2026-06-28 10:56 ET — Homepage hero front-desk repair

### Changed

- Reworked `app/home-hero-front-desk-finish-pass.css` to reduce the previous over-compressed hero composition.
- Reduced the fallback hero board width, title scale, route-slip scale, and Open rooms card scale.
- Added tighter short-viewport fallbacks before the later wordless entry pass became the active hero treatment.
- Added `.agent/changes/2026-06-28-home-hero-front-desk-repair.md`.
- Updated `.agent/matrices/home-hero-scale-guard.matrix.md` to record that this is now a legacy/fallback repair layer under the wordless entry pass.

### Why

The prior hero composition was too large, washed out, and visually compressed. This repair tightened the old visible-wording hero layer, then the newer wordless entry pass took over as the active first-screen treatment.

### Related items

- PAGE-001
- COMP-003
- COMP-004
- DESIGN-002
- DESIGN-014
- DESIGN-019
- DESIGN-021
- DESIGN-022
- DESIGN-029
- DESIGN-030
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

## 2026-06-28 10:47 ET — Homepage UX entry board

### Changed

- Added `app/home-hero-ux-entry-board-pass.css`.
- Loaded it from `app/layout.jsx` after `app/home-hero-scale-guard-pass.css` and before `app/terminal-room-render-budget-pass.css`.
- Tightened the homepage first screen into a flow-based entry board: no sticky poster behavior, smaller title scale, smaller welcome slip, higher room choices, and a more tightly bound Open rooms card.
- Updated `.agent/changes/2026-06-28-home-hero-ux-entry-board.md`.
- Updated `.agent/matrices/home-hero-scale-guard.matrix.md`.

### Why

Angel approved the full fix plan and asked to implement it. This pass applies the first UX-critical slice: orientation before decoration on the homepage hero.

### Related items

- PAGE-001
- COMP-003
- COMP-004
- DESIGN-002
- DESIGN-014
- DESIGN-019
- DESIGN-021
- DESIGN-022
- DESIGN-029
- DESIGN-030
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

## 2026-06-28 10:09 ET — Homepage hero scale guard

### Changed

- Added `app/home-hero-scale-guard-pass.css`.
- Loaded it from `app/layout.jsx` after `app/home-hero-above-fold-board-pass.css` and before `terminal-room-render-budget-pass.css`.
- Constrained the homepage hero as a bounded entry board with a smaller title scale, tighter vertical rhythm, a desktop grid relationship between the welcome content and Open rooms card, and route choices placed higher in the above-fold path.
- Kept homepage copy, route links, public-safe data, and no-fake-content boundaries unchanged.
- Added `.agent/changes/2026-06-28-home-hero-scale-guard.md`.
- Added `.agent/matrices/home-hero-scale-guard.matrix.md`.

### Why

The homepage hero was partially satisfying the left-docked editorial path direction, but recent visual review showed a structural scaling mismatch: the title still dominated the viewport, the entry path sat too low, and the right paper card felt detached from the board. This pass fixes the layout system before adding more decoration.

### Related items

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

## 2026-06-28 09:21 ET — Homepage path terminal ledger

### Changed

- Added `app/home-path-terminal-ledger-pass.css`.
- Loaded it from `app/layout.jsx` immediately before `terminal-room-render-budget-pass.css` so it refines the homepage reading path while still respecting the final render budget.
- Tightened the homepage `home-path-map` into one calmer front-page ledger with a smaller `front-page map` label, lighter shadows, smaller chapter slips, hidden duplicate marker text, direct room-key snippets, and mobile/reduced-motion fallbacks.
- Kept homepage copy, route anchors, links, and public-safe data unchanged.
- Added `.agent/changes/2026-06-28-home-path-terminal-ledger.md`.
- Added `.agent/matrices/home-path-terminal-ledger.matrix.md`.

### Why

The homepage reading path was already intended to be a left-docked editorial route map, but the rendered path still carried repeated marker text and a heavier mini-card rhythm. The active `.agent` state asks the homepage to stay human-readable, organized, direct-label, paper-first, and not scattered. This pass refines the existing path map instead of inventing a new section.

### Related items

- PAGE-001
- COMP-003
- COMP-004
- COMP-008
- DESIGN-014
- DESIGN-018
- DESIGN-019
- DESIGN-022
- DESIGN-024
- DESIGN-028
- DESIGN-029
- DESIGN-030
- DESIGN-031
- LESSON-001
- LESSON-002
- LESSON-015
- LESSON-018
- LESSON-019
- LESSON-021
- LESSON-022
- LESSON-024
- LESSON-025
- LESSON-026
- METRIC-001
- METRIC-002
- METRIC-014
- METRIC-017
- METRIC-018
- METRIC-020
- METRIC-021
- METRIC-023
- METRIC-027
- METRIC-028
- METRIC-029
- METRIC-030
- METRIC-032

## 2026-06-28 08:08 ET — Store promise terminal trust board

### Changed

- Added `app/store-promise-terminal-trust-board-pass.css`.
- Loaded it from `app/layout.jsx` immediately after `store-promise-binding-path-pass.css` so the final Store promise treatment renders over the earlier promise-card layers.
- Bound the Store promise section into one calmer clipped paper trust board with a `public trust board` label, connector thread, lower `one honest shelf` label, flatter note alignment, and lighter note shadows.
- Kept Store copy, promise data, readiness boundaries, no-fake-inventory language, links, and public-safe data unchanged.
- Added `.agent/changes/2026-06-28-store-promise-terminal-trust-board.md`.
- Added `.agent/matrices/store-promise-terminal-trust-board.matrix.md`.

### Why

The Store promise notes already used paper/photo styling, but the section could still scan as adjacent cards instead of one bound public trust surface. The active `.agent` state asks Store and similar filled pages to flatten hierarchy away from nested panels, keep honest readiness states, and use paper placement and snippets to make public rooms readable without inventing products or live listings.

### Related items

- PAGE-005
- COMP-008
- DESIGN-019
- DESIGN-021
- DESIGN-022
- DESIGN-024
- DESIGN-028
- DESIGN-029
- DESIGN-030
- DESIGN-031
- LESSON-001
- LESSON-002
- LESSON-004
- LESSON-018
- LESSON-019
- LESSON-021
- LESSON-022
- LESSON-024
- LESSON-025
- LESSON-026
- METRIC-002
- METRIC-018
- METRIC-020
- METRIC-021
- METRIC-023
- METRIC-027
- METRIC-028
- METRIC-029
- METRIC-030
- METRIC-032

## 2026-06-28 07:49 ET — Footer exit terminal budget refinement

### Changed

- Refined the already-loaded `app/footer-exit-path-terminal-focus-pass.css` so the shared footer reads as one quieter bound paper exit desk instead of a stack of separate receipt/shelf passes.
- Added a small `soft exit path` paper label, calmer footer backing, reduced receipt card shadows, smaller photo centers, tighter receipt spacing, and mobile/reduced-motion budget behavior.
- Kept footer links, route labels, public-safe copy, and honest abstract photo language unchanged.
- Added `.agent/matrices/footer-exit-terminal-budget.matrix.md`.

### Why

The active `.agent` state asks every major page to behave like a calm room with a guided path, and the shared footer appears after every route. The lower chrome already had a four-room exit shelf, but the accumulated footer passes could still read as separate stacked pieces rather than one terminal exit surface. This pass keeps the existing public navigation while calming and binding the rendered footer surface.

### Related items

- PAGE-001
- PAGE-002
- PAGE-003
- PAGE-003A
- PAGE-003B
- PAGE-004
- PAGE-005
- COMP-005
- COMP-009
- DESIGN-018
- DESIGN-019
- DESIGN-021
- DESIGN-022
- DESIGN-024
- DESIGN-028
- DESIGN-029
- DESIGN-030
- LESSON-001
- LESSON-002
- LESSON-018
- LESSON-019
- LESSON-021
- LESSON-022
- LESSON-024
- LESSON-025
- LESSON-026
- METRIC-017
- METRIC-018
- METRIC-020
- METRIC-021
- METRIC-023
- METRIC-027
- METRIC-028
- METRIC-029
- METRIC-030
- METRIC-032

## 2026-06-28 07:38 ET — About room path docket load

### Changed

- Loaded the existing `app/about-room-path-docket-pass.css` through `app/about-room-spine-ledger-pass.css` so the previously written About room path docket styling now renders.
- Kept About page copy, links, public-safe data, and the existing CSS-only material system unchanged.
- Added `.agent/changes/2026-06-28-about-room-path-docket-load.md`.
- Added `.agent/matrices/about-room-path-docket-load.matrix.md`.

### Why

The About page path binding was still partially satisfied because a stronger supported CSS pass existed in the repo but was not connected to the rendered stylesheet graph. This pass avoids another new competing layer and instead makes the existing room path docket visible on `/Website/about/`.

### Related items

- PAGE-002
- COMP-008
- DESIGN-018
- DESIGN-019
