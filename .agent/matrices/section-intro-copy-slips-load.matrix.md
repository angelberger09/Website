# Section Intro Copy Slips Load Matrix

| Field | Value |
|---|---|
| Change | Load existing shared section-intro copy slip pass |
| Public source touched | `app/layout.jsx` |
| Existing style source | `app/section-intro-copy-slips-pass.css` |
| Satisfaction state | partially satisfied → refined |
| Primary mismatch | The documented `DESIGN-037` stylesheet existed but was not loaded, so route/support intro copy could render as plain paragraph blocks instead of placed paper slips. |
| Public-safety boundary | No new visitor copy, fake content, private material, raw workflow logs, credentials, products, screenshots, or posts were added. |

## Semantic links

- COMP-005 — Shared Site Chrome
- COMP-008 — Filled Page Sections
- DESIGN-019 — Paper Material Authenticity
- DESIGN-022 — Paper Piece Card Surfaces
- DESIGN-024 — Torn Edge Card Silhouettes
- DESIGN-029 — Flattened Paper Hierarchy
- DESIGN-030 — Text Paper Snippets
- DESIGN-037 — Section Intro Copy Slips

## Lesson links

- LESSON-019 — Make paper material feel primary
- LESSON-022 — Make shared cards read as paper pieces
- LESSON-024 — Torn/cut paper silhouettes

## Metric links

- METRIC-018 — Paper Material Reads First
- METRIC-021 — Paper Cards Not UI Cards
- METRIC-023 — Torn Edge Card Silhouette
- METRIC-028 — Hierarchy Is Flat And Editorial
- METRIC-029 — Text Lives In Paper Snippets

## Check

Rendered route intro/support paragraphs that match `.section-intro > p:not(.eyebrow)`, `.split-feature > p:not(.eyebrow)`, or `.page-hero__text > p` should now show tape, grain, uneven edges, and lifted paper depth through the existing shared stylesheet.
