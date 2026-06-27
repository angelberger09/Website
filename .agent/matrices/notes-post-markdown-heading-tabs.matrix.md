# Notes Post Markdown Heading Tabs Matrix

| ID | Type | Name | Location | Purpose | Related Lesson | Status |
|---|---|---|---|---|---|---|
| DESIGN-038 | Design Pattern | Notes Post Markdown Heading Tabs | `app/notes-post-markdown-heading-tabs-pass.css` | Make post Markdown `h2` and `h3` sections read as placed paper tabs inside the Notes reader sheet instead of plain document headings | LESSON-019, LESSON-022, LESSON-024 | active |

## Implementation note — 2026-06-26 20:20 ET

The Notes post Markdown heading pass is a CSS-only reader refinement. It does not alter public note data, fetch behavior, post profiles, slugs, or Markdown source files. It visually aligns existing public Markdown headings with the paper-scrap list treatment and broader reader room material system.

## Affected quality metrics

- METRIC-018 — Paper Material Reads First
- METRIC-021 — Paper Cards Not UI Cards
- METRIC-023 — Torn Edge Card Silhouette
- METRIC-029 — Text Lives In Paper Snippets
