# Footer bound exit path

Timestamp: 2026-06-27 10:50 ET

## Target

The shared footer already had four paper exit receipts and a consolidated exit desk, but the receipt shelf could still scan as separate link cards instead of one bound exit route.

## Satisfaction state

Partially satisfied → refined.

## Visible Website change

- Added `app/footer-bound-exit-path-pass.css`.
- Loaded it after the latest footer and route-specific passes in `app/layout.jsx`.
- Bound the footer exit receipts into one stronger paper route with a larger shared backing sheet, a `bound exit path` label, receipt tape, alternating receipt placement, stronger lifted-paper depth, and mobile-safe fallbacks.

## Why

This keeps the bottom chrome aligned with the calm-room path, paper-first material, flattened hierarchy, direct route guidance, and content-bearing paper/photo guidance without changing routes, public copy, accessibility labels, or inventing new content.

## Affected semantic items

- COMP-005 Shared Site Chrome
- COMP-009 Next Step Band / continuity path relationship
- DESIGN-018 Visitor Continuity Bands
- DESIGN-019 Paper Material Authenticity
- DESIGN-022 Paper Piece Card Surfaces
- DESIGN-024 Torn Edge Card Silhouettes
- DESIGN-028 Flattened Hierarchy
- DESIGN-029 Text Snippet Surfaces
- DESIGN-030 Calm Room Structure
- DESIGN-031 Route Photo/Paper Cues
- LESSON-002 Use human-facing copy
- LESSON-018 Filled pages need continuity
- LESSON-019 Make paper material feel primary
- LESSON-022 Make shared cards read as paper pieces
- LESSON-024 Use torn-edge card silhouettes instead of rounded corners
- LESSON-025 Render photo centers instead of background decals
- LESSON-026 Use alternating scrollable image galleries
- METRIC-002 Human-facing copy
- METRIC-017 Visitor continuity
- METRIC-018 Paper material reads first
- METRIC-021 Paper-piece card read
- METRIC-023 Torn/cut edges
- METRIC-028 Flattened hierarchy
- METRIC-029 Text snippets
- METRIC-030 Calm room sequencing
- METRIC-032 Room structure clarity
