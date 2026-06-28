# 2026-06-27 — Store feed boundary rule slips

## Changed

- Updated `app/store/page.jsx` so the Store future shelf rules render as source-backed `store-feed-rule-slip` articles instead of anonymous list items.
- Added `storeFeedRuleLabels` so the rule slips have direct visible labels: `Public facts only`, `Plans stay offstage`, and `Honest card`.
- Added `app/store-feed-boundary-rule-slips-pass.css` and loaded it from `app/layout.jsx` after the existing Store feed shelf docket styling.

## Why

The Store future feed docket already had a paper board and styled boundary area, but the rule text was still mapped as plain list rows. This left the visible boundary partially satisfied: it looked papery, but the labels were not durable source-backed UI. This pass keeps the same public-safe Store rules while making them into rendered paper rule slips with explicit labels.

## Satisfaction check

- Target state: Store feed rules should behave like placed paper snippets, not generic UI/list rows.
- Satisfaction state before: partially satisfied.
- Satisfaction state after: more satisfied; rule slips are now source-backed, labeled, and visibly paper-like.

## Related items

- PAGE-005
- COMP-008
- DESIGN-015
- DESIGN-019
- DESIGN-022
- DESIGN-024
- DESIGN-029
- DESIGN-030
- LESSON-002
- LESSON-004
- LESSON-015
- LESSON-019
- LESSON-022
- LESSON-024
- METRIC-002
- METRIC-014
- METRIC-018
- METRIC-021
- METRIC-023
- METRIC-028
- METRIC-029
