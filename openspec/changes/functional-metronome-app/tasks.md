## 1. Setup and Dependencies

- [x] 1.1 Install required dependencies: `npx expo install @react-native-community/slider expo-av`
- [x] 1.2 Create `src/components` and `src/hooks` directories
- [x] 1.3 Add click sound assets (high click for downbeat, low click for others) to `assets/sounds/`

## 2. Metronome Engine

- [x] 2.1 Create `src/hooks/useMetronome.ts` to manage timing, BPM (30-250), and playback state
- [x] 2.2 Implement beat counting logic with support for 4/4, 3/4, and 2/4 time signatures
- [x] 2.3 Integrate `expo-av` within the hook to play sounds on each pulse with downbeat distinction

## 3. User Interface Components

- [x] 3.1 Create `src/components/BpmControls.tsx` featuring a slider and +/- buttons
- [x] 3.2 Create `src/components/TimeSignatureSelector.tsx` for switching between 2/4, 3/4, and 4/4
- [x] 3.3 Create `src/components/VisualBeatIndicator.tsx` to flash on each beat with downbeat highlighting
- [x] 3.4 Create `src/components/PlaybackControl.tsx` for the Play/Pause toggle

## 4. Assembly and Final Polish

- [x] 4.1 Update `App.tsx` to integrate the `useMetronome` hook and UI components
- [x] 4.2 Apply consistent styling using `StyleSheet` for a polished, single-screen experience
- [x] 4.3 Conduct a final pass to ensure strict TypeScript typing and verify all spec requirements
