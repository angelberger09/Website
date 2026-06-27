# Final Paper Surface Budget Matrix

| ID | Type | Location | Purpose | Visible Rule | Related Lessons | Related Metrics | Status |
|---|---|---|---|---|---|---|---|
| PERF-004 | CSS guardrail | `app/final-paper-surface-budget-pass.css`, loaded last from `app/layout.jsx` | Keep late-added paper/photo refinements from bypassing the shared render budget | Late PageIntro, DetailCard, homepage path, and footer receipt paper pieces keep cut-paper silhouettes and paper texture, but avoid repeated filters, transforms, deep pseudo-layer stacks, and excessive shadow work | LESSON-019, LESSON-022, LESSON-024 | METRIC-007, METRIC-018, METRIC-021, METRIC-023, METRIC-026, METRIC-027, METRIC-028 | active |

## Notes

- This matrix exists because the original `performance-budget-pass.css` must preserve the root paper budget relationship, while newer visual passes still need a final shared guardrail.
- The pass is intentionally CSS-only and public-safe: it changes surface treatment, not content, route data, products, posts, portfolio claims, or private material.
- Future visual passes loaded after this file should either move before it or explicitly explain why they need to override the final budget.
