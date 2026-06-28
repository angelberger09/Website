# About Slip Depth Selector Repair Matrix

| ID | Type | Location | Change | Related lessons | Metrics | Status |
|---|---|---|---|---|---|---|
| PAGE-002 | Page | `app/about/page.jsx` | Newer About paper slips now match shared lifted-paper depth treatment through `app/shared-paper-depth-pass.css`. | LESSON-019, LESSON-022, LESSON-024 | METRIC-018, METRIC-021, METRIC-023, METRIC-028 | active |
| COMP-005 | Component | `app/shared-paper-depth-pass.css` | Shared depth selector now includes current About room-key, contact-sheet rail, and boundary ledger classes instead of leaving newer slips under-styled. | LESSON-019, LESSON-022, LESSON-024 | METRIC-018, METRIC-021, METRIC-023 | active |
| COMP-008 | Component | `app/about/page.jsx`, `app/shared-paper-depth-pass.css` | Filled About sections keep the room-map/collage structure while receiving stronger paper contact shadows. | LESSON-019, LESSON-022, LESSON-024 | METRIC-018, METRIC-021, METRIC-028 | active |
| DESIGN-019 | Design pattern | `app/shared-paper-depth-pass.css` | Paper material authenticity is extended to newer About slips and boundary ledger notes. | LESSON-019 | METRIC-018 | active |
| DESIGN-022 | Design pattern | `app/shared-paper-depth-pass.css` | About slips read more like paper pieces instead of flat UI pieces. | LESSON-022 | METRIC-021 | active |
| DESIGN-024 | Design pattern | `app/shared-paper-depth-pass.css` | Contact shadows and inner outlines reinforce cut/torn paper silhouettes. | LESSON-024 | METRIC-023 | active |
| DESIGN-029 | Design pattern | `app/about/page.jsx`, `app/shared-paper-depth-pass.css` | Flattened editorial hierarchy stays intact while the newer slips gain better depth separation. | LESSON-019, LESSON-022 | METRIC-028 | active |

## Selector repair

The shared pass now targets:

- `.about-room-key-slip`
- `.about-contact-sheet-rail__slip`
- `.about-boundary-slip`
- `.about-boundary-ledger-board`

This keeps the implementation narrow, public-safe, and tied to existing rendered markup without adding fake content or a competing About-page system.
