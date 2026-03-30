import { useState, useEffect, useMemo } from 'react';

export const useClock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const time = useMemo(() => ({
    time: currentTime.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }),
    date: currentTime.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' })
  }), [currentTime]);

  return time;
};
