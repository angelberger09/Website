# Portfolio Public Name Shelf Matrix

## Scope

Tracks the 2026-06-29 pass that softened the Portfolio project manifest into a public-name shelf.

| Item | Type | Location | Change | Related IDs |
|---|---|---|---|---|
| Portfolio project manifest labels | data/content source | `app/portfolio-projects.js` | Changed repeated visible state labels from `named shell` to `public name` and rewrote manifest rules as human-facing public shelf guidance. | PAGE-004, DATA-011, DESIGN-006, LESSON-002, LESSON-038, METRIC-002 |
| Portfolio public-name shelf styling | design pattern | `app/portfolio-public-name-shelf-pass.css` | Relabels the manifest board as `public name shelf`, strengthens label slips, and adds an honest shelf-note before manifest rules. | COMP-008, DESIGN-019, DESIGN-021, DESIGN-022, METRIC-018, METRIC-020, METRIC-021, METRIC-029 |
| Layout CSS load | app shell | `app/layout.jsx` | Loads the public-name shelf pass directly after the Portfolio manifest pass so it refines the same surface instead of creating a disconnected style system. | COMP-005, PAGE-004 |

## Satisfaction state

Partially satisfied. The Portfolio shelf was already present and content-bearing; this pass reduces internal implementation language and makes the same visible surface read more like a calm public archive room.
