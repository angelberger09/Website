# 2026-06-27 — Late paper surface budget

## Satisfaction state

Partially satisfied → refined.

## In-bounds mismatch

The existing final paper surface budget no longer loaded last. Newer route-specific docket and room passes for About, Notes, Portfolio, Store, and the homepage were imported after `app/final-paper-surface-budget-pass.css`, so the newest surfaces could bypass the shared calm render budget with deeper shadows, repeated filters, rotation stacks, and extra pseudo-layer noise.

## Visible Website change

Added `app/late-paper-surface-budget-pass.css` and loaded it last in `app/layout.jsx`. The pass keeps the newest paper/docket sections visibly handmade while calming repeated shadows, disabling unnecessary filters, normalizing late paper faces, adding `content-visibility` containment to large late surfaces, and removing decorative transforms on small screens and reduced-motion contexts.

## Public source files changed

- `app/late-paper-surface-budget-pass.css`
- `app/layout.jsx`

## Agent files changed

- `.agent/changes/2026-06-27-late-paper-surface-budget.md`
- `.agent/matrices/late-paper-surface-budget.matrix.md`

## Affected semantic items

- PAGE-001
- PAGE-002
- PAGE-003
- PAGE-003A
- PAGE-003B
- PAGE-004
- PAGE-005
- COMP-005
- COMP-008
- DESIGN-019
- DESIGN-021
- DESIGN-022
- DESIGN-024
- DESIGN-027
- DESIGN-028
- DESIGN-029
- DESIGN-030
- DESIGN-031
- LESSON-006
- LESSON-019
- LESSON-021
- LESSON-022
- LESSON-024
- LESSON-025
- LESSON-026
- METRIC-007
- METRIC-018
- METRIC-020
- METRIC-021
- METRIC-023
- METRIC-026
- METRIC-027
- METRIC-028
- METRIC-029
- METRIC-030
- METRIC-032

## Boundary notes

No copy, routes, data contracts, product claims, project records, note content, or private material changed. The pass only refines the rendered material layer and performance behavior of already-supported public Website surfaces.
