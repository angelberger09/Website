# 2026-06-26 — Notes post reader margin rail

## Interface mismatch

The individual Notes/Blog post reader already had a paper desk, intro receipts, a reader sheet, return shelf, source notes, and shared continuity, but the entrance still moved from small receipts directly into the reading sheet. That made the post route partially satisfy the calm-room path goal rather than visibly guiding the visitor through the reader room before the note body.

## Satisfaction state

Partially satisfied → refined.

## Visible Website change

- Added a `postReaderMarginRail` data set in `app/notes/post/PostReaderClient.jsx`.
- Rendered a visible `notes-post-margin-rail` between the intro receipts and the reader sheet.
- Added three clipped paper slips: `Open sheet`, `Read quietly`, and `Return softly`.
- Added `app/notes-post-margin-rail-pass.css` for the reader-margin label, dashed connector thread, lifted paper slips, grain, tape cues, and responsive stacking.
- Loaded the new pass from `app/layout.jsx`.

## Why

This keeps individual public notes from feeling like isolated article pages. The reader route now has a clearer paper-room entrance that names the opening, reading, and return rhythm before the note sheet appears.

## Public-safety notes

The change uses only existing public reader concepts and route-safe orientation copy. It does not invent posts, private notes, fake metadata, screenshots, products, or portfolio work.

## Affected IDs

- PAGE-003A
- PAGE-003B
- COMP-007
- COMP-008
- COMP-009
- DESIGN-018
- DESIGN-019
- DESIGN-022
- DESIGN-029
- DESIGN-030
- LESSON-002
- LESSON-018
- LESSON-019
- LESSON-022
- LESSON-024
- METRIC-017
- METRIC-018
- METRIC-021
- METRIC-023
- METRIC-028
- METRIC-029
