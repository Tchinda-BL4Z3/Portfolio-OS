// src/hooks/useWindowManager.js
import { useState } from 'react';

export const useWindowManager = () => {
    // Liste des IDs d'apps ouvertes ['about', 'terminal']
  const [openApps, setOpenApps] = useState([]); 
  const [focusedApp, setFocusedApp] = useState(null);
  const [nextZIndex, setNextZIndex] = useState(10);

  // Ouvrir une application
  const openApp = (id) => {
    if (!openApps.includes(id)) {
      setOpenApps([...openApps, id]);
    }
    focusApp(id);
  };

  // Fermer une application
  const closeApp = (id) => {
    setOpenApps(openApps.filter((appId) => appId !== id));
    if (focusedApp === id) setFocusedApp(null);
  };

  // Mettre la fenêtre au premier plan
  const focusApp = (id) => {
    setFocusedApp(id);
    setNextZIndex(prev => prev + 1);
  };

  return {
    openApps,
    focusedApp,
    nextZIndex,
    openApp,
    closeApp,
    focusApp
  };
};