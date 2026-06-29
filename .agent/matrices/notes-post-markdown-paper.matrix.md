# Notes Post Markdown Paper Matrix

## Purpose

Track the styling pass that makes live Markdown content inside the individual Notes/Blog post reader feel like placed paper sections instead of default article formatting.

## Linked semantic IDs

| ID | Role | Relationship |
|---|---|---|
| PAGE-003A | Notes Post Reader | The affected route where public Blog Markdown renders inside the Website reader. |
| PAGE-003B | Blog Compatibility Routes | Compatibility post routes reuse the same reader styling. |
| COMP-007 | Post Reader Client | Provides the rendered Markdown body targeted by the CSS pass. |
| DESIGN-019 | Paper Material Authenticity | Extends paper material into the actual writing content. |
| DESIGN-022 | Paper Piece Card Surfaces | Turns content blocks into paper pieces instead of default article blocks. |
| DESIGN-024 | Torn Edge Card Silhouettes | Uses clipped heading/list/quote/code shapes. |
| DESIGN-028 | Crinkled Paper Material | Adds handled-paper grain and pressure variation to content blocks. |
| DESIGN-030 | Text Paper Snippets | Makes section headings readable clipped paper slips and body paragraphs feel like ruled writing paper. |
| METRIC-018 | Paper Material Reads First | Reader content should feel papery before it reads as plain article UI. |
| METRIC-021 | Paper Cards Not UI Cards | Embedded content blocks should not look like generic panels. |
| METRIC-023 | Torn Edge Card Silhouette | Content pieces should show cut-paper edges. |
| METRIC-027 | Paper Feels Crinkled | Writing blocks should feel lightly handled without hurting readability. |
| METRIC-029 | Text Lives In Paper Snippets | Markdown headings and body text now behave as placed paper writing surfaces. |

## Implementation record

- Public CSS file: `app/notes-post-markdown-paper-pass.css`
- Import location: `app/layout.jsx`
- Change record: `.agent/changes/2026-06-28-notes-post-markdown-paper.md`
- Refinement record: `.agent/changes/2026-06-29-notes-post-markdown-ruled-body.md`

## Boundary notes

This pass does not add, edit, or invent Blog content. It only changes the rendering surface for already-public Markdown blocks inside the Website reader.
