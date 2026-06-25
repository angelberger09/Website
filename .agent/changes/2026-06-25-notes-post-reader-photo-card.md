# Notes post reader photo card

Timestamp: 2026-06-25 10:38 ET

## Intent

Make the individual Notes post reader visibly closer to the active paper/photo direction without inventing note imagery, screenshots, private writing, or fake published content.

## Satisfaction state

Partially satisfied.

The post reader already used a paper desk, lined reading sheet, clipped states, public-source slip, support notes, and continuity trail. It still lacked an image-like content surface in the intro, while active lessons ask photo/polaroid centers and preview surfaces to carry honest route-specific material instead of staying decorative or absent.

## Website source changed

- `app/notes/post/PostReaderClient.jsx`
- `app/notes-post-photo-card-pass.css`
- `app/layout.jsx`
- `app/performance-budget-pass.css`

## Visible change

The post reader intro now includes a clipped abstract paper/photo card labeled around the public note reader room. The visual card says `Public note` and `writing shelf`, using honest route language rather than fake note art, fake screenshots, or private content.

## Performance boundary

The new card uses CSS gradients, grain, simple clipped paper shapes, and box shadows. It avoids filters, blend modes, animation, external images, and fake media. The final performance pass includes the new surface and small label slips in the cheaper shared paper budget.

## Affected items

- PAGE-003A Notes Post Reader
- PAGE-003B Blog Compatibility Routes
- COMP-005 Shared Site Chrome
- COMP-007 Post Reader Client
- DESIGN-019 Paper Material Authenticity
- DESIGN-021 Content-Bearing Polaroid Cards
- DESIGN-022 Paper Piece Card Surfaces
- DESIGN-024 Torn Edge Card Silhouettes
- DESIGN-025 Route Photo-Center Cards
- DESIGN-031 Photo-Led Content Surfaces
- LESSON-019 Make paper material feel primary
- LESSON-021 Make polaroid frames carry content
- LESSON-022 Make shared cards read as paper pieces
- LESSON-025 Render photo centers instead of background decals
- METRIC-018 Paper Material Reads First
- METRIC-020 Content-Bearing Polaroids
- METRIC-021 Paper Cards Not UI Cards
- METRIC-023 Torn Edge Card Silhouette
- METRIC-030 Content Uses Photo/Image Surfaces

## Notes

This is a public-safe visual/interface implementation. It does not change the Blog feed contract, post loading behavior, Markdown rendering, routing, or published-only boundary.
