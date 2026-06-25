# Torn card edge feedback

Timestamp: 2026-06-24 22:45 ET

Status: converted to active lesson and implemented

## Public-safe summary

Shared card surfaces should stop reading as rounded UI cards. Card edges should feel like cut or torn paper, with edge shadows that make the paper layer feel lifted from the page.

## Extracted signal

Use squared, cut, or slightly uneven paper silhouettes instead of rounded card corners. Use edge shadows, paper texture, and subtle offset layers to make shared cards feel physically placed on the page while keeping content readable.

## Matched items

- COMP-004
- COMP-005
- COMP-006
- COMP-007
- COMP-008
- COMP-009
- DESIGN-022
- METRIC-021

## Implementation note

This pass updated `angelberger09/Website/app/paper-card-pass.css` to remove rounded corners from shared card-like surfaces and add cut-paper clip paths plus edge shadows.
