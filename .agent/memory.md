# Public Project Memory

This file stores distilled, public-safe memory for the Website repo.

## Current facts

- The public Website repo is the main Soft Strange Studio front door.
- The homepage should feel authored, minimal, soft, and human-facing.
- Avoid technical demo language in visible homepage copy.
- The personal header identity is `Angel Berger`.
- The current top-level page destinations are About, Notes, Portfolio, and Store.
- The Notes page renders published public Blog repo content inside the Website shell.
- The Notes page now also includes a source-readiness section that names the Blog feed contract, published-record needs, reader file paths, and fallback behavior in visitor-facing language.
- Individual Notes/Blog post routes should remain connected to the wider studio path after reading, not behave like dead-end article views.
- The Portfolio page now includes archive readiness lanes so public work can be marked as ready now, preparing next, or held offstage without exposing raw drafts.
- The Portfolio page now also publishes a public-safe future feed contract so the future Portfolio repo can expose calm archive fields before Website project cards consume live project data.
- The Store page now includes a launch checklist and staged availability states so future products can move from preparing to previewing to available without fake inventory.
- The Store page now also publishes a public-safe future feed contract so the future Store repo can expose calm fields before Website cards consume live product data.
- Public content should be structured so the main Website can eventually pull from Blog, Portfolio, and Store repos.
- The `.agent/` folder is a public project-memory layer, not a place for private notes.
- All top-level Website pages should be meaningfully filled even before every connected repo has live data; use honest preparation states instead of empty placeholders or fake listings.
- Screenshot, visual, and current-site feedback should be validated against the live/current Website before it is turned into a lesson or implementation target.
- Feedback-only passes should update `.agent/` memory and leave public Website source unchanged unless implementation is explicitly requested.
- Filled pages should also keep visitor continuity clear: each major route should offer calm, human-facing next steps into related studio rooms.
- The shared page-card, detail-card, source-link, reader-card, pathway-link, and next-step surfaces now have a dedicated paper-card styling pass layered after the base CSS.
- The shared floating header now has a first paper-surface implementation in `app/paper-card-pass.css`, using existing grain/dust/scratch assets, a stronger layered shadow, a cream paper surface, and a subtle uneven lower-edge cue.
- Shared card-like surfaces now use stronger, visibly irregular cut-paper silhouettes and edge shadows in `app/paper-card-pass.css` so they read less like rounded UI cards and more like lifted torn paper pieces.
- The homepage hero polaroid stack now carries a small readable studio-room preview through `app/page.jsx` and `app/hero-polaroid-card-pass.module.css`, so the frame is no longer only decorative.
- Shared `PageIntro` polaroid stacks now carry small route-specific photo-center cards through `app/site-chrome.jsx` and `app/globals.css`, so About, Notes, Portfolio, and Store route intros no longer use empty polaroid centers.
- The feedback-alignment harness should be boundary-cautious rather than action-timid: once a change is public-safe, supported by `.agent`, and inside the Website scope, the implementation should be complete enough to visibly satisfy the chosen bounded target.
- Store-page screenshot feedback from 2026-06-25 has been split into separate public-safe feedback records: stronger section backgrounds, grainy root paper, crinkled paper material, flatter hierarchy, text snippets, photo-led content, and availability rows that feel less like UI strips.
- The Store availability states currently use `store-snippet-list` and `store-state-snippet` surfaces in `app/store/page.jsx` with staggered cut-paper treatment in `app/paper-card-pass.css`; this partially satisfies the placed availability paper-strip target and should be visually reviewed before adding more Store styling.
- The Store availability section now has a narrow `app/store-paper-snippet-pass.css` refinement that turns the section eyebrow and title into clipped paper snippets, supporting FEEDBACK-016 without changing Store copy or inventing product material.
- The Store launch checklist now uses a `store-editorial-section` wrapper in `app/store/page.jsx` plus a light paper-field backdrop in `app/store-paper-snippet-pass.css`, reducing one nested wide-card panel while preserving the truthful checklist content.
- The Store page now includes a narrow preview-board pass in `app/store/page.jsx` and `app/store-paper-snippet-pass.css`: existing Store lane data becomes honest image-like paper/photo surfaces that support FEEDBACK-017 without implying product photos, live listings, or completed inventory.
- The Store promise section now uses the existing `store-editorial-section` pattern plus `app/store-hierarchy-pass.css`, reducing one remaining broad `link-card wide-card` panel and giving the promise content a flatter paper-field composition tied to FEEDBACK-015 / METRIC-028.
- The shared header now loads `app/header-paper-tabs-pass.css` after earlier paper header passes so the full strip, identity area, and direct nav labels use stronger cut-paper/tab shapes, heavier texture, and more visible layered shadows tied to FEEDBACK-011 / LESSON-020 / METRIC-019.
- The Store availability section now uses a dedicated `store-availability-board` / `store-availability-collage` structure in `app/store/page.jsx` and `app/store-availability-board-pass.css`, removing the broad `link-card wide-card` and `pathway-link` inheritance so the availability states read more like taped paper notes on a collage field than repeated UI rows.
- The Store opening path section now uses `store-lane-collage` / `store-lane-piece` markup in `app/store/page.jsx` and `app/store-lane-collage-pass.css`, replacing the first generic Store `DetailCard` grid with staggered paper/photo lane pieces that keep the existing honest lane data while strengthening FEEDBACK-015 / FEEDBACK-017 / METRIC-030.
- The Store promise section now uses `store-promise-board` / `store-promise-note` markup in `app/store/page.jsx` plus `app/store-promise-collage-pass.css`, replacing another generic embedded `DetailCard` grid with taped promise notes inside a paper-field board while preserving the honest no-fake-inventory copy.
- The Store launch checklist now uses `store-checklist-collage` / `store-checklist-note` markup in `app/store/page.jsx` plus `app/store-checklist-collage-pass.css`, replacing the remaining generic `DetailCard` checklist grid with taped readiness notes while preserving the honest launch requirements.
- The Store preview board now uses `store-shot-card__staged-pieces` and `store-shot-card__materials` in `app/store/page.jsx` plus `app/store-preview-collage-pass.css`, making existing Store lane data read more like staged paper/photo content while preserving the no-fake-product boundary.
- The Store future feed contract now uses `store-feed-ledger-board`, `store-feed-ledger-card`, and `store-feed-rule-tape` in `app/store/page.jsx` plus `app/store-feed-contract-pass.css`, replacing the remaining generic field/rule lists with a taped paper ledger board while preserving the public-safe future data contract.
- The About page now uses `about-paper-board`, `about-principle-note`, and `about-pathway-note` markup in `app/about/page.jsx` plus `app/about-paper-collage-pass.css`, replacing broad shared `link-card wide-card` panels for principles and pathways with visible taped paper-note boards.

## Active direction

The site should feel like a calm studio landing page first. Technical structure can exist underneath, but the visible homepage should prioritize clarity, warmth, and orientation.

The current visual direction is less framed UI and more living paper-collage atmosphere: fewer hard borders, more gradients and fade-offs, subtle intentional motion, tactile 2.5D depth, visible paper fiber, torn/cut edges, scanned imperfections, surface marks, and layered paper shadows. Gloss and polaroid effects should support the paper feeling, not replace it.

The floating header should feel physically connected to the top edge of the viewport while remaining readable across the live top-level pages.

The floating header should read as a tactile paper strip laid over the page, using existing atmosphere/polaroid material assets or shader-like CSS where helpful, with a visible soft drop shadow so it feels physically layered rather than glassy or weightless. The current implementation lives in the post-base material pass, so future header refinements should tune that existing paper surface instead of adding unrelated competing header systems.

The shared header still needs a stronger paper read at screenshot scale: the whole top strip, identity side, and direct navigation labels should feel like layered paper tabs or cut paper pieces rather than smooth rounded UI pills.

Direct navigation should stay visible without a redundant `Pages` button, edge numbers, or extra helper text. Add enough contrast and hierarchy that the header feels clear, not overly soft.

Paper material should be visible across the shared page system, not isolated to one decorative polaroid stack. Cards, page heroes, background layers, and filled sections should read as handmade paper/collage pieces before they read as generic translucent UI panels.

When polaroid/photo frames are used as cards, the transparent middle should carry meaningful readable content. Use the frame and backing as a content surface for route labels, page information, preview art, project material, or product lane cues rather than leaving the polaroid as empty background decoration.

Shared card surfaces should not default to soft rounded UI panels. Treat page cards, detail cards, wide cards, reader cards, source links, pathway rows, and next-step bands as content-bearing paper/polaroid pieces with cut or uneven edge cues, layered backing shadows, texture, and visible sheet depth.

The current shared paper-card pass should remove rounded-corner card language from shared card-like surfaces. Cards should use squared/cut/torn silhouettes, edge shadows, clip-path shapes, layered offsets, and texture so the edges feel physical. Future styling should keep the effect readable and avoid making text surfaces too noisy.

Store and similar filled-page sections should move further away from nested UI panels: stronger paper/collage backgrounds, grainy and lightly crinkled root material, smaller text snippets, and more photo/image-like content surfaces should carry hierarchy when they fit the public-safe content state.

Store availability states should not remain long UI-like rows when the paper system is refined. They should become placed paper strips, staggered snippets, or collage pieces while keeping labels and descriptions readable.

Page intro titles should be supportive subtitles rather than hero headlines. Across the major public pages, keep them 2–5 words, thinner, slightly smaller, and on one line.

Page fill should turn every route into a useful public room: homepage orientation, About principles and pathways, Notes reader states, Portfolio lanes/process/readiness, and Store readiness promises.

Page-to-page continuity should feel like a guided studio path rather than a set of isolated filled cards. Use reusable next-step language to point visitors toward the most natural related routes, including after individual note reading.

Notes growth should keep the Blog connection explicit but non-technical: show the feed contract, published-record expectations, reader file needs, and fallback rules as a calm readiness layer rather than exposing raw endpoints to visitors.

Portfolio growth should use public-readiness lanes before adding deeper case studies: show work that is already framed, prepare records that need public assets or source links, and keep raw/private drafts offstage. The future Portfolio feed should expose stable public fields such as slug, title, status, summary, role, preview, and source so the Website can render calm project cards without exposing raw planning.

Store growth should use public-readiness gates before adding live commerce links: name the product story, provide honest preview material, state delivery/availability clearly, and only mark items available when a public source path exists. The future Store feed should expose stable public fields such as slug, title, status, summary, preview, and delivery so the Website can render calm cards without exposing raw planning.

## Filled page structure

- `/Website/` explains the public studio shape, highlights the filled front room, links to the four main doors, and offers a short next-step path.
- `/Website/about/` explains the public studio shape, working principles, next-path choices, and routes visitors toward notes or portfolio. Its principles and pathways now render as taped paper-note boards instead of broad shared UI panels.
- `/Website/notes/` loads published notes from the Blog repo, explains reader behavior for loading, error, empty, and published states, names Blog source-readiness expectations, and routes visitors toward portfolio or home.
- `/Website/notes/post/?slug=...` renders individual public notes inside the Website reader and offers post-specific next-step continuity back to notes or onward to portfolio.
- `/Website/portfolio/` gives the first public project/archive cards, archive readiness lanes, archive lanes, a future Portfolio feed contract, staged record states, a publishing rhythm, and related routes into notes or store.
- `/Website/store/` gives future product lanes without inventing live listings, states the trust rules for future shop links, adds launch-readiness gates, availability states, a future Store feed contract, and routes visitors back into portfolio or about.
- `/Website/blog/` remains a compatibility route for the Notes reader.

## Do not store here

- raw conversation logs
- private personal details
- private drafts
- private notes
