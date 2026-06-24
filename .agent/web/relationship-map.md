# Relationship Map

## Active Website routes

- PAGE-001 Home uses `app/page.jsx` and now pulls homepage highlights from `app/site-data.js`.
- PAGE-002 About uses `app/about/page.jsx` and now pulls studio principles and pathways from `app/site-data.js`.
- PAGE-003 Notes uses `app/notes/page.jsx` and `app/notes/NotesPageClient.jsx`, including reader-state support cards from `app/site-data.js`.
- PAGE-003A Notes Post Reader uses `app/notes/post/page.jsx`.
- PAGE-003B Blog compatibility uses `app/blog/page.jsx` and `app/blog/post/page.jsx`.
- PAGE-004 Portfolio uses `app/portfolio/page.jsx` and now pulls project details, archive lanes, and publishing rhythm from `app/site-data.js`.
- PAGE-005 Store uses `app/store/page.jsx` and now pulls lane details plus readiness promises from `app/site-data.js`.

## Shared components

- COMP-005 Shared Site Chrome uses `app/site-chrome.jsx` and `app/layout.jsx`.
- COMP-001 Floating Header and COMP-002 Direct Studio Navigation appear on each page.
- COMP-006 Notes Reader Client loads the Blog index.
- COMP-007 Post Reader Client loads public note profiles and Markdown.
- COMP-008 Filled Page Sections use `app/site-data.js` and `app/globals.css` to make each route feel complete.
- COMP-009 Next Step Band uses `app/next-step-band.jsx` with `app/page-continuity.js`.

## Data and design

- DATA-003 powers the Notes and Blog compatibility routes.
- DATA-005 powers the next-step bands for Home, About, Notes, Portfolio, and Store.
- DESIGN-015 removes the old Pages trigger and numbered nav treatment.
- DESIGN-017 keeps the polaroid frame/backing motif available across the site.
- DESIGN-018 treats each top-level route as a filled public room with useful content and honest readiness states.
- DESIGN-019 pushes the shared visual language toward paper/collage material authenticity across page heroes, cards, backgrounds, and filled sections.

## Feedback relationships

- FEEDBACK-007 maps the current About page screenshot to PAGE-002, COMP-005, COMP-008, DESIGN-019, METRIC-018, and LESSON-019.
- LESSON-019 should influence future implementation across all top-level routes because the paper/collage material system is shared, not page-specific.
