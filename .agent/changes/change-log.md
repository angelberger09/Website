# Change Log

This log uses local project time in `America/New_York`.

## 2026-06-27 05:41 ET — Header paper contact shadow

### Changed

- Added `app/header-paper-contact-shadow-pass.css`.
- Loaded the pass after `app/header-identity-paper-seal-pass.css` in `app/layout.jsx` so it can visibly reinforce the shared top strip after earlier header paper passes.
- Strengthened the header sheet background, lower fiber strip, edge tabs, identity label, direct nav labels, active room tab, and mobile-safe shadows without changing routes, labels, focus behavior, or navigation structure.
- Added `.agent/changes/2026-06-27-header-paper-contact-shadow.md`.
- Added `.agent/matrices/header-paper-contact-shadow.matrix.md`.

### Why

METRIC-019 still marks the shared paper header as partially satisfied: the structure is correct, but the whole strip needs to read as tactile placed paper at screenshot scale. This pass targets that remaining mismatch with stronger contact shadows, handled-paper texture, and clearer tab depth while preserving direct unnumbered navigation, the offscreen/top-attached header shape, and accessible readable controls.

### Related items

- COMP-001
- COMP-002
- COMP-005
- DESIGN-004
- DESIGN-011
- DESIGN-015
- DESIGN-019
- DESIGN-020
- DESIGN-022
- LESSON-011
- LESSON-015
- LESSON-019
- LESSON-020
- LESSON-022
- METRIC-010
- METRIC-014
- METRIC-018
- METRIC-019
- METRIC-021

## 2026-06-27 04:08 ET — Portfolio room key compass

### Changed

- Added `app/portfolio-room-key-compass-pass.css`.
- Loaded the pass after `app/portfolio-room-key-pass.css` in `app/layout.jsx`.
- Turned the Portfolio opening room-key strip into a clearer `archive compass` with a left paper spine, stitched route thread, and direct paper cue slips for `public first`, `preview honestly`, and `follow shelf`.
- Added `.agent/matrices/portfolio-room-key-compass.matrix.md`.

### Why

The Portfolio room-key board already used honest public-safe archive guidance and content-bearing paper/photo slips. It was partially satisfied but could still read as three neighboring cards rather than one calm opening compass for the archive. This pass makes the first Portfolio section more human-readable, paper-first, and aligned with the calm-room sequence without changing Portfolio copy, data, links, routes, accessibility labels, or inventing project imagery.

### Related items

- PAGE-004
- COMP-008
- DESIGN-015
- DESIGN-019
- DESIGN-021
- DESIGN-022
- DESIGN-024
- DESIGN-028
- DESIGN-029
- DESIGN-030
- LESSON-002
- LESSON-015
- LESSON-019
- LESSON-021
- LESSON-022
- LESSON-024
- LESSON-025
- LESSON-026
- METRIC-002
- METRIC-014
- METRIC-018
- METRIC-020
- METRIC-021
- METRIC-023
- METRIC-028
- METRIC-029
- METRIC-030
- METRIC-032

## 2026-06-27 02:39 ET — About door docket

### Changed

- Added `app/about-door-docket-pass.css`.
- Loaded the pass after `app/about-exit-shelf-pass.css` in `app/layout.jsx`.
- Turned the About closing next-door shelf into a guided `door docket` composition with a left paper docket slip, stitched connector, staggered route cards, and small paper labels on the existing route-frame text.
- Added `.agent/changes/2026-06-27-about-door-docket.md`.
- Added `.agent/matrices/about-door-docket.matrix.md`.

### Why

The About closing pathway section already had honest public route links, direct exit slips, and abstract paper/photo centers. It still could scan as three separate next cards rather than one calm room-exit sequence. This pass makes the exit shelf more human-readable and paper-first without changing routes, copy contracts, data, accessibility labels, or inventing new public material.

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
- LESSON-002
- LESSON-018
- LESSON-019
- LESSON-022
- LESSON-024
- LESSON-026
- METRIC-002
- METRIC-017
- METRIC-018
- METRIC-021
- METRIC-023
- METRIC-028
- METRIC-029
- METRIC-030
- METRIC-032

## 2026-06-27 02:28 ET — Store promise photo cues

### Changed

- Updated `app/store/page.jsx` so each Store promise note includes a real `.store-promise-note__photo` visual center with direct public-safe cue text.
- Updated `app/store-promise-docket-pass.css` so the promise docket pin, stitched path, abstract paper/photo center, and promise copy can coexist without competing for the same pseudo-element.
- Added `.agent/changes/2026-06-27-store-promise-photo-cues.md`.
- Added `.agent/matrices/store-promise-photo-cues.matrix.md`.

### Why

The Store promise section already had public-safe promise copy, a docket wrapper, and an earlier photo-center intent, but the later docket pass reused `.store-promise-note::after` for small pins. That made the photo-center treatment too quiet and fragile. This pass restores the Store promise notes as visible content-bearing paper/photo pieces without adding fake products, fake listings, fake photos, live inventory, or private planning details.

### Related items

- PAGE-005
- COMP-008
- DESIGN-019
- DESIGN-021
- DESIGN-022
- DESIGN-024
- DESIGN-029
- DESIGN-030
- DESIGN-031
- LESSON-019
- LESSON-021
- LESSON-022
- LESSON-024
- LESSON-025
- LESSON-026
- METRIC-018
- METRIC-020
- METRIC-021
- METRIC-023
- METRIC-028
- METRIC-029
- METRIC-030
- METRIC-032

## 2026-06-27 02:10 ET — About principle promise trail

### Changed

- Added `app/about-principle-promise-trail-pass.css`.
- Loaded the pass after `app/about-principle-snippet-pass.css` in `app/layout.jsx`.
- Turned the About working-principles board into a more guided public-promise trail with a clipped `promise trail` strip, heading stitch rail, numbered promise slips, connecting thread, and mobile-safe vertical trail behavior.
- Added `.agent/changes/2026-06-27-about-principle-promise-trail.md`.
- Added `.agent/matrices/about-principle-promise-trail.matrix.md`.

### Why

The About working-principles section already had public-safe copy and individual paper notes, but it could still scan as three separate card-like promises rather than one readable studio promise sequence. This pass makes the section visibly closer to the calm-room, paper-snippet, flattened hierarchy, and paper-first goals without changing About content, route links, data, accessibility labels, or inventing studio material.

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

## 2026-06-27 01:38 ET — Portfolio record state docket

### Changed

- Added `app/portfolio-record-state-docket-pass.css`.
- Loaded the pass after `app/portfolio-state-path-shelf-pass.css` in `app/layout.jsx`.
- Turned the Portfolio record-state card stack into a more guided public/archive docket with a vertical `record docket` paper label, stitched thread, direct state cue slips, and small `public state` snippets.
- Added `.agent/changes/2026-06-27-portfolio-record-state-docket.md`.
- Added `.agent/matrices/portfolio-record-state-docket.matrix.md`.

### Why

The Portfolio record states already had public-safe state copy and paper/photo cards, but the area could still scan as four separate repeated cards instead of one readable archive-state path. This pass makes the section visibly closer to the calm-room, direct-label, paper-snippet, and flattened hierarchy goals without changing Portfolio data, route links, source contracts, or inventing project imagery.

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
- LESSON-015
- LESSON-019
- LESSON-022
- LESSON-024
- LESSON-026
- METRIC-002
- METRIC-014
- METRIC-018
- METRIC-021
- METRIC-023
- METRIC-028
- METRIC-029
- METRIC-030
- METRIC-032

## 2026-06-27 01:08 ET — Notes reader path spine

### Changed

- Added `app/notes-path-reader-spine-pass.css`.
- Loaded the pass after `app/notes-path-direct-cues-pass.css` in `app/layout.jsx`.
- Turned the existing Notes `After the shelf` path board into a more guided reader path with a vertical `reader path` paper spine, ordered route cue, dashed stitched thread, and numbered paper stamps on the existing next-path cards.
- Added `.agent/changes/2026-06-27-notes-reader-path-spine.md`.
- Added `.agent/matrices/notes-reader-path-spine.matrix.md`.

### Why

The Notes route already had public-safe continuity copy and paper/photo cards, but the path could still scan as three separate cards rather than one guided route through the room. This pass makes the reader path visibly more composed and human-readable without changing Blog data, route links, source contracts, or inventing note imagery.

### Related items

- PAGE-003
- PAGE-003A
- PAGE-003B
- COMP-006
- COMP-008
- COMP-009
- DESIGN-018
- DESIGN-019
- DESIGN-022
- DESIGN-024
- DESIGN-029
- DESIGN-030
- LESSON-002
- LESSON-018
- LESSON-019
- LESSON-022
- LESSON-024
- LESSON-026
- METRIC-017
- METRIC-018
- METRIC-021
- METRIC-023
- METRIC-028
- METRIC-029
- METRIC-032

## 2026-06-27 00:39 ET — PageIntro room key ticket

### Changed

- Added `app/page-intro-room-key-ticket-pass.css`.
- Loaded the pass after `app/page-intro-trust-spine-pass.css` in `app/layout.jsx`.
- Turned the existing shared `.page-hero__room-key` into a stronger clipped paper ticket with a direct `room key` label, dashed side thread, abstract paper/photo center, deeper lifted shadow, and mobile-safe sizing.
- Added `.agent/changes/2026-06-27-pageintro-room-key-ticket.md`.
- Added `.agent/matrices/pageintro-room-key-ticket.matrix.md`.

### Why

The shared PageIntro route stack already had route-specific shelf cues and a filled photo card, but the small room-key/status card still read quieter than the newer ticket and receipt surfaces. This pass makes the shared room key visibly part of the calm-room paper system across the top-level route intros without changing copy, routes, data, accessibility, or inventing imagery.

### Related items

- PAGE-002
- PAGE-003
- PAGE-003A
- PAGE-003B
- PAGE-004
- PAGE-005
- COMP-005
- DESIGN-019
- DESIGN-021
- DESIGN-022
- DESIGN-023
- DESIGN-024
- DESIGN-029
- DESIGN-030
- DESIGN-031
- LESSON-018
- LESSON-019
- LESSON-021
- LESSON-022
- LESSON-023
- LESSON-024
- LESSON-025
- METRIC-017
- METRIC-018
- METRIC-020
- METRIC-021
- METRIC-022
- METRIC-023
- METRIC-024
- METRIC-028
- METRIC-029
- METRIC-030

## 2026-06-27 00:11 ET — Homepage path map room spine

### Changed

- Added `app/home-path-map-room-spine-pass.css`.
- Loaded the pass after `app/home-path-ledger-consolidation-pass.css` in `app/layout.jsx` so the homepage reading map becomes visibly more ordered after previous ledger/card refinements.
- Turned the existing homepage `Read this page` map into a left-docked room-spine board with a vertical `room spine` slip, dashed stitched thread, clipped note, and chapter-stamped path cards.
- Added `.agent/changes/2026-06-27-homepage-path-map-room-spine.md`.
- Added `.agent/matrices/homepage-path-map-room-spine.matrix.md`.

### Why

The homepage path map already had the correct public-safe chapter content, but it could still scan as another row of separate route cards instead of one human-readable editorial path. This pass makes the reading map visibly closer to the calm-room, left-docked, paper-snippet, flattened hierarchy goal without changing links, page copy, data, routes, or inventing new material.

### Related items

- PAGE-001
- COMP-003
- COMP-004
- COMP-008
- DESIGN-019
- DESIGN-022
- DESIGN-024
- DESIGN-029
- DESIGN-030
- LESSON-001
- LESSON-018
- LESSON-019
- LESSON-022
- LESSON-024
- METRIC-001
- METRIC-017
- METRIC-018
- METRIC-021
- METRIC-023
- METRIC-028
- METRIC-029

## 2026-06-26 23:50 ET — About contact sheet exposure desk

### Changed

- Added `app/about-contact-sheet-exposure-desk-pass.css`.
- Loaded the pass after `app/final-paper-surface-budget-pass.css` in `app/layout.jsx` so the refinement remains visible after shared budget rules.
- Turned the existing About contact sheet into a two-column paper exposure desk with a clipped board, stitched side thread, left contact-desk note stack, staggered frame cards, and direct `contact desk` / `soft frame` labels.
- Added `.agent/changes/2026-06-26-about-contact-sheet-exposure-desk.md`.
- Added `.agent/matrices/about-contact-sheet-exposure-desk.matrix.md`.

### Why

The About contact sheet already had honest public orientation copy and content-bearing frame cards, but it still read as a row of separate cards rather than one composed room-reading surface. This pass makes the section visibly closer to the calm-room, paper-snippet, flattened hierarchy, and photo-led content goals without changing copy, routes, data, or inventing imagery.

### Related items

- PAGE-002
- COMP-008
- DESIGN-019
- DESIGN-022
- DESIGN-024
- DESIGN-029
- DESIGN-030
- DESIGN-031
- LESSON-018
- LESSON-019
- LESSON-022
- LESSON-024
- LESSON-025
- LESSON-026
- METRIC-017
- METRIC-018
- METRIC-021
- METRIC-023
- METRIC-028
- METRIC-029
- METRIC-030
- METRIC-032

## 2026-06-26 23:30 ET — Homepage hero room status cues

### Changed

- Updated `app/home-entry-contact-sheet-pass.css` so the homepage hero contact-sheet cards no longer repeat the same visible `Open room` cue on every destination.
- The first-screen route cards now show direct room status slips: `Open map`, `Reading shelf`, `Public archive`, and `Preparing`.
- Added `.agent/changes/2026-06-26-homepage-hero-room-status-cues.md`.
- Added `.agent/matrices/homepage-hero-room-status-cues.matrix.md`.

### Why

The homepage hero already had useful route cards, but the repeated status slip made every room look equally open and flattened the honest readiness path. The new visible status cues clarify the room jobs without changing route links, source data, or inventing unavailable store content.
