# FEEDBACK-003 — Header should emerge from offscreen top

Timestamp: 2026-06-23 23:30 ET  
Status: converted to active lesson  
Source: Screenshot review of current Website header

## Public-safe summary

The current header reads as a complete floating pill sitting inside the page. The next direction should make it feel like it is entering from above or tucked into the top edge of the viewport.

## Extracted signal

Use the viewport edge as part of the composition. The header can be partially tucked, clipped, or emerging from offscreen while preserving legibility and control access.

## Affected semantic items

- COMP-001 Floating Header
- COMP-002 Folder Pages Menu
- DESIGN-004 Floating Header
- DESIGN-011 Offscreen Top Emergence
- INT-008 Top Edge Entry

## Created lesson

- LESSON-011 Make the header emerge from offscreen top

## Reference image

- `.agent/references/2026-06-23-header-offscreen-top-reference.md`
- `.agent/references/2026-06-23-header-offscreen-top-reference.jpg.base64`

## Implementation ideas to evaluate

- Move the header slightly above the viewport with a negative top offset.
- Use a masked or tucked top edge so the header feels attached to the browser edge.
- Keep the Pages button fully reachable and keyboard focus visible.
- Avoid hiding important text or controls just to create the effect.
