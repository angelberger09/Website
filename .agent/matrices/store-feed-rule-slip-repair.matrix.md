# Store Feed Rule Slip Repair Matrix

Timestamp: 2026-06-28 13:21 ET

## Purpose

Track the bounded Store feed-rule repair that makes rendered rule slips receive the intended paper-piece styling.

## Source mismatch

| Item | Observed state | Repair |
|---|---|---|
| Store feed rules | `app/store/page.jsx` renders rules as `article.store-feed-rule-slip` | `app/store-feed-rule-slip-repair-pass.css` targets `.store-feed-rule-slip` directly |
| Existing paper contract | `app/store-feed-contract-pass.css` styled `.store-feed-rule-tape li` descendants | New pass preserves the existing contract while matching the rendered markup |
| Mobile state | Existing mobile reset targeted `li` rule items | New pass resets `.store-feed-rule-slip` transforms on small screens |

## Affected IDs

| ID | Relationship |
|---|---|
| PAGE-005 | Store page future shelf section becomes visibly more complete |
| COMP-008 | Filled page section repair for Store feed contract support surface |
| DATA-008 | Store feed contract rules stay public-safe and honest |
| DESIGN-019 | Paper material authenticity applied to the rule slips |
| DESIGN-022 | Rule slips read as paper pieces instead of plain content blocks |
| DESIGN-024 | Torn/cut silhouettes apply to the rendered rule elements |
| DESIGN-028 | Grain/scratch texture gives handled-paper feel |
| DESIGN-029 | Store hierarchy remains flattened into editorial paper pieces |
| DESIGN-030 | Rule labels sit in smaller clipped paper snippets |
| METRIC-018 | Paper material reads first |
| METRIC-021 | Cards/slips do not read as generic UI cards |
| METRIC-023 | Torn-edge silhouettes are visible |
| METRIC-027 | Paper feels lightly handled |
| METRIC-028 | Hierarchy is flat and editorial |
| METRIC-029 | Text lives in paper snippets |

## Validation note

The repair is a selector/markup alignment fix. The target was partially satisfied before because the JSX already carried semantic rule-slip classes, but the existing CSS targeted a different child element type.
