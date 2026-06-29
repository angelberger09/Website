# PageIntro Composed Room Board Matrix

## Semantic target

| ID | Type | Name | Location | Role |
|---|---|---|---|---|
| COMP-005 | Component | Shared Site Chrome | `app/site-chrome.jsx`, `app/layout.jsx`, `app/page-intro-composed-room-board-pass.css` | Shared route intro and chrome system affected by the new composed board styling. |
| COMP-008 | Component | Filled Page Sections | Route pages using `PageIntro` | Every major route intro now reads more like one composed room board before lower filled sections begin. |
| DESIGN-019 | Design Pattern | Paper Material Authenticity | `app/page-intro-composed-room-board-pass.css` | Makes the route intro surface read as handmade paper before it reads as scattered UI pieces. |
| DESIGN-022 | Design Pattern | Paper Piece Card Surfaces | `app/page-intro-composed-room-board-pass.css` | Binds the photo card, room key, and shelf chips into one paper-board context. |
| DESIGN-023 | Design Pattern | Supportive PageIntro Titles | `app/site-chrome.jsx` | Keeps the title treatment supportive while strengthening the containing board. |
| DESIGN-024 | Design Pattern | Torn Paper Silhouettes | `app/page-intro-composed-room-board-pass.css` | Uses a clipped board edge rather than a rounded panel shell. |
| DESIGN-029 | Design Pattern | Lifted Paper Depth | `app/page-intro-composed-room-board-pass.css` | Adds a board shadow and binding seam so the route intro feels physically placed. |
| DESIGN-030 | Design Pattern | Human-Readable Room Structure | `app/page-intro-composed-room-board-pass.css` | Groups the shared route intro as one readable room entry. |

## Lessons applied

- LESSON-019 — Make paper material feel primary.
- LESSON-022 — Make shared cards read as paper pieces.
- LESSON-023 — Keep page intro titles supportive.
- LESSON-024 — Use torn-edge card silhouettes instead of rounded corners.
- LESSON-025 — Render photo centers instead of background decals.
- LESSON-031 — Structure every major page as a calm room.

## Satisfaction state

Partially satisfied before this pass; improved by one coherent shared interface refinement.

## Validation expectation

The About, Notes, Portfolio, and Store route intros should visibly gain a single clipped paper-board field with a left seam and stronger lifted-paper grouping while preserving the existing readable PageIntro copy, shelf chips, and photo-card content.
