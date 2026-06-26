# 2026-06-25 Homepage shadow and organization feedback

Timestamp: 2026-06-25 22:15 ET  
Status: feedback-only packet; converted to active lessons  
Source: Screenshot review of current Website homepage

## Validation

- Validation source used: user-provided screenshot showing the live `/Website/` URL in the browser, plus current repo source for `app/page.jsx` and current `.agent` semantic items.
- Live fetch note: direct live fetch was unavailable in this pass, so validation used the screenshot and current repo source. The screenshot matches known homepage copy and structures including `Start here`, `Front room`, `A calm place to enter the work.`, and the About / Notes / Portfolio / Store route slips.
- Screenshot status: appears to be a current live Website homepage screenshot.
- Matched semantic items: PAGE-001, COMP-001, COMP-003, COMP-004, COMP-008, DESIGN-019, DESIGN-020, DESIGN-022, DESIGN-026, DESIGN-029, DESIGN-030, DESIGN-031, METRIC-018, METRIC-019, METRIC-021, METRIC-025, METRIC-028, METRIC-029, METRIC-030.

## FEEDBACK-019 — More visible drop shadows everywhere

### Public-safe summary

The homepage paper/photo pieces, header labels, route slips, and section surfaces are not lifting enough from the cream background. They need stronger visible drop shadows and contact shadows so the collage feels physically layered.

### Extracted signal

A paper/collage interface needs visible depth at screenshot scale. Shadows should not be merely present in CSS; they should be readable in the browser as physical separation between stacked paper pieces, tabs, route slips, content cards, and section fields.

### Affected semantic items

- PAGE-001 Homepage
- COMP-001 Floating Header
- COMP-003 Scroll Title Sequence
- COMP-004 Studio Page Cards
- COMP-008 Filled Page Sections
- DESIGN-019 Paper Material Authenticity
- DESIGN-020 Paper Header Surface
- DESIGN-022 Paper Piece Card Surfaces
- DESIGN-026 Section Paper Fields
- METRIC-018 Paper Material Reads First
- METRIC-019 Paper Header Surface
- METRIC-021 Paper Cards Not UI Cards
- METRIC-025 Section Background Has Presence

### Created or updated lessons

- LESSON-027 Strengthen lifted-paper shadows across the homepage

### Implementation boundary

Feedback stored in `.agent/` only. Public Website source should not change until an implementation run is requested.

## FEEDBACK-020 — Organize the homepage into a readable left-docked path

### Public-safe summary

The homepage currently has useful content, but the paper pieces feel scattered and not separated enough for a human reader. Future layout work should organize the page into a clearer left-docked editorial path with stronger grouping, spacing, and section separation.

### Extracted signal

The homepage should be arranged like a readable studio docket pinned down the left side: related pieces grouped together, sections visibly separated, route choices easy to scan, and paper/photo content aligned so the visitor can understand the page order without hunting across the screen.

### Affected semantic items

- PAGE-001 Homepage
- COMP-003 Scroll Title Sequence
- COMP-004 Studio Page Cards
- COMP-008 Filled Page Sections
- DESIGN-026 Section Paper Fields
- DESIGN-029 Flattened Paper Hierarchy
- DESIGN-030 Text Paper Snippets
- DESIGN-031 Photo-Led Content Surfaces
- METRIC-025 Section Background Has Presence
- METRIC-028 Hierarchy Is Flat And Editorial
- METRIC-029 Text Lives In Paper Snippets
- METRIC-030 Content Uses Photo/Image Surfaces

### Created or updated lessons

- LESSON-028 Make the homepage read as a left-docked paper docket

### Implementation boundary

Feedback stored in `.agent/` only. Public Website source should not change until an implementation run is requested.
