# Homepage Door Room Cue Slips Matrix

| Field | Value |
|---|---|
| Matrix date | 2026-06-27 |
| Primary target | `PAGE-001` Homepage |
| Component target | `COMP-004` Studio Page Cards |
| Public source files | `app/page.jsx`, `app/home-door-room-cue-slips-pass.css`, `app/layout.jsx` |
| Satisfaction state | Partially satisfied → refined |
| Visible change | Large homepage studio-door cards now display source-backed `roomCue` text as clipped paper slips above the secondary enter action. |
| Boundary | No new routes, fake posts, fake products, fake images, or private context. Existing `site-data.js` room cues drive the visible labels. |

## Related semantic IDs

- `PAGE-001` — Homepage
- `COMP-003` — Scroll Title Sequence
- `COMP-004` — Studio Page Cards
- `COMP-008` — Filled Page Sections
- `DESIGN-006` — Human-Facing Copy
- `DESIGN-015` — Direct Unnumbered Navigation
- `DESIGN-019` — Paper Material Authenticity
- `DESIGN-021` — Content-Bearing Polaroid Cards
- `DESIGN-022` — Paper Piece Card Surfaces
- `DESIGN-024` — Torn Edge Card Silhouettes
- `DESIGN-029` — Paper Snippet Text System
- `DESIGN-030` — Calm Room Sequence

## Related lessons

- `LESSON-001` — Make homepage feel authored
- `LESSON-002` — Use human-facing copy
- `LESSON-015` — Use direct nav labels without extra markers
- `LESSON-019` — Make paper material feel primary
- `LESSON-021` — Make polaroid frames carry content
- `LESSON-022` — Make shared cards read as paper pieces
- `LESSON-024` — Use torn-edge card silhouettes instead of rounded corners
- `LESSON-025` — Render photo centers instead of background decals

## Related metrics

- `METRIC-001` — Homepage feels authored
- `METRIC-002` — Human-facing copy
- `METRIC-014` — Direct readable navigation
- `METRIC-018` — Paper material reads first
- `METRIC-020` — Content-bearing polaroids
- `METRIC-021` — Paper-piece card surface
- `METRIC-023` — Torn-edge silhouette quality
- `METRIC-028` — Flattened hierarchy
- `METRIC-029` — Text snippet readability
- `METRIC-030` — Calm room sequence

## Follow-up check

Render `/Website/` and verify that the `Studio rooms` board no longer reads as four same-status enter cards. Each card should show the same honest room cue used by the hero route slips, with About/Notes/Portfolio/Store visually distinct at scan scale.
