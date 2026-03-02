// src/components/OS/Taskbar.jsx
import React, { useState, useEffect } from 'react';
import { 
  Moon, 
  Wifi, 
  Bluetooth, 
  Activity, 
  Battery as BatteryIcon,
  BatteryLow,
  BatteryMedium,
  BatteryFull
} from 'lucide-react';

const Taskbar = () => {
  const [time, setTime] = useState(new Date());
  const [battery, setBattery] = useState({ level: 100, charging: false });

  // Gestion de l'heure
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Gestion de la batterie réelle
  useEffect(() => {
    if ('getBattery' in navigator) {
      navigator.getBattery().then((batt) => {
        const updateBattery = () => {
          setBattery({
            level: Math.round(batt.level * 100),
            charging: batt.charging
          });
        };
        updateBattery();
        batt.addEventListener('levelchange', updateBattery);
        batt.addEventListener('chargingchange', updateBattery);
      });
    }
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-10 bg-[#0a1118]/40 backdrop-blur-xl flex items-center justify-between px-6 z-[9999] border-b border-white/5 text-white/70 select-none">
      
      {/* CÔTÉ GAUCHE : Logo & Nom de l'OS */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center text-[12px] text-black font-black shadow-[0_0_15px_rgba(6,182,212,0.5)]">
            T
          </div>
          <span className="text-cyan-400 font-black tracking-[0.2em] text-[11px] ">
            TchindaOS
          </span>
        </div>
      </div>

      {/* CENTRE : Heure & Date discrète (Optionnel, peut être retiré si tu préfères l'horloge géante uniquement) */}
      {/* <div className="hidden lg:flex items-center gap-2 text-[10px] font-medium tracking-[0.2em] opacity-80 uppercase">
         <span>{time.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}</span>
         <span className="text-cyan-500 mx-1">•</span>
         <span>{time.toLocaleDateString('fr-FR', { weekday: 'short', day: '2-digit', month: 'short' })}</span>
      </div> */}

      {/* CÔTÉ DROIT : Status & Profil */}
      <div className="flex items-center gap-6">
        
        {/* Switch Mode Nuit (Visuel) */}
        {/* <div className="flex items-center gap-2 bg-white/5 p-1 rounded-full border border-white/10 hover:border-cyan-500/30 transition-colors cursor-pointer group">
          <div className="w-8 h-4 bg-cyan-900/40 rounded-full relative flex items-center px-1">
             <div className="w-2.5 h-2.5 bg-cyan-400 rounded-full shadow-[0_0_8px_#22d3ee] translate-x-3"></div>
          </div>
          <Moon size={12} className="text-cyan-400 group-hover:scale-110 transition-transform" />
        </div> */}

        {/* Stats Performance (Simulé pour le look) */}
        <div className="flex items-center gap-1.5 text-[10px] font-bold text-cyan-400/90 bg-cyan-500/5 px-2 py-1 rounded-md border border-cyan-500/10">
          <Activity size={12} strokeWidth={3} />
          <span>100%</span>
        </div>

        {/* Connectivité */}
        {/* <div className="flex items-center gap-4 border-l border-white/10 pl-5">
          <Bluetooth size={14} className="hover:text-cyan-400 cursor-pointer transition-colors opacity-60" />
          <Wifi size={15} className="text-cyan-400 drop-shadow-[0_0_5px_#22d3ee] cursor-pointer" />
        </div> */}

        {/* Batterie Réelle */}
        <div className="flex items-center gap-2 border-l border-white/10 pl-5">
          <span className="text-[10px] font-bold tracking-tighter">
            {battery.level}%
          </span>
          <div className="relative flex items-center">
             {battery.level > 70 ? <BatteryFull size={18} className="text-cyan-400" /> : 
              battery.level > 20 ? <BatteryMedium size={18} className="text-white/60" /> : 
              <BatteryLow size={18} className="text-red-500 animate-pulse" />}
             {battery.charging && <span className="absolute -right-1 -top-1 text-[8px]">⚡</span>}
          </div>
        </div>

        {/* Profil Utilisateur (Tchinda) */}
        <div className="relative group cursor-pointer">
          <div className="w-8 h-8 rounded-full p-[1.5px] bg-gradient-to-tr from-cyan-500 via-blue-500 to-purple-600 shadow-[0_0_15px_rgba(6,182,212,0.3)] group-hover:rotate-12 transition-transform">
             <div className="w-full h-full rounded-full bg-[#0a1118] flex items-center justify-center overflow-hidden border border-black/50">
                <img 
                  src="https://tchinda-fogang.onrender.com/src/profil.jpg" 
                  alt="Tchinda" 
                  className="w-full h-full object-cover"
                />
             </div>
          </div>
          {/* Badge Online */}
          <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-[#0a1118] rounded-full"></div>
        </div>
      </div>

    </div>
  );
};

export default Taskbar;