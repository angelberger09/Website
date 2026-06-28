# PageIntro Ticket Depth Matrix

## Semantic target

| ID | Item | Role in this pass | State |
|---|---|---|---|
| PAGE-002 | About | Receives the shared tacked PageIntro room ledger treatment | refined |
| PAGE-003 | Notes | Receives the shared tacked PageIntro room ledger treatment | refined |
| PAGE-003B | Blog Compatibility Routes | Receives the shared tacked PageIntro room ledger treatment | refined |
| PAGE-004 | Portfolio | Receives the shared tacked PageIntro room ledger treatment | refined |
| PAGE-005 | Store | Receives the shared tacked PageIntro room ledger treatment | refined |
| COMP-005 | Shared Site Chrome | Owns the PageIntro markup that this pass styles | refined |
| COMP-008 | Filled Page Sections | Benefits from stronger route-entry material before lower page sections | refined |

## Design target

| ID | Design / lesson / metric | Effect |
|---|---|---|
| DESIGN-019 | Paper Material Authenticity | Makes the shared route intro read as paper first through tape, grain-like gradients, cut edges, and depth |
| DESIGN-022 | Paper Piece Card Surfaces | Turns room shelf entries into individual ticket-like paper pieces |
| DESIGN-023 | Supportive Page Intro Subtitles | Keeps the existing short subtitle system intact while strengthening surrounding material |
| DESIGN-024 | Torn Edge Card Silhouettes | Adds cut-ticket clip paths to PageIntro shelf pieces, photo centers, and room key |
| LESSON-019 | Make paper material feel primary | Applies paper-first material to the recurring page intro system |
| LESSON-022 | Make shared cards read as paper pieces | Prevents PageIntro shelf cards from reading as smooth UI chips |
| LESSON-024 | Use torn-edge card silhouettes instead of rounded corners | Extends torn/cut geometry to the shared page-entry surfaces |
| LESSON-025 | Render photo centers instead of background decals | Preserves the filled room-key/photo-center concept while making it feel more physically placed |
| METRIC-018 | Paper Material Reads First | Route intro should visibly read as paper/collage before generic UI |
| METRIC-021 | Paper Cards Not UI Cards | Shelf entries should read like paper tickets, not rounded chips |
| METRIC-029 | Lifted Paper Depth | Tape and shadow should create a clear physical surface hierarchy |

## Implementation notes

- Public source file: `app/page-intro-ticket-depth-pass.css`.
- Loader file: `app/layout.jsx`.
- The pass stays CSS-only and uses existing PageIntro markup from `app/site-chrome.jsx`.
- Mobile and reduced-motion rules remove extra tilt so the route intro remains readable and stable.
