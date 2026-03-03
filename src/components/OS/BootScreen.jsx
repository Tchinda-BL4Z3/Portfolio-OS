// src/components/OS/BootScreen.jsx
import React, { useState, useEffect } from 'react';

const BOOT_LOGS = [
  "INITIALIZING TCHINDA_KERNEL 1.0.42...",
  "LOADING VIRTUAL_FILESYSTEM... OK",
  "MOUNTING /DEV/SDA1... DONE",
  "ESTABLISHING SECURE_CONNECTION... ESTABLISHED",
  "LOADING CORE_ASSETS...",
  "STARTING GRAPHICAL_INTERFACE...",
  "SYSTEM_READY_V1"
];

export default function BootScreen({ onFinish }) {
  const [logs, setLogs] = useState([]);
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    // 1. Affichage des logs un par un
    BOOT_LOGS.forEach((log, index) => {
      setTimeout(() => {
        setLogs(prev => [...prev, log]);
      }, index * 300); // 0.3s entre chaque ligne
    });

    // 2. Afficher le logo après les logs
    setTimeout(() => {
      setShowLogo(true);
    }, BOOT_LOGS.length * 350);

    // 3. Finir l'animation et passer à l'OS
    setTimeout(() => {
      onFinish();
    }, BOOT_LOGS.length * 350 + 2000); // Reste 2s sur le logo
  }, [onFinish]);

  return (
    <div className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center font-mono p-10">
      
      {/* Zone des Logs (Haut Gauche) */}
      {!showLogo && (
        <div className="w-full max-w-2xl space-y-1">
          {logs.map((log, i) => (
            <div key={i} className="text-cyan-500 text-xs md:text-sm tracking-widest">
              <span className="text-white mr-2">[{ (i * 0.12).toFixed(2) }]</span> {log}
            </div>
          ))}
          <div className="w-2 h-4 bg-cyan-500 animate-pulse inline-block mt-2"></div>
        </div>
      )}

      {/* Logo Final (Centre) */}
      {showLogo && (
        <div className="animate-in zoom-in fade-in duration-1000 flex flex-col items-center gap-6">
          <div className="relative">
             <div className="w-24 h-24 border-4 border-cyan-500 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(6,182,212,0.5)]">
                <span className="text-4xl font-black text-cyan-500">T</span>
             </div>
             <div className="absolute inset-0 w-24 h-24 border-4 border-cyan-400 rounded-full animate-ping opacity-20"></div>
          </div>
          
          <h1 className="text-2xl font-black text-white tracking-[0.5em] uppercase">
            Tchinda<span className="text-cyan-500">OS</span>
          </h1>

          <div className="w-48 h-1 bg-white/10 rounded-full mt-4 overflow-hidden">
             <div className="h-full bg-cyan-500 animate-loading-bar shadow-[0_0_15px_#22d3ee]"></div>
          </div>
        </div>
      )}

      {/* Effet Scanline */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]"></div>
    </div>
  );
}