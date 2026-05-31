## Why

The current project is a boilerplate Expo application. A functional metronome app is needed to provide musicians with a reliable tool for rhythmic practice, featuring precise BPM control, time signature support, and visual feedback.

## What Changes

- **BPM Control**: Implementation of a slider and increment/decrement buttons to adjust tempo from 30 to 250 BPM.
- **Playback Control**: A Play/Pause toggle to start and stop the metronome.
- **Time Signature Selection**: Support for 4/4, 3/4, and 2/4 time signatures.
- **Visual Feedback**: A flashing indicator for every beat, with a distinct visual state for the downbeat (first beat of each measure).
- **TypeScript Integration**: Full type safety for all components and state management.

## Capabilities

### New Capabilities
- `metronome-engine`: Manages the timing logic, pulse generation, and state (BPM, active beat, playing status).
- `metronome-ui`: Provides the user interface for controlling the metronome and displaying visual feedback.

### Modified Capabilities
*None*

## Impact

- `App.tsx`: Replaced with the metronome's main screen layout.
- `package.json`: Potential addition of audio-related libraries if built-in Expo solutions are insufficient (though the prompt emphasizes native components).
- New component files for the UI and custom hooks for the engine logic.
