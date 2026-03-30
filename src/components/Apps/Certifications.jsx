// src/components/Apps/Certifications.jsx
import React from 'react';
import { Building2, Award, ChevronRight, FileCheck, ShieldCheck, Calendar, ExternalLink } from 'lucide-react';
import imgWebDev from '../../assets/T2.0.png';

const CERTIFICATIONS_DATA = [
  {
    id: "CERT-2024-001",
    title: "Web Dev Basic",
    issuer: "Coursera / Google",
    description: "Fondamentaux du développement web : HTML, CSS, JavaScript et responsive design.",
    date: "2024",
    verified: true,
    image: imgWebDev,
    type: "FRONTEND_CORE"
  },
  {
    id: "CERT-2024-002",
    title: "Cybersecurity Essentials",
    issuer: "Cisco Networking Academy",
    description: "Principes de base de la sécurité réseau, protection des données et menaces cyber.",
    date: "2023",
    verified: true,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=500",
    type: "SECURITY_LEVEL_1"
  },
  {
    id: "CERT-2024-003",
    title: "Java Programming Masterclass",
    issuer: "Udemy / Oracle University",
    description: "Programmation orientée objet avancée, structures de données et algorithmes en Java.",
    date: "2024",
    verified: true,
    image: "https://images.unsplash.com/photo-1511376764136-24217e80cd0b?q=80&w=500",
    type: "SOFTWARE_ENG"
  }
];

export default function Certifications() {
  return (
    <div className="w-full h-full pb-10 custom-scrollbar overflow-y-auto">
      
      {/* --- FIL D'ARIANE (BREADCRUMBS) --- */}
      <div className="flex items-center gap-2 mb-8 text-[10px] font-mono bg-white/5 w-fit px-3 py-1.5 rounded-md border border-white/10">
        <span className="text-white/40">C:</span>
        <ChevronRight size={10} className="text-white/20" />
        <span className="text-white/40">Users</span>
        <ChevronRight size={10} className="text-white/20" />
        <span className="text-white/40">Tchinda</span>
        <ChevronRight size={10} className="text-white/20" />
        <span className="text-green-500 font-bold uppercase tracking-widest">Certifications_Vault</span>
      </div>

      {/* --- GRILLE DE CARTES --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {CERTIFICATIONS_DATA.map((cert, index) => (
          <div 
            key={index} 
            className="group flex flex-col bg-[#161b22]/40 border border-white/10 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-500 shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative"
          >
            {/* ID Technique en haut à gauche */}
            <div className="absolute top-3 left-3 z-20 px-2 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded text-[8px] font-mono text-cyan-400 font-bold tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity">
              {cert.id}
            </div>

            {/* --- 1. ZONE VISUELLE --- */}
            <div className="relative h-48 overflow-hidden bg-black">
              <img 
                src={cert.image} 
                alt={cert.title} 
                className="w-full h-full object-cover opacity-50 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 filter saturate-50 group-hover:saturate-100"
              />
              
              {/* Overlay Digital Scan */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-transparent to-transparent opacity-90"></div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-500 via-transparent to-transparent"></div>
              
              {/* Type de Certif (Badge flottant) */}
              <div className="absolute bottom-4 left-4 flex items-center gap-2">
                <div className="px-2 py-1 bg-cyan-500/20 border border-cyan-500/30 backdrop-blur-md rounded text-[9px] font-black text-cyan-400 tracking-widest uppercase">
                  {cert.type}
                </div>
              </div>
            </div>

            {/* --- 2. CONTENU INFO --- */}
            <div className="p-6 space-y-5">
              
              {/* Header: Issuer */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-cyan-400 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/20 transition-all">
                    <Building2 size={16} />
                  </div>
                  <div>
                    <p className="text-[8px] uppercase tracking-[0.3em] text-white/20 font-black">Authorized_By</p>
                    <p className="text-[12px] font-bold text-white group-hover:text-cyan-400 transition-colors">{cert.issuer}</p>
                  </div>
                </div>
                <FileCheck size={18} className="text-white/10 group-hover:text-cyan-500/40" />
              </div>

              {/* Titre & Desc */}
              <div className="space-y-2">
                <h3 className="text-md font-black tracking-tight text-white/90 leading-tight uppercase group-hover:text-white">
                  {cert.title}
                </h3>
                <p className="text-[11px] text-white/40 leading-relaxed font-medium italic">
                  "{cert.description}"
                </p>
              </div>

              {/* Barre Technique de séparation */}
              <div className="flex items-center gap-2">
                <div className="h-[1px] flex-1 bg-white/5"></div>
                <div className="w-1 h-1 rounded-full bg-white/10"></div>
                <div className="h-[1px] w-8 bg-white/5"></div>
              </div>

              {/* Footer: Date & Verif */}
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Calendar size={12} className="text-white/20" />
                    <span className="text-[11px] font-mono text-white font-bold">{cert.date}</span>
                  </div>
                  
                  {cert.verified && (
                    <div className="flex items-center gap-2 px-3 py-1 bg-green-500/5 border border-green-500/10 rounded-full">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                      <span className="text-[9px] font-black text-green-500 uppercase tracking-tighter">Verified_Auth</span>
                    </div>
                  )}
                </div>

                <button className="p-2 hover:bg-white/5 rounded-full text-white/20 hover:text-cyan-400 transition-all">
                  <ExternalLink size={16} />
                </button>
              </div>
            </div>

            {/* Décoration d'angle Cyber */}
            <div className="absolute bottom-0 right-0 w-8 h-8 opacity-10 pointer-events-none border-r-2 border-b-2 border-cyan-500 rounded-br-xl"></div>
          </div>
        ))}
      </div>

      {/* --- STATUS FOOTER --- */}
      <div className="mt-12 p-4 bg-[#161b22]/20 border border-white/5 rounded-xl flex items-center justify-between opacity-50">
        <div className="flex items-center gap-3">
          <ShieldCheck size={16} className="text-green-500" />
          <span className="text-[10px] font-mono uppercase tracking-[0.2em]">All certificates are cryptographically verified</span>
        </div>
        <div className="text-[10px] font-mono">Total_Records: {CERTIFICATIONS_DATA.length}</div>
      </div>

    </div>
  );
}