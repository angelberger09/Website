# Footer room trail thread

Date: 2026-06-26 11:09 ET

## Interface change

- Added `app/footer-room-trail-thread-pass.css`.
- Loaded the pass from `app/layout.jsx` after the existing footer paper/current-room passes.
- The shared footer route slips now sit under a clipped `footer trail` paper label with a dashed thread running behind the links.
- The active route slip lifts slightly and keeps its readable current-room label.

## Why

The shared footer already had paper route slips and an active current-room marker, but the navigation could still read as separate scraps. Current continuity, calm-room, direct-label, paper-snippet, and paper-piece guidance supports making the footer visibly read as one guided studio exit path without changing routes, copy, or adding fake content.

## Satisfaction check

- Target state: partially satisfied.
- The change is in-bounds because it touches shared Website chrome and applies existing `.agent` lessons to a visible public interface pattern.
- The change avoids new private content, fake portfolio/product assets, or navigation/routing changes.

## Related IDs

- COMP-002
- COMP-005
- COMP-009
- DESIGN-015
- DESIGN-018
- DESIGN-019
- DESIGN-022
- DESIGN-030
- LESSON-002
- LESSON-015
- LESSON-018
- LESSON-019
- LESSON-022
- METRIC-014
- METRIC-017
- METRIC-018
- METRIC-021
- METRIC-029
