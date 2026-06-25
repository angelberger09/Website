# About direct room labels pass

Timestamp: 2026-06-25 11:40 ET

## Intent

Make the About opening room-map clearer and more aligned with the current direct-label interface direction.

Recent interface passes removed decorative route numbers from shared navigation/continuity surfaces. The About opening room pieces still used large `01`/`02`/`03`/`04` markers as a visible graphic element. That made the room-map feel closer to numbered UI metadata than direct studio guidance.

## Satisfaction state

Partially satisfied before this pass.

The About page already had paper/collage room-map pieces, contact-sheet frames, principle boards, and pathway notes. The remaining mismatch was the decorative numeric marker inside each opening room piece.

## Website source changed

- `app/about/page.jsx`
- `app/about-direct-room-labels-pass.css`
- `app/layout.jsx`

## Visible interface change

The opening About room-map now replaces large decorative numeric markers with direct visitor-facing labels:

- Start here
- Keep soft
- Hold edges
- Move gently

The labels render as small clipped paper slips on the room pieces. On mobile, they move into the note flow so they remain readable instead of becoming background decoration.

## Boundary

No fake products, fake portfolio work, fake photos, private content, or new route promises were added. The pass only reframes existing public-safe About orientation copy.

## Related items

- PAGE-002 About
- COMP-008 Filled Page Sections
- DESIGN-015 Direct Unnumbered Navigation
- DESIGN-016 Soft/Sharp Balance
- DESIGN-019 Paper Material Authenticity
- DESIGN-022 Paper Piece Card Surfaces
- DESIGN-024 Torn Edge Card Silhouettes
- LESSON-015 Use direct nav labels without extra markers
- LESSON-019 Make paper material feel primary
- LESSON-022 Make shared cards read as paper pieces
- LESSON-024 Use torn-edge card silhouettes instead of rounded corners
- METRIC-014 Direct Nav With Contrast
- METRIC-018 Paper Material Reads First
- METRIC-021 Paper Cards Not UI Cards

## Future note

When a page uses visible labels inside route-like or orientation surfaces, prefer direct human guidance over large decorative numbering unless sequence itself is essential to the visitor task.
