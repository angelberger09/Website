# Store Feed Rule Docket Matrix

## Semantic target

| ID | Type | Name | Location | State |
|---|---|---|---|---|
| PAGE-005 | Page | Store | `app/store/page.jsx`, `app/store-feed-contract-pass.css` | active |
| COMP-008 | Component | Filled Page Sections | Store future shelf rule area | active |
| DESIGN-019 | Design pattern | Paper Material Authenticity | Store future shelf rules | refined |
| DESIGN-022 | Design pattern | Paper Piece Card Surfaces | Store rule scraps | refined |
| DESIGN-024 | Design pattern | Torn Edge Card Silhouettes | Store rule scraps | refined |
| DESIGN-028 | Design pattern | Flattened Page Hierarchy | Store future shelf | refined |
| DESIGN-029 | Design pattern | Text Snippet Paper Pieces | Store public-shelf rules | refined |
| DESIGN-030 | Design pattern | Photo/Image-Led Structure | adjacent Store feed cards | supported |
| DESIGN-031 | Design pattern | Calm Room Composition | Store future shelf | refined |

## Mismatch

The Store future shelf was mostly a tactile ledger, but its rule area still behaved like a loose list of small tape labels. The rules are important trust boundaries, so they need to feel like a composed part of the Store room rather than afterthought text.

## Visible correction

`app/store-feed-contract-pass.css` now turns `.store-feed-rule-tape` into a bound public-shelf rule docket with:

- one shared paper backing,
- a visible `public shelf rules` label,
- numbered rule scraps,
- tape tabs,
- stronger texture and lifted paper depth,
- responsive two-column and single-column fallbacks.

## Satisfaction state

Partially satisfied → refined.

## Quality checks

| Metric | Check |
|---|---|
| METRIC-002 | Copy remains human-facing and does not expose raw source language. |
| METRIC-004 | Public Store rules remain honest and do not imply live inventory. |
| METRIC-018 | Paper material reads before generic UI. |
| METRIC-021 | The rule area is content-bearing, not decorative. |
| METRIC-023 | Shared card language keeps torn/cut paper cues. |
| METRIC-028 | Hierarchy is flatter; rules sit as snippets inside the section. |
| METRIC-029 | Text appears as paper scraps/slips. |
| METRIC-030 | Adjacent photo/ledger structure remains visually supported. |
| METRIC-032 | The future shelf reads as a calm room sequence. |

## Lessons reinforced

- LESSON-002
- LESSON-004
- LESSON-019
- LESSON-022
- LESSON-024
- LESSON-025
- LESSON-026
