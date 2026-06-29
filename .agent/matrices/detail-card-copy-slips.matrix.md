# Detail Card Copy Slips Matrix

Timestamp: 2026-06-29 04:30 ET

| ID | Type | Name | Location | Purpose | Related Lesson / Metric | Status |
|---|---|---|---|---|---|---|
| COMP-005 | Component | Shared Site Chrome | `app/layout.jsx`, `app/site-chrome.jsx`, `app/detail-card-copy-slip-pass.css` | Loads the shared DetailCard copy slip pass after existing paper face and status tape refinements so remaining shared cards keep a consistent paper material system. | LESSON-019, LESSON-022, LESSON-024; METRIC-018, METRIC-021, METRIC-023, METRIC-029 | active |
| COMP-008 | Component | Filled Page Sections | Route files using `DetailCard` | Lets remaining route sections that still use shared `DetailCard` body copy render as smaller clipped paper snippets rather than broad plain text inside a card shell. | LESSON-019, LESSON-022, LESSON-024; METRIC-018, METRIC-021, METRIC-023, METRIC-029 | active |
| DESIGN-019 | Design Pattern | Paper Material Authenticity | `app/detail-card-copy-slip-pass.css` | Extends paper grain, dust, lifted shadows, and handled sheet texture into DetailCard body copy. | LESSON-019; METRIC-018 | active |
| DESIGN-022 | Design Pattern | Paper Piece Card Surfaces | `app/detail-card-copy-slip-pass.css` | Breaks broad card body content into placed paper fragments so the whole card reads as a collage surface. | LESSON-022; METRIC-021 | active |
| DESIGN-024 | Design Pattern | Torn Edge Card Silhouettes | `app/detail-card-copy-slip-pass.css` | Uses clipped uneven paper shapes for DetailCard body paragraphs and lists instead of smooth rounded body panels. | LESSON-024; METRIC-023 | active |
| DESIGN-030 | Design Pattern | Text Paper Snippets | `app/detail-card-copy-slip-pass.css` | Makes simple paragraph/list copy live in readable paper snippets where appropriate. | METRIC-029 | active |

## Satisfaction check

- Target: shared DetailCard body copy inside remaining filled-page sections.
- State before pass: partially satisfied, because face/status markers were tactile but body copy could still feel like plain card text.
- State after pass: refined toward satisfied for shared `DetailCard` body copy, pending rendered visual review across all routes.

## Boundary notes

- Does not change public copy.
- Does not add fake products, posts, portfolio assets, screenshots, or private content.
- CSS targets only direct unclassed `DetailCard` body wrappers emitted by the shared component, preserving route-specific custom boards.
- Mobile rules remove rotation and use full width for readability.
