# Blog Reader Landing Dock

Date: 2026-06-27 08:10 ET

## Satisfaction check

- Target: Blog compatibility route handoff section.
- State before change: partially satisfied.
- Mismatch: the Blog compatibility page already explained that older Blog links open the same Notes shelf, but the handoff strip could still scan as three separate cards rather than one guided old-link-to-reader landing path.

## Visible Website change

- Updated `app/blog/page.jsx` with a small `notes-blog-landing-dock` sequence between the handoff label and handoff cards.
- Added `app/blog-reader-landing-dock-pass.css` to turn that sequence into a clipped paper landing dock with a kept-route pin, stitched rail, and direct slips for `old link`, `same shelf`, and `reader table`.
- Loaded the pass in `app/layout.jsx` after the existing Blog path handoff styling so it visibly refines the compatibility route without replacing the Notes reader.

## Boundary notes

- Existing Blog compatibility behavior and the reused `NotesPageClient` reader remain unchanged.
- The change is public-safe and only affects the Website route interface plus `.agent` documentation.

## Related semantic items

- PAGE-003
- PAGE-003B
- COMP-006
- COMP-008
- DESIGN-018
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
- LESSON-026
- METRIC-002
- METRIC-017
- METRIC-018
- METRIC-021
- METRIC-023
- METRIC-028
- METRIC-029
- METRIC-032
