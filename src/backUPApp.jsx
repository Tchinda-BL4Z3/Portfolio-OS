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
  LayoutGrid,
  Globe,
  Folder,
  Search,
  Code2
} from 'lucide-react'; 
import { motion, AnimatePresence } from 'framer-motion';

// Import des composants système
import Taskbar from './components/OS/Taskbar';
import Window from './components/OS/Window';
import BootScreen from './components/OS/BootScreen';
import { useWindowManager } from './hooks/useWindowManager';
import { useClock } from './hooks/useClock';
import { useSounds } from './hooks/useSounds';
import wallpaperImg from './assets/abstract-digital-grid-black-background.jpg';

// Import des contenus d'applications
import About from './components/Apps/About';
import Projects from './components/Apps/Projects';
import Terminal from './components/Apps/Terminal';
import Skills from './components/Apps/Skills';
import Certifications from './components/Apps/Certifications';
import Contact from './components/Apps/Contacts';

function App() {
  const { playOpen, playClose } = useSounds();
  const { openApps, focusedApp, zIndexCounter, openApp, closeApp, focusApp } = useWindowManager(playOpen, playClose);
  const { time, date } = useClock();
  const [isBooting, setIsBooting] = useState(true);
  
  // NOUVEL ÉTAT : Pour suivre quel contenu est affiché dans chaque fenêtre ouverte
  // Cela permet de changer le contenu sans changer la "Key" de la fenêtre
  const [windowNavigation, setWindowNavigation] = useState({});

  const [contextMenu, setContextMenu] = useState({ show: false, x: 0, y: 0 });

  const handleContextMenu = (e) => {
    e.preventDefault();
    const x = e.pageX + 224 > window.innerWidth ? e.pageX - 224 : e.pageX;
    const y = e.pageY + 300 > window.innerHeight ? e.pageY - 300 : e.pageY;
    setContextMenu({ show: true, x, y });
  };

  useEffect(() => {
    const closeMenu = () => setContextMenu((prev) => ({ ...prev, show: false }));
    window.addEventListener('click', closeMenu);
    return () => window.removeEventListener('click', closeMenu);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.key === 'w' && focusedApp) {
        e.preventDefault();
        closeApp(focusedApp);
      }
      if (e.key === 'Tab' && openApps.length > 0) {
        e.preventDefault();
        const currentIndex = openApps.indexOf(focusedApp);
        const nextIndex = (currentIndex + (e.shiftKey ? -1 : 1) + openApps.length) % openApps.length;
        focusApp(openApps[nextIndex]);
      }
      if (e.key === 'Escape') {
        setContextMenu((prev) => ({ ...prev, show: false }));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [focusedApp, openApps, closeApp, focusApp]);

  const APP_CONFIG = {
    about: { title: "HOME", component: <About />, icon: <Home size={24} />, color: "#00f2ff", type: "app" },
    projects: { title: "PROJETS", component: <Projects />, icon: <FolderGit2 size={24} />, color: "#ffcc00", type: "app" },
    terminal: { title: "TERMINAL", component: <Terminal />, icon: <TerminalIcon size={24} />, color: "#00f2ff", type: "app" },
    skills: { title: "SKILLS", component: <Skills />, icon: <Cpu size={24} />, color: "#a855f7", type: "app" },
    certifications: { title: "CERTIFICATIONS", component: <Certifications />, icon: <Award size={24} />, color: "#22c55e", type: "app" },
    contact: { title: "CONTACT", component: <Contact />, icon: <Mail size={24} />, color: "#f43f5e", type: "app" },
    windows: { title: "WINDOWS", component: <div className="text-white/60 p-10">Gestionnaire de fenêtres système v1.0</div>, icon: <LayoutGrid size={24} />, color: "#00f2ff", type: "app" },
    browser: { title: "WEB BROWSER", component: <div className="text-white/60 p-10 text-center">Navigateur Web Sécurisé</div>, icon: <Globe size={24} />, color: "#60a5fa", type: "app" },
    sysinfo: { title: "SYS_INFOS", component: <div className="text-white/60 p-10">Analyse des ressources système...</div>, icon: <Info size={24} />, color: "#00f2ff", type: "app" },
    folder: { title: "FOLDER", component: <div className="text-white/60 p-10 italic">Explorateur de fichiers /Documents</div>, icon: <Folder size={24} />, color: "#ffcc00", type: "app" },
  };

  const handleIconClick = (id) => {
    const app = APP_CONFIG[id];
    if (app.type === "link") {
      window.open(app.url, "_blank");
    } else {
      openApp(id);
    }
  };

  // NOUVELLE LOGIQUE : Change le contenu interne de la fenêtre sans la recréer
  const handleNavigateInternal = (instanceId, nextAppId) => {
    setWindowNavigation(prev => ({
      ...prev,
      [instanceId]: nextAppId
    }));
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

      <Taskbar onOpenApp={openApp} />

      <main className="relative z-10 h-full w-full p-6">
        
        {/* --- GRANDE HORLOGE --- */}
        <motion.div 
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 0.9 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="absolute top-24 right-12 text-right select-none"
        >
            <h1 className="text-[110px] font-extralight leading-none tracking-tighter drop-shadow-2xl">
                {time}
            </h1>
            <p className="text-cyan-400 uppercase tracking-[0.4em] text-xs font-bold mt-3 drop-shadow-[0_0_10px_rgba(34,211,238,0.4)]">
                {date}
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

        {/* --- FENÊTRES ACTIVES (CORRIGÉ POUR LA FLUIDITÉ) --- */}
        <AnimatePresence>
          {openApps.map((instanceId) => {
            // On détermine quel contenu afficher pour cette instance de fenêtre
            const currentContentId = windowNavigation[instanceId] || instanceId;
            const appConfig = APP_CONFIG[currentContentId];

            return (
              <Window 
                key={instanceId} // La clé reste l'ID d'origine pour ne pas recréer le composant
                id={currentContentId} // L'ID du contenu actuel pour la sidebar
                title={appConfig.title}
                onClose={() => closeApp(instanceId)}
                onFocus={() => focusApp(instanceId)}
                onOpenApp={openApp}
                // On passe la fonction de navigation interne
                onNavigate={(nextId) => handleNavigateInternal(instanceId, nextId)} 
                isFocused={focusedApp === instanceId}
                zIndex={focusedApp === instanceId ? zIndexCounter : 10}
              >
                {appConfig.component}
              </Window>
            );
          })}
        </AnimatePresence>

        {/* --- DOCK --- */}
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20, delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-[1000]"
        >
            <div className="bg-[#12181f]/70 backdrop-blur-3xl px-6 py-2.5 rounded-full border border-white/10 flex items-center gap-2 shadow-[0_30px_60px_rgba(0,0,0,0.6)] ring-1 ring-white/5">
                
                <button 
                  onClick={() => openApp('about')}
                  className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center shadow-[0_0_25px_rgba(37,99,235,0.5)] transition-all hover:scale-110 active:scale-90 hover:brightness-110"
                >
                    <LayoutGrid size={26} className="text-white" />
                </button>
                
                <div className="w-[1px] h-8 bg-white/10 mx-2"></div>
                
                <div className="flex items-center gap-1">
                  {[
                    { id: 'terminal', icon: <TerminalIcon size={24} />, color: 'text-blue-500' },
                    { id: 'browser', icon: <Globe size={24} />, color: 'text-blue-400' },
                    { id: 'skills', icon: <Code2 size={24} />, color: 'text-purple-400' },
                    { id: 'folder', icon: <Folder size={24} />, color: 'text-yellow-500' }
                  ].map((item) => {
                    const isOpen = openApps.includes(item.id);
                    const isFocused = focusedApp === item.id;
                    return (
                      <div key={item.id} className="relative flex flex-col items-center group">
                        <button 
                          onClick={() => handleIconClick(item.id)}
                          className={`w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300 hover:bg-white/10 group-hover:-translate-y-1 ${isFocused ? 'bg-white/5' : ''}`}
                        >
                          <span className={`${item.color} ${!isFocused && 'opacity-60 group-hover:opacity-100'} transition-opacity`}>
                            {item.icon}
                          </span>
                        </button>
                        {isOpen && (
                          <div className={`absolute -bottom-1 w-1 h-1 rounded-full transition-all duration-500 ${isFocused ? 'bg-blue-500 shadow-[0_0_8px_#3b82f6] w-1.5' : 'bg-white/30'}`}></div>
                        )}
                      </div>
                    );
                  })}
                </div>

                <div className="w-[1px] h-8 bg-white/10 mx-2"></div>

                <div className="flex items-center gap-4 px-2">
                  <button 
                    onClick={() => openApp('sysinfo')}
                    className="w-11 h-11 flex items-center justify-center rounded-full transition-all text-white/40 hover:text-white hover:bg-white/5"
                  >
                    <Search size={22} />
                  </button>
                  
                  <button 
                    onClick={() => openApp('contact')}
                    className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/5 transition-transform hover:scale-110 shadow-lg"
                  >
                    <img 
                      src="https://img.freepik.com/vecteurs-libre/jeune-femme-dessin-anime-visage-souriant_1308-174441.jpg" 
                      alt="profile" 
                      className="w-full h-full object-cover bg-[#fdecd2]" 
                    />
                  </button>
                </div>
            </div>
        </motion.div>

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
              
              <button onClick={() => window.location.reload()} className="w-full text-left px-3 py-2 text-[10px] text-gray-300 hover:bg-cyan-500 hover:text-black rounded-lg transition-all flex justify-between items-center group">
                <div className="flex items-center gap-2"><RefreshCw size={12}/> REFRESH_SESSION</div>
                <span className="opacity-30 group-hover:opacity-100 text-[8px]">F5</span>
              </button>

              <button onClick={() => openApp('terminal')} className="w-full text-left px-3 py-2 text-[10px] text-gray-300 hover:bg-cyan-500 hover:text-black rounded-lg transition-all flex justify-between items-center group">
                <div className="flex items-center gap-2"><TerminalIcon size={12} className="text-cyan-400 group-hover:text-black"/> OPEN_TERMINAL</div>
                <ChevronRight size={10} className="opacity-20 group-hover:opacity-100" />
              </button>

              <div className="h-[px] bg-white/5 my-1 mx-2"></div>

              <div className="px-3 py-1 text-[7px] text-white/20 uppercase tracking-widest font-bold">Fast_Access</div>
              
              <button onClick={() => openApp('projects')} className="w-full text-left px-3 py-1.5 text-[10px] text-gray-400 hover:text-cyan-400 transition-colors flex items-center gap-2">
                <FolderGit2 size={12}/> View_Projects
              </button>
              <button onClick={() => openApp('skills')} className="w-full text-left px-3 py-1.5 text-[10px] text-gray-400 hover:text-cyan-400 transition-colors flex items-center gap-2">
                <Cpu size={12}/> View_Skills
              </button>

              <div className="h-[px] bg-white/5 my-1 mx-2"></div>

              <button onClick={() => openApp('about')} className="w-full text-left px-3 py-2 text-[10px] text-gray-300 hover:bg-cyan-500 hover:text-black rounded-lg transition-all flex justify-between items-center group">
                <div className="flex items-center gap-2"><Info size={12}/> SYSTEM_INFO</div>
              </button>

              <div className="h-[1px] bg-white/10 my-1 mx-2 shadow-[0_0_5px_rgba(255,255,255,0.1)]"></div>

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