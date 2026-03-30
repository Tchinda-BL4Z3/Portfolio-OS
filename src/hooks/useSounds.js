// src/hooks/useSounds.js
import { useCallback, useRef } from 'react';

export const useSounds = () => {
  const audioContext = useRef(null);

  const getAudioContext = useCallback(() => {
    if (!audioContext.current) {
      audioContext.current = new (window.AudioContext || window.webkitAudioContext)();
    }
    return audioContext.current;
  }, []);

  const playTone = useCallback((startFreq, endFreq, duration) => {
    const ctx = getAudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.frequency.setValueAtTime(startFreq, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(endFreq, ctx.currentTime + duration);
    osc.type = 'sine';
    gain.gain.setValueAtTime(0.1, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + duration);
  }, [getAudioContext]);

  const playClick = useCallback(() => playTone(800, 800, 0.1), [playTone]);
  const playOpen = useCallback(() => playTone(400, 800, 0.2), [playTone]);
  const playClose = useCallback(() => playTone(600, 200, 0.15), [playTone]);

  return { playClick, playOpen, playClose };
};
