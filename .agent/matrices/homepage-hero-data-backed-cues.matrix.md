# Homepage Hero Data-Backed Cues Matrix

| Item | Value |
|---|---|
| Change ID | 2026-06-27-homepage-hero-data-backed-cues |
| Primary page | PAGE-001 Homepage |
| Primary components | COMP-003 Scroll Title Sequence; COMP-004 Studio Page Cards |
| Source files | `app/site-data.js`; `app/page.jsx`; `app/home-entry-contact-sheet-pass.css` |
| Target state | First-screen homepage route cues should be direct, human-facing, source-readable, and not dependent on CSS-only text replacement. |
| Satisfaction state | Partially satisfied -> refined |
| Boundary | Do not invent new routes, product availability, project work, or hidden page state. Use the same public-safe route statuses already established by the earlier homepage hero cue pass. |
| Quality metric | METRIC-002 visible copy uses clear studio language; METRIC-014 direct nav/path cues avoid generic or decorative labels; METRIC-020 and METRIC-021 keep hero route cards content-bearing paper/photo surfaces. |
| Implementation note | `siteNavPages` now owns `roomCue`; homepage hero slips render it directly; CSS now styles actual cue text instead of replacing hidden text through `nth-child` pseudo-content. |

## Affected semantic IDs

- PAGE-001
- COMP-003
- COMP-004
- COMP-008
- DESIGN-006
- DESIGN-015
- DESIGN-021
- DESIGN-022
- LESSON-001
- LESSON-002
- LESSON-015
- LESSON-021
- LESSON-022
- METRIC-001
- METRIC-002
- METRIC-014
- METRIC-020
- METRIC-021
