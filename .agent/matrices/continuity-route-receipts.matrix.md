# Continuity Route Receipts Matrix

Timestamp: 2026-06-28 20:50 ET
Status: active

## Semantic mapping

| ID | Type | Item | Location | Role | Status |
|---|---|---|---|---|---|
| COMP-009 | Component | Next Step Band | `app/next-step-band.jsx`, `app/continuity-route-receipts-pass.css` | Shared page-to-page continuity surface now includes route receipts inside the map pocket using existing step data. | refined |
| DESIGN-018 | Design pattern | Visitor Continuity Bands | `app/next-step-band.jsx` | Keeps major rooms connected after each page section. | reinforced |
| DESIGN-019 | Design pattern | Paper Material Authenticity | `app/continuity-route-receipts-pass.css` | Adds grain, clipped edges, and receipt shadows to the continuity map. | reinforced |
| DESIGN-021 | Design pattern | Content-Bearing Polaroid Cards | `app/next-step-band.jsx` | Turns the map badge into a small data-bearing visual surface. | reinforced |
| DESIGN-022 | Design pattern | Paper Piece Card Surfaces | `app/continuity-route-receipts-pass.css` | Makes the continuity map read as a placed paper pocket rather than a generic label. | reinforced |
| DESIGN-024 | Design pattern | Torn Edge Card Silhouettes | `app/continuity-route-receipts-pass.css` | Uses uneven receipt silhouettes and staggered slips. | reinforced |

## Satisfaction check

- Previous state: partially satisfied; the continuity cards were papery, but the map badge was still a generic surface.
- New state: refined; the map now carries route receipt snippets derived from the actual next-step data.

## Metrics touched

- METRIC-017: Visitor continuity stays visible after page content.
- METRIC-018: Paper material remains visible on shared components.
- METRIC-020: Polaroid/photo centers and related visual panels carry meaningful content.
- METRIC-021: Shared surfaces move away from generic rounded-card language.
- METRIC-023: Cut/torn edge treatment remains readable.
- METRIC-028: Nested app-panel hierarchy is reduced through paper placement.
- METRIC-029: Text snippets appear as small notes/receipts where appropriate.
- METRIC-030: Image-like or map-like surfaces carry content structure without inventing fake assets.
