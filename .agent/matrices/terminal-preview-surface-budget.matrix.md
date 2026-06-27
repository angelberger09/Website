# Terminal Preview Surface Budget Matrix

| Field | Value |
|---|---|
| ID | TERMINAL-PREVIEW-SURFACE-BUDGET-001 |
| Status | active |
| Date | 2026-06-27 |
| Public source | `app/terminal-preview-surface-budget-pass.css`, `app/layout.jsx` |
| Agent ledger | `.agent/changes/2026-06-27-terminal-preview-surface-budget.md` |
| Primary page | PAGE-005 Store |
| Components | COMP-005 Shared Site Chrome, COMP-008 Filled Page Sections |
| Design patterns | DESIGN-019, DESIGN-022, DESIGN-024, DESIGN-027, DESIGN-028, DESIGN-029, DESIGN-030, DESIGN-031, DESIGN-032 |
| Lessons | LESSON-019, LESSON-022, LESSON-024, LESSON-025, LESSON-026 |
| Metrics | METRIC-018, METRIC-021, METRIC-023, METRIC-026, METRIC-027, METRIC-028, METRIC-029, METRIC-030, METRIC-031, METRIC-032 |

## Goal

Keep the newest Store preview/proof rail aligned with the existing paper-surface performance budget after later CSS imports are added.

## Boundary

This pass may only adjust existing paper/photo Store preview surfaces, shadows, filters, pseudo-layer noise, content visibility, reduced-motion behavior, and mobile transform fallback. It must not change Store copy, data contracts, inventory states, routes, source links, or create fake product imagery.

## Quality check

- The terminal budget import stays last among Store preview refinements.
- Store preview cards still read as paper/photo pieces, not generic UI panels.
- Store proof labels remain readable.
- Heavy filters and repeated pseudo-layer effects do not return after the late budget pass.
- Reduced-motion users do not receive extra transforms.
- Mobile layouts avoid unnecessary rotations on repeated Store cards.

## Satisfaction

Partially satisfied before this pass because `late-paper-surface-budget-pass.css` no longer loaded last. Refined by adding a terminal pass after `store-preview-proof-rail-pass.css` and applying the budget directly to Store preview/gallery/readiness surfaces.
