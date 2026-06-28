# About Contact Sheet Terminal Focus Matrix

## Item

- ID: ABOUT-CONTACT-SHEET-TERMINAL-FOCUS
- Type: design implementation pass
- Status: active
- Location: `app/about-contact-sheet-terminal-focus-pass.css`, loaded from `app/layout.jsx`

## Visible target

The About contact-sheet section should read as one bound sequence inside the About room, not as a late-stage horizontal row of separate cards.

## Satisfaction state

Partially satisfied before this pass:

- Existing source-backed About room frames were public-safe and useful.
- The contact sheet already had an exposure desk and direct cue labels.
- The final card rhythm still needed a calmer terminal focus layer so the whole section felt like one bound paper/photo sequence.

## Current correction

- Adds one calmer shared board treatment for `.about-contact-sheet-board`.
- Adds a visible bound-frame label and About-room receipt cue.
- Adds a left spine and rail thread so the heading, rail, and scroll sheet belong to the same board.
- Reduces shadow/card height pressure to keep the About room inside the final calm paper budget.
- Preserves responsive and reduced-motion fallbacks.

## Related source items

- `app/about/page.jsx`
- `app/layout.jsx`
- `app/about-contact-sheet-exposure-desk-pass.css`
- `app/about-contact-sheet-frame-sequence-pass.css`
- `app/about-contact-sheet-terminal-focus-pass.css`

## Related semantic IDs

- PAGE-002
- COMP-005
- COMP-008
- DESIGN-019
- DESIGN-022
- DESIGN-024
- DESIGN-028
- DESIGN-029
- DESIGN-030
- DESIGN-031
- LESSON-002
- LESSON-018
- LESSON-019
- LESSON-022
- LESSON-024
- LESSON-025
- LESSON-026
- METRIC-002
- METRIC-018
- METRIC-021
- METRIC-023
- METRIC-027
- METRIC-028
- METRIC-029
- METRIC-030
- METRIC-032

## Quality check

The rendered About page should visibly change in the contact-sheet area. The heading slip, rail slips, and frame cards should feel more unified by a shared paper board/spine, with less heavy card separation and a clearer left-to-right sequence.
