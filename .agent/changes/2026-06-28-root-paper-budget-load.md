# 2026-06-28 — Root paper budget load

## Summary

Loaded and strengthened the existing root paper budget pass so the shared Website environment visibly carries grain, soft creases, pressure variation, and handled-paper atmosphere before visitors focus on individual route cards.

## Why

The project memory and quality metrics already expected `app/root-paper-budget-pass.css` to support DESIGN-027 / DESIGN-028 and METRIC-026 / METRIC-027, but `app/layout.jsx` did not load that file. That left the root paper environment only partially satisfied and made the budget pass effectively invisible.

## Changed public source

- `app/layout.jsx`
- `app/root-paper-budget-pass.css`

## Public-safe implementation notes

- Added the root paper budget stylesheet to the app-level import stack immediately after `app/root-paper-pass.css`.
- Strengthened cheap body-level grain, dust, crease, and pressure layers with CSS gradients and existing public atmosphere variables.
- Kept the pass global, route-agnostic, and public-safe; it adds no fake content, products, posts, photos, private details, or external claims.
- Preserved mobile readability by reducing overlay opacity and texture density on small screens.

## Satisfaction check

Partially satisfied → refined. The root environment already had a paper-material pass and an existing budget CSS file, but the budget file was not loaded and its tactile cues were weaker than the current metrics described.

## Affected semantic items

- COMP-005
- DESIGN-019
- DESIGN-027
- DESIGN-028
- LESSON-019
- METRIC-018
- METRIC-026
- METRIC-027
