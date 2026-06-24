# Reference Image — Header should emerge from offscreen top

Timestamp: 2026-06-23 23:30 ET

## Source

User-provided screenshot of the current Website header at `/Website/`.

## Public-safe visual read

The current header is a full floating rounded pill sitting entirely inside the viewport. It reads as a contained UI bar instead of something entering the page from above.

## Extracted design signal

The header should feel like it is coming in from offscreen at the top edge. The top edge can feel clipped, tucked, or partially outside the viewport, while the identity text and Pages control remain readable and accessible.

## Future implementation notes

- Anchor the floating header closer to the top edge.
- Let part of the pill appear to extend beyond or tuck under the browser/top viewport boundary.
- Preserve click and keyboard access to the Pages menu.
- Keep focus states visible and do not clip interactive controls.
- Use this as a reference for LESSON-011 and DESIGN-011.

## Encoded reference image

A compressed base64 image reference is stored next to this file:

`2026-06-23-header-offscreen-top-reference.jpg.base64`
