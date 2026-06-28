# 2026-06-28 — Homepage house rules terminal budget load

## Satisfaction state

Partially satisfied → refined.

## Interface mismatch

The homepage `House rules` terminal budget stylesheet existed as `app/home-house-rules-terminal-budget-pass.css`, but `app/layout.jsx` did not import it. The rendered homepage therefore bypassed the existing public studio pledge seal, pledge path thread, backing sheet, and mobile/reduced-motion refinements.

## Visible Website change

`app/layout.jsx` now imports `app/home-house-rules-terminal-budget-pass.css` immediately after `home-check-photo-pass.css`, so the homepage `House rules` rail should visibly render as one calmer bound studio promise board instead of only the earlier tall photo-card treatment.

## Files changed

- `app/layout.jsx`
- `.agent/changes/change-log.md`
- `.agent/changes/2026-06-28-home-house-rules-terminal-budget-load.md`
- `.agent/matrices/home-house-rules-terminal-budget-load.matrix.md`

## Public-safety notes

No new public copy, fake work, fake products, private content, or unavailable assets were introduced. This pass only loads an existing public-safe stylesheet that was already present in the Website repo.

## Related IDs

- PAGE-001
- COMP-004
- COMP-008
- DESIGN-019
- DESIGN-022
- DESIGN-024
- DESIGN-028
- DESIGN-029
- DESIGN-030
- DESIGN-031
- LESSON-001
- LESSON-002
- LESSON-018
- LESSON-019
- LESSON-021
- LESSON-022
- LESSON-024
- LESSON-025
- LESSON-026
- METRIC-001
- METRIC-002
- METRIC-018
- METRIC-020
- METRIC-021
- METRIC-023
- METRIC-027
- METRIC-028
- METRIC-029
- METRIC-030
- METRIC-032
