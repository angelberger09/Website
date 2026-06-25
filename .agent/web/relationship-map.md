# Relationship Map

## Active Website routes

- PAGE-001 Home uses `app/page.jsx` and now pulls homepage highlights from `app/site-data.js`.
- PAGE-002 About uses `app/about/page.jsx` and now pulls studio principles and pathways from `app/site-data.js`.
- PAGE-003 Notes uses `app/notes/page.jsx` and `app/notes/NotesPageClient.jsx`, including reader-state support cards from `app/site-data.js`, newest-first published sorting, and a latest-note starting point.
- PAGE-003A Notes Post Reader uses `app/notes/post/page.jsx` and `app/notes/post/PostReaderClient.jsx` with loading, missing-slug, unavailable-source, public-status, support-card, and continuity states.
- PAGE-003B Blog compatibility uses `app/blog/page.jsx` and `app/blog/post/page.jsx`, reusing the upgraded Notes index and Post Reader clients.
- PAGE-004 Portfolio uses `app/portfolio/page.jsx` and now pulls project details, archive readiness, archive lanes, and publishing rhythm from `app/site-data.js`.
- PAGE-005 Store uses `app/store/page.jsx`, pulls lane details plus readiness promises from `app/site-data.js`, and pulls launch checklist plus staged availability states from `app/store-readiness.js`.

## Shared components

- COMP-005 Shared Site Chrome uses `app/site-chrome.jsx` and `app/layout.jsx`.
- COMP-001 Floating Header and COMP-002 Direct Studio Navigation appear on each page.
- COMP-006 Notes Reader Client loads the Blog index, filters to public posts, sorts newest first, and points readers toward the latest note.
- COMP-007 Post Reader Client loads public note profiles and Markdown while providing clear reader states and page continuity.
- COMP-008 Filled Page Sections use `app/site-data.js`, `app/store-readiness.js`, and `app/globals.css` to make each route feel complete, including Portfolio archive readiness lanes and Store launch readiness gates.
- COMP-009 Next Step Band uses `app/next-step-band.jsx` with `app/page-continuity.js`, now including the individual note reader route.

## Data and design

- DATA-003 powers the Notes, Post Reader, and Blog compatibility routes.
- DATA-005 powers the next-step bands for Home, About, Notes, Portfolio, Store, and the note reader path.
- DATA-006 powers Portfolio readiness language until a future Portfolio feed can provide deeper public records.
- DATA-007 powers Store readiness language until a future Store feed can provide public product records.
- DESIGN-015 removes the old Pages trigger and numbered nav treatment.
- DESIGN-017 keeps the polaroid frame/backing motif available across the site.
- DESIGN-018 treats each top-level route as a filled public room with useful content and honest readiness states.
- DESIGN-019 pushes the shared visual language toward paper/collage material authenticity across page heroes, cards, backgrounds, and filled sections.
- DESIGN-020 focuses the paper/collage material language onto the shared floating header so the top bar reads as paper over the page, not glass UI.

## Next board signal

The Store page now explains how future product records should move from preparing to previewing to available. A future run should choose between live Blog feed validation, future Store feed schema planning, or checking the paper-card pass on the live site.
