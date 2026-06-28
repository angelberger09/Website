# Detail Card Terminal Binding Matrix

## Scope

Shared `DetailCard` surfaces rendered through `app/site-chrome.jsx` and styled by the already-loaded terminal render budget layer.

## Source files

- `app/terminal-room-render-budget-pass.css`
- `app/site-chrome.jsx`

## In-bounds mismatch

The shared `DetailCard` primitive had accumulated paper-face styling, but the reusable card shell could still read as a generic rounded content card on pages that still use the primitive.

## Satisfaction state

Partially satisfied before this pass; refined toward satisfied by adding a terminal paper binding layer that is visible wherever `.detail-card` appears.

## Visible implementation

- Adds a top binding tape to `.detail-card`.
- Adds a lower clipped `public room slip` label.
- Turns the direct content body into a clipped inner paper sheet.
- Keeps hover/focus budget behavior and mobile sizing calm.

## Boundary notes

- No fake products, fake posts, fake portfolio work, fake photos, or private content were added.
- Existing public copy and source data were preserved.
- The change is CSS-only and uses existing selectors already loaded through `app/layout.jsx`.

## Affected semantic items

- PAGE-001
- PAGE-002
- PAGE-003
- PAGE-003A
- PAGE-003B
- PAGE-004
- PAGE-005
- COMP-005
- COMP-008
- DESIGN-019
- DESIGN-022
- DESIGN-024
- DESIGN-028
- DESIGN-029
- DESIGN-030
- LESSON-002
- LESSON-019
- LESSON-022
- LESSON-024
- METRIC-002
- METRIC-018
- METRIC-021
- METRIC-023
- METRIC-027
- METRIC-028
- METRIC-029
