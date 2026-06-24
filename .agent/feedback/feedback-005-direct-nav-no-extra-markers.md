# FEEDBACK-005 — Direct nav should not have numbers, extra text, or a Pages button

Timestamp: 2026-06-23 23:50 ET  
Status: converted to active lesson  
Source: Screenshot review of current Website header navigation

## Public-safe summary

The current direct navigation still includes small edge numbers, extra text treatment, and a separate `Pages` button. The desired direction is direct navigation only: destination labels without numbering or redundant controls. The current visual treatment also feels too soft overall and needs more contrast and definition.

## Extracted signal

Do not keep the old `Pages` trigger once the links are visible. The nav should be simpler, sharper, and less padded with decorative metadata.

## Affected semantic items

- COMP-002 Folder Pages Menu
- DESIGN-012 Unboxed Left-Expanding Menu
- DESIGN-015 Direct Unnumbered Navigation
- DESIGN-016 Soft/Sharp Balance
- INT-010 Leftward Default-Open Menu Reveal

## Created lesson

- LESSON-015 Use direct nav labels without extra markers

## Reference image

- `.agent/references/2026-06-23-nav-direct-unboxed-reference.md`
- `.agent/references/2026-06-23-nav-direct-unboxed-reference.jpg.base64`

## Implementation ideas to evaluate

- Remove the `01`, `02`, `03`, `04` markers from nav links.
- Remove the separate `Pages` button in desktop direct-nav mode.
- Keep only direct labels such as Notes, Sample, Source, Home.
- Reduce excess softness by increasing contrast, using firmer text weight/spacing, or sharpening the material edge.
- Keep mobile behavior simple and accessible.
