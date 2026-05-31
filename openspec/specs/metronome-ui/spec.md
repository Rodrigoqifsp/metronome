## ADDED Requirements

### Requirement: BPM Control Interface
The UI MUST provide a slider for coarse BPM adjustment and buttons (+/-) for fine BPM adjustment. The displayed BPM MUST update in real-time as these controls are manipulated.

#### Scenario: Using the slider
- **WHEN** the user moves the slider to the 120 position
- **THEN** the BPM display shows "120" and the engine updates to 120 BPM

#### Scenario: Using increment button
- **WHEN** the current BPM is 120 and the "+" button is pressed
- **THEN** the BPM display shows "121" and the engine updates to 121 BPM

### Requirement: Playback Control Button
The UI MUST feature a single button that toggles the engine's playback state. The button label or icon MUST reflect the current state (e.g., show "Play" when paused, "Pause" when playing).

#### Scenario: Toggling play/pause
- **WHEN** the metronome is paused and the toggle button is pressed
- **THEN** the engine starts playing and the button label changes to "Pause"

### Requirement: Time Signature Selector
The UI MUST provide a selection mechanism (e.g., segmented control or buttons) to choose between 4/4, 3/4, and 2/4 time signatures.

#### Scenario: Selecting 3/4 time
- **WHEN** the user selects "3/4"
- **THEN** the engine updates its beat counting logic to a 3-beat cycle

### Requirement: Visual Beat Indicator
The UI MUST include a visual element that flashes on every beat pulse. The flash for the downbeat (beat 1) MUST be visually distinct (e.g., different color or size) from subsequent beats.

#### Scenario: Visual feedback on beat 1
- **WHEN** the engine generates a pulse for beat 1
- **THEN** the visual indicator flashes in the "downbeat" style

#### Scenario: Visual feedback on beat 2
- **WHEN** the engine generates a pulse for beat 2
- **THEN** the visual indicator flashes in the "standard" style
