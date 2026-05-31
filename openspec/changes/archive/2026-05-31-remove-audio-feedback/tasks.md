## 1. Cleanup and Dependencies

- [x] 1.1 Uninstall `expo-av` dependency: `npm uninstall expo-av`
- [x] 1.2 Delete the `assets/sounds/` directory and its contents

## 2. Metronome Hook Refactoring

- [x] 2.1 Remove `Audio` imports and sound-related `useRef` hooks from `src/hooks/useMetronome.ts`
- [x] 2.2 Remove the `useEffect` that loads and unloads sounds
- [x] 2.3 Refactor `playSoundAndSchedule` to remove audio playback calls and rename it to `scheduleNextBeat`
- [x] 2.4 Update the `isPlaying` effect to call the renamed `scheduleNextBeat` function

## 3. Validation

- [x] 3.1 Verify the app compiles and runs without `expo-av`
- [x] 3.2 Confirm the visual indicator still flashes accurately at different BPMs and time signatures
- [x] 3.3 Ensure no console errors or warnings related to missing audio assets
