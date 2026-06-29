# Portfolio Project Manifest Shelf Matrix

Timestamp: 2026-06-28 23:31 ET

| ID | Type | Name | Location | Purpose | Related lessons / metrics | Status |
|---|---|---|---|---|---|---|
| PAGE-004 | Page | Portfolio | `app/portfolio/page.jsx` | Keeps the visible project-manifest shelf before the existing public archive pieces and now shows each named shell’s next public framing need from the same manifest. | LESSON-018, LESSON-034, LESSON-038, LESSON-039; METRIC-028, METRIC-030 | partially satisfied |
| COMP-008 | Component | Filled Page Sections | `app/portfolio/page.jsx`, `app/portfolio-project-manifest-pass.css` | Renders a route-specific manifest section from data, including clipped next-frame slips, without adding another generic card grid or new override file. | LESSON-019, LESSON-021, LESSON-022, LESSON-024, LESSON-038 | active |
| DATA-011 | Content Source | Portfolio Project Manifest | `app/portfolio-projects.js` | Single public-safe source of truth for named future project shells, broad lanes, shell states, image cues, and the next public framing need for each visible card. | LESSON-004, LESSON-018, LESSON-038 | active |
| DESIGN-019 | Design Pattern | Paper Material Authenticity | `app/portfolio-project-manifest-pass.css` | Manifest shelf uses paper field, grain, dust, taped cards, lifted shadows, and small clipped next-frame slips so the data surface stays tactile. | LESSON-019; METRIC-018 | active |
| DESIGN-021 | Design Pattern | Content-Bearing Polaroid Cards | `app/portfolio-project-manifest-pass.css` | Each project name card includes an honest abstract photo center plus readable manifest copy and a next-frame text slip. | LESSON-021, LESSON-025; METRIC-020, METRIC-024 | active |
| DESIGN-030 | Design Pattern | Text Paper Snippets | `app/portfolio-project-manifest-pass.css` | The new `portfolio-manifest-card__next` element turns a readiness note into a small paper snippet inside each manifest card. | LESSON-022, LESSON-024; METRIC-029 | active |

## Satisfaction check

- Target: manifest-backed Portfolio project shells.
- State before: partially satisfied because the Portfolio page had a visible manifest shelf, but each named shell only exposed title, lane, state, and cue.
- State after: partially satisfied, improved. The visible manifest cards now show a `Next public frame` slip sourced from `app/portfolio-projects.js`, so the next public-safe card-building need is visible without scattering per-card copy.

## Public-safety boundary

The manifest stores project names, broad lanes, shell states, cues, and next public framing needs only. It does not add fake screenshots, fake case studies, live project links, or unavailable public claims.
