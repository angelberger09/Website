# Reference — Page Intro Supportive Subtitle Weight

Timestamp: 2026-06-24 19:43 ET  
Source: Screenshot review of the current Website About page intro

## Validation

The screenshot maps to the active `/Website/about/` route. The visible copy matches the current About page `PageIntro` title and paragraph in `app/about/page.jsx`, rendered through the shared `PageIntro` component in `app/site-chrome.jsx`.

## Public-safe observation

The current page intro title reads as a large hero headline. Future implementation should treat each page intro line as a supportive subtitle instead: thinner, slightly smaller, single-line, and short enough to feel like orientation copy rather than hero text.

## Implementation boundary

This is a feedback reference only. Public Website source files should not change until an implementation run is requested.
