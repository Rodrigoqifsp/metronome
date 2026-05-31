import { useState, useEffect, useRef, useCallback } from 'react';

export type TimeSignature = '4/4' | '3/4' | '2/4';

export const useMetronome = () => {
  const [bpm, setBpm] = useState(120);
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeSignature, setTimeSignature] = useState<TimeSignature>('4/4');
  const [currentBeat, setCurrentBeat] = useState(1);

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const expectedBeatTimeRef = useRef<number>(0);

  const beatsPerMeasure = parseInt(timeSignature.split('/')[0]);

  const scheduleNextBeat = useCallback((beat: number) => {
    if (!isPlaying) return;

    // Schedule next beat
    const interval = (60 / bpm) * 1000;
    expectedBeatTimeRef.current += interval;
    const drift = Date.now() - expectedBeatTimeRef.current;
    const nextInterval = Math.max(0, interval - drift);

    const nextBeat = beat >= beatsPerMeasure ? 1 : beat + 1;
    
    timerRef.current = setTimeout(() => {
      setCurrentBeat(nextBeat);
      scheduleNextBeat(nextBeat);
    }, nextInterval);
  }, [bpm, beatsPerMeasure, isPlaying]);

  useEffect(() => {
    if (isPlaying) {
      setCurrentBeat(1);
      expectedBeatTimeRef.current = Date.now();
      scheduleNextBeat(1);
    } else {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [isPlaying, scheduleNextBeat]);

  const togglePlay = () => setIsPlaying((prev) => !prev);

  const updateBpm = (newBpm: number) => {
    setBpm(Math.min(250, Math.max(30, Math.round(newBpm))));
  };

  return {
    bpm,
    isPlaying,
    timeSignature,
    currentBeat,
    updateBpm,
    togglePlay,
    setTimeSignature,
  };
};
