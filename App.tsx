import React from 'react';
import { StyleSheet, View, SafeAreaView, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useMetronome } from './src/hooks/useMetronome';
import { BpmControls } from './src/components/BpmControls';
import { TimeSignatureSelector } from './src/components/TimeSignatureSelector';
import { VisualBeatIndicator } from './src/components/VisualBeatIndicator';
import { PlaybackControl } from './src/components/PlaybackControl';

export default function App() {
  const {
    bpm,
    isPlaying,
    timeSignature,
    currentBeat,
    updateBpm,
    togglePlay,
    setTimeSignature,
  } = useMetronome();

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <Text style={styles.title}>METRONOME</Text>
        
        <VisualBeatIndicator 
          currentBeat={currentBeat} 
          isPlaying={isPlaying} 
        />
        
        <BpmControls 
          bpm={bpm} 
          onBpmChange={updateBpm} 
        />
        
        <TimeSignatureSelector 
          currentSignature={timeSignature} 
          onSignatureChange={setTimeSignature} 
        />
        
        <PlaybackControl 
          isPlaying={isPlaying} 
          onToggle={togglePlay} 
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    letterSpacing: 4,
    marginBottom: 20,
  },
});
