// src/components/Apps/About.jsx
import React, { useState } from 'react';
import profil from '../../assets/T2.0.png';
import { 
  Terminal, 
  Shield, 
  Target, 
  Zap, 
  MapPin, 
  Code2, 
  Activity, 
  Cpu, 
  Folder, 
  FileCode, 
  User, 
  ChevronRight,
  Database,
  Archive
} from 'lucide-react';

export default function About() {
  // État pour simuler la navigation entre dossiers dans la fenêtre
  const [currentView, setCurrentView] = useState('main'); // 'main' ou 'identity'

  return (
    <div className="w-full h-full text-white font-sans custom-scrollbar overflow-y-auto pb-10">
      
      {/* --- BARRE DE NAVIGATION INTERNE (BREADCRUMBS STYLE) --- */}
      <div className="flex items-center gap-2 mb-8 text-[10px] font-mono bg-white/5 w-fit px-3 py-1.5 rounded-md border border-white/10">
        <span className="text-white/40">C:</span>
        <ChevronRight size={10} className="text-white/20" />
        <span className="text-white/40">Users</span>
        <ChevronRight size={10} className="text-white/20" />
        <span className="text-white/40">Tchinda</span>
        <ChevronRight size={10} className="text-white/20" />
        <span className="text-cyan-400 font-bold uppercase">Profile_Root</span>
      </div>

      {/* --- GRILLE DE DOSSIERS (Comme sur ton screenshot) --- */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mb-12">
        {[
          { id: 'projects', label: 'PROJETS', icon: <Folder className="text-cyan-500 fill-cyan-500/20" size={48} />, count: '00 Files' },
          { id: 'archives', label: 'ARCHIVES', icon: <Folder className="text-yellow-500 fill-yellow-500/20" size={48} />, count: '00 Files' },
          { id: 'design', label: 'DESIGN', icon: <Folder className="text-purple-500 fill-purple-500/20" size={48} />, count: '00 Files' },
          { id: 'code', label: 'CODE', icon: <Folder className="text-green-500 fill-green-500/20" size={48} />, count: '00 Files' },
          { id: 'config', label: 'CONFIG', icon: <Folder className="text-red-500 fill-red-500/20" size={48} />, count: '00 Files' },
        ].map((folder) => (
          <button 
            key={folder.id}
            className="group flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-white/5 transition-all border border-transparent hover:border-white/10 active:scale-95"
          >
            <div className="relative">
              {folder.icon}
              {/* Effet de halo coloré au survol */}
              <div className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-40 transition-opacity bg-current"></div>
            </div>
            <div className="text-center">
              <div className="text-[10px] font-black tracking-widest text-white/80 uppercase group-hover:text-white transition-colors">
                {folder.label}
              </div>
              {/* Modification ici : Taille augmentée et couleur blanche vive */}
              <div className="text-[11px] text-white font-mono mt-1.5 font-medium tracking-tight opacity-90">
                {folder.count}
              </div>
            </div>
          </button>
        ))}
      </div>

      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-12"></div>

      {/* --- FICHIER SELECTIONNÉ : IDENTITY_CARD.DAT --- */}
      <div className="mb-6 flex items-center gap-3">
        <FileCode size={20} className="text-green-500" />
        <h3 className="text-xs font-mono font-black text-white/60 uppercase tracking-[0.2em]">identity_card.dat</h3>
      </div>

      {/* --- SECTION ENTÊTE (Ton code original intégré) --- */}
      <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start mb-10 bg-[#161b22]/40 p-8 rounded-2xl border border-white/5 shadow-inner">
        
        {/* Photo de profil avec scanline animée */}
        <div className="relative shrink-0">
          <div className="w-40 h-40 rounded-xl overflow-hidden border border-green-500/30 shadow-[0_0_30px_rgba(34,197,94,0.15)] relative group">
            <img 
              src={profil} 
              alt="Tchinda Fogang" 
              className="w-full h-full object-cover transition-all duration-700 filter group-hover:brightness-110"
            />
            {/* Effet Scanline (Balayage) */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/10 to-transparent h-1/2 w-full animate-scanline pointer-events-none"></div>
            
            {/* Filtre de couleur Cyber */}
            <div className="absolute inset-0 bg-green-500/5 mix-blend-overlay"></div>
          </div>
          
          {/* Badge de Status */}
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#050b10] border border-green-500/50 px-3 py-1 rounded-sm shadow-[0_0_15px_rgba(34,197,94,0.3)]">
            <span className="text-[9px] font-mono font-black text-green-500 tracking-[0.3em] animate-pulse flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
              STATUS: ACTIVE
            </span>
          </div>
        </div>

        {/* Identité et Specs Rapides */}
        <div className="flex-1 text-center lg:text-left space-y-2">
          <h1 className="text-5xl font-black tracking-tighter italic">
            Tchinda <span className="text-green-500 drop-shadow-[0_0_10px_rgba(34,197,94,0.5)]">Fogang</span>
          </h1>
          <div className="flex items-center justify-center lg:justify-start gap-2 text-cyan-400">
            <Code2 size={16} />
            <span className="text-[11px] font-mono tracking-[0.3em] uppercase font-bold italic opacity-80">
              Fullstack Dev & Security Analyst
            </span>
          </div>
          
          {/* Grille de mini-détails (Data Specs) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
            {[
              { icon: <MapPin size={12}/>, label: "LOC", val: "Yaoundé, CM" },
              { icon: <Shield size={12}/>, label: "SEC", val: "Pentest Jr" },
              { icon: <Activity size={12}/>, label: "LEVEL", val: "Lvl. 01" },
              { icon: <Database size={12}/>, label: "CORE", val: "Node/React" }
            ].map((spec, i) => (
              <div key={i} className="bg-white/5 p-2 border border-white/10 rounded-sm hover:bg-white/10 transition-colors">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-green-500">{spec.icon}</span>
                  <span className="text-[8px] text-gray-500 font-black tracking-widest">{spec.label}</span>
                </div>
                <div className="text-[10px] text-gray-200 font-bold uppercase">{spec.val}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- SECTION BIO & EXPERTISE --- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Résumé Exécutif (Col 1 & 2) */}
        <div className="md:col-span-4 relative border border-white/5 bg-[#0d131a]/40 p-6 rounded-lg backdrop-blur-sm shadow-xl">
          <div className="flex items-center gap-3 mb-5 border-b border-white/5 pb-3">
            <Terminal size={18} className="text-green-500" />
            <h2 className="text-[11px] font-mono font-black text-green-500 tracking-[0.4em] uppercase">
              _EXECUTIVE_SUMMARY
            </h2>
          </div>
          <div className="space-y-4 text-sm text-gray-300 leading-relaxed font-mono italic">
            <div className="flex items-start gap-2">
              <span className="text-green-500 mt-1 shrink-0"><ChevronRight size={14}/></span>
              <p>{`Initialisation de la pensée critique... OK`}</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-500 mt-1 shrink-0"><ChevronRight size={14}/></span>
              <p>{`Analyse du profil en cours...`}</p>
            </div>
            <p className="pl-6 border-l border-green-500/20 py-2">
              Développeur <span className="text-white font-bold">Fullstack</span> passionné par la création d'applications web complètes et l'intégration de protocoles de <span className="text-green-500 font-bold">sécurité avancés</span>. Je conçois des écosystèmes numériques où la robustesse du code rencontre une interface utilisateur futuriste.
            </p>
            <p className="pl-6 border-l border-cyan-500/20 py-2">
              <span className="text-cyan-400">Web Developer & Cybersecurity Enthusiast</span> dedicated to building resilient digital ecosystems. I specialize in crafting secure architectures paired with next-generation, intuitive interfaces.
            </p>
          </div>
          {/* Décoration Matrix-style */}
          <div className="absolute bottom-4 right-6 flex gap-1 opacity-20">
             {[1,2,3,4,5].map(i => <div key={i} className="w-1 h-4 bg-green-500"></div>)}
          </div>
        </div>

        {/* Info Système (Col 3) */}
        {/* <div className="border border-white/5 bg-black/40 p-6 rounded-lg">
           <div className="flex items-center gap-3 mb-5 border-b border-white/5 pb-3">
            <Cpu size={18} className="text-cyan-500" />
            <h2 className="text-[11px] font-mono font-black text-cyan-500 tracking-[0.4em] uppercase">
              _SYSTEM_SPECS
            </h2>
          </div>
          <div className="space-y-4 font-mono text-[10px]">
            <div className="flex justify-between border-b border-white/5 pb-2">
              <span className="text-white/40 uppercase tracking-widest">OS_BUILD</span>
              <span className="text-white font-bold">2024.0.1</span>
            </div>
            <div className="flex justify-between border-b border-white/5 pb-2">
              <span className="text-white/40 uppercase tracking-widest">SHELL</span>
              <span className="text-white font-bold">ZSH/BASH</span>
            </div>
            <div className="flex justify-between border-b border-white/5 pb-2">
              <span className="text-white/40 uppercase tracking-widest">NETWORK</span>
              <span className="text-green-500 font-bold underline decoration-dotted">ENCRYPTED</span>
            </div>
            <div className="flex justify-between border-b border-white/5 pb-2">
              <span className="text-white/40 uppercase tracking-widest">THREAT_LVL</span>
              <span className="text-red-500 font-bold">NULL</span>
            </div>
          </div>
          <div className="mt-6 p-3 bg-cyan-500/5 rounded border border-cyan-500/10">
             <div className="text-[8px] text-cyan-400/60 uppercase font-black mb-1">Scanning Port: 8080</div>
             <div className="h-1 bg-white/5 w-full rounded-full overflow-hidden">
                <div className="h-full bg-cyan-500 w-1/3 animate-[loading_2s_infinite]"></div>
             </div>
          </div>
        </div> */}

      </div>

      {/* --- FOOTER STATUS BAR --- */}
      {/* <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 bg-[#0a0f14] p-4 border border-white/5 rounded-xl">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-ping"></div>
          <span className="text-[9px] font-mono text-green-500 uppercase tracking-[0.2em] font-black">
            System Load: 24.08%
          </span>
        </div>
        <div className="flex-1 h-[2px] bg-white/5 relative">
          <div className="absolute top-0 left-0 w-[24%] h-full bg-green-500 shadow-[0_0_10px_#22c55e]"></div>
        </div>
        <div className="flex items-center gap-4 opacity-40">
           <span className="text-[8px] font-mono uppercase">Encryption: AES-256</span>
           <span className="text-[8px] font-mono uppercase">Uptime: 99.9%</span>
        </div>
      </div> */}

    </div>
  );
}