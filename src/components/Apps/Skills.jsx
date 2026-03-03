// src/components/Apps/Skills.jsx
import React from 'react';

const SKILLS_DATA = [
  {
    category: "01. CORE_LANGUAGES",
    skills: [
      { 
        name: "HTML5 & CSS3", 
        desc: "Architecture sémantique et design système", 
        details: ["Flexbox/Grid Layouts", "Animations CSS3 & Keyframes", "Responsive Web Design"],
        icon: "html5" 
      },
      { 
        name: "JavaScript", 
        desc: "Moteur de logique asynchrone", 
        details: ["ES6+ Syntax", "DOM Manipulation", "Async/Await & Fetch API"],
        icon: "javascript" 
      },
      { 
        name: "TypeScript", 
        desc: "Super-set typé pour la robustesse", 
        details: ["Static Typing", "Interfaces & Types", "Enhanced Debugging"],
        icon: "typescript" 
      },
      { 
        name: "JSON", 
        desc: "Format universel d'échange de données et de configuration", 
        details: ["API RESTful", "NoSQL / MongoDB", "Sérialisation"],
        icon: "json" 
      },
      { 
        name: "Python", 
        desc: "Automatisation et traitement logique", 
        details: ["Data Analysis", "Scripting Automation", "Django/Flask Basics"],
        icon: "python" 
      },
      { 
        name: "Java", 
        desc: "Applications d'entreprise et architectures robustes", 
        details: ["JVM / JDK", "Spring Boot", "Design Patterns POO"],
        icon: "java" 
      },
      { 
        name: "C / C++", 
        desc: "Programmation système bas niveau", 
        details: ["Memory Management", "Algorithms", "Performance Optimization"],
        icon: "cplusplus" 
      },
      { 
        name: "SQL", 
        desc: "Requêtes optimisées et gestion de schémas", 
        details: ["Joies", "Indexation", "Transactions"],
        icon: "mysql" 
      },
      { 
        name: "PHP", 
        desc: "Scripting serveur et gestion de données", 
        details: ["POO", "MVC Architecture", "Session Management"],
        icon: "php" 
      },
      
    ]
  },
  {
    category: "02. MODERN_WEB_STACK",
    skills: [
      { 
        name: "React", 
        desc: "Bibliothèque UI basée sur les composants", 
        details: ["Hooks (State/Effect)", "Virtual DOM", "Context API"],
        icon: "react" 
      },
      { 
        name: "Vite", 
        desc: "Next-generation frontend tooling", 
        details: ["Lightning Fast HMR", "Optimized Build Pipeline", "Instant Server Start"],
        icon: "vitejs" 
      },
      { 
        name: "Tailwind CSS", 
        desc: "Framework CSS utilitaire haute performance", 
        details: ["Utility-First", "JIT Engine", "Custom Design Systems"],
        icon: "tailwindcss" 
      },
      { 
        name: "Node.js", 
        desc: "Environnement d'exécution JavaScript côté serveur", 
        details: ["Event Loop", "Express.js", "NPM Ecosystem"],
        icon: "nodejs" 
      },
    ]
  },
  {
    category: "03. DATABASE_CLOUDSYSTEM",
    skills: [
      { 
        name: "PostgreSQL", 
        desc: "Gestion de bases de données relationnelles", 
        details: ["Complex Queries", "Data Modeling", "Relational Integrity"],
        icon: "postgresql" 
      },
      { 
        name: "Firebase", 
        desc: "Plateforme Backend-as-a-Service", 
        details: ["Realtime DB", "Authentication", "Cloud Storage"],
        icon: "firebase" 
      },
      { 
        name: "Docker", 
        desc: "Virtualisation par conteneurs", 
        details: ["Containerization", "Docker Compose", "Isolated Environments"],
        icon: "docker" 
      },
    ]
  },
  {
    category: "04. SYSTEM_SECURITY",
    skills: [
      { 
        name: "Linux", 
        desc: "Administration système et kernel", 
        details: ["Bash Scripting", "User Management", "SSH & Server Config"],
        icon: "linux" 
      },
      { 
        name: "PowerShell", 
        desc: "Automatisation et administration Windows", 
        details: ["Scripting .NET", "Task Automation", "Active Directory"],
        icon: "powershell" 
      },
      { 
        name: "Cybersecurity", 
        desc: "Audit et protection des données", 
        details: ["Vulnerability Analysis", "Pentesting Basics", "Network Security"],
        icon: "shield", 
        customIcon: "🛡️" 
      },
    ]
  },
  {
    category: "05. DEV_TOOLS",
    skills: [
      { 
        name: "Figma", 
        desc: "Prototypage UI/UX et conception graphique", 
        details: ["Layout Design", "Components", "Prototyping"],
        icon: "figma" 
      },
      { 
        name: "GitHub", 
        desc: "Gestion de version et collaboration", 
        details: ["Git Flow", "Pull Requests", "CI/CD Basics"],
        icon: "github" 
      },
      { 
        name: "Postman", 
        desc: "Test et documentation d'APIs", 
        details: ["Request Debugging", "Automated Testing", "API Docs"],
        icon: "postman" 
      },
      { 
        name: "Markdown", 
        desc: "Documentation technique et structuration", 
        details: ["README.md", "Technical Docs", "Static Site Gen"],
        icon: "markdown",
        customIcon: (
          <img 
            src="https://img.icons8.com/color/48/markdown.png" 
            className="w-full h-full object-contain"
            alt="Markdown"
          />
        )
      },
    ]
  }
];

export default function Skills() {
  return (
    <div className="space-y-16 font-mono pb-20 custom-scrollbar">
      {SKILLS_DATA.map((cat, idx) => (
        <div key={idx} className="relative">
          
          {/* HEADER DE CATÉGORIE TYPE SYSTÈME */}
          <div className="flex items-center gap-4 mb-8">
            <div className="flex flex-col">
              <span className="text-[15px] text-cyan-500/50 mb-1 font-bold tracking-tighter">/SYSTEM/DATA/MODULES/</span>
              <h3 className="text-base font-black tracking-[0.4em] text-cyan-400 flex items-center gap-3">
                <span className="w-2 h-4 bg-cyan-500 shadow-[0_0_8px_#06b6d4]"></span>
                {cat.category}
              </h3>
            </div>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-cyan-500/30 via-cyan-500/5 to-transparent"></div>
          </div>

          {/* GRILLE DES SKILLS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cat.skills.map((skill, sIdx) => (
              <div 
                key={sIdx} 
                className="group relative p-5 bg-[#0a1118]/80 border border-white/5 hover:border-cyan-500/30 transition-all duration-500 hover:bg-cyan-500/[0.02] shadow-xl overflow-hidden"
              >
                {/* Décoration angle cyber */}
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-white/5 group-hover:border-cyan-500/30 transition-colors"></div>

                <div className="flex flex-col gap-4">
                  {/* HEADER CARD: ICON + TITLE */}
                  <div className="flex items-center gap-4 border-b border-white/5 pb-4">
                    <div className="w-10 h-10 shrink-0 bg-black rounded border border-white/10 flex items-center justify-center p-2 group-hover:border-cyan-500/40 transition-all shadow-inner">
                      {skill.customIcon ? (
                        <span className="text-xl">{skill.customIcon}</span>
                      ) : (
                        <img 
                          src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}/${skill.icon}-original.svg`} 
                          alt={skill.name}
                          className={`w-full h-full object-contain filter group-hover:scale-110 transition-transform duration-500
                            ${(skill.icon === 'github' || skill.icon === 'nextjs') ? 'invert brightness-200' : ''}
                          `}
                          onError={(e) => { 
                            if (!e.target.src.includes('-plain')) {
                              e.target.src = e.target.src.replace('-original.svg', '-plain.svg');
                            }
                          }}
                        />
                      )}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[14px] font-black text-white uppercase tracking-wider group-hover:text-cyan-400 transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-[10px] text-cyan-500/60 font-bold uppercase">Ready_to_deploy</span>
                    </div>
                  </div>

                  {/* DESCRIPTION & DETAILS */}
                  <div className="space-y-4">
                    <p className="text-[11px] text-gray-400 italic leading-relaxed">
                      {`// ${skill.desc}`}
                    </p>
                    
                    <ul className="space-y-1.5">
                      {skill.details.map((detail, dIdx) => (
                        <li key={dIdx} className="flex items-center gap-2 text-[12px] text-gray-500">
                          <span className="text-cyan-500 text-[12px] opacity-70">▹</span>
                          <span className="group-hover:text-gray-300 transition-colors">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Scanline effect subtlety */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.02] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))]"></div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}