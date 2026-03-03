// src/components/Apps/Contacts.jsx
import React, { useState } from 'react';
import { Mail, Github, Linkedin, MessageSquare, Facebook, Copy, Check, ExternalLink, Globe } from 'lucide-react';

const SOCIAL_LINKS = [
  {
    name: "Email",
    value: "votre.email@exemple.com",
    icon: <Mail size={24} />,
    link: "mailto:votre.email@exemple.com",
    color: "text-rose-500",
    bg: "bg-rose-500/10",
    border: "group-hover:border-rose-500/50",
    canCopy: true
  },
  {
    name: "LinkedIn",
    value: "linkedin.com/in/votre-nom",
    icon: <Linkedin size={24} />,
    link: "https://linkedin.com/in/votre-nom",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    border: "group-hover:border-blue-500/50",
    canCopy: false
  },
  {
    name: "GitHub",
    value: "github.com/votre-pseudo",
    icon: <Github size={24} />,
    link: "https://github.com/votre-pseudo",
    color: "text-white",
    bg: "bg-white/10",
    border: "group-hover:border-white/50",
    canCopy: false
  },
  {
    name: "Telegram / Discord",
    value: "@votre_pseudo",
    icon: <MessageSquare size={24} />,
    link: "https://t.me/votre_pseudo",
    color: "text-cyan-400",
    bg: "bg-cyan-400/10",
    border: "group-hover:border-cyan-400/50",
    canCopy: true
  },
  {
  name: "Facebook",
  value: "Ton Nom / Pseudo",
  icon: <Facebook size={24} />,
  link: "https://facebook.com/ton_pseudo",
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
    <div className="flex flex-col h-full font-mono">
      
      {/* --- HEADER SECTION --- */}
      <div className="mb-10 text-center space-y-2">
        <h2 className="text-2xl font-black tracking-[0.2em] text-white uppercase italic">
          _ÉTABLIR_CONNEXION
        </h2>
        <div className="flex items-center justify-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          <span className="text-[10px] text-green-500 font-bold uppercase tracking-widest">
            Serveur de communication : Opérationnel
          </span>
        </div>
      </div>

      {/* --- CONTACT GRID --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
        {SOCIAL_LINKS.map((social, index) => (
          <div 
            key={index}
            className={`group relative p-6 bg-[#0d131a]/60 border border-white/5 rounded-xl transition-all duration-300 hover:bg-[#141d26] ${social.border} shadow-xl overflow-hidden`}
          >
            {/* Effet de fond au survol */}
            <div className={`absolute -right-4 -top-4 w-24 h-24 ${social.bg} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity`}></div>

            <div className="relative z-10 flex flex-col h-full justify-between gap-6">
              
              <div className="flex justify-between items-start">
                <div className={`p-3 rounded-lg ${social.bg} ${social.color} shadow-lg`}>
                  {social.icon}
                </div>
                <div className="flex gap-2">
                  {social.canCopy && (
                    <button 
                      onClick={() => copyToClipboard(social.value)}
                      className="p-2 text-gray-500 hover:text-white transition-colors"
                      title="Copier"
                    >
                      {copied === social.value ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
                    </button>
                  )}
                  <a 
                    href={social.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 text-gray-500 hover:text-cyan-400 transition-colors"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">
                  {social.name}
                </h3>
                <p className="text-sm font-bold text-gray-200 truncate group-hover:text-white transition-colors">
                  {social.value}
                </p>
              </div>

              <a 
                href={social.link}
                className={`w-full py-2 text-center text-[10px] font-black uppercase tracking-widest rounded border border-white/5 bg-white/5 transition-all group-hover:bg-cyan-500 group-hover:text-black group-hover:border-cyan-500`}
              >
                Ouvrir le lien _
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* --- FOOTER / DISPONIBILITÉ --- */}
      <div className="mt-8 p-4 border border-cyan-500/20 bg-cyan-500/5 rounded-lg flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Globe className="text-cyan-400 animate-spin-slow" size={20} />
          <div>
            <p className="text-[10px] font-black text-cyan-400 uppercase tracking-widest">Localisation actuelle</p>
            <p className="text-xs text-gray-300">Remote / Yaoundé, Cameroun</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-[10px] font-black text-cyan-400 uppercase tracking-widest">Disponibilité</p>
          <p className="text-xs text-gray-300 italic font-bold">Freelance & CDI</p>
        </div>
      </div>
    </div>
  );
}