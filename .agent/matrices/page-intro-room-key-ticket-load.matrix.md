# PageIntro Room Key Ticket Load Matrix

| Field | Value |
|---|---|
| Change | Load existing shared PageIntro room-key ticket stylesheet |
| Public source touched | `app/layout.jsx` |
| Existing style source | `app/page-intro-room-key-ticket-pass.css` |
| Satisfaction state | partially satisfied to refined |
| Primary mismatch | The shared PageIntro room key existed in markup and had a dedicated paper-ticket stylesheet, but the stylesheet was not loaded, so the visible room key could still render as a quiet side card instead of a grounded ticket. |
| Public-safety boundary | No new public copy, posts, products, portfolio claims, screenshots, or private context were added. |

## Semantic links

- COMP-005 — Shared Site Chrome
- COMP-008 — Filled Page Sections
- DESIGN-019 — Paper Material Authenticity
- DESIGN-020 — Paper Header Surface
- DESIGN-022 — Paper Piece Card Surfaces
- DESIGN-023 — Supportive Page Intro Subtitles
- DESIGN-025 — Route Photo-Center Cards
- DESIGN-029 — Flattened Paper Hierarchy

## Lesson links

- LESSON-019 — Make paper material feel primary
- LESSON-020 — Make the top bar feel like layered paper
- LESSON-022 — Make shared cards read as paper pieces
- LESSON-023 — Keep page intro titles supportive

## Metric links

- METRIC-018 — Paper Material Reads First
- METRIC-021 — Paper Cards Not UI Cards
- METRIC-023 — Torn Edge Card Silhouette
- METRIC-028 — Hierarchy Is Flat And Editorial

## Check

Major route PageIntro room keys using `.page-hero__room-key` should now show the existing ticket treatment from `app/page-intro-room-key-ticket-pass.css` after the root layout imports it.
