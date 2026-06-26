# PageIntro Trust Spine Matrix

| ID | Type | Name | Location | Purpose | Related Lessons | Related Metrics | Status |
|---|---|---|---|---|---|---|---|
| COMP-005A | Component refinement | PageIntro trust spine | `app/page-intro-trust-spine-pass.css`, `app/layout.jsx`, `app/site-chrome.jsx` | Makes the shared PageIntro four-slip shelf visibly read as a calm-room sequence: hero board, featured shelf, source note, and next path. | LESSON-018, LESSON-019, LESSON-021, LESSON-022, LESSON-023 | METRIC-017, METRIC-018, METRIC-020, METRIC-021, METRIC-022, METRIC-029 | active |

## Boundary

- Uses existing PageIntro route data only.
- Does not add fake photos, fake products, fake portfolio work, private content, or new route promises.
- Keeps the existing accessible text labels in `app/site-chrome.jsx` and adds only decorative paper labels for the visual room rhythm.

## Satisfaction check

- Previous state: partially satisfied. The four `Open / Read / Trust / Continue` slips existed, but the source/trust role was visually similar to the other slips and the four-part room model was not obvious at a glance.
- Current state: refined. The shelf now has visible `hero board`, `featured shelf`, `source note`, and `next path` paper labels, with the third Trust slip styled as a public-safe source note.
