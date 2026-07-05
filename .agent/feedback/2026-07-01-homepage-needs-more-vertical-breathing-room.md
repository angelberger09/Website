# FEEDBACK-025 — Homepage needs more vertical breathing room

Timestamp: 2026-07-01 04:16 ET  
Status: converted to active lesson  
Source: Live homepage screenshot review

## Validation

- Validation source used: fresh screenshot at `.playwright-cli/page-2026-07-01T08-16-25-030Z.png` plus live `/Website/` snapshot.
- Screenshot status: current homepage render with a large empty hero field and the lower cards sitting close to the bottom edge.

## Public-safe summary

The page needs more vertical breathing room. The hero field is too tall and empty, while the lower cards feel compressed toward the bottom, so the composition does not yet feel like a balanced stacked spread.

## Extracted signal

Balance the vertical rhythm of the homepage. The hero area should not dominate with empty space, and the lower cards should have more separation from the bottom edge so the whole page feels composed rather than stretched.

## Affected semantic items

- PAGE-001 Homepage
- COMP-004 Studio Page Cards
- COMP-005 Shared Site Chrome
- DESIGN-001 Warm Cream Background
- DESIGN-014 Soft/Sharp Balance

## Created or updated lessons

- LESSON-028 Balance the homepage vertical rhythm

## Implementation ideas

- reduce the height of the empty hero field
- give the lower card row more bottom padding or margin
- tighten the vertical gap between the intro area and the cards
- keep the stacked look, but let the page breathe more evenly from top to bottom

## Implementation boundary

Feedback stored in `.agent/` only. Public Website source should not change until an implementation run is requested.
