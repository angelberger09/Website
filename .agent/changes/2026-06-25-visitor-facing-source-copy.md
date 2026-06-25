# Visitor-facing source copy refinement

Timestamp: 2026-06-25 07:51 ET

## Intent

Make another visible copy pass where the Website was still exposing implementation-first source language to visitors.

## Satisfaction state

Partially satisfied.

The active copy metrics were already improved, but the rendered Homepage, Notes, Portfolio future-feed ledger, and Store future-feed ledger still had terms that leaned technical or backstage: source spaces, public source, behind-the-scenes list, backend structure, raw URLs, slug, status, summary, source, and delivery as raw field names.

## Website source changed

- `app/page.jsx`
- `app/site-data.js`
- `app/source-readiness.js`
- `app/notes/NotesPageClient.jsx`
- `app/portfolio-feed-contract.js`
- `app/store-readiness.js`

## Visible change

The public interface now uses softer visitor-facing terms:

- source spaces -> back rooms / quiet shelves
- source rhythm -> back-room rhythm
- small doors, not raw systems -> small doors, not machinery
- backend structure -> backstage structure
- public source -> public shelf / writing shelf / public path
- raw URLs -> replaced in visible reader-state copy
- slug/title/status/summary/source-style ledger labels -> public id, project name, public state, short note, studio role, preview place, public path
- Store raw field labels -> public id, piece name, availability, short note, preview place, delivery note

## Why

The Website should keep its source contracts honest without asking visitors to think in implementation terms. The visible layer should feel like studio rooms, shelves, public paths, readiness states, and calm visitor cards.

## Agent records changed

- `.agent/memory.md`
- `.agent/matrices/pages.matrix.md`
- `.agent/matrices/content-sources.matrix.md`
- `.agent/matrices/quality-metrics.matrix.md`
- `.agent/changes/change-log.md`
- `.agent/changes/2026-06-25-visitor-facing-source-copy.md`

## Related items

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

## Future rule

When public pages need to explain connected data or future source contracts, keep the durable data shape underneath but translate visible labels into studio-language terms before rendering them to visitors.
