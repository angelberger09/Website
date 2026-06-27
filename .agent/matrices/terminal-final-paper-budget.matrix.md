# Terminal Final Paper Budget Matrix

| Field | Value |
|---|---|
| ID | MATRIX-2026-06-27-TERMINAL-FINAL-PAPER-BUDGET |
| Type | implementation alignment matrix |
| Status | active |
| Public source | `app/final-paper-surface-budget-pass.css`, `app/layout.jsx` |
| Agent ledger | `.agent/changes/2026-06-27-terminal-final-paper-budget.md` |

## Target

Keep the existing final paper-surface budget terminal in the CSS import order so newly added room/path/footer refinements cannot bypass the calm material budget.

## Classification

- Satisfaction state before pass: partially satisfied
- Implementation type: visible refinement across a shared material/performance pattern
- Boundary: inside `angelberger09/Website`; no fake content, no route changes, no private context

## Affected semantic items

| ID | Relationship |
|---|---|
| PAGE-002 | About pathway cards receive the terminal budget again |
| COMP-005 | Shared site chrome keeps terminal material constraints |
| COMP-008 | Filled page sections stay inside the paper/collage system |
| COMP-009 | Footer continuity receipts stay bound into one calmer exit surface |
| DESIGN-018 | Visitor continuity remains visible but less card-fragmented |
| DESIGN-019 | Paper material remains primary after late visual passes |
| DESIGN-022 | Card-like surfaces stay paper pieces, not rounded UI cards |
| DESIGN-024 | Cut-paper silhouettes remain the dominant edge language |
| DESIGN-028 | Crinkled/handled paper remains subtle instead of noisy |
| DESIGN-029 | Hierarchy stays flatter and editorial |
| DESIGN-030 | Cue tickets and labels stay readable as paper snippets |
| LESSON-019 | Paper material reads first |
| LESSON-022 | Shared cards read as paper pieces |
| LESSON-024 | Torn-edge silhouettes replace rounded cards |
| METRIC-018 | Paper material reads first |
| METRIC-021 | Paper cards not UI cards |
| METRIC-023 | Torn-edge card silhouette |
| METRIC-027 | Paper feels crinkled without excessive noise |
| METRIC-028 | Hierarchy is flat and editorial |
| METRIC-029 | Text lives in paper snippets |
| METRIC-030 | Content uses photo/image surfaces without fake assets |
| METRIC-032 | Alternating/gallery surfaces stay calm under budget |

## Quality check

The rendered Website should visibly calm/unify the newest About pathway and footer exit paper pieces because `app/final-paper-surface-budget-pass.css` now loads after those passes and includes their selectors.
