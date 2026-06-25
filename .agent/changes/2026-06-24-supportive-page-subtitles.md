# 2026-06-24 21:19 ET — Supportive page subtitle alignment

## Changed

- Updated `app/about/page.jsx` so the About `PageIntro` title is `Soft public studio`.
- Updated `app/notes/NotesPageClient.jsx` so the Notes `PageIntro` title is `Studio notes room`.
- Updated `app/portfolio/page.jsx` so the Portfolio `PageIntro` title is `First public archive`.
- Updated `app/store/page.jsx` so the Store `PageIntro` title is `Future studio pieces`.
- Updated `.agent/matrices/pages.matrix.md` so affected pages reference `LESSON-023` and `METRIC-022` where the supportive subtitle rule now applies.

## Why

The current `.agent` state says major page intro titles should act as short supportive subtitles: 2–5 words, one line, and clearly below the homepage hero system. The public route source still used longer sentence-style `PageIntro` titles on About, Notes, Portfolio, and Store, so this pass made one narrow copy alignment without changing the broader page structure.

## Satisfaction state

Partially satisfied.

The title copy now satisfies the short supportive subtitle bound. A later visual pass may still tune the shared `.page-hero h1` scale and weight if live validation shows the subtitles remain too hero-like visually.

## Related items

- PAGE-002
- PAGE-003
- PAGE-003B
- PAGE-004
- PAGE-005
- DESIGN-006
- DESIGN-023
- LESSON-023
- METRIC-022
