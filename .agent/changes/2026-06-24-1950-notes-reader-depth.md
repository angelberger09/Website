# 2026-06-24 19:50 ET — Notes reader depth pass

## Changed

- Upgraded `app/notes/NotesPageClient.jsx` so the notes index filters public posts, sorts them newest-first, gives the latest note a clearer starting point, and describes the public source in visitor-facing language.
- Upgraded `app/notes/post/PostReaderClient.jsx` so individual notes have a complete reader room: intro card, missing-slug state, loading state, unavailable-source state, public-status guard, support cards, and a continuity band back into the Notes path.
- Updated the pages matrix, components matrix, and relationship map so future runs know the reader routes are no longer the thinnest page-fill area.

## Why

The top-level pages and page-to-page continuity were already filled. The next highest-utility move was to strengthen the active Notes reader routes because they are public-facing, connected to the Blog source, and need to feel like complete Website rooms rather than thin data renderers.

## Related items

- PAGE-003
- PAGE-003A
- PAGE-003B
- COMP-006
- COMP-007
- COMP-009
- DATA-003
- DATA-005
- LESSON-002
- LESSON-004
- LESSON-018
- LESSON-022
- METRIC-002
- METRIC-017
- METRIC-021

## Next board signal

Verify the live Blog feed shape against the reader states, then choose between visual paper-card styling, Portfolio data readiness, or Store data readiness for the next focused run.
