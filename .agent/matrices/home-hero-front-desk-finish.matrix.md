# Homepage Hero Front Desk Finish Matrix

Timestamp: 2026-06-28 10:20 ET

## Target

Make the homepage hero behave like a calm front desk: visitors should see the studio name, a short welcome slip, the Open rooms card, and direct room choices together instead of experiencing the hero as oversized decorative display type.

## Classification

- Satisfaction state before pass: partially satisfied
- Satisfaction state after pass: refined but still requires deployed visual review
- Scope: PAGE-001 / COMP-003 / COMP-004
- Public-safety status: public-safe; no content, data, or private context changes
- Implementation boundary: Website source changed because this was an explicit implementation run

## Files changed

- `app/home-hero-front-desk-finish-pass.css`
- `app/layout.jsx`
- `.agent/changes/2026-06-28-home-hero-front-desk-finish.md`
- `.agent/matrices/home-hero-front-desk-finish.matrix.md`

## Source alignment

- `app/home-hero-ux-entry-board-pass.css` was discovered in `app/layout.jsx` during the concurrency re-read.
- This pass was layered after that newer supported work rather than replacing it.
- The final render budget remains loaded after this pass.

## Affected semantic items

| ID | Relationship |
|---|---|
| PAGE-001 | Homepage first-screen orientation and above-fold route entry |
| COMP-003 | Scroll title / hero lockup scale and grouping |
| COMP-004 | Homepage room choices and route-card entry path |
| COMP-008 | Filled page section system, because homepage entry governs room sequence |
| DESIGN-002 | Large editorial type restrained into a readable entry board |
| DESIGN-014 | Paper-list hero lockup tightened into a front-desk composition |
| DESIGN-018 | Visitor continuity starts earlier through visible room choices |
| DESIGN-019 | Paper material remains visible while hierarchy gets calmer |
| DESIGN-021 | Open rooms card remains content-bearing, not a decal |
| DESIGN-022 | Route slips read as paper pieces inside the first screen |
| DESIGN-028 | Paper remains lightly handled without new heavy filters |
| DESIGN-029 | Hero hierarchy flattens away from poster-first layout |
| DESIGN-030 | Kicker, note, and route labels become readable paper snippets |
| DESIGN-031 | Route choices remain image/photo-like content surfaces |

## Affected lessons and metrics

- LESSON-001, LESSON-002, LESSON-018, LESSON-019, LESSON-021, LESSON-022, LESSON-024, LESSON-025, LESSON-026
- METRIC-001, METRIC-002, METRIC-017, METRIC-018, METRIC-020, METRIC-021, METRIC-023, METRIC-027, METRIC-028, METRIC-029, METRIC-030, METRIC-032

## Check

Review `/Website/` at normal laptop size. The first screen should feel shorter, calmer, and more front-desk-like: studio label, title, welcome slip, route choices, and Open rooms card should scan as one composed entry board.
