# Public Project Memory

This file stores distilled, public-safe memory for the Website repo.

## Current facts

- The public Website repo is the main Soft Strange Studio front door.
- The homepage should feel authored, minimal, soft, and human-facing.
- Avoid technical demo language in visible homepage copy.
- The personal header identity is `Angel Berger`.
- The current top-level page destinations are About, Notes, Portfolio, and Store.
- The Notes page renders published public Blog repo content inside the Website shell.
- Public content should be structured so the main Website can eventually pull from Blog, Portfolio, and Store repos.
- The `.agent/` folder is a public project-memory layer, not a place for private notes.
- All top-level Website pages should be meaningfully filled even before every connected repo has live data; use honest preparation states instead of empty placeholders or fake listings.
- Screenshot, visual, and current-site feedback should be validated against the live/current Website before it is turned into a lesson or implementation target.
- Feedback-only passes should update `.agent/` memory and leave public Website source unchanged unless implementation is explicitly requested.
- Filled pages should also keep visitor continuity clear: each major route should offer calm, human-facing next steps into related studio rooms.

## Active direction

The site should feel like a calm studio landing page first. Technical structure can exist underneath, but the visible homepage should prioritize clarity, warmth, and orientation.

The current visual direction is less framed UI and more living paper-collage atmosphere: fewer hard borders, more gradients and fade-offs, subtle intentional motion, tactile 2.5D depth, visible paper fiber, torn/cut edges, scanned imperfections, surface marks, and layered paper shadows. Gloss and polaroid effects should support the paper feeling, not replace it.

The floating header should feel physically connected to the top edge of the viewport while remaining readable across the live top-level pages.

The floating header should also read as a tactile paper strip laid over the page, using existing atmosphere/polaroid material assets or shader-like CSS where helpful, with a visible soft drop shadow so it feels physically layered rather than glassy or weightless.

Direct navigation should stay visible without a redundant `Pages` button, edge numbers, or extra helper text. Add enough contrast and hierarchy that the header feels clear, not overly soft.

Paper material should be visible across the shared page system, not isolated to one decorative polaroid stack. Cards, page heroes, background layers, and filled sections should read as handmade paper/collage pieces before they read as generic translucent UI panels.

When polaroid/photo frames are used as cards, the transparent middle should carry meaningful readable content. Use the frame and backing as a content surface for route labels, page information, preview art, project material, or product lane cues rather than leaving the polaroid as empty background decoration.

Page fill should turn every route into a useful public room: homepage orientation, About principles and pathways, Notes reader states, Portfolio lanes/process, and Store readiness promises.

Page-to-page continuity should feel like a guided studio path rather than a set of isolated filled cards. Use reusable next-step language to point visitors toward the most natural related routes.

## Filled page structure

- `/Website/` explains the public studio shape, highlights the filled front room, links to the four main doors, and offers a short next-step path.
- `/Website/about/` explains the public studio shape, working principles, next-path choices, and routes visitors toward notes or portfolio.
- `/Website/notes/` loads published notes from the Blog repo, explains reader behavior for loading, error, empty, and published states, and routes visitors toward portfolio or home.
- `/Website/portfolio/` gives the first public project/archive cards, archive lanes, a publishing rhythm, and related routes into notes or store.
- `/Website/store/` gives future product lanes without inventing live listings, states the trust rules for future shop links, and routes visitors back into portfolio or about.
- `/Website/blog/` remains a compatibility route for the Notes reader.

## Do not store here

- raw conversation logs
- private personal details
- private drafts
- private notes
