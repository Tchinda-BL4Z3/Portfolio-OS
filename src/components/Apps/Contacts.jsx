// src/components/Apps/Contacts.jsx
import React, { useState } from 'react';
import { 
  Mail, 
  Github, 
  Linkedin, 
  MessageSquare, 
  Facebook, 
  Copy, 
  Check, 
  ExternalLink, 
  Globe,
  ArrowUpRight
} from 'lucide-react';

const SOCIAL_LINKS = [
  {
    name: "Email",
    value: "tchindah2.0@gmail.com", 
    icon: <Mail size={24} />,
    link: "mailto:tchindah2.0@gmail.com",
    color: "text-rose-500",
    bg: "bg-rose-500/10",
    border: "group-hover:border-rose-500/50",
    canCopy: true
  },
  {
    name: "LinkedIn",
    value: "linkedin.com/in/tchinda-fogang-pierre-legrand",
    icon: <Linkedin size={24} />,
    link: "https://www.linkedin.com/in/tchinda-fogang-pierre-legrand-869330350/",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    border: "group-hover:border-blue-500/50",
    canCopy: false
  },
  {
    name: "GitHub",
    value: "github.com/Tchinda-BL4Z3",
    icon: <Github size={24} />,
    link: "https://github.com/Tchinda-BL4Z3",
    color: "text-white",
    bg: "bg-white/10",
    border: "group-hover:border-white/50",
    canCopy: false
  },
  {
    name: "Facebook",
    value: "Tchinda Fogang Pierre Legrand",
    icon: <Facebook size={24} />,
    link: "https://web.facebook.com/profile.php?id=61585979130909&locale=fr_FR",
    color: "text-blue-600",
    bg: "bg-blue-600/10",
    border: "group-hover:border-blue-600/50",
    canCopy: false
  }
];

export default function Contacts() {
  const [copied, setCopied] = useState("");

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(""), 2000);
  };

  return (
    <div className="flex flex-col h-full font-mono overflow-y-auto custom-scrollbar pr-2 pb-4">
      
      {/* --- SECTION ENTÊTE --- */}
      <div className="mb-10 text-center space-y-3">
        <h2 className="text-2xl font-black tracking-[0.3em] text-white uppercase italic drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
          _ÉTABLIR_CONNEXION
        </h2>
        <div className="flex items-center justify-center gap-3">
          <div className="flex space-x-1">
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-500/40"></div>
          </div>
          <span className="text-[9px] text-cyan-400 font-black uppercase tracking-[0.2em]">
            Protocole de communication : Sécurisé & Opérationnel
          </span>
        </div>
      </div>

      {/* --- GRILLE DES CONTACTS --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 flex-1 pb-6">
        {SOCIAL_LINKS.map((social, index) => (
          <div 
            key={index}
            className={`group relative p-6 bg-[#0d131a]/80 border border-white/5 rounded-xl transition-all duration-500 hover:bg-[#111821] ${social.border} shadow-2xl flex flex-col justify-between overflow-hidden`}
          >
            {/* Effet lumineux d'arrière-plan (Glow) */}
            <div className={`absolute -right-8 -top-8 w-32 h-32 ${social.bg} rounded-full blur-[70px] opacity-0 group-hover:opacity-30 transition-opacity duration-700`}></div>

            <div className="relative z-10 space-y-6">
              
              {/* Row 1: Icon & Quick Actions */}
              <div className="flex justify-between items-start">
                <div className={`p-3 rounded-xl ${social.bg} ${social.color} shadow-lg shadow-black/40 group-hover:scale-110 transition-transform duration-300`}>
                  {social.icon}
                </div>
                <div className="flex gap-2">
                  {social.canCopy && (
                    <button 
                      onClick={() => copyToClipboard(social.value)}
                      className={`p-2.5 transition-all bg-white/5 rounded-lg border border-white/10 ${copied === social.value ? 'text-green-500 border-green-500' : 'text-gray-500 hover:text-white hover:border-white/30'}`}
                      title="Copier dans le presse-papier"
                    >
                      {copied === social.value ? (
                        <Check size={16} className="drop-shadow-[0_0_5px_#22c55e]" />
                      ) : (
                        <Copy size={16} />
                      )}
                    </button>
                  )}
                  <a 
                    href={social.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2.5 text-gray-500 hover:text-cyan-400 transition-all bg-white/5 rounded-lg border border-white/10 hover:border-cyan-400/30"
                    title="Ouvrir le lien externe"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>

              {/* Row 2: Info Display */}
              <div>
                <h3 className="text-[9px] font-black text-white/20 uppercase tracking-[0.3em] mb-2 italic">
                  // {social.name}
                </h3>
                <p className="text-sm font-bold text-gray-300 group-hover:text-white transition-colors tracking-tight truncate">
                  {social.value}
                </p>
              </div>

              {/* Row 3: Action Button */}
              <a 
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-full py-3 px-4 flex items-center justify-center gap-2 overflow-hidden group/btn"
              >
                {/* Background animation on hover */}
                <div className="absolute inset-0 bg-white/5 group-hover/btn:bg-cyan-500 transition-all duration-300"></div>
                
                <span className="relative z-10 text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 group-hover/btn:text-black transition-colors duration-300">
                  ACCÉDER AU CANAL _
                </span>
                <ArrowUpRight className="relative z-10 text-gray-600 group-hover/btn:text-black transition-colors duration-300" size={14} />
              </a>

            </div>
          </div>
        ))}
      </div>

      {/* --- SECTION INFOS BAS DE PAGE --- */}
      <div className="mt-4 p-5 border border-cyan-500/30 bg-cyan-500/5 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="relative">
            <Globe className="text-cyan-400 animate-[spin_8s_linear_infinite]" size={24} />
            <div className="absolute inset-0 bg-cyan-400/20 blur-md rounded-full"></div>
          </div>
          <div>
            <p className="text-[9px] font-black text-cyan-400/60 uppercase tracking-[0.3em]">LOCALISATION_GÉO</p>
            <p className="text-[11px] text-gray-200 font-bold tracking-wide">Yaoundé, Cameroun [UTC+1]</p>
          </div>
        </div>
        
        <div className="h-10 w-px bg-cyan-500/20 hidden sm:block"></div>

        <div className="text-center sm:text-right">
          <p className="text-[9px] font-black text-cyan-400/60 uppercase tracking-[0.3em]">DISPONIBILITÉ_JOB</p>
          <p className="text-[11px] text-cyan-400 font-black italic tracking-wider drop-shadow-[0_0_5px_rgba(34,211,238,0.3)]">
            FREELANCE / FULL-TIME / CDI
          </p>
        </div>
      </div>

    </div>
  );
}