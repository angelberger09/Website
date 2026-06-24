# FEEDBACK-004 — Pages menu should expand left, stay open, and be unboxed

Timestamp: 2026-06-23 23:40 ET  
Status: converted to active lesson  
Source: Screenshot review of current Website Pages menu

## Public-safe summary

The current Pages menu opens downward into a large bordered/background panel. Future menu work should make it open by default, expand left from the Pages control, and remove the separate panel border/background treatment.

## Extracted signal

Use horizontal, edge-aware navigation reveal instead of a dropdown card. The Pages links should feel integrated into the header line rather than placed in a separate overlay.

## Affected semantic items

- COMP-002 Folder Pages Menu
- DESIGN-012 Unboxed Left-Expanding Menu
- INT-010 Leftward Default-Open Menu Reveal

## Created lesson

- LESSON-013 Make the Pages menu open left and stay visually unboxed

## Reference image

- `.agent/references/2026-06-23-menu-left-open-transparent-reference.md`
- `.agent/references/2026-06-23-menu-left-open-transparent-reference.jpg.base64`

## Implementation ideas to evaluate

- Keep the Pages menu open by default on desktop.
- Render links to the left of the Pages button.
- Remove the dropdown panel background and border.
- Keep focus states visible even without a panel surface.
- Add a mobile fallback if horizontal space is too limited.
