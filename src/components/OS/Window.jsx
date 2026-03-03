// src/components/OS/Window.jsx
import React, { useRef } from 'react';
import { X, Minus, Square } from 'lucide-react';
import Draggable from 'react-draggable';

const Window = ({ title, children, onClose, onFocus, isFocused, zIndex }) => {
  // Référence pour React-Draggable (évite l'erreur findDOMNode)
  const nodeRef = useRef(null);

  // Détection si l'utilisateur est sur mobile pour désactiver le drag
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <Draggable 
      nodeRef={nodeRef} 
      handle=".window-header" 
      bounds="parent"
      onMouseDown={onFocus}
      disabled={isMobile} // Désactive le drag sur mobile pour privilégier le scroll
    >
      <div 
        ref={nodeRef}
        style={{ zIndex }}
        /* 
           LOGIQUE DE POSITIONNEMENT ET RESPONSIVE :
           - fixed/absolute : Pour rester bien positionné.
           - top : 5% sur mobile, 12% sur PC pour laisser voir la barre du haut.
           - left : 3vw sur mobile, centré mathématiquement sur PC (calc 50% - demi-largeur).
           - width : 94% de l'écran sur mobile, 850px sur PC.
           - height : Adaptative (80% de l'écran) pour ne jamais déborder.
        */
        className={`fixed md:absolute 
          top-[6vh] md:top-[12vh] 
          left-[3vw] md:left-[calc(50%-425px)] 
          w-[94vw] md:w-[850px] 
          h-[82vh] md:h-[600px] 
          bg-[#0a0f14]/95 backdrop-blur-2xl rounded-2xl shadow-2xl flex flex-col border transition-all duration-300 ${
          isFocused 
          ? 'border-cyan-500/40 shadow-[0_0_40px_rgba(6,182,212,0.15)] ring-1 ring-cyan-500/20' 
          : 'border-white/10 opacity-90 shadow-black/50'
        }`}
      >
        {/* --- BARRE DE TITRE (Header Cyber) --- */}
        <div className={`window-header h-12 flex items-center justify-between px-4 md:px-6 cursor-move border-b border-white/5 rounded-t-2xl transition-colors ${
          isFocused ? 'bg-white/5' : 'bg-transparent'
        }`}>
          {/* Titre avec indicateur d'état */}
          <div className="flex items-center gap-3 overflow-hidden">
            <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${isFocused ? 'bg-cyan-400 animate-pulse' : 'bg-white/20'}`}></div>
            <span className={`text-[10px] uppercase tracking-[0.3em] font-black select-none transition-colors truncate ${
              isFocused ? 'text-cyan-400' : 'text-white/40'
            }`}>
              {title}
            </span>
          </div>

          {/* Boutons de contrôle minimalistes */}
          <div className="flex gap-2 md:gap-4 items-center">
            {/* On cache les contrôles secondaires sur mobile pour épurer */}
            <button className="hidden md:block text-white/30 hover:text-white transition-colors p-1">
              <Minus size={16} strokeWidth={2} />
            </button>
            <button className="hidden md:block text-white/30 hover:text-white transition-colors p-1">
              <Square size={14} strokeWidth={2} />
            </button>
            
            {/* Bouton Fermer (Plus gros sur mobile pour le tactile) */}
            <button 
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }} 
              className="ml-1 w-8 h-8 md:w-6 md:h-6 rounded-full flex items-center justify-center transition-all bg-red-500/10 border border-red-500/20 text-red-500 hover:bg-red-500 hover:text-white shadow-[0_0_10px_rgba(239,68,68,0.1)]"
            >
              <X size={18} md:size={14} strokeWidth={3} />
            </button>
          </div>
        </div>

        {/* --- ZONE DE CONTENU SCROLLABLE --- */}
        <div className="flex-1 p-4 md:p-8 overflow-y-auto overflow-x-hidden bg-transparent text-gray-200 selection:bg-cyan-500/30 custom-scrollbar">
          {children}
        </div>

        {/* --- BARRE DE STATUT (Look OS) --- */}
        <div className="h-6 border-t border-white/5 bg-black/20 rounded-b-2xl flex items-center px-4 justify-between select-none">
            <div className="text-[8px] uppercase tracking-widest text-white/20 font-black">
              {isFocused ? 'Process_Running' : 'Process_Standby'}
            </div>
            <div className="flex items-center gap-2">
              <div className="w-12 h-[1px] bg-white/5"></div>
              <div className="text-[8px] uppercase tracking-widest text-cyan-500/30 font-black italic">Tchinda_OS_v1</div>
            </div>
        </div>
      </div>
    </Draggable>
  );
};

export default Window;