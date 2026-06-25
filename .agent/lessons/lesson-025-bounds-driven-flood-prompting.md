# LESSON-025 — Apply caution at the boundary, not inside validated work

Timestamp: 2026-06-24 23:41 ET  
Context: Process feedback about flood prompting and visible implementation strength  
Status: active

## Lesson

The feedback-alignment harness should be boundary-cautious, not action-timid. It should protect public safety, source-of-truth validation, project scope, accessibility, and anti-churn rules at the edge of the work. Once a change is confirmed to be inside those bounds and supported by current `.agent` state, the implementation should be strong enough to satisfy the target visibly or materially.

## Future rule

When refining an unsatisfied or partially satisfied target, define the exact bounded surface area first. Then apply the correction across that whole surface area instead of making a symbolic one-line or overly cautious change. Stop because a change would leave the bounds, not because the in-bounds correction is visually or structurally bold.

## Quality check

A pass satisfies this lesson when it can name:

- the project boundary that allowed or blocked the work,
- the current `.agent` item supporting the work,
- the relevant page, component, pattern, interaction, process, or metric surface,
- and why the completed change is visibly or materially enough to resolve that chosen surface.
