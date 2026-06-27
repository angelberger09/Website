# About Principles Docket Matrix

| Field | Value |
|---|---|
| ID | ABOUT-PRINCIPLES-DOCKET-2026-06-27 |
| Type | Page section refinement |
| Route | `/Website/about/` |
| Public source | `app/about-principles-docket-pass.css`, `app/layout.jsx` |
| Agent source | `.agent/changes/2026-06-27-about-principles-docket.md` |
| Satisfaction state | partially satisfied |
| Underlying goal | Make About read as a calm paper room, not a set of broad UI heading/card panels. |
| Boundary | Keep all copy public-safe and existing; do not invent new private biography, fake artifacts, or new public claims. |
| Visible correction | Convert the `Working principles` heading area into a composed paper promise docket with separate heading, label, and copy slips. |
| Quality metric | The section intro should scan as placed paper snippets before it reads as generic heading copy. |

## Affected IDs

- PAGE-002
- COMP-008
- DESIGN-019
- DESIGN-022
- DESIGN-024
- DESIGN-028
- DESIGN-029
- DESIGN-030
- LESSON-002
- LESSON-019
- LESSON-022
- LESSON-024
- METRIC-002
- METRIC-018
- METRIC-021
- METRIC-023
- METRIC-028
- METRIC-029

## Validation notes

- Uses only existing About markup and public-safe copy.
- Adds mobile fallback for single-column docket flow.
- Adds reduced-motion protection by removing small decorative rotations when requested.
- Loads after the existing About principle trail pass so the new visual grouping is not hidden by older section-heading styles.