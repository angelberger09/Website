# Notes gallery direct cue pass

Timestamp: 2026-06-26 08:28 ET

## Changed

- Updated `app/notes/NotesPageClient.jsx` so Notes contact-sheet cards render direct labels such as `Latest note`, `Open note`, and `Shelf note` instead of generated ordinal numbers.
- Updated Notes support-card cue text to render `Safe shelf`, `Reader path`, and `Table view` from source markup instead of decorative numeric pins.
- Updated `app/notes-direct-labels-pass.css` so the visible cue slips style the actual direct labels rather than hiding numeric text behind pseudo-content.

## Why

The Notes room was only partially aligned with direct-label, paper-snippet, and paper/photo-card guidance: several visible cue surfaces were still backed by numeric markers in the public source. The page should make its note contact sheet and support cards read as authored studio-room paper labels, not numbered UI/card markers.

## Satisfaction

Partially satisfied. This pass removes a remaining direct-label mismatch from the Notes index and Blog compatibility reader surfaces while preserving published-note data, source safety, accessibility, and the existing paper/photo contact-sheet structure.

## Related items

- PAGE-003
- PAGE-003B
- COMP-006
- COMP-008
- DESIGN-015
- DESIGN-019
- DESIGN-021
- DESIGN-022
- DESIGN-030
- LESSON-002
- LESSON-015
- LESSON-019
- LESSON-021
- LESSON-022
- LESSON-025
- METRIC-014
- METRIC-018
- METRIC-020
- METRIC-021
- METRIC-029
- METRIC-030
