// src/components/OS/Taskbar.jsx
import React, { useState, useEffect } from 'react';
import { 
  Activity, 
  BatteryLow,
  BatteryMedium,
  BatteryFull
} from 'lucide-react';

const Taskbar = ({ onOpenApp }) => {
  const [battery, setBattery] = useState({ level: 100, charging: false });

  useEffect(() => {
    if ('getBattery' in navigator) {
      navigator.getBattery().then((batt) => {
        const updateBattery = () => {
          setBattery({ level: Math.round(batt.level * 100), charging: batt.charging });
        };
        updateBattery();
        batt.addEventListener('levelchange', updateBattery);
        batt.addEventListener('chargingchange', updateBattery);
      });
    }
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-12 bg-[#0a1118]/90 backdrop-blur-xl flex items-center justify-between px-6 z-[9999] border-b border-white/10 text-white/70 select-none">
      
      <div className="flex items-center gap-3">
        <div className="w-7 h-7 bg-cyan-500 rounded-lg flex items-center justify-center text-[14px] text-black font-black shadow-[0_0_15px_rgba(6,182,212,0.5)]">
          T
        </div>
        <span className="text-cyan-400 font-black tracking-[0.15em] text-[12px]">TchindaOS</span>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1.5 text-[10px] font-bold text-cyan-400/90 bg-cyan-500/5 px-2 py-1 rounded-md border border-cyan-500/10">
          <Activity size={12} strokeWidth={3} />
          <span>100%</span>
        </div>

        <div className="flex items-center gap-2 border-l border-white/10 pl-4">
          <span className="text-[10px] font-bold tracking-tighter">{battery.level}%</span>
          <div className="relative flex items-center">
            {battery.level > 70 ? <BatteryFull size={18} className="text-cyan-400" /> : 
             battery.level > 20 ? <BatteryMedium size={18} className="text-white/60" /> : 
             <BatteryLow size={18} className="text-red-500 animate-pulse" />}
            {battery.charging && <span className="absolute -right-1 -top-1 text-[8px]">⚡</span>}
          </div>
        </div>

        <div className="w-8 h-8 rounded-full p-[1.5px] bg-gradient-to-tr from-cyan-500 via-blue-500 to-purple-600 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
          <div className="w-full h-full rounded-full bg-[#0a1118] flex items-center justify-center overflow-hidden border border-black/50">
            <img src="https://tchinda-fogang.onrender.com/src/profil.jpg" alt="Tchinda" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

    </div>
  );
};

export default Taskbar;
