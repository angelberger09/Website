# FEEDBACK-024 — Top tabs need more stagger and fold

Timestamp: 2026-07-01 04:14 ET  
Status: converted to active lesson  
Source: Live homepage screenshot review

## Validation

- Validation source used: fresh screenshot at `.playwright-cli/page-2026-07-01T08-14-42-908Z.png` plus live `/Website/` snapshot.
- Screenshot status: current homepage render with a dark top bar and four paper tabs across the right side.

## Public-safe summary

The top navigation is in the right place, but the tabs still read too uniform. They need a stronger stagger, more visible torn-paper edges, and a clearer folded/pinned feel so they resemble separate pieces of paper rather than a flat nav row.

## Extracted signal

Keep the paper-tab concept, but make each tab feel individually cut and placed. The top bar should look more like a strip of layered paper pieces with slight offsets and depth, not a single aligned menu line.

## Affected semantic items

- COMP-001 Floating Header
- COMP-002 Direct Studio Navigation
- COMP-005 Shared Site Chrome
- DESIGN-004 Floating Header
- DESIGN-019 Paper Material Authenticity
- DESIGN-020 Paper Header Surface

## Created or updated lessons

- LESSON-027 Make the header tabs feel more staggered and folded

## Implementation ideas

- offset the tabs a little more vertically so each one reads as a separate cut piece
- increase the lower-edge irregularity on the tabs
- add a clearer fold or curl treatment to the tab surfaces
- keep the dark header strip, but make the tabs feel less mechanically aligned

## Implementation boundary

Feedback stored in `.agent/` only. Public Website source should not change until an implementation run is requested.
