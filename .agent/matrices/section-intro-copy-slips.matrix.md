# Section Intro Copy Slips Matrix

| ID | Type | Name | Location | Purpose | Related Lessons | Status |
|---|---|---|---|---|---|---|
| DESIGN-037 | Design Pattern | Section Intro Copy Slips | `app/section-intro-copy-slips-pass.css` | Turns shared section intro, split-feature, and PageIntro body copy into readable clipped paper notes instead of plain paragraph blocks | LESSON-019, LESSON-022, LESSON-024 | active |
| COMP-005 | Component | Shared Site Chrome | `app/layout.jsx`, `app/site-chrome.jsx` | Loads the shared copy-slip pass so PageIntro text keeps the paper-room language after route-specific hero treatments | LESSON-019, LESSON-022 | active |
| COMP-008 | Component | Filled Page Sections | route sections using `.section-intro` or `.split-feature` | Keeps filled-page support copy aligned with paper-snippet and flattened hierarchy goals without inventing new content | LESSON-019, LESSON-022, LESSON-024 | active |
| METRIC-029 | Metric | Text Lives In Paper Snippets | `.agent/matrices/quality-metrics.matrix.md` | Check whether supporting intro copy is carried by readable paper slips where appropriate | FEEDBACK-016 | partially satisfied |

## Boundary

This pass changes presentation only. It does not create new public claims, posts, products, portfolio work, images, routes, data contracts, or private content.

## Validation note

Rendered review should check that the paper slips improve scanability across About, Notes, Portfolio, Store, and compatibility routes without over-fragmenting long text or weakening mobile readability.
