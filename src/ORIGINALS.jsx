// src/App.jsx
import React, { useState, useEffect } from 'react';
import { 
  Home, 
  FolderGit2, 
  Terminal as TerminalIcon, 
  Github, 
  Linkedin, 
  Mail, 
  Cpu, 
  Award,
  RefreshCw,
  Info,
  LogOut,
  Monitor,
  ChevronRight,
  EyeOff,
  LayoutGrid
} from 'lucide-react'; 
import { motion, AnimatePresence } from 'framer-motion';

// Import des composants système
import Taskbar from './components/OS/Taskbar';
import Window from './components/OS/Window';
import BootScreen from './components/OS/BootScreen';
import { useWindowManager } from './hooks/useWindowManager';
import wallpaperImg from './assets/abstract-digital-grid-black-background.jpg';

// Import des contenus d'applications
import About from './components/Apps/About';
import Projects from './components/Apps/Projects';
import Terminal from './components/Apps/Terminal';
import Skills from './components/Apps/Skills';
import Certifications from './components/Apps/Certifications';
import Contact from './components/Apps/Contacts';

function App() {
  const { openApps, focusedApp, zIndexCounter, openApp, closeApp, focusApp } = useWindowManager();
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isBooting, setIsBooting] = useState(true);
  
  // ÉTAT POUR LE MENU CLIC DROIT
  const [contextMenu, setContextMenu] = useState({ show: false, x: 0, y: 0 });

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Gestion du Clic Droit
  const handleContextMenu = (e) => {
    e.preventDefault();
    const x = e.pageX + 224 > window.innerWidth ? e.pageX - 224 : e.pageX;
    const y = e.pageY + 300 > window.innerHeight ? e.pageY - 300 : e.pageY;
    setContextMenu({ show: true, x, y });
  };

  // Fermer le menu au clic gauche
  useEffect(() => {
    const closeMenu = () => setContextMenu((prev) => ({ ...prev, show: false }));
    window.addEventListener('click', closeMenu);
    return () => window.removeEventListener('click', closeMenu);
  }, []);

  const APP_CONFIG = {
    about: { title: "HOME", component: <About />, icon: <Home size={24} />, color: "#00f2ff", type: "app" },
    projects: { title: "PROJETS", component: <Projects />, icon: <FolderGit2 size={24} />, color: "#ffcc00", type: "app" },
    terminal: { title: "TERMINAL", component: <Terminal />, icon: <TerminalIcon size={24} />, color: "#00f2ff", type: "app" },
    skills: { title: "SKILLS", component: <Skills />, icon: <Cpu size={24} />, color: "#a855f7", type: "app" },
    certifications: { title: "CERTIFICATIONS", component: <Certifications />, icon: <Award size={24} />, color: "#22c55e", type: "app" },
    contact: { title: "CONTACT", component: <Contact />, icon: <Mail size={24} />, color: "#f43f5e", type: "app" },
  };

  const handleIconClick = (id) => {
    const app = APP_CONFIG[id];
    if (app.type === "link") {
      window.open(app.url, "_blank");
    } else {
      openApp(id);
    }
  };

  if (isBooting) {
    return <BootScreen onFinish={() => setIsBooting(false)} />;
  }

  return (
    <div 
      onContextMenu={handleContextMenu}
      className="h-screen w-screen overflow-hidden bg-[#050b10] relative text-white font-sans selection:bg-cyan-500/30"
    >
      
      {/* --- FOND D'ÉCRAN --- */}
      <motion.div 
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0"
      >
        <img src={wallpaperImg} className="w-full h-full object-cover select-none pointer-events-none" alt="wallpaper" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050b10] via-transparent to-[#050b10]/40 opacity-70"></div>
      </motion.div>

      <Taskbar />

      <main className="relative z-10 h-full w-full p-6">
        
        {/* --- GRANDE HORLOGE --- */}
        <motion.div 
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 0.9 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="absolute top-24 right-12 text-right select-none"
        >
            <h1 className="text-[110px] font-extralight leading-none tracking-tighter drop-shadow-2xl">
                {currentTime.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
            </h1>
            <p className="text-cyan-400 uppercase tracking-[0.4em] text-xs font-bold mt-3 drop-shadow-[0_0_10px_rgba(34,211,238,0.4)]">
                {currentTime.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' })}
            </p>
        </motion.div>

        {/* --- ICONE HOME BUREAU --- */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-24 ml-4 w-fit"
        >
            <button 
                onClick={() => openApp('about')}
                className="group flex flex-col items-center gap-2 transition-transform active:scale-95"
            >
                <div className="w-16 h-16 bg-cyan-500/10 border border-cyan-500/30 rounded-[20px] flex items-center justify-center backdrop-blur-md group-hover:bg-cyan-500/20 group-hover:border-cyan-500/60 transition-all shadow-[0_0_25px_rgba(0,242,255,0.15)] overflow-hidden p-3">
                    <img src="https://cdn-icons-png.flaticon.com/128/3474/3474353.png" alt="home" className="w-full h-full object-contain filter drop-shadow-[0_0_5px_rgba(0,242,255,0.5)]" />
                </div>
                <span className="text-[9px] uppercase tracking-[0.2em] text-cyan-200/50 group-hover:text-cyan-400 transition-colors font-black">HOME</span>
            </button>
        </motion.div>

        {/* --- FENÊTRES ACTIVES --- */}
        <AnimatePresence>
          {openApps.map((id) => (
            <Window 
              key={id} 
              title={APP_CONFIG[id].title}
              onClose={() => closeApp(id)}
              onFocus={() => focusApp(id)}
              isFocused={focusedApp === id}
              zIndex={focusedApp === id ? zIndexCounter : 10}
            >
              {APP_CONFIG[id].component}
            </Window>
          ))}
        </AnimatePresence>

        {/* --- LE DOCK --- */}
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[1000]"
        >
            <div className="bg-[#0a1118]/70 backdrop-blur-3xl px-6 py-2.5 rounded-[30px] border border-white/10 flex items-center gap-3 shadow-[0_25px_50px_rgba(0,0,0,0.6)]">
                {Object.keys(APP_CONFIG).map((id) => {
                    const app = APP_CONFIG[id];
                    return (
                        <motion.button 
                            key={id}
                            whileHover={{ scale: 1.3, y: -12 }}
                            whileTap={{ scale: 0.8 }}
                            onClick={() => handleIconClick(id)}
                            className="relative group p-3.5 rounded-2xl transition-colors hover:bg-white/5"
                            style={{ color: app.color }}
                        >
                            <div className="filter drop-shadow-[0_0_10px_currentColor]">{app.icon}</div>
                            {app.type === "app" && openApps.includes(id) && (
                                <motion.div layoutId="active-dot" className={`absolute -bottom-1 left-1/2 -translate-x-1/2 rounded-full ${focusedApp === id ? 'w-5 h-[2px]' : 'w-1 h-1 opacity-50'}`} style={{ backgroundColor: app.color, boxShadow: focusedApp === id ? `0 0 12px ${app.color}` : 'none' }} />
                            )}
                        </motion.button>
                    );
                })}
            </div>
        </motion.div>

        {/* --- MENU CLIC DROIT ENRICHI --- */}
        <AnimatePresence>
          {contextMenu.show && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              style={{ top: contextMenu.y, left: contextMenu.x }}
              className="fixed z-[99999] w-56 bg-[#0a0f14]/95 backdrop-blur-xl border border-cyan-500/30 rounded-xl shadow-2xl p-1.5 font-mono"
            >
              <div className="px-3 py-2 text-[8px] uppercase tracking-[0.3em] text-cyan-500/40 border-b border-white/5 mb-1 flex items-center gap-2 font-black">
                <Monitor size={10} /> TCHINDA_OS_MENU
              </div>
              
              {/* OPTIONS SYSTÈME */}
              <button onClick={() => window.location.reload()} className="w-full text-left px-3 py-2 text-[10px] text-gray-300 hover:bg-cyan-500 hover:text-black rounded-lg transition-all flex justify-between items-center group">
                <div className="flex items-center gap-2"><RefreshCw size={12}/> REFRESH_SESSION</div>
                <span className="opacity-30 group-hover:opacity-100 text-[8px]">F5</span>
              </button>

              {/* OUVRIR LE TERMINAL (NOUVEAU) */}
              <button onClick={() => openApp('terminal')} className="w-full text-left px-3 py-2 text-[10px] text-gray-300 hover:bg-cyan-500 hover:text-black rounded-lg transition-all flex justify-between items-center group">
                <div className="flex items-center gap-2"><TerminalIcon size={12} className="text-cyan-400 group-hover:text-black"/> OPEN_TERMINAL</div>
                <ChevronRight size={10} className="opacity-20 group-hover:opacity-100" />
              </button>

              <div className="h-[px] bg-white/5 my-1 mx-2"></div>

              {/* ACCÈS RAPIDE AUX DOSSIERS (NOUVEAU) */}
              <div className="px-3 py-1 text-[7px] text-white/20 uppercase tracking-widest font-bold">Fast_Access</div>
              
              <button onClick={() => openApp('projects')} className="w-full text-left px-3 py-1.5 text-[10px] text-gray-400 hover:text-cyan-400 transition-colors flex items-center gap-2">
                <FolderGit2 size={12}/> View_Projects
              </button>
              <button onClick={() => openApp('skills')} className="w-full text-left px-3 py-1.5 text-[10px] text-gray-400 hover:text-cyan-400 transition-colors flex items-center gap-2">
                <Cpu size={12}/> View_Skills
              </button>

              <div className="h-[px] bg-white/5 my-1 mx-2"></div>

              {/* OPTIONS D'AFFICHAGE */}
              {/* <button onClick={() => {}} className="w-full text-left px-3 py-2 text-[10px] text-gray-300 hover:bg-white/10 rounded-lg transition-all flex justify-between items-center">
                <div className="flex items-center gap-2"><EyeOff size={12}/> HIDE_ALL_WINDOWS</div>
              </button> */}

              <button onClick={() => openApp('about')} className="w-full text-left px-3 py-2 text-[10px] text-gray-300 hover:bg-cyan-500 hover:text-black rounded-lg transition-all flex justify-between items-center group">
                <div className="flex items-center gap-2"><Info size={12}/> SYSTEM_INFO</div>
              </button>

              <div className="h-[1px] bg-white/10 my-1 mx-2 shadow-[0_0_5px_rgba(255,255,255,0.1)]"></div>

              {/* QUITTER */}
              <button onClick={() => window.close()} className="w-full text-left px-3 py-2 text-[10px] text-red-400 hover:bg-red-500 hover:text-white rounded-lg transition-all flex justify-between items-center group">
                <div className="flex items-center gap-2"><LogOut size={12}/> TERMINATE_OS</div>
                <span className="opacity-50 font-black">X</span>
              </button>
            </motion.div>
          )}
        </AnimatePresence>

      </main>
    </div>
  );
}

export default App;