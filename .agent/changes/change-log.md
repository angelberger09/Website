# Change Log

This log uses local project time in `America/New_York`.

## 2026-06-27 16:31 ET — Notes state source cues

### Changed

- Updated `app/notes/NotesPageClient.jsx` so the Notes reader-state tray renders direct cue slips from source markup.
- Added `app/notes-state-direct-cues-pass.css` to style `Gathering shelf`, `Pause note`, and `Public only` as clipped paper slips and suppress the older CSS-only pseudo labels.
- Loaded the pass in `app/layout.jsx` after the existing Notes state docket styling.
- Added `.agent/changes/2026-06-27-notes-state-source-cues.md`.
- Added `.agent/matrices/notes-state-source-cues.matrix.md`.

### Why

The Notes reader-state tray already read as a unified paper docket, but its top-right cues were still partly CSS-generated instead of source-backed rendered labels. This pass keeps the same honest public reader states while making the visible cue slips durable, direct, and aligned with the paper-snippet and direct-label goals.

### Related items

- PAGE-003
- PAGE-003B
- COMP-006
- DESIGN-015
- DESIGN-019
- DESIGN-022
- DESIGN-024
- DESIGN-029
- DESIGN-030
- LESSON-002
- LESSON-015
- LESSON-019
- LESSON-022
- LESSON-024
- METRIC-002
- METRIC-014
- METRIC-018
- METRIC-021
- METRIC-023
- METRIC-028
- METRIC-029

## 2026-06-27 16:22 ET — Homepage room status ledger budget

### Changed

- Refined `app/home-room-status-ledger-map-pass.css` instead of adding another competing homepage room-status layer.
- Added render-budget containment, calmer shadows, lighter connector thread opacity, reduced rotations, tighter status/photo cue shadows, and mobile/reduced-motion fallbacks for the current-room ledger map.
- Added `.agent/changes/2026-06-27-home-room-status-ledger-budget.md`.
- Added `.agent/matrices/home-room-status-ledger-budget.matrix.md`.

### Why

The newest homepage room-status ledger map visibly bound the current-room cards into one editorial map, but because it loaded after the terminal room surface budget, its shadows, thread, and staggered transforms could still feel slightly over-stacked compared with the calmer late page surfaces. This pass keeps the map visible while making it fit the shared paper/collage render budget.

### Related items

- PAGE-001
- COMP-003
- COMP-004
- COMP-008
- DESIGN-019
- DESIGN-022
- DESIGN-024
- DESIGN-028
- DESIGN-029
- DESIGN-030
- DESIGN-031
- LESSON-001
- LESSON-002
- LESSON-018
- LESSON-019
- LESSON-022
- LESSON-024
- LESSON-025
- METRIC-001
- METRIC-002
- METRIC-017
- METRIC-018
- METRIC-021
- METRIC-023
- METRIC-027
- METRIC-028
- METRIC-029
- METRIC-030

## 2026-06-27 16:09 ET — Homepage room status ledger map

### Changed

- Added `app/home-room-status-ledger-map-pass.css`.
- Loaded it last in `app/layout.jsx` so it visibly refines the homepage `Current rooms` section after the late terminal passes.
- Bound the existing room-status slips into one left-docked paper status map with a vertical spine, stitched thread, shared board backing, clipped status label, and restrained proof cues.
- Added `.agent/changes/2026-06-27-home-room-status-ledger-map.md`.
- Added `.agent/matrices/home-room-status-ledger-map.matrix.md`.

### Why

The homepage current-room section already had paper/photo slips, but it still scanned as a cluster of separate status cards. This pass makes the section read more like one human-readable editorial room map while preserving existing public-safe room marker data and avoiding fake content.

### Related items

- PAGE-001
- COMP-003
- COMP-004
- COMP-008
- DESIGN-019
- DESIGN-022
- DESIGN-024
- DESIGN-028
- DESIGN-029
- DESIGN-030
- DESIGN-031
- LESSON-001
- LESSON-002
- LESSON-018
- LESSON-019
- LESSON-022
- LESSON-024
- LESSON-025
- METRIC-001
- METRIC-002
- METRIC-017
- METRIC-018
- METRIC-021
- METRIC-023
- METRIC-027
- METRIC-028
- METRIC-029
- METRIC-030

## 2026-06-27 15:51 ET — Notes gallery terminal budget

### Changed

- Added `app/notes-gallery-terminal-budget-pass.css`.
- Loaded it last in `app/layout.jsx` so the newest Notes gallery contact-sheet shelf receives terminal budget coverage.
- Calmed board backing shadows, the `scroll shelf` slip, dashed shelf thread, card shadows, image-panel inset weight, mobile sizing, and reduced-motion/content-visibility behavior while preserving the guided horizontal shelf.
- Added `.agent/changes/2026-06-27-notes-gallery-terminal-budget.md`.
- Added `.agent/matrices/notes-gallery-terminal-budget.matrix.md`.

### Why

The Notes gallery alternating ledger made the contact sheet more visibly guided, but its newest scroll shelf, sticky fades, tape tabs, and staggered cards were not yet covered by a late terminal budget pass. This refinement keeps the gallery paper-first and visible while preventing another over-stacked layer from bypassing the calm/performance budget.

### Related items

- PAGE-003
- PAGE-003B
- COMP-006
- DESIGN-019
- DESIGN-022
- DESIGN-024
- DESIGN-026
- DESIGN-028
- DESIGN-029
- DESIGN-030
- DESIGN-031
- LESSON-019
- LESSON-022
- LESSON-024
- LESSON-026
- METRIC-018
- METRIC-021
- METRIC-023
- METRIC-025
- METRIC-027
- METRIC-028
- METRIC-029
- METRIC-030
- METRIC-032

## 2026-06-27 15:41 ET — Notes gallery alternating ledger

### Changed

- Updated `app/notes-gallery-pass.css`.
- Added a visible `scroll shelf` paper slip, dashed shelf thread, sticky edge fades, staggered card rhythm, tape tabs, copy clamping, reduced-motion handling, and mobile fallbacks to the Notes contact sheet.
- Added `.agent/changes/2026-06-27-notes-gallery-alternating-ledger.md`.
- Added `.agent/matrices/notes-gallery-alternating-ledger.matrix.md`.

### Why

The Notes gallery already used alternating image/note card classes, but the shelf could still read as neighboring cards rather than one guided scrollable paper/photo sequence. This pass makes the Notes gallery closer to the alternating scroll-gallery, paper-first, content-bearing image surface, flattened hierarchy, and text-snippet goals while staying within existing published-note data.

### Related items

- PAGE-003
- PAGE-003B
- COMP-006
- DESIGN-019
- DESIGN-022
- DESIGN-024
- DESIGN-026
- DESIGN-028
- DESIGN-029
- DESIGN-030
- DESIGN-031
- LESSON-019
- LESSON-022
- LESSON-024
- LESSON-026
- METRIC-018
- METRIC-021
- METRIC-023
- METRIC-028
- METRIC-029
- METRIC-030
- METRIC-032

## 2026-06-27 14:48 ET — Home house rules terminal budget

### Changed

- Extended `app/terminal-room-surface-budget-pass.css` to include the homepage house-rules intro, rail, notes, rule slips, photo centers, small slips, and connector thread.
- Normalized final paper shadows, blend/filter use, thread opacity, reduced-motion transforms, and mobile intrinsic sizing for the house-rules section.
- Added `.agent/changes/2026-06-27-home-house-rules-terminal-budget.md`.
- Added `.agent/matrices/home-house-rules-terminal-budget.matrix.md`.

### Why

The homepage house-rules docket and ledger already made the rules area feel more guided, but the newest terminal room surface budget did not include those homepage rule surfaces. Extending the terminal budget keeps the section visibly paper-like while reducing over-stacked depth and aligning it with the calmer late room boards.

### Related items

- PAGE-001
- COMP-003
- COMP-004
- COMP-008
- DESIGN-019
- DESIGN-022
- DESIGN-024
- DESIGN-028
- DESIGN-029
- DESIGN-030
- DESIGN-031
- LESSON-001
- LESSON-002
- LESSON-018
- LESSON-019
- LESSON-022
- LESSON-024
- LESSON-025
- METRIC-001
- METRIC-002
- METRIC-017
- METRIC-018
- METRIC-021
- METRIC-023
- METRIC-027
- METRIC-028
- METRIC-029
- METRIC-030

## 2026-06-27 14:41 ET — Terminal room surface budget

### Changed

- Added `app/terminal-room-surface-budget-pass.css`.
- Loaded the pass after `app/footer-room-index-terminal-budget-pass.css` in `app/layout.jsx` so it covers the newest late route/footer room surfaces.
- Normalized large room/docket board backings, lifted-paper shadows, connector thread opacity, filter use, `content-visibility`, reduced-motion transforms, and mobile intrinsic sizing across shared PageIntro, About, Notes, Notes post, Portfolio, Store, and footer surfaces.
- Added `.agent/changes/2026-06-27-terminal-room-surface-budget.md`.
- Added `.agent/matrices/terminal-room-surface-budget.matrix.md`.

### Why

The newest room/docket passes made the interface more visibly paper-like, but some late-added surfaces bypassed the terminal calm/performance budget and risked over-stacked shadows, competing pseudo-layer noise, and uneven mobile/reduced-motion behavior. This pass keeps the paper-first, flat editorial hierarchy, text-snippet, continuity, and gallery goals visible while consolidating the accumulated surfaces instead of adding a new decorative direction.

### Related items

- PAGE-002
- PAGE-003
- PAGE-003A
- PAGE-003B
- PAGE-004
- PAGE-005
- COMP-005
- COMP-006
- COMP-007
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
- DESIGN-032
- LESSON-018
- LESSON-019
- LESSON-022
- LESSON-024
- LESSON-026
- METRIC-017
- METRIC-018
- METRIC-021
- METRIC-023
- METRIC-025
- METRIC-027
- METRIC-028
- METRIC-029
- METRIC-030
- METRIC-031
- METRIC-032
