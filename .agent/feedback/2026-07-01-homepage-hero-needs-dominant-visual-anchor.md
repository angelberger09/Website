# FEEDBACK-022 — Homepage hero needs a dominant visual anchor

Timestamp: 2026-07-01 04:10 ET  
Status: converted to active lesson  
Source: Live homepage screenshot review

## Validation

- Validation source used: fresh screenshot at `.playwright-cli/page-2026-07-01T08-10-34-699Z.png` plus live `/Website/` snapshot.
- Screenshot status: current homepage render with a large text-first hero on the left and a mostly empty right side.

## Public-safe summary

The homepage hero still lacks a dominant visual anchor. The layout has the right stacked structure and strong header, but the large empty right side makes the first screen feel unfinished compared with the reference image.

## Extracted signal

Use the top hero area as a real composition, not just a text block with empty space beside it. A large image or collage-style anchor should balance the title, set the room’s material tone, and make the homepage feel intentionally designed at first glance.

## Affected semantic items

- PAGE-001 Homepage
- COMP-004 Studio Page Cards
- COMP-005 Shared Site Chrome
- DESIGN-001 Warm Cream Background
- DESIGN-002 Large Editorial Type
- DESIGN-003 Rounded Minimal Cards

## Created or updated lessons

- LESSON-025 Give the homepage hero a dominant visual anchor

## Implementation ideas

- place a wide hero image or collage panel to the right of the title
- reduce the empty cream field above the cards by using it as visual composition space
- keep the stacked cards below, but make the first fold of the page feel complete
- use image-led material to balance the oversized type and prevent the hero from reading as a text-only intro

## Implementation boundary

Feedback stored in `.agent/` only. Public Website source should not change until an implementation run is requested.
