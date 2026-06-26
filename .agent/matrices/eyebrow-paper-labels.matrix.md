# Eyebrow Paper Labels Matrix

| ID | Type | Location | Purpose | Status |
|---|---|---|---|---|
| DESIGN-030 | Design Pattern | `app/eyebrow-paper-label-pass.css` | Extends text paper snippets to shared `.eyebrow` labels so supporting metadata reads as placed clipped paper rather than plain UI text. | partially satisfied |
| COMP-005 | Component | `app/layout.jsx`, shared route chrome | Loads the shared label pass after detail/status paper passes so the treatment affects shared page and section labels. | active |
| COMP-008 | Component | route section markup using `.eyebrow` | Makes filled-page section labels feel more like room notes without changing copy or inventing content. | active |
| METRIC-029 | Metric | shared `.eyebrow` labels | Checks whether supporting labels are visible paper snippets with readable text, cut-paper shape, and no noisy texture. | partially satisfied |

## Notes

This is a shared visual refinement. It should be validated in the deployed Website across homepage, About, Notes, Portfolio, Store, and Notes post pages before adding more route-specific label patches.
