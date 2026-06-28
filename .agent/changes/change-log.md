# Change Log

This log uses local project time in `America/New_York`.

## 2026-06-27 21:48 ET — Notes state late terminal budget

### Changed

- Added `app/notes-state-late-terminal-budget-pass.css`.
- Loaded it from `app/layout.jsx` after `notes-state-direct-cues-pass.css` and `notes-state-intro-docket-pass.css`.
- Calmed the late Notes reader-state intro docket, direct cue slips, photo-center shadows, mobile transforms, and reduced-motion behavior while preserving the visible reader-state board.
- Added `.agent/changes/2026-06-27-notes-state-late-terminal-budget.md`.
- Added `.agent/matrices/notes-state-late-terminal-budget.matrix.md`.

### Why

The Notes reader-state terminal budget existed, but the newer direct-cue and intro-docket passes loaded after it. That meant the final visible cue slips and intro docket could sit outside the calm paper budget and feel heavier than the surrounding Notes room. This pass keeps the source-backed state labels and paper docket structure while bringing the latest layer back under the terminal budget.

### Related items

- PAGE-003
- PAGE-003B
- COMP-006
- COMP-008
- DESIGN-019
- DESIGN-022
- DESIGN-024
- DESIGN-028
- DESIGN-029
- DESIGN-030
- LESSON-002
- LESSON-018
- LESSON-019
- LESSON-022
- LESSON-024
- LESSON-025
- METRIC-002
- METRIC-018
- METRIC-021
- METRIC-023
- METRIC-027
- METRIC-028
- METRIC-029
- METRIC-030

## 2026-06-27 21:21 ET — Notes state terminal budget

### Changed

- Added `app/notes-state-terminal-budget-pass.css`.
- Loaded it from `app/layout.jsx` after the existing Notes state reader docket pass.
- Calmed the Notes reader-state tray backing, spine thread, state cards, photo centers, shadows, mobile behavior, and reduced-motion transforms while preserving the visible `state ledger` composition.
- Added `.agent/changes/2026-06-27-notes-state-terminal-budget.md`.
- Added `.agent/matrices/notes-state-terminal-budget.matrix.md`.

### Why

The Notes reader behavior board already had tray, cue, and reader-docket styling, but the newest docket layer could still sit outside the terminal paper budget and feel a little heavier than the surrounding Notes room surfaces. This pass keeps the reader-state area visibly composed while aligning it with the calm-room, paper-material, flattened hierarchy, and performance-budget goals.

### Related items

- PAGE-003
- PAGE-003B
- COMP-006
- COMP-008
- DESIGN-019
- DESIGN-022
- DESIGN-024
- DESIGN-028
- DESIGN-029
- DESIGN-030
- LESSON-002
- LESSON-018
- LESSON-019
- LESSON-022
- LESSON-024
- LESSON-025
- METRIC-002
- METRIC-018
- METRIC-021
- METRIC-023
- METRIC-027
- METRIC-028
- METRIC-029
- METRIC-030

## 2026-06-27 20:20 ET — Wire About next doors exit ledger

### Changed

- Updated `app/layout.jsx` to import `app/about-next-doors-exit-ledger-pass.css` after the existing About pathway-door compass pass.
- This makes the documented About exit-ledger styling actually load in the rendered Website bundle.
- Added `.agent/changes/2026-06-27-wire-about-next-doors-exit-ledger.md`.
- Added `.agent/matrices/wire-about-next-doors-exit-ledger.matrix.md`.

### Why

The prior About next-door exit ledger pass existed in source and `.agent` state, but `app/layout.jsx` did not import it. That meant the documented final About exit ledger could not visibly render, leaving the `Where to go next` section partially satisfied and still closer to neighboring route cards than a composed paper exit handoff.

### Related items

- PAGE-002
- COMP-008
- COMP-009
- DESIGN-018
- DESIGN-019
- DESIGN-022
- DESIGN-024
- DESIGN-028
- DESIGN-029
- DESIGN-030
- DESIGN-031
- LESSON-002
- LESSON-018
- LESSON-019
- LESSON-022
- LESSON-024
- LESSON-025
- LESSON-026
- METRIC-002
- METRIC-017
- METRIC-018
- METRIC-021
- METRIC-023
- METRIC-025
- METRIC-028
- METRIC-029
- METRIC-030
- METRIC-032

## 2026-06-27 19:40 ET — About next doors exit ledger

### Changed

- Added `app/about-next-doors-exit-ledger-pass.css`.
- Loaded it from `app/layout.jsx` after the About opening terminal budget pass.
- Refined the About `Where to go next` doorway section so its final route choices read as one composed exit ledger, with a direct `exit ledger` paper slip, calmer stitched route line, stronger shared backing shadow, and tighter paper/photo doorway cards.
- Added `.agent/changes/2026-06-27-about-next-doors-exit-ledger.md`.
- Added `.agent/matrices/about-next-doors-exit-ledger.matrix.md`.

### Why

The About page already had room keys, contact frames, principle dockets, and a doorway compass, but the final next-door section could still scan as three neighboring route cards. This pass keeps the same public-safe routes and copy while making the handoff from About into Notes, Portfolio, and Store feel like one calm room-exit ledger.

### Related items

- PAGE-002
- COMP-008
- COMP-009
- DESIGN-018
- DESIGN-019
- DESIGN-022
- DESIGN-024
- DESIGN-028
- DESIGN-029
- DESIGN-030
- DESIGN-031
- LESSON-002
- LESSON-018
- LESSON-019
- LESSON-022
- LESSON-024
- LESSON-025
- LESSON-026
- METRIC-002
- METRIC-017
- METRIC-018
- METRIC-021
- METRIC-023
- METRIC-025
- METRIC-028
- METRIC-029
- METRIC-030
- METRIC-032

## 2026-06-27 19:19 ET — About principles docket

### Changed

- Added `app/about-principles-docket-pass.css`.
- Loaded it from `app/layout.jsx` after the existing About principles trail styling.
- Turned the About `Working principles` heading into a composed promise docket with a clipped paper backing field, separate eyebrow slip, title sheet, promise-copy note, tape cue, mobile fallback, and reduced-motion safeguards.
- Added `.agent/changes/2026-06-27-about-principles-docket.md`.
- Added `.agent/matrices/about-principles-docket.matrix.md`.

### Why

The About page already has a strong room-map, contact-sheet, and paper-principle card system, but the working-principles intro still read like broad heading copy inside a panel. This pass keeps the existing public-safe copy while making the principle intro behave like a visible paper promise docket, supporting the paper-snippet, flattened hierarchy, and calm-room goals.

### Related items

- PAGE-002
- COMP-008
- DESIGN-019
- DESIGN-022
- DESIGN-024
- DESIGN-028
- DESIGN-029
- DESIGN-030
- LESSON-002
- LESSON-019
- LESSON-022
- LESSON-024
- METRIC-002
- METRIC-018
- METRIC-021
- METRIC-023
- METRIC-028
- METRIC-029

## 2026-06-27 18:28 ET — Portfolio archive rule slips

### Changed

- Updated `app/portfolio/page.jsx` so future archive shelf rules render as source-backed `portfolio-rule-slip` articles instead of plain mapped paragraphs.
- Added `app/portfolio-feed-rule-slips-pass.css` and loaded it from `app/layout.jsx` after the existing Portfolio feed shelf styling.
- Styled the rules as three clipped paper slips labeled `Safe facts`, `Public preview`, and `Private drafts`, preserving the same public-safe archive rules while making the rule surface more readable and tactile.
- Added `.agent/changes/2026-06-27-portfolio-archive-rule-slips.md`.
- Added `.agent/matrices/portfolio-archive-rule-slips.matrix.md`.

### Why

The Portfolio future archive shelf already had a bound paper ledger, ticket path, and visitor-facing card-part fields, but its rule area still scanned as plain paragraph tape. This pass keeps the no-fake-projects boundary intact while making the rules into direct, source-backed paper slips that better satisfy the paper-snippet, direct-label, and calm-room sequence goals.

### Related items

- PAGE-004
- COMP-008
- DESIGN-015
- DESIGN-019
- DESIGN-022
- DESIGN-024
- DESIGN-029
- DESIGN-030
- LESSON-002
- LESSON-004
- LESSON-015
- LESSON-019
- LESSON-022
- LESSON-024
- LESSON-025
- METRIC-002
- METRIC-014
- METRIC-018
- METRIC-021
- METRIC-023
- METRIC-028
- METRIC-029

## 2026-06-27 18:19 ET — Store return path terminal budget

### Changed

- Refined `app/terminal-preview-surface-budget-pass.css` so the late Store return/path surfaces are covered by the terminal preview budget instead of bypassing it.
- Added `store-path-photo-board`, `store-path-photo-grid`, `store-path-photo-card`, return compass stamps, bridge slips, cue slips, connector thread, and path-photo centers to the final budget selectors.
- Calmed Store return path shadows, filters, connector opacity, staged image overlays, mobile transforms, and reduced-motion behavior while preserving the visible return-docket / return-compass read.
- Added `.agent/changes/2026-06-27-store-return-path-terminal-budget.md`.
- Added `.agent/matrices/store-return-path-terminal-budget.matrix.md`.

### Why
