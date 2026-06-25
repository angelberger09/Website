# Root paper budget pass

Timestamp: 2026-06-25 11:11 ET

## Intent

Make the Website environment read more like grainy, lightly handled paper while preserving the performance budget.

## Mismatch

`app/root-paper-pass.css` added root-level crease and pressure cues, but the final `app/performance-budget-pass.css` disables `body::before` as part of removing expensive fixed overlays. That meant the active root paper metric was only partially satisfied after the performance cleanup: the page retained some grain, but the handled-paper environmental layer was weakened.

## Website source changed

- `app/root-paper-budget-pass.css`
- `app/layout.jsx`

## What changed visibly

Added a final lightweight CSS pass, imported after the performance budget, that gives the `body` background visible grain, dust, and soft crease/pressure gradients directly through background layers.

This keeps the root paper feel visible across the rendered Website without restoring fixed full-screen overlays, blend modes on large pseudo-elements, filters, or animated layers.

## Why this is in bounds

The active `.agent` state says the root environment should read as grainy paper and paper surfaces should feel lightly crinkled. This change improves those visible qualities while respecting the newer render budget.

## Related items

- DESIGN-019 Paper Material Authenticity
- DESIGN-027 Grainy Root Paper
- DESIGN-028 Crinkled Paper Material
- LESSON-019 Make paper material feel primary
- METRIC-018 Paper Material Reads First
- METRIC-026 Root Reads As Grainy Paper
- METRIC-027 Paper Feels Crinkled

## Follow-up

Deployed visual review should confirm that the background reads as paper at screenshot scale without adding text noise or scroll jank.
