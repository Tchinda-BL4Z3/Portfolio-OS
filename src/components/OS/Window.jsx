// src/components/OS/Window.jsx
import React, { useRef, useState, useCallback, useEffect } from 'react';
import { 
  X, 
  Minus, 
  Maximize2, 
  Minimize2, 
  Search, 
  MoreVertical, 
  Home, 
  LayoutGrid, 
  FolderGit2, 
  Cpu, 
  Award, 
  Mail, 
  Terminal as TerminalIcon,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import Draggable from 'react-draggable';
import { AnimatePresence, motion } from 'framer-motion';

const Window = ({ id, title, children, onClose, onFocus, isFocused, zIndex, onNavigate }) => {
  const nodeRef = useRef(null);
  const contentRef = useRef(null);
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  
  // DÉTECTION DU TERMINAL POUR AFFICHAGE MINIMALISTE
  const isTerminal = id === 'terminal';

  // --- ÉTATS DE LA FENÊTRE ---
  const initialSize = { 
    width: isTerminal ? 800 : 950, 
    height: isTerminal ? 500 : 550 
  };
  
  const [size, setSize] = useState(initialSize);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMaximized, setIsMaximized] = useState(false);
  const [isResizing, setIsResizing] = useState(false);

  // --- LOGIQUE DE REDIMENSIONNEMENT MANUEL ---
  const startResizing = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation(); 
    setIsResizing(true);
    onFocus();
  }, [onFocus]);

  const stopResizing = useCallback(() => {
    setIsResizing(false);
  }, []);

  const resize = useCallback((e) => {
    if (isResizing && !isMaximized && nodeRef.current) {
      const rect = nodeRef.current.getBoundingClientRect();
      
      const newWidth = e.clientX - rect.left;
      const newHeight = e.clientY - rect.top;
      
      setSize({
        width: Math.max(initialSize.width, newWidth),
        height: Math.max(initialSize.height, newHeight)
      });
    }
  }, [isResizing, isMaximized, initialSize]);

  useEffect(() => {
    if (isResizing) {
      window.addEventListener('mousemove', resize);
      window.addEventListener('mouseup', stopResizing);
      // Change le curseur globalement pendant le resize pour une meilleure UX
      document.body.style.cursor = 'nwse-resize';
    } else {
      document.body.style.cursor = 'default';
    }
    return () => {
      window.removeEventListener('mousemove', resize);
      window.removeEventListener('mouseup', stopResizing);
      document.body.style.cursor = 'default';
    };
  }, [isResizing, resize, stopResizing]);

  // --- LOGIQUE MAXIMISER ---
  const toggleMaximize = () => {
    if (isMaximized) {
      setSize(initialSize);
      setIsMaximized(false);
    } else {
      setSize({ width: window.innerWidth - 40, height: window.innerHeight - 130 });
      setIsMaximized(true);
      setPosition({ x: 0, y: 0 });
    }
  };

  // Menu Sidebar (Inter-navigation)
  const sidebarItems = [
    { appId: 'about', label: 'STATUS', icon: <LayoutGrid size={18} />, category: 'Système' },
    { appId: 'projects', label: 'PROJETS', icon: <FolderGit2 size={18} />, category: 'Portfolio' },
    { appId: 'skills', label: 'SKILLS', icon: <Cpu size={18} />, category: 'Portfolio' },
    { appId: 'certifications', label: 'CERTIFS', icon: <Award size={18} />, category: 'Portfolio' },
    { appId: 'contact', label: 'CONTACT', icon: <Mail size={18} />, category: 'Portfolio' },
  ];

  return (
    <Draggable 
      nodeRef={nodeRef} 
      handle=".window-header" 
      bounds="parent"
      disabled={isMobile || isMaximized}
      defaultPosition={{x: 50, y: 50}}
    >
      <div 
        ref={nodeRef}
        style={{ 
          zIndex,
          width: isMaximized ? 'calc(100vw - 40px)' : size.width,
          height: isMaximized ? 'calc(100vh - 130px)' : size.height,
          position: 'fixed',
          left: isMaximized ? 20 : undefined,
          top: isMaximized ? 20 : undefined
        }}
        className={`fixed flex flex-col overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.8)] border transition-[border,box-shadow,opacity] duration-300
          ${isTerminal ? 'bg-black/95' : 'bg-[#0d1117]/95'} 
          backdrop-blur-3xl rounded-2xl ${
          isFocused 
          ? 'border-white/20 ring-1 ring-cyan-500/20 shadow-[0_0_50px_rgba(6,182,212,0.1)]' 
          : 'border-white/5 opacity-90'
        }`}
      >
        {/* --- 1. BARRE DE TITRE (HEADER) --- */}
        <div className={`window-header h-14 flex items-center justify-between px-6 shrink-0 border-b border-white/5 cursor-grab active:cursor-grabbing ${
          isTerminal ? 'bg-white/5' : 'bg-[#161b22]/50'
        }`}>
          
          {/* BOUTONS ACTIONS (STYLE MAC) */}
          <div className="flex items-center gap-3 w-40">
            <button 
              onClick={(e) => { e.stopPropagation(); onClose(); }} 
              className="w-3.5 h-3.5 rounded-full bg-[#ff5f57] flex items-center justify-center group hover:brightness-125 transition-all shadow-lg shadow-red-500/20"
            >
              <X size={8} className="text-black opacity-0 group-hover:opacity-100 font-bold" />
            </button>
            <button className="w-3.5 h-3.5 rounded-full bg-[#febc2e] flex items-center justify-center group hover:brightness-125 transition-all">
              <Minus size={8} className="text-black opacity-0 group-hover:opacity-100 font-bold" />
            </button>
            <button 
              onClick={(e) => { e.stopPropagation(); toggleMaximize(); }} 
              className="w-3.5 h-3.5 rounded-full bg-[#28c840] flex items-center justify-center group hover:brightness-125 transition-all"
            >
              <Maximize2 size={8} className="text-black opacity-0 group-hover:opacity-100 font-bold" />
            </button>
          </div>

          {/* CENTRE : FIL D'ARIANE (EXPLORER) OU INFOS (TERMINAL) */}
          {!isTerminal ? (
            <div className="flex-1 max-w-xl hidden md:flex items-center gap-3 px-5 py-2 bg-black/40 border border-white/5 rounded-full mx-4 shadow-inner">
               <div className="flex gap-3 mr-3 border-r border-white/10 pr-4 text-white/30">
                  <ChevronLeft size={16} className="hover:text-cyan-400 cursor-pointer transition-colors" />
                  <ChevronRight size={16} className="hover:text-cyan-400 cursor-pointer transition-colors" />
               </div>
               <Home size={12} className="text-cyan-500/60" />
               <div className="flex items-center text-[10px] font-bold tracking-[0.1em]">
                  <span className="text-white/20 uppercase font-mono tracking-widest">TchindaOS</span>
                  <span className="mx-2 text-white/10">/</span>
                  <span className="text-white/40 uppercase">Root</span>
                  <span className="mx-2 text-white/10">/</span>
                  <span className="text-cyan-400 uppercase tracking-widest font-black italic">{title}</span>
               </div>
            </div>
          ) : (
            <div className="flex items-center gap-3 font-mono text-[11px] text-white/40 tracking-wider">
               <TerminalIcon size={14} className="text-green-500 animate-pulse" />
               <span className="bg-white/5 px-2 py-0.5 rounded">root@tchindaos: ~/{title.toLowerCase()}</span>
            </div>
          )}

          {/* ACTIONS DROITE */}
          <div className="flex items-center gap-4 w-40 justify-end">
            {!isTerminal && (
              <>
                <Search size={16} className="text-white/20 hover:text-cyan-400 transition-colors cursor-pointer" />
                <MoreVertical size={16} className="text-white/20 hover:text-cyan-400 transition-colors cursor-pointer" />
              </>
            )}
          </div>
        </div>

        {/* --- 2. CORPS DE LA FENÊTRE (SIDEBAR + CONTENU) --- */}
        <div className="flex-1 flex overflow-hidden bg-transparent">
          
          {/* SIDEBAR DYNAMIQUE */}
          {!isTerminal && (
            <aside className="w-64 border-r border-white/5 bg-[#0d1117]/30 p-6 hidden lg:flex flex-col gap-8 shrink-0">
              <div className="space-y-1">
                <p className="text-[9px] font-black text-white/20 tracking-[0.4em] px-3 mb-4 uppercase font-mono">Main_Directory</p>
                <nav className="space-y-1.5">
                  {sidebarItems.map((item) => (
                    <button 
                      key={item.appId}
                      onClick={() => onNavigate && onNavigate(item.appId)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 text-xs font-bold border ${
                        id === item.appId 
                        ? 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30 shadow-[0_0_20px_rgba(6,182,212,0.1)]' 
                        : 'text-white/30 border-transparent hover:bg-white/5 hover:text-white hover:border-white/5'
                      }`}
                    >
                      <span className={`${id === item.appId ? 'text-cyan-400' : 'text-white/20'}`}>{item.icon}</span>
                      <span className="tracking-[0.15em] uppercase">{item.label}</span>
                    </button>
                  ))}
                </nav>
              </div>

              {/* SECTION FILTRES / TAGS */}
              <div className="mt-auto space-y-4 pt-6 border-t border-white/5">
                 <div className="flex items-center justify-between px-3">
                    <span className="text-[8px] font-bold text-white/20 tracking-widest uppercase">Drive_Status</span>
                    <span className="text-[8px] font-bold text-green-500 font-mono">88% Free</span>
                 </div>
                 <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-cyan-500/40 w-[12%] shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
                 </div>
              </div>
            </aside>
          )}

          {/* ZONE DE CONTENU PRINCIPAL (Réactive au resize) */}
          <div 
            ref={contentRef}
            className={`flex-1 overflow-y-auto custom-scrollbar relative transition-colors duration-500 ${
              isTerminal ? 'p-0 bg-black/60' : 'p-8 bg-[#0d1117]/20'
            }`}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={id} 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.3 }}
                className="min-h-full w-full"
              >
                {/* Injection du contenu de l'application */}
                {children}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* --- 3. HANDLE DE REDIMENSIONNEMENT (COIN BAS-DROITE) --- */}
        {!isMaximized && !isMobile && (
          <div 
            onMouseDown={startResizing}
            className="absolute bottom-0 right-0 w-6 h-6 cursor-nwse-resize z-[1001] flex items-end justify-end p-1.5 group"
          >
            {/* Design minimaliste du handle */}
            <div className="w-2.5 h-2.5 border-r-2 border-b-2 border-white/10 group-hover:border-cyan-500 transition-colors rounded-br-sm"></div>
          </div>
        )}

        {/* --- 4. BARRE DE STATUT (FOOTER) --- */}
        <div className={`h-8 border-t border-white/5 flex items-center px-6 justify-between select-none transition-colors shrink-0 ${
          isFocused ? 'bg-[#161b22]/90' : 'bg-black/40'
        }`}>
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-2.5">
                <div className={`w-2 h-2 rounded-full ${isFocused ? 'bg-green-500 animate-pulse shadow-[0_0_10px_#22c55e]' : 'bg-white/10'}`}></div>
                <span className="text-[9px] font-black text-white/40 uppercase tracking-[0.2em] font-mono">
                  {isTerminal ? 'SHELL_ACTIVE' : 'READY_STATE'}
                </span>
              </div>
              <div className="w-[1px] h-3 bg-white/10"></div>
              {/* AFFICHAGE DYNAMIQUE DES DIMENSIONS LORS DU RESIZE */}
              <span className="text-[9px] font-mono text-cyan-500/40 tracking-tighter">
                {`RECT: ${Math.round(size.width)}px × ${Math.round(size.height)}px`}
              </span>
            </div>
            
            <div className="flex items-center gap-4">
               <span className="text-[8px] font-bold text-white/10 uppercase tracking-[0.3em] font-mono">
                 UTF-8 // {id.toUpperCase()}
               </span>
               <div className="text-[10px] font-black text-cyan-500/50 uppercase tracking-[0.3em] italic">
                 v1.4.2_STABLE
               </div>
             </div>
        </div>
      </div>
    </Draggable>
  );
};

export default Window;