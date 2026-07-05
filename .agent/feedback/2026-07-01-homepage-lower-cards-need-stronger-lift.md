# FEEDBACK-023 — Homepage lower cards need stronger lift and separation

Timestamp: 2026-07-01 04:12 ET  
Status: converted to active lesson  
Source: Live homepage screenshot review

## Validation

- Validation source used: fresh screenshot at `.playwright-cli/page-2026-07-01T08-12-43-485Z.png` plus live `/Website/` snapshot.
- Screenshot status: current homepage render with a large hero block and a row of open-room cards below.

## Public-safe summary

The lower room cards are useful, but they sit too flat against the page. They need stronger lift, clearer boundary contrast, and a little more separation so the page reads as stacked paper pieces instead of a single pale panel.

## Extracted signal

Keep the lower cards in the stack, but make their edges and shadows more readable. The homepage should separate the hero field from the room cards more aggressively so the structure is visible at a glance.

## Affected semantic items

- PAGE-001 Homepage
- COMP-004 Studio Page Cards
- COMP-005 Shared Site Chrome
- DESIGN-001 Warm Cream Background
- DESIGN-003 Rounded Minimal Cards
- DESIGN-014 Soft/Sharp Balance

## Created or updated lessons

- LESSON-026 Give the lower homepage cards stronger lift

## Implementation ideas

- deepen the drop shadow on the open-room cards
- give the card row a slightly firmer edge so it reads as a distinct layer
- increase the gap between the hero block and the cards
- keep the cards soft, but make the stacked paper separation obvious at screenshot scale

## Implementation boundary

Feedback stored in `.agent/` only. Public Website source should not change until an implementation run is requested.
