## ADDED Requirements

### Requirement: Precise Tempo Generation
The metronome engine MUST generate pulses at a frequency corresponding to the set BPM (Beats Per Minute), where frequency = BPM / 60 Hz. The engine SHALL maintain accuracy within ±1ms between beats.

#### Scenario: Steady pulse generation
- **WHEN** the engine is active at 120 BPM
- **THEN** it generates a pulse exactly every 500ms

### Requirement: BPM Range and Adjustment
The engine MUST support a BPM range from 30 to 250 inclusive. It SHALL allow adjustments in increments of 1.

#### Scenario: Setting BPM to lower bound
- **WHEN** the user sets BPM to 30
- **THEN** the engine generates pulses every 2000ms

#### Scenario: Setting BPM to upper bound
- **WHEN** the user sets BPM to 250
- **THEN** the engine generates pulses every 240ms

### Requirement: Time Signature and Beat Counting
The engine MUST maintain a count of the current beat within a measure based on the selected time signature (4/4, 3/4, or 2/4). It SHALL identify the first beat of each measure as the "downbeat".

#### Scenario: Counting in 4/4 time
- **WHEN** the engine is in 4/4 time signature
- **THEN** it counts beats from 1 to 4, then resets to 1, marking beat 1 as the downbeat

#### Scenario: Counting in 3/4 time
- **WHEN** the engine is in 3/4 time signature
- **THEN** it counts beats from 1 to 3, then resets to 1, marking beat 1 as the downbeat

### Requirement: Playback State Management
The engine MUST transition between "Playing" and "Paused" states. When paused, the beat counter MUST reset to 1.

#### Scenario: Starting playback
- **WHEN** the engine is paused and the start command is issued
- **THEN** it enters the playing state and begins pulsing from beat 1

#### Scenario: Pausing playback
- **WHEN** the engine is playing and the pause command is issued
- **THEN** it stops pulsing and resets the beat counter to 1
