# 2026-06-25 Header Shadow Depth Feedback

Timestamp: 2026-06-25 22:14 ET  
Status: feedback-only; extends FEEDBACK-008 / FEEDBACK-011 / LESSON-020  
Source: screenshot review of the live `/Website/` top header

## Validation

- Validation source used: live Website screenshot plus current repo source for `app/site-chrome.jsx`, `app/globals.css`, `app/header-paper-tabs-pass.css`, and `app/header-paper-labels-pass.css`.
- Screenshot status: current live Website header on the homepage.
- Matched semantic items: PAGE-001, COMP-001, COMP-002, COMP-005, DESIGN-004, DESIGN-011, DESIGN-015, DESIGN-019, DESIGN-020, METRIC-019.

## Public-safe summary

The top section technically has box-shadow values in CSS, but the shadow is not visible enough in the rendered page. At screenshot scale the header still reads like pale paper labels floating in a light cream field, not a heavier paper strip casting a clear shadow over the page.

## Why the drop shadow is not reading

- The header background and page background are very close in value, so the soft shadow has too little contrast to show up.
- The current shadow is mostly broad and low-opacity; on the cream watercolor field it diffuses instead of creating a readable contact shadow.
- The header uses cut-paper `clip-path` treatment, which can make ordinary `box-shadow` read weaker or get visually lost around the clipped edge.
- The paper-label pass adds internal under-sheets and small label shadows, but those sit inside the header composition rather than creating a strong outside cast shadow below the whole top section.
- The negative top offset makes the header feel tucked into the viewport, but the visible lower edge still needs a dedicated shadow layer so it feels physically over the page.

## Extracted signal

Do not treat a CSS `box-shadow` declaration as success by itself. For the shared header, success means the rendered header visibly casts a soft but readable shadow below the whole paper strip, especially along the lower edge, so it feels like one physical sheet laid over the page.

## Future implementation rule

When implementing the next header paper pass:

- Add a dedicated outside shadow layer for `.floating-header`, such as a `::after` contact-shadow pseudo-element or `filter: drop-shadow(...)`, so the shadow survives cut-paper clipping and reads below the full strip.
- Increase lower-edge contrast enough to be visible on the cream/watercolor background without making the header heavy or dirty.
- Keep the identity and direct nav labels readable, direct, unnumbered, and accessible.
- Preserve top-edge attachment; the fix should deepen the header, not turn it back into a centered floating pill.
- Validate at screenshot scale on the live homepage and at least one inner route.

## Affected semantic items

- PAGE-001 Homepage
- COMP-001 Floating Header
- COMP-002 Direct Studio Navigation
- COMP-005 Shared Site Chrome
- DESIGN-004 Floating Header
- DESIGN-011 Offscreen Top Emergence
- DESIGN-015 Direct Unnumbered Navigation
- DESIGN-019 Paper Material Authenticity
- DESIGN-020 Paper Header Surface
- METRIC-019 Paper Header Surface

## Created or updated lessons

- LESSON-020 Make the top bar feel like layered paper

## Implementation boundary

Feedback stored in `.agent/` only. Public Website source should not change until an implementation run is requested.
