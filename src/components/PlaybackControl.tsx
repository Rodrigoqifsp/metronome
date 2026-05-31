import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface PlaybackControlProps {
  isPlaying: boolean;
  onToggle: () => void;
}

export const PlaybackControl: React.FC<PlaybackControlProps> = ({
  isPlaying,
  onToggle,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, isPlaying ? styles.pauseButton : styles.playButton]}
      onPress={onToggle}
    >
      <Text style={styles.buttonText}>{isPlaying ? 'PAUSE' : 'PLAY'}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '80%',
    paddingVertical: 20,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  playButton: {
    backgroundColor: '#4CAF50',
  },
  pauseButton: {
    backgroundColor: '#F44336',
  },
  buttonText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
});
