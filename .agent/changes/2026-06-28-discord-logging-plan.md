# Discord logging implementation plan

Angel wants organized channel updates for every Website workflow, plus a Discord-playable MP4 preview for Visual Tour.

Target design:

- Every workflow posts a compact status card.
- Visual Tour also posts one compressed preview MP4.
- Full video evidence remains in GitHub Actions artifacts.
- Large files fall back to links instead of failing the run.
