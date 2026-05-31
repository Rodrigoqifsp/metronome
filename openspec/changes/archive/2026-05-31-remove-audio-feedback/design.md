## Context

The current metronome implementation uses `expo-av` to provide audio feedback. However, this has introduced instability and is being removed in favor of a simpler, visual-only approach.

## Goals / Non-Goals

**Goals:**
- Remove all `expo-av` related code from `useMetronome.ts`.
- Uninstall `expo-av` from the project dependencies.
- Delete unused audio assets.
- Maintain a highly responsive visual pulse.

**Non-Goals:**
- Implementing alternative audio libraries.
- Changing the existing UI layout or visual indicator logic.

## Decisions

- **Engine Simplification**:
  - The `useMetronome` hook will no longer load sounds or manage audio refs.
  - The `playSoundAndSchedule` function will be renamed to `scheduleNextBeat` (or integrated into the main effect) to reflect its new visual-only purpose.
- **Dependency Removal**:
  - Use `npm uninstall expo-av` to clean up `package.json`.
- **Asset Cleanup**:
  - Remove `assets/sounds/` directory.

## Risks / Trade-offs

- **[Risk] Reduced User Feedback**: Users who rely on sound will no longer have audio cues.
  - **Mitigation**: Ensure the visual indicator is prominent and accurate.
- **[Trade-off] Performance**: Removing audio logic will slightly reduce the load on the JS thread, potentially improving visual timing consistency.
