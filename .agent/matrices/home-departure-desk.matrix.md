# Homepage Departure Desk Matrix

| ID | Type | Name | Location | Purpose | Related Lesson | Metric | Status |
|---|---|---|---|---|---|---|---|
| HOME-DEPARTURE-001 | Page section refinement | Homepage departure desk | `app/home-departure-desk-pass.css`, `app/layout.jsx`, `app/page.jsx`, `app/next-step-band.jsx` | Makes the homepage closing path read as one composed front-room departure desk instead of a shared continuity component sitting below the final note | LESSON-001, LESSON-002, LESSON-018, LESSON-019, LESSON-022, LESSON-024, LESSON-026 | METRIC-001, METRIC-017, METRIC-018, METRIC-021, METRIC-023, METRIC-028, METRIC-029, METRIC-030, METRIC-032 | active |

## Satisfaction check

- Previous state: partially satisfied. The homepage already had a closing note and shared continuity paper trail, but the end of the page could still scan as a reusable band rather than a composed front-room exit surface.
- Current correction: a homepage-scoped CSS pass adds a clipped paper field, departure label, stronger closing-note depth, stitched thread, two-card next-step layout, and a `soft exit` paper cue.
- Validation target: `/Website/` should visibly show the final `Next path` area as a single departure desk with stronger paper hierarchy and clearer continuity.

## Boundaries

- Uses existing route continuity content only.
- Does not invent products, posts, portfolio records, private content, or fake photos.
- Preserves native links and focus behavior from `NextStepBand`.
