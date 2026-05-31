## Context

The project is an Expo-based React Native application. Implementing a metronome requires a reliable timing mechanism and a responsive UI. Current limitations include the lack of specialized audio or slider dependencies in the boilerplate.

## Goals / Non-Goals

**Goals:**
- Implement a high-precision metronome engine in JavaScript.
- Create a clean, single-screen UI using standard Expo components.
- Ensure the app is fully typed with TypeScript.
- Provide visual and (optionally) audio feedback for beats.

**Non-Goals:**
- Background playback or lock-screen controls.
- Saving user preferences or BPM history.
- Advanced rhythm patterns (polyrhythms, complex subdivisions).

## Decisions

- **Engine Logic (`useMetronome` hook)**:
  - Use `useRef` to track the next beat time and handle the interval.
  - Implement a "look-ahead" scheduling approach if necessary, but for a single-screen app, a robust `useEffect` with drift calculation will suffice.
  - State will include `bpm`, `isPlaying`, `timeSignature`, and `currentBeat`.
- **UI Components**:
  - **BPM Slider**: Use `@react-native-community/slider` for tempo adjustment.
  - **Controls**: Standard `View`, `Text`, and `TouchableOpacity` for a custom, polished look.
  - **Visual Indicator**: A dedicated component that animates based on the `currentBeat` pulse.
- **Dependencies**:
  - Add `@react-native-community/slider` for the BPM control.
  - Add `expo-av` for audio feedback (essential for a metronome).

## Risks / Trade-offs

- **[Risk] JS Thread Jitter**: The JavaScript event loop can be blocked, leading to uneven beats.
  - **Mitigation**: Keep the UI light and avoid heavy computations during playback. Use `useMemo` and `useCallback` to prevent unnecessary re-renders.
- **[Trade-off] Local State vs Context**: For a single-screen app, local state in `App.tsx` or a custom hook is simpler than implementing a global store.
