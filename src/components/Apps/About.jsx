// src/components/Apps/About.jsx
import React from 'react';
import profil from '../../assets/T2.0.png';
import { Terminal } from 'lucide-react';

export default function About() {
  return (
    <div className="w-full h-full text-white font-sans">
      
      {/* --- SECTION ENTÊTE (Profil) --- */}
      <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
        
        {/* Conteneur Image avec lueur verte et Badge ACTIVE */}
        <div className="relative group">
          <div className="w-48 h-48 rounded-sm overflow-hidden border-2 border-green-500/30 shadow-[0_0_25px_rgba(74,222,128,0.2)] transition-shadow duration-500 group-hover:shadow-[0_0_35px_rgba(74,222,128,0.4)]">
            <img 
              src={profil} // Assure-toi que le nom du fichier est correct
              alt="Tchinda Fogang" 
              className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
            />
          </div>
          {/* Badge "ACTIVE" style hacker */}
          <div className="absolute -bottom-2 -right-2 bg-black border border-green-500/50 px-2 py-0.5 shadow-lg">
            <span className="text-[10px] font-mono font-bold text-green-500 tracking-[0.2em] animate-pulse">
              ACTIVE
            </span>
          </div>
        </div>

        {/* Nom et Titre Professionnel */}
        <div className="flex-1 space-y-2 mt-2">
          <h1 className="text-6xl font-black tracking-tight leading-none">
            Tchinda
            <span className="text-green-500 drop-shadow-[0_0_10px_rgba(74,222,128,0.3)]"> Fogang</span>
          </h1>
          
          <div className="flex items-center gap-2 pt-4">
            <span className="text-yellow-500 font-mono text-lg font-bold">&gt;</span>
            <p className="text-yellow-500 font-mono text-sm tracking-widest uppercase">
              Développeur Web, Programmeur et Analyste Sécurité
            </p>
          </div>
        </div>
      </div>

      {/* --- SECTION EXECUTIVE SUMMARY (Style Terminal) --- */}
      <div className="relative border border-white/10 bg-black/40 rounded-sm p-8 backdrop-blur-sm overflow-hidden">
        {/* Titre de la section avec icône */}
        <div className="flex items-center gap-3 mb-6">
          <Terminal size={18} className="text-green-500" />
          <h2 className="text-xs font-mono font-black text-green-500 tracking-[0.3em] uppercase">
            Executive Summary
          </h2>
        </div>

        {/* Séparateur discret */}
        <div className="w-full h-[1px] bg-white/5 mb-6"></div>

        {/* Ligne de commande simulée */}
        {/* <div className="font-mono mb-6">
          <span className="text-green-400">tchinda@linux:~$</span>
          <span className="text-white ml-2">cat bio.txt</span>
        </div> */}

        {/* Bloc de texte (Le contenu du fichier bio.txt) */}
        <div className="relative border-l-2 border-white/10 pl-6 ml-1">
          <p className="text-lg text-gray-300 italic leading-relaxed font-light">
            Web Developer & Cybersecurity Enthusiast dedicated to building resilient digital ecosystems. I specialize in crafting secure architectures paired with next-generation, intuitive interfaces. My mission is to bridge the gap between high-end technical performance and a seamless, security-first user experience.
          </p>
        </div>

        {/* Curseur clignotant en bas */}
        <div className="mt-8">
           <span className="inline-block w-3 h-1 bg-green-500 animate-pulse"></span>
        </div>
      </div>

    </div>
  );
}