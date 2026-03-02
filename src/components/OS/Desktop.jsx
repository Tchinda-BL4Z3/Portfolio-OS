// src/components/OS/Desktop.jsx
import React from 'react';
import Icon from './Icon';

/**
 * Le Bureau (Desktop)
 * @param {Object} apps - La configuration des applications (APP_CONFIG)
 * @param {Function} onOpenApp - La fonction pour ouvrir une application
 */
const Desktop = ({ apps, onOpenApp }) => {
  
  // On transforme l'objet APP_CONFIG en tableau pour pouvoir faire un .map()
  // Cela permet de ne plus avoir de liste "codée en dur" ici.
  const appEntries = Object.entries(apps);

  return (
    <div 
      className="absolute inset-0 p-8 grid grid-flow-col grid-rows-[repeat(auto-fill,110px)] gap-6 w-full h-full content-start justify-start pointer-events-none"
      /* pointer-events-none ici permet de cliquer "à travers" la grille sur le fond d'écran si besoin */
    >
      {appEntries.map(([id, appData]) => (
        <div key={id} className="pointer-events-auto w-fit h-fit">
          <Icon 
            title={appData.title} 
            icon={appData.icon} 
            // On appelle la fonction passée en prop
            onDoubleClick={() => onOpenApp(id)} 
          />
        </div>
      ))}
    </div>
  );
};

export default Desktop;