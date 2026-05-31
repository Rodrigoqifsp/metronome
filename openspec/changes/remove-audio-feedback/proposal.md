## Why

The `expo-av` library is causing technical issues and instability in the current implementation. To ensure a reliable experience, we are removing audio feedback and focusing exclusively on the visual pulse for metronome functionality.

## What Changes

- **Audio Removal**: Complete removal of `expo-av` dependency and all related audio loading/playback logic in the metronome engine.
- **Visual-Only Focus**: The app will now rely solely on the flashing visual indicator for tempo feedback.
- **Dependency Cleanup**: Removal of `expo-av` from `package.json`.

## Capabilities

### New Capabilities
*None*

### Modified Capabilities
- `metronome-engine`: Removal of audio pulse generation requirement.

## Impact

- `src/hooks/useMetronome.ts`: Significant simplification by removing audio state, refs, and effects.
- `package.json`: Removal of `expo-av`.
- `assets/sounds/`: These assets will no longer be used and can be removed.
