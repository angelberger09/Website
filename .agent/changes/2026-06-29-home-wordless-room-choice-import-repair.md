# Homepage wordless room-choice import repair

Timestamp: 2026-06-29 00:38 ET

## Source-of-truth check

Read the required feedback-alignment source files, active lessons, semantic index, homepage hero matrix, latest change records, and current `app/layout.jsx` import graph before making the repair.

## Workflow packet precheck

Checked `.agent/feedback/workflow-packets/` through its README and repository search. No unresolved workflow packet was found; only the folder guidance was present.

## Satisfaction state

Partially satisfied.

The homepage hero matrix already recorded `app/home-hero-wordless-entry-pass.css` and `app/home-room-choice-left-depth-pass.css` as active public source files for the compact wordless room-choice entry board. Both CSS files existed in `app/`, but the current root layout did not import them, so the rendered Website could still miss the intended wordless/left-depth room-choice treatment.

## Website change

Loaded the existing homepage hero CSS passes from `app/layout.jsx`:

- `app/home-hero-wordless-entry-pass.css`
- `app/home-room-choice-left-depth-pass.css`

The imports are placed after the existing homepage path/terminal passes and before route-specific About/Portfolio/Store/Notes passes, so the first-screen homepage room-choice board can use the intended compact wordless layout, left binding gutter, stitched rail, and lifted paper depth.

## Public files changed

- `app/layout.jsx`

## Agent files changed

- `.agent/changes/change-log.md`
- `.agent/changes/2026-06-29-home-wordless-room-choice-import-repair.md`
- `.agent/matrices/home-hero-scale-guard.matrix.md`

## Affected IDs

- PAGE-001
- COMP-003
- COMP-004
- DESIGN-002
- DESIGN-014
- DESIGN-019
- DESIGN-021
- DESIGN-022
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
- LESSON-029
- LESSON-030
- LESSON-033
- LESSON-039
- METRIC-001
- METRIC-002
- METRIC-017
- METRIC-018
- METRIC-020
- METRIC-021
- METRIC-028
- METRIC-029
- METRIC-030
- METRIC-032
