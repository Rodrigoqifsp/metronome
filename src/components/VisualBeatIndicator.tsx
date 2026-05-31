import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated } from 'react-native';

interface VisualBeatIndicatorProps {
  currentBeat: number;
  isPlaying: boolean;
}

export const VisualBeatIndicator: React.FC<VisualBeatIndicatorProps> = ({
  currentBeat,
  isPlaying,
}) => {
  const flashAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (isPlaying) {
      // Trigger flash animation
      flashAnim.setValue(1);
      Animated.timing(flashAnim, {
        toValue: 0,
        duration: 150,
        useNativeDriver: false,
      }).start();
    }
  }, [currentBeat, isPlaying, flashAnim]);

  const isDownbeat = currentBeat === 1;

  const backgroundColor = flashAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [
      '#f0f0f0', 
      isDownbeat ? '#FF5252' : '#1EB1FC'
    ],
  });

  const scale = flashAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [1, isDownbeat ? 1.2 : 1.1],
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.indicator,
          {
            backgroundColor,
            transform: [{ scale }],
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
  },
  indicator: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
});
