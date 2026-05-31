import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { TimeSignature } from '../hooks/useMetronome';

interface TimeSignatureSelectorProps {
  currentSignature: TimeSignature;
  onSignatureChange: (signature: TimeSignature) => void;
}

const signatures: TimeSignature[] = ['2/4', '3/4', '4/4'];

export const TimeSignatureSelector: React.FC<TimeSignatureSelectorProps> = ({
  currentSignature,
  onSignatureChange,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Time Signature</Text>
      <View style={styles.buttonGroup}>
        {signatures.map((sig) => (
          <TouchableOpacity
            key={sig}
            style={[
              styles.button,
              currentSignature === sig && styles.activeButton,
            ]}
            onPress={() => onSignatureChange(sig)}
          >
            <Text
              style={[
                styles.buttonText,
                currentSignature === sig && styles.activeButtonText,
              ]}
            >
              {sig}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 20,
  },
  label: {
    fontSize: 18,
    color: '#666',
    marginBottom: 10,
  },
  buttonGroup: {
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    overflow: 'hidden',
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRightWidth: 1,
    borderRightColor: '#ddd',
  },
  activeButton: {
    backgroundColor: '#1EB1FC',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  activeButtonText: {
    color: 'white',
  },
});
