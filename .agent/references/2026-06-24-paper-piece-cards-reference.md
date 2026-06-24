# Reference Image — Paper piece card surfaces

Timestamp: 2026-06-24 19:44 ET

## Source

User-provided screenshot of the current Website About page at `/Website/about/`.

## Validation read

The screenshot maps to the active Website About route. It shows the route-continuity section whose copy is defined in `app/page-continuity.js` and rendered by `app/next-step-band.jsx` as a shared `link-card wide-card` surface with pathway links.

## Public-safe visual read

The current wide card and inner pathway rows are readable, but they feel too uniformly rounded and card-like. The surface reads closer to a generic soft UI panel than to a handmade paper or polaroid piece.

## Extracted design signal

Future visual passes should make shared card surfaces feel like paper pieces using the same polaroid/collage material language: content-bearing paper centers, cream paper frames, dark backing or layered shadow where appropriate, visible texture, slight edge irregularity, cut/torn edges, and less uniformly rounded card geometry.

## Future implementation notes

- Apply this to `.page-card`, `.detail-card`, `.source-link`, `.link-card`, `.reader-card`, `.pathway-link`, and the next-step band pattern.
- Reduce the generic rounded-card feeling; use uneven paper shapes, torn/cut edges, or alpha-mask/pseudo-element edges where practical.
- Borrow from the polaroid motif without turning every surface into decoration: the middle of the paper/polaroid piece should carry readable content.
- Use layered backing shadows and slight offset/rotation carefully so the page remains calm and readable.
- Apply this as feedback-only memory for FEEDBACK-009 and LESSON-021; do not change public Website source in this pass.
