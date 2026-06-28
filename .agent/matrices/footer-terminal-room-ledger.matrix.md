# Footer Terminal Room Ledger Matrix

## Target

Shared footer / lower site chrome on every Website route.

## Satisfaction classification

Partially satisfied before this run.

The footer already had a paper mark, four exit receipts, current-room slips, and a direct nav trail. The remaining mismatch was that the footer could still read as neighboring receipt shelves rather than one calm bound room ledger.

## Visible implementation

- `app/footer-terminal-room-ledger-pass.css` adds the final ledger layer.
- `app/layout.jsx` loads the pass after `footer-exit-desk-consolidation-pass.css`.
- The pass strengthens the shared backing sheet, label slip, thread cue, receipt shadows, and footer nav tray while preserving existing copy, links, focusable anchors, and mobile/reduced-motion fallbacks.

## Quality metrics

| Metric | Application |
|---|---|
| METRIC-017 | Footer keeps every major room connected with clear exit routes. |
| METRIC-018 | Footer reads as paper/collage before generic chrome. |
| METRIC-021 | Footer receipts and trail links avoid smooth UI-card treatment. |
| METRIC-023 | Footer backing and slips use cut/torn silhouettes. |
| METRIC-027 | Footer paper has handled grain and pressure variation. |
| METRIC-028 | Footer hierarchy is flattened into one editorial ledger instead of nested shelves. |
| METRIC-029 | Footer labels read as clipped paper snippets. |

## Related semantic IDs

- PAGE-001
- PAGE-002
- PAGE-003
- PAGE-003A
- PAGE-003B
- PAGE-004
- PAGE-005
- COMP-002
- COMP-005
- COMP-009
- DESIGN-015
- DESIGN-018
- DESIGN-019
- DESIGN-022
- DESIGN-024
- DESIGN-028
- DESIGN-029
- DESIGN-030
- LESSON-002
- LESSON-004
- LESSON-018
- LESSON-019
- LESSON-022
- LESSON-024
- LESSON-025

## Boundary notes

No new routes, fake products, fake posts, fake portfolio work, fake photos, private content, or navigation behavior changes were introduced. The pass is CSS-only plus import wiring and keeps the existing public-safe footer data from `app/site-chrome.jsx`.
