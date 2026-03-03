import React, { useState, useEffect } from 'react';
import { 
  Home, 
  FolderGit2, 
  Terminal as TerminalIcon, 
  Github, 
  Linkedin, 
  Mail, 
  Cpu, 
  Award 
} from 'lucide-react'; 

// Import des composants système
import Taskbar from './components/OS/Taskbar';
import Window from './components/OS/Window';
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

  // Mise à jour de l'horloge du bureau toutes les secondes
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Configuration des applications et des liens
  const APP_CONFIG = {
    about: { 
      title: "HOME", 
      component: <About />, 
      icon: <Home size={24} />, 
      color: "#00f2ff", 
      type: "app" 
    },
    projects: { 
      title: "PROJETS", 
      component: <Projects />, 
      icon: <FolderGit2 size={24} />, 
      color: "#ffcc00", 
      type: "app" 
    },
    terminal: { 
      title: "TERMINAL", 
      component: <Terminal />, 
      icon: <TerminalIcon size={24} />, 
      color: "#00f2ff", 
      type: "app" 
    },
    skills: { 
      title: "SKILLS", 
      component: <Skills />, 
      icon: <Cpu size={24} />, 
      color: "#a855f7", 
      type: "app" 
    },
    certifications: { 
      title: "CERTIFICATIONS", 
      component: <Certifications />, 
      icon: <Award size={24} />, 
      color: "#22c55e", 
      type: "app" 
    },
    contact: { 
      title: "CONTACT", 
      component: <Contact />, 
      icon: <Mail size={24} />, 
      color: "#f43f5e", 
      type: "app" 
    },
  };

  // Gestionnaire de clic centralisé
  const handleIconClick = (id) => {
    const app = APP_CONFIG[id];
    if (app.type === "link") {
      window.open(app.url, "_blank");
    } else {
      openApp(id);
    }
  };

  return (
    <div className="h-screen w-screen overflow-hidden bg-[#050b10] relative text-white font-sans selection:bg-cyan-500/30">
      
      {/* --- FOND D'ÉCRAN --- */}
      <div className="absolute inset-0 z-0">
        <img 
          src={wallpaperImg}
          className="w-full h-full object-cover opacity-100 select-none pointer-events-none"
          alt="wallpaper"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050b10] via-transparent to-[#050b10]/40 opacity-70"></div>
      </div>

      {/* --- 1. BARRE DU HAUT (TchindaOS Taskbar) --- */}
      <Taskbar />

      <main className="relative z-10 h-full w-full p-6">
        
        {/* --- 2. GRANDE HORLOGE (Côté Droit) --- */}
        <div className="absolute top-24 right-12 text-right select-none animate-in fade-in slide-in-from-right-10 duration-1000">
            <h1 className="text-[110px] font-extralight leading-none tracking-tighter opacity-90 drop-shadow-2xl">
                {currentTime.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
            </h1>
            <p className="text-cyan-400 uppercase tracking-[0.4em] text-xs font-bold mt-3 drop-shadow-[0_0_10px_rgba(34,211,238,0.4)]">
                {currentTime.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' })}
            </p>
        </div>

        {/* --- 3. ICONE HOME DU BUREAU (Côté Gauche) --- */}
        <div className="mt-24 ml-4">
            <button 
                onClick={() => openApp('about')}
                className="group flex flex-col items-center gap-2 transition-transform active:scale-95"
            >
                <div className="w-16 h-16 bg-cyan-500/10 border border-cyan-500/30 rounded-[20px] flex items-center justify-center backdrop-blur-md group-hover:bg-cyan-500/20 group-hover:border-cyan-500/60 transition-all shadow-[0_0_25px_rgba(0,242,255,0.15)] overflow-hidden p-3">
                    <img 
                        src="https://cdn-icons-png.flaticon.com/128/3474/3474353.png" 
                        alt="home" 
                        className="w-full h-full object-contain filter drop-shadow-[0_0_5px_rgba(0,242,255,0.5)]"
                    />
                </div>
                <span className="text-[9px] uppercase tracking-[0.2em] text-cyan-200/50 group-hover:text-cyan-400 transition-colors font-black">
                  HOME
                </span>
            </button>
        </div>

        {/* --- 4. AFFICHAGE DES FENÊTRES ACTIVES --- */}
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

        {/* --- 5. LE DOCK (Barre de navigation basse) --- */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[1000]">
            <div className="bg-[#0a1118]/70 backdrop-blur-3xl px-6 py-2.5 rounded-[30px] border border-white/10 flex items-center gap-3 shadow-[0_25px_50px_rgba(0,0,0,0.6)]">
                {Object.keys(APP_CONFIG).map((id) => {
                    const app = APP_CONFIG[id];
                    const isOpen = openApps.includes(id);
                    const isFocused = focusedApp === id;

                    return (
                        <button 
                            key={id}
                            onClick={() => handleIconClick(id)}
                            className="relative group p-3.5 rounded-2xl transition-all duration-300 hover:bg-white/5 active:scale-75"
                            style={{ color: app.color }}
                        >
                            <div className="filter drop-shadow-[0_0_10px_currentColor] transition-transform group-hover:-translate-y-2 duration-300">
                                {app.icon}
                            </div>

                            <div className="absolute -top-14 left-1/2 -translate-x-1/2 bg-[#050b10]/95 text-white text-[8px] px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all border border-cyan-500/20 pointer-events-none uppercase tracking-[0.3em] whitespace-nowrap shadow-2xl">
                                {app.title}
                            </div>

                            {app.type === "app" && isOpen && (
                                <div 
                                    className={`absolute -bottom-1 left-1/2 -translate-x-1/2 rounded-full transition-all duration-500 ${isFocused ? 'w-5 h-[2px]' : 'w-1 h-1 opacity-50'}`}
                                    style={{ 
                                      backgroundColor: app.color,
                                      boxShadow: isFocused ? `0 0 12px ${app.color}` : 'none' 
                                    }}
                                ></div>
                            )}
                        </button>
                    );
                })}
            </div>
        </div>

      </main>
    </div>
  );
}

export default App;