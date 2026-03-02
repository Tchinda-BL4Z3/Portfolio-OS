// src/components/Apps/Projects.jsx
import React from 'react';

const projects = [
  {
    id: "PROJ-001",
    title: "Tchinda-OS v1",
    type: "System Design",
    status: "Operational",
    stack: "React / Tailwind",
    deployment: "Vercel",
    description: "Interface de portfolio immersive simulant un système d'exploitation futuriste.",
    image: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=500",
    operational: true
  },
  {
    id: "PROJ-002",
    title: "Cyber-Secure",
    type: "Security",
    status: "Encrypted",
    stack: "Node.js / Python",
    deployment: "Docker",
    description: "Dashboard de monitoring de sécurité avec protocoles de chiffrement bout-en-bout.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=500",
    operational: true
  },
  {
    id: "PROJ-003",
    title: "Quantum-Core",
    type: "Full Stack",
    status: "Beta",
    stack: "Next.js / Rust",
    deployment: "AWS",
    description: "Moteur de rendu haute performance pour l'analyse de données massives.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=500",
    operational: true
  },
  {
    id: "PROJ-004",
    title: "Alpha-Terminal",
    type: "CLI Tool",
    status: "Stable",
    stack: "C++ / Shell",
    deployment: "Offline",
    description: "Émulateur de terminal customisé avec intégration de scripts automatisés.",
    image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=500",
    operational: true
  }
];

export default function Projects() {
  return (
    /* 
       Conteneur Principal : 
       - h-full permet de prendre toute la place disponible.
       - pb-10 est crucial pour que le dernier projet soit scrollable au-dessus du bord.
    */
    <div className="h-full font-mono pb-10 custom-scrollbar">
      
      {/* Grille : 1 col sur mobile, 2 sur tablette, 3 sur grand écran */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-1">
        
        {projects.map((p, i) => (
          <div 
            key={i} 
            className="flex flex-col bg-[#0d131a]/60 border border-white/5 rounded-md overflow-hidden hover:border-cyan-500/40 transition-all duration-300 group shadow-xl"
          >
            
            {/* --- 1. SECTION IMAGE (Taille réduite : h-36) --- */}
            <div className="relative h-36 border-b border-white/5 overflow-hidden">
              <img 
                src={p.image} 
                alt={p.title} 
                className="w-full h-full object-cover opacity-30 grayscale group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-500"
              />
              {/* Gradient de l'OS */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d131a] to-transparent opacity-90"></div>

              {/* Titre minimaliste */}
              <div className="absolute bottom-2 left-3">
                <h3 className="text-[11px] font-black tracking-tighter text-white uppercase group-hover:text-cyan-400 transition-colors">
                  {p.title}
                </h3>
              </div>

              {/* Badge Opérationnel */}
              {p.operational && (
                <div className="absolute top-2 right-2 px-1.5 py-0.5 bg-green-500/10 border border-green-500/30 text-green-500 text-[8px] font-black tracking-tighter uppercase">
                  OP
                </div>
              )}
            </div>

            {/* --- 2. SECTION CONTENU (Compacte) --- */}
            <div className="p-3 space-y-4">
              
              {/* Description courte (Limitée à 2 lignes) */}
              <div className="space-y-1">
                <h4 className="text-[9px] font-black text-white/20 tracking-widest uppercase italic">_DESC</h4>
                <p className="text-gray-400 leading-tight text-[10px] h-8 overflow-hidden line-clamp-2">
                  {p.description}
                </p>
              </div>

              {/* Specs techniques resserrées */}
              <div className="space-y-1.5 border-t border-white/5 pt-2">
                <div className="flex justify-between items-center mb-1">
                  <h4 className="text-[9px] font-black text-white/20 tracking-widest uppercase italic">_SPECS</h4>
                  <span className="text-[9px] font-bold text-cyan-500 opacity-60 uppercase tracking-tighter italic">
                    {p.type}
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between">
                    <span className="text-gray-600 font-bold uppercase text-[9px]">ID:</span>
                    <span className="text-cyan-500/60 truncate ml-2 text-[10px]">{p.id}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 font-bold uppercase text-[9px]">STACK:</span>
                    <span className="text-gray-300 truncate ml-2 text-[10px] font-medium">{p.stack}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 font-bold uppercase text-[9px]">DEP:</span>
                    <span className="text-gray-300 truncate ml-2 text-[10px]">{p.deployment}</span>
                  </div>
                </div>
              </div>

              {/* Bouton Cyber */}
              <button className="w-full py-1.5 mt-1 border border-white/5 bg-white/5 text-cyan-400 text-[9px] font-black uppercase tracking-widest hover:bg-cyan-500 hover:text-black transition-all duration-300 cursor-pointer">
                VIEW PROJECT _
              </button>
            </div>
          </div>
        ))}
        
      </div>
    </div>
  );
}