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
- Updated active lessons, feedback lesson mapping, design language, components, memory, semantic index, and relationship map.

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
- DESIGN-016
- INT-010
- METRIC-014

## 2026-06-24 02:05 ET — Filled Website pages

### Changed

- Added shared site content in `app/site-data.js`.
- Added shared site chrome in `app/site-chrome.jsx`.
- Moved the header, atmosphere layer, and footer into `app/layout.jsx` so all pages share the Website shell.
- Rebuilt the homepage to link to real About, Notes, Portfolio, and Store pages.
- Added filled pages for About, Notes, Notes Post Reader, Portfolio, and Store.
- Kept Blog and Blog Post as compatibility routes that reuse the Notes reader.
- Updated global and typography styles for direct navigation and filled page layouts.
- Updated public memory, pages matrix, semantic index, components matrix, and relationship map.

### Why

The `.agent` docs listed About, Notes, Portfolio, and Store as meaningful Website pages. This pass turns those planned routes into active filled pages while keeping the Blog repo as the public writing source.

## 2026-06-24 19:10 ET — Filled page depth pass

### Changed

- Added richer homepage highlight cards.
- Added About principles and pathway cards.
- Added Notes support and reader-state cards.
- Added Portfolio lanes and publishing rhythm.
- Added Store trust promises.
- Updated shared data in `app/site-data.js`.
- Updated public memory, semantic index, pages matrix, components matrix, and relationship map.

### Why

The top-level Website pages were filled, but several still read as first-pass pages. This pass makes every major page more useful while keeping future Blog, Portfolio, and Store repo data optional and honest.

### Related items

- PAGE-001
- PAGE-002
- PAGE-003
- PAGE-004
- PAGE-005
- COMP-008
- LESSON-018

## 2026-06-24 19:19 ET — Filled page continuity bands

### Changed

- Added `app/page-continuity.js` with shared next-step language for each major Website page.
- Added reusable `app/next-step-band.jsx`.
- Added next-step bands to Home, About, Notes, Portfolio, and Store.
- Updated public memory, semantic index, pages matrix, components matrix, and relationship map.

### Why

The pages now have more content, but they should not feel like isolated filled cards. This pass adds quiet, reusable continuity so visitors can move through the Website as a connected studio path.

### Related items

- PAGE-001
- PAGE-002
- PAGE-003
- PAGE-004
- PAGE-005
- COMP-009
- DATA-005
- DESIGN-018
- INT-011
- LESSON-018

## 2026-06-24 19:33 ET — Homepage room markers

### Changed

- Added `app/homepage-room-markers.js` with room-level visitor promises.
- Added a homepage `Current rooms` section that explains how About, Notes, Portfolio, and Store are already filled.
- Updated the change log with this entry.

### Why

The homepage already had page doors and next-step continuity. This pass makes the filled-room status visible before visitors choose a route, helping the site feel complete without redoing the route pages.

### Related items

- PAGE-001
- PAGE-002
- PAGE-003
- PAGE-004
- PAGE-005
- COMP-004
- COMP-008
- LESSON-018

## 2026-06-24 19:50 ET — Notes reader depth pass

### Changed

- Added latest-note emphasis and newest-first sorting to the notes index.
- Added fuller reader states for loading, unavailable source, empty public archive, and published posts.
- Added support-card and continuation sections to the individual note reader.
- Updated pages matrix, components matrix, relationship map, and a dedicated change entry file.

### Why

The Notes route already loaded Blog content, but it needed to feel like a complete Website-owned reader rather than a raw feed preview. This pass gives both the index and individual note route clearer orientation, state handling, and continuity.

### Related items

- PAGE-003
- PAGE-003A
- PAGE-003B
- COMP-006
- COMP-007
- DATA-003
- DATA-005
- LESSON-002
- LESSON-004
- LESSON-018

## 2026-06-24 19:57 ET — Note reader continuity target

### Changed

- Added an individual note reader continuity target to `app/page-continuity.js`.
- Updated `app/notes/post/PostReaderClient.jsx` to use the note-reader-specific target.
- Updated public memory and added a dedicated change entry file.

### Why

The post reader had continuity after reading, but it reused the broader Notes index target. This pass gives individual notes their own next-step language so the route feels less generic and more like a completed reading room.

### Related items

- PAGE-003A
- PAGE-003B
- COMP-007
- COMP-009
- DATA-005
- LESSON-018

## 2026-06-24 20:09 ET — Portfolio archive readiness lanes

### Changed

- Added `portfolioReadiness` data in `app/site-data.js`.
- Added an Archive readiness section to `app/portfolio/page.jsx`.
- Updated public memory, pages matrix, components matrix, and relationship map for the Portfolio readiness pass.

### Why

The Portfolio page already had public project cards and archive lanes. This pass makes the page clearer for future growth by naming how work moves from ready cards to preparing records without inventing complete case studies too early.

### Related items

- PAGE-004
- COMP-008
- DATA-006
- LESSON-002
- LESSON-004
- LESSON-018

## 2026-06-24 20:28 ET — Store launch readiness gates

### Changed

- Added `app/store-readiness.js` with a public-safe product readiness checklist and staged availability states.
- Added Store launch checklist and availability-state sections to `app/store/page.jsx`.
- Updated public memory, semantic index, content sources matrix, pages matrix, components matrix, and relationship map for the Store readiness pass.

### Why

The Store page already names future product lanes and promises not to fake inventory. This pass makes the next Store growth step clearer by defining what a product needs before it moves from preparing to previewing or available, without pretending any live listings exist.

### Related items

- PAGE-005
- COMP-008
- DATA-007
- LESSON-002
- LESSON-004
- LESSON-018

## 2026-06-24 20:41 ET — Store feed contract pass

### Changed

- Added Store feed contract fields and rules to `app/store-readiness.js`.
- Added a Future feed shape section to `app/store/page.jsx`.
- Updated public memory, semantic index, content sources matrix, pages matrix, components matrix, and relationship map for the Store feed contract.

### Why

The Store page had readiness gates but the future Store repo data path was still only a placeholder. This pass defines the public-safe field shape the Website should expect later, without marking the future feed active or inventing live inventory.

### Related items

- PAGE-005
- COMP-008
- DATA-007
- DATA-008
- LESSON-002
- LESSON-004
- LESSON-018

## 2026-06-24 22:20 ET — Paper header surface implementation

### Changed

- Applied `FEEDBACK-008` / `LESSON-020` in `app/paper-card-pass.css` so the shared floating header now gets a cream paper surface, existing grain/dust/scratch texture, stronger layered shadow, `backdrop-filter: none`, and a subtle lower-edge paper cue.
- Updated `.agent/memory.md` to record that the shared header now has a first paper-surface implementation and that future header refinements should tune the existing material pass rather than adding a competing header system.
- Updated `.agent/matrices/components.matrix.md`, `.agent/matrices/design-language.matrix.md`, `.agent/matrices/quality-metrics.matrix.md`, and `.agent/matrices/semantic-index.md` to connect the implementation to `COMP-001`, `DESIGN-020`, `METRIC-019`, and `LESSON-020`.
- Added `.agent/changes/2026-06-24-paper-header-surface-implementation.md` as the detailed implementation record.

### Why

The stored feedback said the top bar should feel like a tactile paper strip laid over the page rather than a smooth glassy UI capsule. This pass intentionally implemented that feedback while preserving the current direct navigation structure.

### Related items

- FEEDBACK-008
- LESSON-020
- COMP-001
- COMP-002
- COMP-005
- DESIGN-004
- DESIGN-011
- DESIGN-019
- DESIGN-020
- ASSET-001
- ASSET-002
- ASSET-003
- METRIC-019

## 2026-06-24 23:21 ET — Stronger shared paper card edge pass

### Changed

- Refined `app/paper-card-pass.css` so shared card-like surfaces use more visibly irregular cut-paper `clip-path` silhouettes instead of near-rectangular cuts.
- Strengthened the layered paper shadows and texture density on `.page-card`, `.detail-card`, `.source-link`, `.link-card`, `.reader-card`, `.pathway-link`, and `.next-step-band`.
- Added the stronger torn/cut treatment to alternating `.link-card`, `.reader-card`, and `.pathway-link` instances so non-homepage surfaces do not stay visually too uniform.
- Made `.page-card__label`, `.status-pill`, `.tag-row span`, and `.reader-state` use more irregular cut silhouettes instead of pill-like shapes.
- Updated `.agent/memory.md`, `.agent/matrices/components.matrix.md`, and `.agent/matrices/quality-metrics.matrix.md` for the refinement.

### Why

The current `app/paper-card-pass.css` technically removed rounded corners, but its cut paths were subtle enough that shared cards could still read as soft UI panels. This pass keeps the existing bounded paper-card system and makes the edge treatment visibly stronger without introducing a new component pattern.

### Related items

- FEEDBACK-010
- FEEDBACK-011
- LESSON-022
- LESSON-024
- COMP-004
- COMP-005
- COMP-006
- COMP-007
- COMP-008
- COMP-009
- DESIGN-022
- DESIGN-024
- METRIC-021
- METRIC-023
