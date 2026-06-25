# Homepage house rules receipt pass

Timestamp: 2026-06-25 11:22 ET

## Intent

Make another visible homepage correction from the active `.agent` state without adding a heavy new visual system.

## Mismatch

The homepage studio-check section was partially satisfied but still exposed internal review language in the rendered interface, including phrasing like current review targets and `Review:` note labels. That contradicted the active human-facing copy rule and made the section feel closer to project QA notes than a public studio room.

## Satisfaction state

Partially satisfied.

## Website source changed

- `app/page.jsx`
- `app/site-data.js`
- `app/home-paper-collage-pass.css`

## Visible change

The homepage studio-check section now reads as public-facing house rules:

- the section eyebrow changes from `Studio checks` to `House rules`,
- the heading and body copy now describe studio slips and public-room grounding,
- note labels change from check/review language to material/copy/trust rules,
- the small note copy no longer starts with `Review:`,
- the check cards now render more like receipt-style paper slips with torn bottoms, tape, subtle rule lines, and a small stamped mark.

## Why this fits current state

The change supports the active rules that public copy should be authored and human-facing, paper material should read first, supporting text should live in small paper snippets, and the Website should stay within the performance budget.

The pass does not invent new products, posts, portfolio work, images, or private material. It reuses existing public homepage quality-check data and changes its public presentation.

## Affected items

- PAGE-001 Homepage
- DATA-006 / homepage studio check data in `app/site-data.js`
- DESIGN-006 Human-Facing Copy
- DESIGN-019 Paper Material Authenticity
- DESIGN-022 Paper Piece Card Surfaces
- DESIGN-024 Torn Edge Card Silhouettes
- DESIGN-029 Text Snippets
- LESSON-001 Make homepage feel authored
- LESSON-002 Use human-facing copy
- LESSON-019 Make paper material feel primary
- LESSON-022 Make shared cards read as paper pieces
- LESSON-024 Use torn-edge card silhouettes instead of rounded corners
- METRIC-001 Homepage feels authored
- METRIC-002 Copy is human-facing
- METRIC-018 Paper Material Reads First
- METRIC-021 Paper Cards Not UI Cards
- METRIC-023 Torn Edge Card Silhouette
- METRIC-025 Section Background Has Presence
- METRIC-028 Hierarchy Is Flat And Editorial
- METRIC-029 Text Lives In Paper Snippets
