# FEEDBACK-009 — Page intro titles should be supportive subtitles

Timestamp: 2026-06-24 19:43 ET  
Status: converted to active lesson  
Source: Screenshot review of current Website About page intro

## Validation

- Validation source used: screenshot plus current repo source for `/Website/about/`, the shared `PageIntro` component, and typography CSS.
- Screenshot status: current Website screenshot of `/Website/about/`.
- Matched semantic items: PAGE-002, COMP-005, DESIGN-002, DESIGN-006, DESIGN-021, METRIC-020.

## Public-safe summary

The About page intro headline is too large and heavy for the desired page role. Page intro text across the site should not feel like hero text. Each page should use a short supportive subtitle that is thinner, slightly smaller, and constrained to one line.

## Extracted signal

Page intro titles should orient the visitor quietly instead of acting as oversized hero headlines. Use 2–5 word subtitles, thinner weight, slightly smaller scale, and one-line constraints across the major public pages.

## Affected semantic items

- PAGE-002 About
- PAGE-001 Homepage when similar page-intro copy appears
- PAGE-003 Notes
- PAGE-004 Portfolio
- PAGE-005 Store
- COMP-005 Shared Site Chrome
- DESIGN-002 Large Editorial Type
- DESIGN-006 Human-Facing Copy
- DESIGN-021 Supportive Page Subtitles
- METRIC-020 One-Line Supportive Subtitle

## Created or updated lessons

- LESSON-021 Keep page intro titles short, thin, and supportive

## Reference note

- `.agent/references/2026-06-24-page-intro-subtitle-weight-reference.md`

## Implementation boundary

Feedback stored in `.agent/` only. Public Website source should not change until an implementation run is requested.
