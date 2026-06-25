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
- Updated public memory, semantic index, pages matrix, components matrix, and relationship map.

### Why

The `.agent` docs listed About, Notes, Portfolio, and Store as meaningful Website pages. This pass turns those planned routes into active filled pages while keeping the Blog repo as the public writing source.

## 2026-06-25 05:49 ET — About opening paper room map

### Changed

- Replaced the first About `DetailCard` grid in `app/about/page.jsx` with `about-opening-board`, `about-room-map`, and `about-room-piece` markup.
- Expanded `app/about-paper-collage-pass.css` so the existing About orientation copy renders as a taped paper room-map collage with clipped labels, visible paper backing, and responsive one-column fallback.
- Updated public memory, semantic index, pages matrix, components matrix, and quality metrics to record that About no longer opens with a generic shared card grid.
- Added `.agent/changes/2026-06-25-about-opening-room-map.md` as the dedicated change record.

### Why

The active paper/collage lessons were partially satisfied on About: principles and pathways used custom paper boards, but the first visible content section still fell back to generic `DetailCard` cards. The route needed to open with a clearly visible paper-room treatment without inventing new private content.

### Related items

- PAGE-002
- COMP-005
- COMP-008
- DESIGN-019
- DESIGN-022
- DESIGN-024
- DESIGN-026
- DESIGN-029
- DESIGN-030
- LESSON-018
- LESSON-019
- LESSON-022
- LESSON-024
- METRIC-018
- METRIC-021
- METRIC-023
- METRIC-025
- METRIC-028
- METRIC-029

## 2026-06-25 06:39 ET — Footer direct paper labels

### Changed

- Removed the visible `01`/`02`/`03`/`04` markers from footer route slips in `app/site-chrome.jsx`.
- Refined `app/footer-paper-trail-pass.css` so footer slips still read as clipped paper pieces using direct destination labels, subtle underscoring, and the existing responsive fallback.
- Updated `.agent/matrices/components.matrix.md` and added a dedicated change record.

### Why

The footer had already joined the paper/collage system, but its numbered markers reintroduced decorative navigation metadata. The current direct-navigation rule favors clear labels without edge numbers or helper text, so the shared bottom chrome should match that simpler route language while staying visibly papery.

### Related items

- COMP-005
- COMP-002
- DESIGN-015
- DESIGN-016
- DESIGN-019
- DESIGN-020
- LESSON-015
- LESSON-020
- METRIC-014
- METRIC-019

## 2026-06-25 07:10 ET — Human-facing source copy pass

### Changed

- Humanized Homepage source/door copy in `app/page.jsx` and `app/site-data.js`.
- Humanized Notes intro, source stamp, source-readiness cards, fallback rules, and support-note copy in `app/notes/NotesPageClient.jsx`, `app/source-readiness.js`, and `app/site-data.js`.
- Softened Portfolio and Store data-copy strings in `app/site-data.js` and `app/store-readiness.js`.
- Updated public memory, pages matrix, components matrix, and a dedicated change record.

### Why

The active copy lessons were partially satisfied: the interface was filled and public-safe, but several rendered surfaces still exposed implementation words such as repo, raw feed, and Website-owned. The visible Website needed warmer studio-room language while preserving the same truthful public source contracts.

### Related items

- PAGE-001
- PAGE-003
- PAGE-003B
- PAGE-004
- PAGE-005
- COMP-006
- COMP-008
- DATA-003
- DATA-007
- DATA-008
- DATA-009
- DATA-010
- LESSON-001
- LESSON-002
- LESSON-018
- METRIC-001
- METRIC-002
- METRIC-016

### Changed

- Replaced remaining visitor-facing source/mechanics language on the homepage with warmer room/back-room copy.
- Replaced remaining Notes reader/support/readiness phrases such as public source, behind-the-scenes list, backend structure, and raw URLs with writing-shelf, public-path, and quiet-backup language.
- Humanized Portfolio future feed ledger labels from raw field names into public id, project name, public state, short note, studio role, preview place, and public path.
- Humanized Store future feed ledger labels from raw field names into public id, piece name, availability, short note, preview place, and delivery note.
- Updated public memory, pages matrix, content-sources matrix, quality metrics, and a dedicated change record.

### Why

METRIC-001 and METRIC-002 were still partially satisfied. The rendered interface had already moved away from repo/raw-feed language, but several public sections still exposed implementation-first terms. The Website should explain connected sources as calm studio shelves, rooms, public paths, and readiness states without hiding the truthful source contracts underneath.

### Related items

- PAGE-001
- PAGE-003
- PAGE-003B
- PAGE-004
- PAGE-005
- COMP-006
- COMP-008
- DATA-008
- DATA-009
- DATA-010
- LESSON-001
- LESSON-002
- LESSON-018
- METRIC-001
- METRIC-002
- METRIC-016

## 2026-06-25 08:11 ET — Compact PageIntro subtitle labels

### Changed

- Refined `app/page-intro-subtitle-pass.css` so shared route intro titles render as smaller uppercase paper labels with a short underline mark, narrower max width, and one-line mobile preservation.
- Updated the quality metric record for METRIC-022.
- Added a dedicated change record for the pass.

### Why

LESSON-023 / METRIC-022 remained partially satisfied: PageIntro titles were already on a named subtitle class, but the visual treatment could still read too close to a route headline. The shared route intro needed a stronger cross-page correction so About, Notes, Portfolio, Store, and Blog compatibility pages clearly treat their titles as supportive subtitle labels under the true homepage hero system.

### Related items

- PAGE-002
- PAGE-003
- PAGE-003B
- PAGE-004
- PAGE-005
- COMP-005
- DESIGN-006
- DESIGN-023
- LESSON-023
- METRIC-022

## 2026-06-25 09:09 ET — Homepage hero route slips

### Changed

- Added a `home-hero-route-strip` with four `home-hero-route-slip` links under the homepage hero note in `app/page.jsx`.
- Styled the new hero route slips in `app/home-paper-collage-pass.css` as clipped paper snippets with accessible focus states and a two-column mobile fallback.
- Extended `app/performance-budget-pass.css` so the new hero route slips use the final cheap paper surface, transform reset, and focus rules.
- Updated memory, pages matrix, components matrix, quality metrics, and a dedicated change record.

### Why

METRIC-001, METRIC-002, and METRIC-017 were still partially satisfied around homepage first-screen orientation. The homepage had clear door sections lower on the page, but the hero itself could do more to immediately orient visitors inside the four public studio rooms without adding fake content or heavy new effects.

### Related items

- PAGE-001
- COMP-003
- COMP-004
- COMP-008
- DESIGN-006
- DESIGN-019
- DESIGN-022
- DESIGN-024
- DESIGN-030
- LESSON-001
- LESSON-002
- LESSON-018
- LESSON-019
- LESSON-022
- LESSON-024
- METRIC-001
- METRIC-002
- METRIC-007
- METRIC-017
- METRIC-018
- METRIC-021
- METRIC-023
- METRIC-028
- METRIC-029

## 2026-06-25 09:18 ET — Homepage entry contact sheet

### Changed

- Refined the homepage hero route strip in `app/page.jsx` into a `home-hero-contact-sheet` with mini `home-hero-route-slip__preview` image-like centers for About, Notes, Portfolio, and Store.
- Added `app/home-entry-contact-sheet-pass.css` for the visible contact-sheet board, route-photo centers, compact labels, and responsive two-column / one-column fallbacks.
- Imported the pass from `app/layout.jsx` after the performance refinements so the contact sheet stays visible without reintroducing expensive filters, blend modes, or animated overlays.
- Updated public memory, pages matrix, components matrix, and added a dedicated change record.

### Why

The first-screen route entry was a useful improvement, but it still read mostly as text slips. The active content-bearing polaroid and photo-led structure lessons were only partially satisfied on the homepage hero. This pass makes the route choices visibly image/card-led while staying honest: it uses abstract paper/photo centers from existing route labels, not fake screenshots or fake project/product imagery.

### Related items

- PAGE-001
- COMP-003
- COMP-004
- COMP-008
- DESIGN-019
- DESIGN-021
- DESIGN-022
- DESIGN-030
- LESSON-001
- LESSON-002
- LESSON-018
- LESSON-019
- LESSON-021
- LESSON-022
- LESSON-026
- METRIC-001
- METRIC-002
- METRIC-017
- METRIC-018
- METRIC-020
- METRIC-021
- METRIC-028
- METRIC-030

## 2026-06-25 14:21 ET — About pathway photo cards

### Changed

- Added route-specific abstract visual centers to the About `Where to go next` pathway cards in `app/about/page.jsx`.
- Added `app/about-pathway-photo-pass.css` so Notes, Portfolio, and Store path cards read as clipped paper/photo cards with small paper labels instead of text-only notes.
- Imported the pass from `app/layout.jsx`.
- Updated pages and quality metrics matrices, plus a dedicated change record.

### Why

The About page had strong paper orientation and contact-sheet sections, but the local next-path cards were still mostly text-only paper slips. Current active lessons favor honest photo/image-like surfaces where they can carry route structure without implying fake screenshots, fake product imagery, or private work.

### Related items

- PAGE-002
- COMP-008
- DESIGN-019
- DESIGN-021
- DESIGN-022
- DESIGN-024
- DESIGN-030
- DESIGN-031
- LESSON-018
- LESSON-019
- LESSON-021
- LESSON-022
- LESSON-024
- LESSON-026
- METRIC-017
- METRIC-018
- METRIC-021
- METRIC-023
- METRIC-029
- METRIC-030

## 2026-06-25 19:40 ET — Store path direct paper cues

### Changed

- Replaced the large decorative numeric marker inside local Store path photo cards with a direct `Open room` paper cue.
- Added `app/store-path-direct-labels-pass.css` so the cue reads as a clipped paper label rather than oversized display numbering.
- Imported the pass from `app/layout.jsx` after the Store path photo styling.
- Updated pages and quality metrics matrices plus this change log.

### Why

The Store path photo board was already a useful local next-room section, but the visual center still used decorative numbers on navigation cards. Current direct-label lessons favor clear destination cues without numeric markers, especially on route/path surfaces. This pass keeps the photo-card structure while making the navigational cue more direct and paper-like.

### Related items

- PAGE-005
- COMP-008
- DESIGN-015
- DESIGN-016
- DESIGN-019
- DESIGN-022
- DESIGN-030
- LESSON-015
- LESSON-018
- LESSON-019
- LESSON-022
- METRIC-014
- METRIC-017
- METRIC-021
- METRIC-029
