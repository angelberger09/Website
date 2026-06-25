# Process matrix note — bounds-driven flood prompting

Timestamp: 2026-06-24 23:41 ET

## Semantic item

PROC-002 — Bounds-Driven Flood Prompting

## Purpose

Keep recurring feedback-alignment runs cautious about project boundaries but not timid inside validated in-bounds work.

## Related lesson

LESSON-025 — Apply caution at the boundary, not inside validated work

## Related metric

METRIC-024 — Boundary-Cautious, In-Bounds Complete

## Rule

A run should first define the allowed surface: current `.agent` support, public-safety constraints, repository scope, relevant page/component/process/metric, accessibility, and anti-churn limits.

If the proposed work is outside that surface, stop or record clarification.

If the work is inside that surface and the target is unsatisfied or partially satisfied, implement the correction strongly enough across that bounded surface that it is not merely symbolic.

## Avoid

- Treating `one narrow move` as `one tiny CSS/property/text touch` when the bounded target requires all affected selectors, states, or files in that surface.
- Repeating old specifics after the deeper goal is satisfied.
- Using caution as a reason to leave a confirmed active mismatch barely changed.
