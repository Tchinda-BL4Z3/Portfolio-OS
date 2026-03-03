// src/components/Apps/Certifications.jsx
import React from 'react';
import { Building2, Award } from 'lucide-react';
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
  },
  {
    id: "CERT-2024-002",
    title: "Cybersecurity Essentials",
    issuer: "Cisco Networking Academy",
    description: "Principes de base de la sécurité réseau, protection des données et menaces cyber.",
    date: "2023",
    verified: true,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=500",
  },
  {
    id: "CERT-2024-003",
    title: "Java Programming Masterclass",
    issuer: "Udemy / Oracle University",
    description: "Programmation orientée objet avancée, structures de données et algorithmes en Java.",
    date: "2024",
    verified: true,
    image: "https://images.unsplash.com/photo-1511376764136-24217e80cd0b?q=80&w=500",
  }
];

export default function Certifications() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 font-mono text-sm pb-10 custom-scrollbar">
      {CERTIFICATIONS_DATA.map((cert, index) => (
        <div 
          key={index} 
          className="flex flex-col bg-[#0d131a]/80 border border-white/5 rounded-sm overflow-hidden group hover:border-cyan-500/30 transition-all duration-500 shadow-2xl"
        >
          {/* --- 1. ZONE IMAGE (Remplacée par l'image réelle) --- */}
          <div className="relative h-44 bg-[#050b10] overflow-hidden">
            {/* L'image de la certification */}
            <img 
              src={cert.image} 
              alt={cert.title} 
              className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
            />
            
            {/* Overlay Gradient (pour l'effet de profondeur) */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d131a] via-transparent to-transparent opacity-80"></div>
            
            {/* Petit indicateur visuel au centre au survol */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
               <Award size={40} className="text-cyan-400/50" />
            </div>
          </div>

          {/* --- 2. CONTENU --- */}
          <div className="p-5 flex flex-col flex-1 space-y-4">
            
            {/* Section Émetteur (Issuer) */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                <Building2 size={14} />
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] uppercase tracking-[0.2em] text-white/30 font-black">Issuer</span>
                <span className="text-[12px] font-bold text-gray-200">{cert.issuer}</span>
              </div>
            </div>

            {/* Titre et Description */}
            <div className="space-y-2">
              <h3 className="text-lg font-black tracking-tight text-white group-hover:text-cyan-400 transition-colors uppercase">
                {cert.title}
              </h3>
              <p className="text-[11px] text-gray-400 leading-relaxed font-light min-h-[48px]">
                {cert.description}
              </p>
            </div>

            {/* Séparateur technique */}
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

            {/* Footer de la carte */}
            <div className="flex justify-between items-center pt-1">
              {/* Badge Vérifié (Style image) */}
              {cert.verified && (
                <div className="flex items-center gap-2 px-2 py-1 bg-green-500/5 border border-green-500/20 rounded-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_#22c55e]"></div>
                  <span className="text-[9px] font-black text-green-500 tracking-widest uppercase">Verified</span>
                </div>
              )}

              {/* Date d'émission */}
              <div className="flex flex-col items-end">
                <span className="text-[9px] uppercase text-white/20 font-bold tracking-tighter">Issued: {cert.date}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}