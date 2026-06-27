# Store source direct cue labels

Timestamp: 2026-06-26 20:41 ET

## Interface change

The Store page now renders direct paper/photo cue labels from the JSX source instead of relying on numbered cue text hidden behind CSS pseudo-labels.

## Why

Current direct-label, paper-snippet, content-bearing paper/photo, and honest Store readiness guidance calls for visible source markup to match the intended interface. The previous Store surfaces were visually nudged by CSS, but several source elements still emitted ordinal labels such as numbered lane markers, checklist pins, gallery markers, availability stages, and feed tabs.

## Files changed

- `app/store/page.jsx`
- `app/store-direct-cue-content-pass.css`
- `app/layout.jsx`

## Related items

- PAGE-005
- COMP-008
- DESIGN-006
- DESIGN-015
- DESIGN-019
- DESIGN-021
- DESIGN-022
- DESIGN-030
- DESIGN-031
- DESIGN-032
- LESSON-002
- LESSON-004
- LESSON-015
- LESSON-018
- LESSON-019
- LESSON-021
- LESSON-022
- LESSON-025
- METRIC-002
- METRIC-014
- METRIC-017
- METRIC-018
- METRIC-020
- METRIC-021
- METRIC-029
- METRIC-030
- METRIC-031

## Safety boundary

No product listings, prices, inventory, fake product images, or external shop links were added. The labels remain preparatory and route-safe: download shelf, coloring shelf, creature shelf, preview rule, launch rule, readiness, and delivery cues.
