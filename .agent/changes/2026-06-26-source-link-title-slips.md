# 2026-06-26 — Source-link title slips

## Interface change

- Extended the already-loaded `app/final-paper-surface-budget-pass.css` so `.source-link span` labels render as clipped paper title slips instead of plain text.
- Kept the treatment lightweight: no filters, no motion dependency, no new content, and no new route/data claims.
- Removed an unloaded draft CSS file from the same pass so the rendered source of truth stays consolidated in the loaded final paper budget.

## Why

The shared `source-link` cards already had paper-card shells, metadata snippets, and reader/source fallback scraps, but their main title text still fell back to plain UI text. Current paper-material, torn-edge, and text-snippet lessons support making that primary source label part of the placed paper system.

## Satisfaction state

Partially satisfied. This corrects one remaining shared fallback pattern without touching already-satisfied route-specific boards.

## Related items

- COMP-005
- COMP-006
- COMP-008
- DESIGN-019
- DESIGN-022
- DESIGN-024
- DESIGN-030
- LESSON-019
- LESSON-022
- LESSON-024
- METRIC-018
- METRIC-021
- METRIC-023
- METRIC-029
