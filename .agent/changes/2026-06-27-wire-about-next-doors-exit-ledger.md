# Wire About next doors exit ledger

Timestamp: 2026-06-27 20:20 ET

## Satisfaction state

Partially satisfied.

## In-bounds mismatch

The About next-door exit ledger CSS existed and was documented as loaded, but `app/layout.jsx` did not import `app/about-next-doors-exit-ledger-pass.css`. Because the pass was outside the rendered bundle, the final About `Where to go next` section could not receive the visible `exit ledger` slip, route-ledger edge, connector tuning, or tighter next-room card rhythm.

## Visible Website change

- Updated `app/layout.jsx` to import `app/about-next-doors-exit-ledger-pass.css` directly after `app/about-pathway-door-compass-pass.css`.
- This wires the existing route-specific visual refinement into `/Website/about/` without changing copy, routes, data, or inventing new content.

## Boundary

The correction stays inside the Website repository, preserves public-safe About copy and existing route targets, and only makes a documented source-backed visual pass render.

## Affected IDs

- PAGE-002
- COMP-008
- COMP-009
- DESIGN-018
- DESIGN-019
- DESIGN-022
- DESIGN-024
- DESIGN-028
- DESIGN-029
- DESIGN-030
- DESIGN-031
- LESSON-002
- LESSON-018
- LESSON-019
- LESSON-022
- LESSON-024
- LESSON-025
- LESSON-026
- METRIC-002
- METRIC-017
- METRIC-018
- METRIC-021
- METRIC-023
- METRIC-025
- METRIC-028
- METRIC-029
- METRIC-030
- METRIC-032

## Validation note

The rendered About page should now visibly apply the documented final next-door exit ledger styling. The proof is the presence of the `exit ledger` heading slip and more unified paper handoff treatment in the About final pathway section.
