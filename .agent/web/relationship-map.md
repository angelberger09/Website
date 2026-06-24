# Relationship Map

## Homepage

- ID: PAGE-001
- File: `app/page.jsx`
- Uses COMP-001 Floating Header.
- Uses COMP-002 Folder Pages Menu.
- Uses COMP-003 Scroll Title Sequence.
- Uses COMP-004 Studio Page Cards.
- Uses the atmosphere asset system through `app/globals.css`.
- Links to DATA-001, DATA-002, DATA-003, DATA-004.
- Shaped by LESSON-001, LESSON-002, LESSON-003.
- Current visual direction is shaped by LESSON-005 through LESSON-015.

## Floating Header

- ID: COMP-001
- Anchors the site to `Angel Berger`.
- Contains the folder menu.
- Styled by DESIGN-004.
- Current styling reduces hard border reliance per LESSON-005 and LESSON-008.
- Current styling uses gloss/material layering from ASSET-005.
- Future placement should follow LESSON-011 and DESIGN-011 so the header feels attached to or emerging from the top edge.
- Future contrast should follow LESSON-015 and DESIGN-016 so the header does not feel overly soft.

## Folder Pages Menu

- ID: COMP-002
- Lives inside the floating header.
- Current behavior is a dropdown panel.
- Future behavior should follow LESSON-013, DESIGN-012, and INT-010: open by default, expand left from the Pages control, and remove the separate menu panel border/background.
- Latest correction from LESSON-015: once direct links are visible, remove the `Pages` trigger itself, remove edge numbers, and remove extra helper text.

## Scroll Title Sequence

- ID: COMP-003
- Current purpose is the main arrival moment.
- Background atmosphere now uses ASSET-001 through ASSET-005.
- Motion must follow LESSON-009.

## Studio Page Cards

- ID: COMP-004
- Current purpose is to present four public page destinations.
- Current styling uses gradient/photo-like material panels instead of hard borders.
- Card alignment uses equal-height grid behavior and bottom-aligned descriptions.
- Related patterns: DESIGN-007, DESIGN-010.
- Related assets: ASSET-001, ASSET-003, ASSET-005.

## Atmosphere Assets

- ASSET-001 Grain Noise supports subtle paper/film texture.
- ASSET-002 Dust Specks supports photo-surface imperfections.
- ASSET-003 Fine Scratches supports hairline glossy-surface marks.
- ASSET-004 Soft Scratches supports larger glass/photo scuffs.
- ASSET-005 Gloss Sweep supports diagonal light reflections and tactile material depth.
- Asset registry lives in `.agent/matrices/assets.matrix.md`.

## Blog Feed

- ID: DATA-003
- Comes from the Blog repo.
- Powers future embedded notes viewer.
- Depends on Blog publishing a stable `posts.json` file.
- Shaped by LESSON-004.

## Visual Atmosphere System

- DESIGN-007 Gradient Fade-Off Structure reduces hard framing.
- DESIGN-008 Flat Cel-Shaded Atmosphere adds graphic depth.
- DESIGN-009 Animated Background Texture makes the page feel alive.
- DESIGN-010 Tactile Polaroid Depth adds gloss/surface marks/light-bending overlays.
- DESIGN-011 Offscreen Top Emergence makes the header feel physically attached to the viewport edge.
- DESIGN-012 Unboxed Left-Expanding Menu makes navigation feel integrated into the header instead of a dropdown card.
- DESIGN-015 Direct Unnumbered Navigation removes edge numbers, helper text, and redundant trigger controls.
- DESIGN-016 Soft/Sharp Balance adds contrast and clarity where the UI has become too soft.
- INT-006 and INT-007 are proposed interactions for mouse-reactive atmosphere and tactile overlay response.
- INT-008 is a proposed interaction/placement behavior for top-edge header entry.
- INT-010 is a proposed desktop navigation behavior for direct default-open nav.
- Metrics: METRIC-007, METRIC-008, METRIC-009, METRIC-010, METRIC-012, METRIC-014.

## Reference Images

- Header top-edge feedback reference lives in `.agent/references/2026-06-23-header-offscreen-top-reference.md`.
- The encoded compressed screenshot reference lives in `.agent/references/2026-06-23-header-offscreen-top-reference.jpg.base64`.
- Left-expanding menu feedback reference lives in `.agent/references/2026-06-23-menu-left-open-transparent-reference.md`.
- The encoded compressed screenshot reference lives in `.agent/references/2026-06-23-menu-left-open-transparent-reference.jpg.base64`.
- Direct nav simplification reference lives in `.agent/references/2026-06-23-nav-direct-unboxed-reference.md`.
- The encoded compressed screenshot reference lives in `.agent/references/2026-06-23-nav-direct-unboxed-reference.jpg.base64`.

## Public Memory System

- Root entry: `agent.md`.
- Human entry: `start-here.md`.
- Agent entry: `.agent/start-here.md`.
- Persistent summary: `.agent/memory.md`.
- Structured traceability: `.agent/matrices/*`.
- Timestamped feedback lives in `.agent/feedback/feedback-log.md`.
