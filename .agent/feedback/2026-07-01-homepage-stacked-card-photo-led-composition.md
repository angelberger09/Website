# FEEDBACK-021 — Homepage should stay stacked, but become image-led

Timestamp: 2026-07-01 04:07 ET  
Status: converted to active lesson  
Source: Live homepage screenshot review

## Validation

- Validation source used: fresh screenshot at `.playwright-cli/page-2026-07-01T08-07-14-649Z.png` plus live `/Website/` snapshot.
- Screenshot status: current homepage render with dark top bar, paper tabs, and stacked front-room sections.
- Console note: favicon request is still returning a 404 in the browser session.

## Public-safe summary

The homepage is close in structure, but it still reads too much like a text-first front room. The stacked-card shape is good; the missing piece is a stronger image-led composition with a clearer hero photo/banner and more obvious lifted paper depth at screenshot scale.

## Extracted signal

Keep the stacked editorial layout, but let the image surfaces lead the page. The homepage should feel like a layered studio spread with a clear visual hero, stronger contrast, and more physically separated paper pieces instead of a wide text block that dominates the first screen.

## Affected semantic items

- PAGE-001 Homepage
- COMP-001 Floating Header
- COMP-004 Studio Page Cards
- COMP-005 Shared Site Chrome
- DESIGN-001 Warm Cream Background
- DESIGN-002 Large Editorial Type
- DESIGN-003 Rounded Minimal Cards

## Created or updated lessons

- LESSON-024 Keep the homepage stacked but image-led

## Implementation ideas

- add a dominant hero image or banner surface above the intro text
- keep the stacked card language, but make each card feel more like a paper piece over a page
- strengthen visible shadow separation so the hierarchy reads instantly
- reduce the amount of first-screen text so the hero image can carry the page
- keep the top nav and tabs, but let the content cards do more visual work

## Implementation boundary

Feedback stored in `.agent/` only. Public Website source should not change until an implementation run is requested.
