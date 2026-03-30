// src/components/Apps/Contacts.jsx
import React, { useState } from 'react';
import { 
  Mail, 
  Github, 
  Linkedin, 
  Facebook, 
  Copy, 
  Check, 
  ExternalLink, 
  Globe,
  ArrowUpRight,
  ShieldCheck,
  Zap,
  Radio
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const SOCIAL_LINKS = [
  {
    name: "Email",
    value: "tchindah2.0@gmail.com", 
    icon: <Mail size={22} />,
    link: "mailto:tchindah2.0@gmail.com",
    color: "cyan",
    hex: "#06b6d4",
    canCopy: true,
    tag: "DIRECT_LINE"
  },
  {
    name: "LinkedIn",
    value: "tchinda-fogang-pierre-legrand",
    icon: <Linkedin size={22} />,
    link: "https://www.linkedin.com/in/tchinda-fogang-pierre-legrand-869330350/",
    color: "cyan",
    hex: "#06b6d4",
    canCopy: true,
    tag: "PROFESSIONAL_NET"
  },
  {
    name: "GitHub",
    value: "Tchinda-BL4Z3",
    icon: <Github size={22} />,
    link: "https://github.com/Tchinda-BL4Z3",
    color: "cyan",
    hex: "#06b6d4",
    canCopy: true,
    tag: "SOURCE_CODE"
  },
  {
    name: "Facebook",
    value: "Tchinda Fogang Pierre Legrand",
    icon: <Facebook size={22} />,
    link: "https://web.facebook.com/profile.php?id=61585979130909&locale=fr_FR",
    color: "cyan",
    hex: "#6366f1",
    canCopy: true,
    tag: "SOCIAL_COMM"
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
    <div className="flex flex-col h-full font-mono overflow-y-auto custom-scrollbar pr-2 pb-6">
      
      {/* --- SECTION ENTÊTE --- */}
      <div className="mb-12 relative">
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-64 h-24 bg-cyan-500/10 blur-[80px] rounded-full"></div>
        <div className="relative z-10 text-center space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-black tracking-[0.4em] text-white uppercase italic drop-shadow-[0_0_20px_rgba(34,211,238,0.3)]"
          >
            _ÉTABLIR_CONNEXION
          </motion.h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-cyan-500/50"></div>
            <div className="flex items-center gap-2">
              <Radio size={14} className="text-cyan-400 animate-pulse" />
              <span className="text-[10px] text-cyan-400/80 font-black uppercase tracking-[0.3em]">
                Signal: Stable | Encryption: Active
              </span>
            </div>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-cyan-500/50"></div>
          </div>
        </div>
      </div>

      {/* --- GRILLE DES CONTACTS STYLE CARDS --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {SOCIAL_LINKS.map((social, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="group relative"
          >
            {/* Background Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent rounded-2xl -z-10"></div>
            
            <div className={`relative p-1 rounded-2xl border border-white/5 bg-[#0d131a]/60 backdrop-blur-xl transition-all duration-500 group-hover:border-${social.color}-500/40 group-hover:shadow-[0_0_40px_rgba(0,0,0,0.4)] overflow-hidden`}>
              
              {/* Animated Corner accent */}
              <div className={`absolute top-0 right-0 w-16 h-16 bg-${social.color}-500/10 blur-2xl group-hover:opacity-100 opacity-0 transition-opacity`}></div>

              <div className="p-6 space-y-6">
                
                {/* Header: Icon & Meta */}
                <div className="flex justify-between items-start">
                  <div className="relative">
                    <div className={`absolute inset-0 bg-${social.color}-500/20 blur-xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-700`}></div>
                    <div className={`relative p-4 rounded-2xl bg-white/5 border border-white/10 text-white transition-all duration-300 group-hover:text-${social.color}-400 group-hover:border-${social.color}-500/30 group-hover:-translate-y-1 shadow-inner`}>
                      {social.icon}
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    {social.canCopy && (
                      <button 
                        onClick={() => copyToClipboard(social.value)}
                        className={`w-10 h-10 flex items-center justify-center transition-all rounded-xl border ${copied === social.value ? 'bg-green-500/20 border-green-500 text-green-500' : 'bg-white/5 border-white/10 text-white/30 hover:text-white hover:border-white/30'}`}
                      >
                        {copied === social.value ? <Check size={16} /> : <Copy size={16} />}
                      </button>
                    )}
                    <a 
                      href={social.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center text-white/30 hover:text-cyan-400 transition-all bg-white/5 rounded-xl border border-white/10 hover:border-cyan-400/30"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>

                {/* Body: Info */}
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className={`text-[8px] font-black px-2 py-0.5 rounded bg-${social.color}-500/10 text-${social.color}-500 tracking-[0.2em]`}>
                      {social.tag}
                    </span>
                    <div className="h-px flex-1 bg-white/5"></div>
                  </div>
                  <h3 className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em] pt-2 italic">
                    {social.name}
                  </h3>
                  <p className="text-[13px] font-bold text-gray-300 group-hover:text-white transition-colors truncate font-mono">
                    {social.value}
                  </p>
                </div>

                {/* Footer: Action Button */}
                <a 
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn relative w-full h-12 flex items-center justify-center gap-3 overflow-hidden rounded-xl border border-white/5 transition-all active:scale-95"
                >
                  <div className={`absolute inset-0 translate-y-full group-hover/btn:translate-y-0 bg-gradient-to-r from-${social.color}-600 to-${social.color}-400 transition-transform duration-300`}></div>
                  <span className="relative z-10 text-[10px] font-black uppercase tracking-[0.4em] text-white/40 group-hover/btn:text-black transition-colors duration-300">
                    OPEN_CONNECTION
                  </span>
                  <ArrowUpRight className="relative z-10 text-white/20 group-hover/btn:text-black transition-colors duration-300" size={14} />
                </a>
              </div>

              {/* Decorative side bar */}
              <div className={`absolute left-0 top-1/4 bottom-1/4 w-[2px] bg-${social.color}-500 opacity-0 group-hover:opacity-100 transition-opacity`}></div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* --- FOOTER: SYSTEM STATUS BAR --- */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 1, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-auto p-6 border border-cyan-500/20 bg-cyan-500/[0.03] backdrop-blur-md rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden group"
      >
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent"></div>
        
        <div className="flex items-center gap-5 relative z-10">
          <div className="relative group-hover:scale-110 transition-transform duration-500">
            <div className="absolute inset-0 bg-cyan-400/30 blur-xl rounded-full animate-pulse"></div>
            <div className="relative p-3 bg-black/40 border border-cyan-500/30 rounded-full">
              <Globe className="text-cyan-400 animate-[spin_12s_linear_infinite]" size={24} />
            </div>
          </div>
          <div className="space-y-1">
            <p className="text-[9px] font-black text-cyan-400/60 uppercase tracking-[0.3em] flex items-center gap-2">
              <MapPin size={10} /> LOCALISATION_GÉO
            </p>
            <p className="text-sm text-gray-100 font-bold tracking-tight uppercase">Yaoundé, <span className="text-cyan-400">Cameroun</span> <span className="text-[10px] font-medium text-white/30">[UTC+1]</span></p>
          </div>
        </div>
        
        <div className="h-12 w-px bg-white/5 hidden md:block"></div>

        <div className="text-center md:text-right relative z-10 space-y-2">
          <div className="flex items-center md:justify-end gap-2 text-[9px] font-black text-cyan-400/60 uppercase tracking-[0.3em]">
             <Zap size={10} /> DISPONIBILITÉ_SYSTÈME
          </div>
          <div className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-lg">
            <p className="text-xs text-cyan-400 font-black italic tracking-[0.15em] drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">
              FREELANCE_READY // OPEN_TO_OFFERS
            </p>
          </div>
        </div>
      </motion.div>

    </div>
  );
}

// Petit composant MapPin pour l'icône de localisation manquante dans l'import original
function MapPin({ size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
    </svg>
  );
}