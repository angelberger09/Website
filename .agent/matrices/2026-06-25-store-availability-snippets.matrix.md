# Store availability snippet matrix note

Date: 2026-06-25

## Scope

This matrix note records the narrow implementation bridge from active Store visual feedback into the current Website source.

## Relationship map

| Item | Relationship |
| --- | --- |
| PAGE-005 Store | Receives a targeted availability-state visual refinement. |
| COMP-008 Filled Page Sections | Gains a Store-specific variant for staged availability content. |
| DESIGN-024 Torn-Edge Card Silhouettes | Extended from generic card surfaces into staggered Store paper snippets. |
| LESSON-024 | Applied to `store-state-snippet` surfaces without adding unrelated page changes. |
| METRIC-023 | Used as the quality target: the availability states should read as cut paper snippets, not rounded or repeated UI rows. |

## Implementation paths

- `app/store/page.jsx`
- `app/paper-card-pass.css`

## Boundary

This pass only changes the availability-state presentation. It does not change Store copy, product data, feed contracts, checkout behavior, or public inventory state.
