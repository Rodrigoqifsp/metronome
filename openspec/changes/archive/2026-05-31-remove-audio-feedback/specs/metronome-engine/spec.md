## MODIFIED Requirements

### Requirement: Precise Tempo Generation
The metronome engine MUST generate pulses at a frequency corresponding to the set BPM (Beats Per Minute), where frequency = BPM / 60 Hz. These pulses SHALL be used exclusively for visual feedback. The engine SHALL maintain accuracy within ±1ms between beats.

#### Scenario: Steady visual pulse generation
- **WHEN** the engine is active at 120 BPM
- **THEN** it triggers a visual pulse exactly every 500ms

## REMOVED Requirements

### Requirement: Audio Feedback
**Reason**: `expo-av` causing instability and technical issues.
**Migration**: Use the visual indicator for tempo feedback.
