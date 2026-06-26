# Change Log

This log uses local project time in `America/New_York`.

## 2026-06-23 22:40 ET — Minimal studio homepage

### Changed

- Replaced technical demo homepage copy.
- Added floating header.
- Added Pages folder menu.
- Added scroll title sequence.
- Added four minimal destination cards.

### Why

The homepage needed to feel like a real minimal public studio homepage instead of a repo/data viewer.

### Related items

- PAGE-001
- COMP-001
- COMP-002
- COMP-003
- COMP-004
- LESSON-001
- LESSON-002
- LESSON-003

## 2026-06-23 22:55 ET — Public agent memory system

### Changed

- Added root `agent.md`.
- Added root `start-here.md`.
- Added `.agent/` project memory folder.
- Added matrices, lessons, maps, change templates, and reusable templates.

### Why

Future site work needs a public-safe memory layer for intent, feedback lessons, semantic items, decisions, and quality checks.

### Related items

- DEC-004
- DEC-005
- LESSON-004
- METRIC-004
- METRIC-006

## 2026-06-23 23:03 ET — Feedback-to-lesson workflow

### Changed

- Added `.agent/feedback/` documentation.
- Added intake, extraction, public-safety, workflow, inbox, and examples files.
- Updated root `agent.md` to route future feedback through the workflow.
- Updated `.agent/start-here.md`, `.agent/README.md`, and active lessons.

### Why

Small feedback points should be easy to convert into public-safe reusable lessons without storing raw private context.

### Related items

- LESSON-004
- METRIC-004
- METRIC-006

## 2026-06-23 23:10 ET — Visual atmosphere and tactile depth feedback

### Changed

- Added timestamped `.agent/feedback/feedback-log.md` entry for static-structure feedback.
- Added timestamped feedback entry for tactile polaroid/photo-like depth.
- Added LESSON-005 through LESSON-010 to lesson log and active lessons.
- Added proposed design items for gradient fade-offs, flat cel-shaded atmosphere, animated texture, and tactile polaroid depth.
- Added proposed interaction items for mouse-reactive background and gloss/scratch overlay response.
- Added metrics for alive-but-not-busy, flat-but-tactile, and borders-not-primary-structure.
- Added DEC-006 to evaluate anime.js before implementation.

### Why

The current homepage is clear but feels too static, empty, and framed. The next direction should reduce hard borders, add intentional motion, and create tactile 2.5D material depth while staying flat and performant.

### Related items

- FEEDBACK-001
- FEEDBACK-002
- LESSON-005
- LESSON-006
- LESSON-007
- LESSON-008
- LESSON-009
- LESSON-010
- DESIGN-007
- DESIGN-008
- DESIGN-009
- DESIGN-010
- INT-006
- INT-007
- METRIC-007
- METRIC-008
- METRIC-009
- DEC-006

## 2026-06-23 23:30 ET — Header offscreen top emergence feedback

### Changed

- Added a public-safe feedback record for the header placement screenshot.
- Added LESSON-011 for making the header feel like it emerges from offscreen above the page.
- Added DESIGN-011 Offscreen Top Emergence.
- Added INT-008 Top Edge Entry.
- Added METRIC-010 Offscreen But Usable.
- Added a reference note and encoded compressed screenshot reference in `.agent/references/`.
- Updated active lessons, feedback lesson mapping, design language, components, interactions, memory, semantic index, and relationship map.

### Why

The current header reads as a complete floating pill inside the page. The next header direction should use the viewport top edge as part of the composition so the header feels tucked, entering, or emerging from above while still remaining fully usable.

### Related items

- FEEDBACK-003
- LESSON-011
- COMP-001
- COMP-002
- DESIGN-004
- DESIGN-011
- INT-008
- METRIC-010

## 2026-06-23 23:45 ET — Atmosphere assets and border/card alignment pass

### Changed

- Added five reusable atmosphere assets to `public/atmosphere/`.
- Added a homepage atmosphere layer using grain, dust, scratches, and gloss overlays.
- Reduced hard borders on the header, folder menu, homepage cards, reader cards, and source links.
- Rebuilt card separation with gradients, material layers, soft shadows, and inset highlights.
- Improved page-card alignment with equal-height cards, consistent rows, and bottom-aligned descriptions.
- Added `.agent/matrices/assets.matrix.md` and semantic index rows for ASSET-001 through ASSET-005.

### Why

The site needed to apply the feedback lessons directly: less hard framed UI, more tactile atmosphere, visible material depth, and cleaner card alignment without relying on borders.

### Related items

- ASSET-001
- ASSET-002
- ASSET-003
- ASSET-004
- ASSET-005
- PAGE-001
- COMP-001
- COMP-002
- COMP-004
- DESIGN-007
- DESIGN-009
- DESIGN-010
- LESSON-005
- LESSON-006
- LESSON-008
- LESSON-010
- METRIC-007
- METRIC-008
- METRIC-009

## 2026-06-23 23:55 ET — Header edge attachment fix

### Changed

- Fixed the header CSS so `.floating-header` remains `position: fixed` instead of being overwritten by a later grouped selector.
- Moved the header slightly offscreen at the top edge.
- Changed the header from a complete floating pill to a top-attached material tab with rounded lower corners.
- Preserved readable controls and mobile behavior.

### Why

The screenshot showed that the new atmosphere was visible, but the header still read like a complete pill floating inside the page. This pass applies LESSON-011 more directly while keeping the site usable.

### Related items

- COMP-001
- COMP-002
- DESIGN-004
- DESIGN-011
- INT-008
- LESSON-011
- METRIC-010

## 2026-06-23 23:40 ET — Left-expanding open menu feedback

### Changed

- Added a public-safe feedback record for the Pages menu screenshot.
- Added LESSON-013 for making the Pages menu open by default, expand left, and stay visually unboxed.
- Added DESIGN-012 Unboxed Left-Expanding Menu.
- Added INT-010 Leftward Default-Open Menu Reveal.
- Added METRIC-012 Open Left Without Panel.
- Added a reference note and encoded compressed screenshot reference in `.agent/references/`.
- Updated active lessons, feedback lesson mapping, design language, components, interactions, memory, semantic index, and relationship map.

### Why

The current Pages menu opens downward into a large separate panel. The next menu direction should integrate the links into the header line, default open on desktop, expand left from the Pages control, and avoid separate border/background treatment.

### Related items

- FEEDBACK-004
- LESSON-013
- COMP-002
- DESIGN-012
- INT-010
- METRIC-012

## 2026-06-23 23:50 ET — Direct nav simplification feedback

### Changed

- Added a public-safe feedback record for the direct nav screenshot.
- Added LESSON-015 for removing nav edge numbers, extra helper text, and the redundant `Pages` button.
- Added DESIGN-015 Direct Unnumbered Navigation.
- Added DESIGN-016 Soft/Sharp Balance.
- Added METRIC-014 Direct Nav With Contrast.
- Added a reference note and encoded compressed screenshot reference in `.agent/references/`.
- Updated active lessons, lesson log, feedback log, design language, quality metrics, feedback lessons, components, interactions, memory, and semantic index.

### Why

The current header is closer to direct navigation, but it still includes unwanted edge numbers, extra text treatment, and a separate `Pages` button. The next pass should show only direct labels and add more contrast so the interface does not feel overly soft.

### Related items

- FEEDBACK-005
- LESSON-015
- COMP-002
- DESIGN-015

## 2026-06-26 07:39 ET — Portfolio lane direct labels

### Changed

- Added `app/portfolio-lane-direct-labels-pass.css`.
- Loaded the pass from `app/layout.jsx`.
- Updated `.agent/matrices/pages.matrix.md` and added a dedicated change note.

### Why

The Portfolio archive lanes still showed ordinal `Lane one`, `Lane two`, and `Lane three` cues. Current direct-label and paper-snippet guidance asks path-like surfaces to use meaningful room language instead of decorative numbering.

### Related items

- PAGE-004
- COMP-008
- DESIGN-015
- DESIGN-019
- DESIGN-022

## 2026-06-26 14:10 ET — DetailCard room-note heading cues

### Changed

- Added `app/detail-card-room-pin-pass.css`.
- Loaded the pass from `app/layout.jsx` after the existing DetailCard and status-pill paper passes.
- Added a dedicated matrix and change note for the shared DetailCard heading refinement.

### Why

Remaining shared `DetailCard` headings could still read as plain card headings even when the surrounding surface had paper-card treatment. The shared heading now gets a clipped `room note` slip and subtle binding thread so the pattern reads more like a placed paper-room object without changing copy or data.

### Related items

- COMP-008
- DESIGN-019
- DESIGN-022
- DESIGN-024
- DESIGN-029
- DESIGN-030
- LESSON-019
- LESSON-022
- LESSON-024
- METRIC-018
- METRIC-021
- METRIC-023
- METRIC-028
- METRIC-029

## 2026-06-26 14:18 ET — Footer exit receipt photo cues

### Changed

- Updated `app/site-chrome.jsx` so each footer exit receipt includes an honest abstract paper/photo cue.
- Updated `app/footer-exit-receipts-pass.css` so the receipt shelf uses a visible photo-led left face plus a readable copy slip.
- Added a dedicated change note for the shared footer refinement.

### Why

The shared footer exit shelf already guided visitors through Start, Read, and Browse receipts, but the receipts were still text-first. Current paper/photo guidance asks repeated route and exit surfaces to carry visible content-bearing photo centers where safe, without inventing fake screenshots, products, portfolio pieces, or private material.

### Related items

- COMP-005
- DESIGN-018
- DESIGN-019
- DESIGN-021
- DESIGN-022
- DESIGN-024
- DESIGN-030
- LESSON-018
- LESSON-019
- LESSON-021
- LESSON-022
- LESSON-024
- LESSON-025
- METRIC-017
- METRIC-018
- METRIC-020
- METRIC-021
- METRIC-023
- METRIC-029
- METRIC-030

## 2026-06-26 14:40 ET — PageIntro trust shelf slip

### Changed

- Updated `app/site-chrome.jsx` so shared PageIntro room shelves render a fourth `Trust` slip using each route's existing status.
- Updated `app/page-intro-room-shelf-pass.css` so the new fourth slip receives a deliberate paper-piece rotation.
- Updated `.agent/matrices/pages.matrix.md` and added a dedicated change note.

### Why

The PageIntro shelf styling and current calm-room guidance describe a four-part room rhythm: hero board, featured shelf, source note, and next path. The component was still rendering only three slips, so route intros missed the visible trust/source note in the shared shelf.

### Related items

- PAGE-002
- PAGE-003
- PAGE-003B
- PAGE-004
- PAGE-005
- COMP-005
- DESIGN-019
- DESIGN-021
- DESIGN-022
- DESIGN-023
- DESIGN-030
- LESSON-018
- LESSON-019
- LESSON-021
- LESSON-022
- LESSON-023
- METRIC-017
- METRIC-018
- METRIC-020
- METRIC-021
- METRIC-022
- METRIC-029

## 2026-06-26 15:09 ET — Footer current-room stamp

### Changed

- Added `app/footer-current-room-stamp-pass.css`.
- Loaded the pass from `app/layout.jsx` after the existing footer exit receipt pass.
- Added a dedicated matrix and change note for the shared footer active-route refinement.

### Why

The shared footer trail already knew the active page, but the active route still read too close to the other paper scraps. Current direct navigation and filled-room continuity guidance asks the shared exit path to make the current room visibly obvious without adding fake content or extra route labels.

### Related items

- COMP-002
- COMP-005
- COMP-009
- DESIGN-015
- DESIGN-018
- DESIGN-019
- DESIGN-022
- DESIGN-024
- DESIGN-030
- LESSON-002
- LESSON-015
- LESSON-018
- LESSON-019
- LESSON-022
- LESSON-024
- METRIC-014
- METRIC-017
- METRIC-018
- METRIC-021
- METRIC-023
- METRIC-029

## 2026-06-26 15:20 ET — Header identity paper seal

### Changed

- Added `app/header-identity-paper-seal-pass.css`.
- Loaded the pass from `app/layout.jsx` after the existing header paper edge stamps.
- Added a dedicated change note and components-matrix update for the shared header identity refinement.

### Why

The shared header already had paper-strip and direct-nav tab treatments, but the `Angel Berger` identity mark still read comparatively text-first. Current header feedback asks the whole top strip to read as layered paper at screenshot scale, so the identity side now becomes a clipped paper studio label with an honest abstract photo/seal face while preserving the same public identity text and accessible direct navigation.

### Related items

- COMP-001
- COMP-002
- COMP-005
- DESIGN-004
- DESIGN-015
- DESIGN-019
- DESIGN-020
- DESIGN-021
- DESIGN-022
- DESIGN-024
- LESSON-002
- LESSON-015
- LESSON-019
- LESSON-020
- LESSON-021
- LESSON-022
- LESSON-024
- METRIC-014
- METRIC-018
- METRIC-019
- METRIC-020
- METRIC-021
- METRIC-023
