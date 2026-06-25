# Shelf language refinement

Timestamp: 2026-06-25 09:51 ET

## Intent

Make the rendered Website copy more visitor-facing where Notes, Portfolio, and Store still exposed implementation-shaped language.

## Interface mismatch

The active source/copy rules were only partially satisfied. Notes, Portfolio, and Store had already moved away from raw endpoint language, but some visible sections still used words such as source readiness, feed, repo, contract, data handoff, source rhythm, and source data.

That contradicted the current copy direction: the Website can keep truthful connected-source structure underneath while presenting it to visitors as writing shelves, archive shelves, public paths, card parts, and readiness notes.

## Website source changed

- `app/notes/NotesPageClient.jsx`
- `app/portfolio/page.jsx`
- `app/store/page.jsx`
- `app/store-readiness.js`

## Visible changes

- Notes now labels the source/readiness section as a writing shelf map and says every note has a clear public shape.
- Notes source stamping now says public writing shelf or quiet backup shelf.
- Portfolio gallery and lane copy replaces source rhythm/source fields/source data language with public rhythm, card parts, and shelf details.
- Store future-feed section now reads as future shelf shape and calm public card parts instead of a repo/feed/contract/data handoff.
- Store card-part labels now use public handle instead of public id.

## Agent state changed

- `.agent/matrices/content-sources.matrix.md`
- `.agent/changes/2026-06-25-shelf-language-refinement.md`

## Related items

- PAGE-003
- PAGE-003B
- PAGE-004
- PAGE-005
- COMP-006
- COMP-008
- DATA-008
- DATA-009
- DATA-010
- DESIGN-006
- LESSON-002
- LESSON-018
- METRIC-002
- METRIC-016

## Future rule

Keep the public data contracts true in source and `.agent`, but translate their visible Website labels into studio shelf, public path, and calm card-part language whenever the audience is a visitor rather than a developer.
