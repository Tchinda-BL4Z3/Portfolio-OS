import React, { useRef } from 'react';
import { X, Minus, Square } from 'lucide-react';
import Draggable from 'react-draggable';

const Window = ({ title, children, onClose, onFocus, isFocused, zIndex }) => {
  // Création de la référence pour corriger l'erreur findDOMNode (React 18+)
  const nodeRef = useRef(null);

  return (
    <Draggable 
      nodeRef={nodeRef} 
      handle=".window-header" 
      bounds="parent"
      onMouseDown={onFocus} // Déclenche le focus dès qu'on touche la fenêtre
    >
      <div 
        ref={nodeRef}
        style={{ zIndex }}
        /* Styles de base pour la fenêtre : 
           - Ajout de 'h-[550px]' : Une hauteur fixe est nécessaire pour que le scroll s'active.
           - 'max-h-[85vh]' : Empêche la fenêtre de dépasser de l'écran sur les petits moniteurs.
        */
        className={`absolute top-[10%] left-[20%] min-w-[650px] h-[550px] max-h-[85vh] bg-[#0a0f14]/95 backdrop-blur-2xl rounded-2xl shadow-2xl flex flex-col border transition-all duration-300 ${
          isFocused 
          ? 'border-cyan-500/40 shadow-[0_0_40px_rgba(6,182,212,0.15)] ring-1 ring-cyan-500/20' 
          : 'border-white/10 opacity-90 shadow-black/50'
        }`}
      >
        {/* --- BARRE DE TITRE (Header Cyber) --- */}
        <div className={`window-header h-12 flex items-center justify-between px-6 cursor-move border-b border-white/5 rounded-t-2xl transition-colors ${
          isFocused ? 'bg-white/5' : 'bg-transparent'
        }`}>
          {/* Titre style OS : Petit, espacé, Cyan */}
          <div className="flex items-center gap-3">
            <div className={`w-1.5 h-1.5 rounded-full ${isFocused ? 'bg-cyan-400 animate-pulse' : 'bg-white/20'}`}></div>
            <span className={`text-[10px] uppercase tracking-[0.3em] font-bold select-none transition-colors ${
              isFocused ? 'text-cyan-400' : 'text-white/40'
            }`}>
              {title}
            </span>
          </div>

          {/* Boutons de contrôle minimalistes */}
          <div className="flex gap-4 items-center">
            <button className="text-white/30 hover:text-white transition-colors p-1">
              <Minus size={16} strokeWidth={2} />
            </button>
            <button className="text-white/30 hover:text-white transition-colors p-1">
              <Square size={14} strokeWidth={2} />
            </button>
            
            {/* Bouton Fermer (Style Cercle Rouge Cyber) */}
            <button 
              onClick={(e) => {
                e.stopPropagation(); // Empêche de focus la fenêtre au moment où on la ferme
                onClose();
              }} 
              className="ml-2 w-6 h-6 rounded-full flex items-center justify-center transition-all bg-red-500/10 border border-red-500/20 text-red-500 hover:bg-red-500 hover:text-white shadow-[0_0_10px_rgba(239,68,68,0.1)]"
            >
              <X size={14} strokeWidth={3} />
            </button>
          </div>
        </div>

        {/* --- ZONE DE CONTENU SCROLLABLE --- */}
        <div className="flex-1 p-6 overflow-y-auto overflow-x-hidden bg-transparent text-gray-200 selection:bg-cyan-500/30 custom-scrollbar">
          {/* 
              Le contenu (ex: Projects) est injecté ici. 
              Grâce à 'flex-1' et 'overflow-y-auto', si le contenu dépasse h-[550px], 
              le scroll apparaîtra automatiquement.
          */}
          {children}
        </div>

        {/* --- BARRE DE STATUT (Optionnelle, pour le look) --- */}
        <div className="h-6 border-t border-white/5 bg-black/20 rounded-b-2xl flex items-center px-4 justify-between">
            <div className="text-[8px] uppercase tracking-widest text-white/20 font-bold">System_Ready</div>
            <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"></div>
        </div>
      </div>
    </Draggable>
  );
};

export default Window;