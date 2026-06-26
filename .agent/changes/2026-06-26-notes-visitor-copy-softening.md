# 2026-06-26 — Notes visitor copy softening

## Changed

- Updated `app/notes/NotesPageClient.jsx` visible Notes copy so the opening route text no longer says `note files`, `Soft Strange Studio shell`, or `behind-the-scenes list`.
- Replaced those phrases with softer visitor-facing studio language: published notes, softer reading path, calm room, and real notes.
- Softened the loading state from `studio shell` to `studio room`.

## Why

The Notes index was visually paper-led, but a few visible copy fragments still carried implementation-flavored wording. Current human-facing copy, filled-room, and calm-room guidance supports making the text read like a visitor room rather than a technical wrapper around external writing.

## Satisfaction state

Partially satisfied. This removes one clear Notes copy mismatch, but METRIC-002 still benefits from future route-wide checks for remaining implementation-facing language.

## Related items

- PAGE-003
- PAGE-003B
- COMP-006
- DESIGN-006
- LESSON-002
- LESSON-018
- METRIC-002
- METRIC-017
