// src/components/Apps/About.jsx
import React from 'react';
import profil from '../../assets/T2.0.png';
import { Terminal, Shield, Target, Zap, MapPin, Code2, Activity, Cpu } from 'lucide-react';

export default function About() {
  return (
    <div className="w-full h-full text-white font-sans p-2 custom-scrollbar overflow-y-auto">
      
      {/* --- SECTION ENTÊTE --- */}
      <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start mb-10">
        
        {/* Photo de profil avec scanline animée */}
        <div className="relative shrink-0">
          <div className="w-36 h-36 rounded-xl overflow-hidden border border-green-500/30 shadow-[0_0_30px_rgba(34,197,94,0.15)] relative group">
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
          <h1 className="text-5xl font-black tracking-tighter uppercase italic">
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
              // { icon: <Zap size={12}/>, label: "EXP", val: "2+ Years" },
              { icon: <Shield size={12}/>, label: "SEC", val: "Pentest Jr" },
              { icon: <Activity size={12}/>, label: "LEVEL", val: "Lvl. 01" }
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
        <div className="md:col-span-2 relative border border-white/5 bg-[#0d131a]/40 p-6 rounded-lg backdrop-blur-sm shadow-xl">
          <div className="flex items-center gap-3 mb-5 border-b border-white/5 pb-3">
            <Terminal size={18} className="text-green-500" />
            <h2 className="text-[11px] font-mono font-black text-green-500 tracking-[0.4em] uppercase">
              _EXECUTIVE_SUMMARY
            </h2>
          </div>
          <div className="space-y-4 text-sm text-gray-300 leading-relaxed font-mono italic">
            <p>
              {`> Initialisation de la pensée critique... OK`} <br />
              {`> Analyse du profil en cours...`}
            </p>
            <p>
              <p>
                <Terminal size={18} className="text-green-500" /> Développeur <span className="text-white font-bold">Fullstack</span> passionné par la création d'applications web complètes et l'intégration de protocoles de <span className="text-green-500 font-bold">sécurité avancés</span>. Je conçois des écosystèmes numériques où la robustesse du code rencontre une interface utilisateur futuriste.
              </p> 
            </p>
            <p>
              <Terminal size={18} className="text-green-500" /> <span className="text-cyan-400"> Web Developer & Cybersecurity Enthusiast </span>dedicated to building resilient digital ecosystems. I specialize in crafting secure architectures paired with next-generation, intuitive interfaces. My mission is to bridge the gap between high-end technical performance and a seamless, security-first user experience.
            </p>
          </div>
          {/* Décoration Matrix-style */}
          <div className="absolute bottom-4 right-6 flex gap-1 opacity-20">
             {[1,2,3,4,5].map(i => <div key={i} className="w-1 h-4 bg-green-500"></div>)}
          </div>
        </div>

        {/* Focus Technique (Col 3) */}
        <div className="border border-green-500/20 bg-green-500/5 p-6 rounded-lg">
          <div className="flex items-center gap-3 mb-5">
            <Cpu size={18} className="text-green-500" />
            <h2 className="text-[11px] font-mono font-black text-green-500 tracking-[0.2em] uppercase">
              _CORE_FIELD
            </h2>
          </div>
          <ul className="space-y-4 font-mono">
            {[
              { label: "Frontend", val: "React / Next.js", color: "bg-blue-500" },
              { label: "Backend", val: "Node.js / Python", color: "bg-yellow-500" },
              { label: "Security", val: "OWASP / Pentest", color: "bg-green-500" },
              { label: "DevOps", val: "Docker / Linux", color: "bg-purple-500" }
            ].map((field, i) => (
              <li key={i} className="space-y-1">
                <div className="flex justify-between text-[10px] uppercase font-bold tracking-tighter">
                  <span className="text-gray-400">{field.label}</span>
                  <span className="text-white">{field.val}</span>
                </div>
                <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                  <div className={`h-full ${field.color} opacity-60 w-3/4`}></div>
                </div>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* --- FOOTER STATUS BAR --- */}
      <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 bg-[#0a0f14] p-3 border border-white/5 rounded-sm">
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
      </div>

    </div>
  );
}