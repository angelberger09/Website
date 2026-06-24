# Reference Image — Pages menu should expand left and stay open

Timestamp: 2026-06-23 23:40 ET

## Source

User-provided screenshot of the current Website Pages menu opened from the top header.

## Public-safe visual read

The current Pages menu opens downward into a large rounded panel with visible card-like background and boundary. This makes the menu feel like a dropdown overlay rather than a lightweight navigation strip.

## Extracted design signal

The Pages menu should be open by default, expand left from the Pages control, and avoid its own border or panel background. The menu should feel integrated into the top header line instead of becoming a separate boxed dropdown.

## Future implementation notes

- Treat the Pages links as an always-visible horizontal/navigation reveal, not a closed dropdown by default.
- Expand the link group to the left of the Pages control.
- Remove the separate menu panel background and border.
- Preserve readable labels, keyboard navigation, focus states, and mobile behavior.
- Use this as a reference for FEEDBACK-004, LESSON-012, DESIGN-012, and INT-009.

## Encoded reference image

A compressed base64 image reference is stored next to this file:

`2026-06-23-menu-left-open-transparent-reference.jpg.base64`
