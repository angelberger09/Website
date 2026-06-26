# Footer calm exit shelf

Date: 2026-06-26 11:49 ET

## Source-of-truth read

- `agent.md`
- `start-here.md`
- `.agent/start-here.md`
- `.agent/memory.md`
- `.agent/feedback/state-alignment.md`
- `.agent/feedback/README.md`
- `.agent/feedback/live-website-validation.md`
- `.agent/feedback/intake-protocol.md`
- `.agent/feedback/extraction-rubric.md`
- `.agent/feedback/feedback-to-lesson-workflow.md`
- `.agent/feedback/feedback-log.md`
- `.agent/feedback/feedback-inbox.md`
- `.agent/lessons/active-lessons.md`
- `.agent/lessons/lesson-log.md`
- `.agent/matrices/semantic-index.md`
- `.agent/matrices/components.matrix.md`
- `.agent/changes/change-log.md`
- Relevant public source: `app/layout.jsx`, `app/site-chrome.jsx`, `app/site-footer-nav.jsx`, `app/footer-room-loop-pass.css`, `app/footer-room-loop-cues-pass.css`

## Mismatch

The shared footer had accumulated multiple parallel route-cue systems: the accessible footer trail, the active current-room slip, the studio mark/photo, and a large room-loop rail. Current calm-room and anti-accumulation guidance supports keeping the navigation available while making repeated cues read as one quieter exit shelf.

## Satisfaction state

Partially satisfied.

## Visible Website change

Added `app/footer-calm-exit-shelf-pass.css` and loaded it after the existing footer loop passes. The footer room loop remains linked and accessible, but now renders as a slimmer paper exit shelf with compact route slips instead of a second row of large competing card-like navigation pieces.

## Public source files changed

- `app/footer-calm-exit-shelf-pass.css`
- `app/layout.jsx`

## Affected items

- COMP-002 Direct Studio Navigation
- COMP-005 Shared Site Chrome
- DESIGN-015 Direct Unnumbered Navigation
- DESIGN-018 Visitor Continuity Bands
- DESIGN-019 Paper Material Authenticity
- DESIGN-022 Paper Piece Card Surfaces
- DESIGN-029 Flattened Paper Hierarchy
- DESIGN-030 Text Paper Snippets
- LESSON-002 Use human-facing copy
- LESSON-015 Use direct nav labels without extra markers
- LESSON-018 Fill public pages as useful rooms
- LESSON-019 Make paper material feel primary
- LESSON-022 Make shared cards read as paper pieces
- LESSON-026 Use alternating scrollable image galleries
- METRIC-014 Direct Nav With Contrast
- METRIC-017 Filled Page Continuity
- METRIC-018 Paper Material Reads First
- METRIC-021 Paper Cards Not UI Cards
- METRIC-028 Hierarchy Is Flat And Editorial
- METRIC-029 Text Lives In Paper Snippets

## Validation note

Live deployed validation was not run from this connector-only pass. The change is source-visible and should render after GitHub Pages rebuilds from `main`.
