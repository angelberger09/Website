# Notes State Late Terminal Budget Matrix

## Item

- ID: NOTES-STATE-LATE-TERMINAL-BUDGET-2026-06-27
- Type: implementation bridge / visual budget pass
- Status: active
- Location: `app/notes-state-late-terminal-budget-pass.css`, `app/layout.jsx`

## Source-of-truth basis

- `.agent/feedback/feedback-log.md`: paper material, paper-piece card, flat hierarchy, snippet, and photo-surface feedback.
- `.agent/lessons/active-lessons.md`: visible implementation should be complete enough to satisfy validated in-bounds work, while keeping pages calm and room-like.
- `.agent/matrices/semantic-index.md`: Notes and Blog compatibility routes share PAGE-003 / PAGE-003B, COMP-006, COMP-008, and the paper-material metrics.
- `.agent/changes/change-log.md`: previous Notes state terminal budget existed, but late direct-cue and intro-docket files now loaded afterward.

## Mismatch classification

- Satisfaction state: partially satisfied.
- Underlying goal: keep the Notes reader-state board readable, tactile, and calm after every visible layer is loaded.
- Boundary: do not change Notes copy, invent post data, remove state behavior, or break reduced-motion/mobile fallbacks.
- Quality metric: the final rendered cue slips and intro docket should read as calm paper surfaces, not a heavier late override outside the terminal budget.

## Affected semantic IDs

- PAGE-003
- PAGE-003B
- COMP-006
- COMP-008
- DESIGN-019
- DESIGN-022
- DESIGN-024
- DESIGN-028
- DESIGN-029
- DESIGN-030
- LESSON-002
- LESSON-018
- LESSON-019
- LESSON-022
- LESSON-024
- LESSON-025
- METRIC-002
- METRIC-018
- METRIC-021
- METRIC-023
- METRIC-027
- METRIC-028
- METRIC-029
- METRIC-030

## Visible implementation

- Added a new final CSS layer after the late Notes state direct-cue and intro-docket passes.
- Reduced cue-slip and intro-docket shadow weight.
- Simplified late texture stacks.
- Reduced rotations and reset them for mobile and reduced-motion users.
- Preserved the source-backed `notes-state-note__cue` labels and existing reader-state content.
