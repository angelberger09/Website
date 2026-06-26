# PageIntro Trust Spine Matrix

| ID | Type | Name | Location | Purpose | Related Lessons | Related Metrics | Status |
|---|---|---|---|---|---|---|---|
| COMP-005A | Component refinement | PageIntro trust spine | `app/page-intro-trust-spine-pass.css`, `app/page-intro-calm-focus-pass.css`, `app/layout.jsx`, `app/site-chrome.jsx` | Makes the shared PageIntro four-slip shelf visibly read as a calm-room sequence: hero board, featured shelf, source note, and next path, with the calm-focus grid now matching the four rendered slips instead of forcing a stale three-column shelf. | LESSON-018, LESSON-019, LESSON-021, LESSON-022, LESSON-023 | METRIC-017, METRIC-018, METRIC-020, METRIC-021, METRIC-022, METRIC-029 | active |

## Boundary

- Uses existing PageIntro route data only.
- Does not add fake photos, fake products, fake portfolio work, private content, or new route promises.
- Keeps the existing accessible text labels in `app/site-chrome.jsx` and adds only decorative paper labels for the visual room rhythm.

## Satisfaction check

- Previous state: partially satisfied. The four `Open / Read / Trust / Continue` slips existed, and the trust-spine pass labeled them as hero board, featured shelf, source note, and next path, but `app/page-intro-calm-focus-pass.css` still described and laid out the shelf as a three-step path, so the fourth Continue slip could wrap or feel like an accidental extra cue.
- Current state: refined. The calm-focus pass now treats the PageIntro shelf as a compact four-slip grid on desktop, a two-by-two grid on narrower route intros, and a single-column stack on small screens, matching the actual rendered PageIntro sequence without adding another cue system.
