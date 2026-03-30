// src/hooks/useWindowManager.js
import { useState, useCallback } from 'react';

export const useWindowManager = (onOpen, onClose) => {
  const [openApps, setOpenApps] = useState([]); 
  const [focusedApp, setFocusedApp] = useState(null);
  const [zIndexCounter, setNextZIndex] = useState(10);

  const focusApp = useCallback((id) => {
    setFocusedApp(id);
    setNextZIndex(prev => prev + 1);
  }, []);

  const openApp = useCallback((id) => {
    setOpenApps(prev => {
      if (!prev.includes(id)) {
        onOpen?.();
        return [...prev, id];
      }
      return prev;
    });
    focusApp(id);
  }, [onOpen, focusApp]);

  const closeApp = useCallback((id) => {
    setOpenApps(prev => prev.filter((appId) => appId !== id));
    setFocusedApp(prev => prev === id ? null : prev);
    onClose?.();
  }, [onClose]);

  return {
    openApps,
    focusedApp,
    zIndexCounter,
    openApp,
    closeApp,
    focusApp
  };
};