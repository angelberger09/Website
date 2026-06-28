# Root Paper Budget Load Matrix

| Field | Value |
|---|---|
| Change | Root paper budget load |
| Public source | `app/layout.jsx`, `app/root-paper-budget-pass.css` |
| Route scope | Shared Website environment across all rendered routes |
| Satisfaction state | Partially satisfied → refined |
| Internal mismatch | `METRIC-026` and `METRIC-027` described `app/root-paper-budget-pass.css` as the cheap visible root-paper layer, but the layout import stack did not load the file. |
| External correction | The app now imports the budget pass after `app/root-paper-pass.css`, and the stylesheet strengthens body-level paper grain, crease, and pressure cues without adding content. |
| Public safety | Uses only existing public CSS variables and atmosphere textures; no private context, fake photos, fake products, fake posts, or raw logs. |

## Affected IDs

- COMP-005 — Shared Site Chrome
- DESIGN-019 — Paper Material Authenticity
- DESIGN-027 — Grainy Root Paper
- DESIGN-028 — Crinkled Paper Material
- LESSON-019 — Make paper material feel primary
- METRIC-018 — Paper Material Reads First
- METRIC-026 — Root Reads As Grainy Paper
- METRIC-027 — Paper Feels Crinkled

## Validation guidance

After deploy, review the homepage and one inner route at screenshot scale. The page background should read as a quiet sheet of handled paper before any card-level surfaces appear, while text areas remain calm and readable.
