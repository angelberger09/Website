# About Pathway Door Cue Tickets Matrix

## Semantic target

| ID | Type | Name | Location | Role |
|---|---|---|---|---|
| PAGE-002 | Page | About | `app/about/page.jsx` | Public studio orientation room with final next-door path cards. |
| COMP-008 | Component | Filled Page Sections | `app/about/page.jsx` | Route-specific About sections that replace generic app panels with paper-room structure. |
| COMP-009 | Component | Next Step / route continuity | `app/about/page.jsx`, `app/page-continuity.js` | Visitor path continuity from About into Notes, Portfolio, and Store. |
| DESIGN-018 | Design pattern | Visitor continuity bands | About pathway cards | Keeps the room connected to the rest of the Website. |
| DESIGN-019 | Design pattern | Paper material authenticity | `app/about-pathway-door-cue-tickets-pass.css` | Uses clipped paper tickets, texture, and lifted shadows. |
| DESIGN-022 | Design pattern | Paper piece card surfaces | About pathway notes | Makes link cards read as placed paper pieces. |
| DESIGN-024 | Design pattern | Torn edge card silhouettes | About pathway notes | Preserves cut/torn card shape language. |
| DESIGN-029 | Design pattern | Flattened paper hierarchy | About pathway board | Avoids nested UI panels by using one composed departure surface. |
| DESIGN-030 | Design pattern | Text paper snippets | `about-pathway-note__door-cue` | Turns next-door cues into readable paper tickets. |

## Change summary

The About `Where to go next` pathway cards now render source-backed door-cue text from `aboutPathwayFrames` and style those cues as clipped vertical paper tickets. This replaces the prior generic CSS-only pseudo-element stamp pattern.

## Quality check

| Metric | Check |
|---|---|
| METRIC-002 | Door cues remain human-facing: `read next`, `open archive`, `prep table`. |
| METRIC-017 | The About page still gives calm next paths to related rooms. |
| METRIC-018 | The cue tickets visibly reinforce paper-first material. |
| METRIC-021 | The pathway cards read less like generic UI cards and more like paper pieces. |
| METRIC-023 | The ticket and card silhouettes keep cut-paper edges. |
| METRIC-028 | The section remains a flattened departure table, not a nested panel. |
| METRIC-029 | Supporting text lives in explicit paper-ticket snippets. |
| METRIC-030 | The link cards retain honest photo-like/card-center structure without fake images. |

## Implementation boundary

- No route changes.
- No fake content or product/work claims.
- No private content.
- Cue labels are source-backed public UI data.
- Mobile fallback changes vertical tickets to readable horizontal slips.
