# PageIntro Room Shelf Ledger Matrix

| Field | Value |
|---|---|
| Semantic item | Shared PageIntro room shelf ledger |
| Website source | `app/page-intro-room-shelf-ledger-pass.css`, `app/layout.jsx`, `app/site-chrome.jsx` |
| Primary scope | Shared route intro surfaces for About, Notes, Blog compatibility, Portfolio, and Store |
| Satisfaction state | partially satisfied |
| Underlying goal | Make each major page intro feel like one calm room-entry path instead of a set of neighboring cards. |
| Boundary | Reuse existing public route-intro labels and route-specific shelf data; do not add fake content, fake photos, products, portfolio work, posts, or extra navigation. |
| Quality metric | Visitors should read the Open / Read / Trust / Continue shelf as one bound route ledger with paper texture, stitch/thread cues, and readable labels. |
| Visible proof | Shared PageIntro shelves gain a clipped ledger backing, `route ledger` slip, dashed connector thread, taped step pieces, and mobile/reduced-motion fallbacks. |

## Related IDs

- PAGE-002 About
- PAGE-003 Notes
- PAGE-003B Blog Compatibility Routes
- PAGE-004 Portfolio
- PAGE-005 Store
- COMP-005 Shared Site Chrome
- COMP-008 Filled Page Sections
- DESIGN-018 Visitor Continuity Bands
- DESIGN-019 Paper Material Authenticity
- DESIGN-022 Paper Piece Card Surfaces
- DESIGN-024 Torn Edge Card Silhouettes
- DESIGN-028 Crinkled Paper Material
- DESIGN-029 Flattened Paper Hierarchy
- DESIGN-030 Text Paper Snippets
- LESSON-002 Use Human-Facing Copy
- LESSON-018 Fill Public Pages As Useful Rooms
- LESSON-019 Make Paper Material Feel Primary
- LESSON-022 Make Shared Cards Read As Paper Pieces
- LESSON-024 Use Torn-Edge Card Silhouettes Instead Of Rounded Corners
- LESSON-025 Render Photo Centers Instead Of Background Decals
- METRIC-002 Copy Is Human-Facing
- METRIC-017 Filled Page Continuity
- METRIC-018 Paper Material Reads First
- METRIC-021 Paper Cards Not UI Cards
- METRIC-023 Torn Edge Card Silhouette
- METRIC-028 Hierarchy Is Flat And Editorial
- METRIC-029 Text Lives In Paper Snippets
- METRIC-030 Content Uses Photo/Image Surfaces

## Validation notes

- The change is route-wide because `PageIntro` is shared through `app/site-chrome.jsx`.
- The pass is loaded before `final-paper-surface-budget-pass.css` so the terminal render budget still applies.
- The change remains public-safe because it styles existing route labels and does not add new claims or external source data.
