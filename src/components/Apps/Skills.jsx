// src/components/Apps/Skills.jsx
import React from 'react';

const SKILLS_DATA = [
  {
    category: "LANGAGES DE PROGRAMMATION",
    skills: [
      { name: "HTML5 & CSS3", desc: "Markup sémantique, responsive design", icon: "html5" },
      { name: "JavaScript", desc: "ES6+, DOM, asynchrone", icon: "javascript" },
      { name: "React", desc: "Frontend frameworks & hooks", icon: "react" },
      { name: "JSON", desc: "Échange de données", icon: "json"  },
      { name: "PHP", desc: "Backend development, APIs", icon: "php" },
      { name: "Python", desc: "Automatisation, scripting", icon: "python" },
      { name: "Node.js", desc: "Runtime JavaScript", icon: "nodejs" },
      { name: "Java", desc: "Applications robustes", icon: "java" },
      { name: "C / C++", desc: "Programmation système", icon: "cplusplus" },
    ]
  },
  {
    category: "BASES DE DONNÉES",
    skills: [
      { name: "PostgreSQL", desc: "SGBD relationnel avancé", icon: "postgresql" },
      { name: "MySQL", desc: "SGBD relationnel populaire", icon: "mysql" },
    ]
  },
  {
    category: "CYBERSÉCURITÉ",
    skills: [
      { name: "Audit de Vulnérabilités", desc: "Audit et testing", icon: "shield", customIcon: "🛡️" },
      { name: "Tests d'Intrusion", desc: "Pentest & exploitation", icon: "lock", customIcon: "🔓" },
    ]
  },
  {
    category: "GESTION SYSTÈME & SERVEURS",
    skills: [
      { name: "Linux", desc: "Administration système", icon: "linux" },
      { name: "Powershell", desc: "Scripting Windows", icon: "powershell" },
      { name: "Apache", desc: "Serveur web", icon: "apache" },
      { name: "Docker", desc: "Conteneurisation", icon: "docker" },
      { name: "GitHub", desc: "Contrôle de version", icon: "github" },
      { name: "Markdown", desc: "Documentation", icon: "markdown" },
    ]
  },
  {
    category: "OUTILS & AUTRES",
    skills: [
      { name: "VS Code", desc: "Éditeur de texte", icon: "vscode" },
      { name: "Postman", desc: "Test API", icon: "postman" },
      { name: "Méthodes Agiles", desc: "Scrum, Kanban", icon: "git"},
    ]
  }
];

export default function Skills() {
  return (
    <div className="space-y-12 font-sans pb-10 custom-scrollbar">
      {SKILLS_DATA.map((cat, idx) => (
        <div key={idx} className="space-y-4">
          
          {/* TITRE DE LA CATÉGORIE */}
          <div className="flex items-center gap-4">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-cyan-400 whitespace-nowrap">
              {cat.category}
            </h3>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          </div>

          {/* GRILLE DES COMPÉTENCES */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {cat.skills.map((skill, sIdx) => (
              <div 
                key={sIdx} 
                className="group flex items-center gap-4 p-3 bg-[#0d131a]/60 border border-white/5 rounded-lg hover:border-cyan-500/40 hover:bg-cyan-500/5 transition-all duration-300 shadow-xl"
              >
                {/* LOGO BOX (Fini le Noir et Blanc !) */}
                <div className="w-12 h-12 shrink-0 bg-white/5 rounded-md flex items-center justify-center border border-white/5 group-hover:border-cyan-500/30 transition-colors p-2 shadow-inner">
                  {skill.customIcon ? (
                    <span className="text-xl drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]">
                      {skill.customIcon}
                    </span>
                  ) : (
                    <img 
                      src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}/${skill.icon}-original.svg`} 
                      alt={skill.name}
                      className="w-full h-full object-contain transition-transform group-hover:scale-110 duration-300"
                      // Si l'icône "-original" n'existe pas, on essaie la version "-plain"
                      onError={(e) => { 
                        if (!e.target.src.includes('-plain')) {
                          e.target.src = e.target.src.replace('-original.svg', '-plain.svg');
                        }
                      }}
                    />
                  )}
                </div>

                {/* TEXTE COMPÉTENCE */}
                <div className="flex flex-col min-w-0">
                  <span className="text-[13px] font-bold text-gray-100 group-hover:text-cyan-400 transition-colors truncate">
                    {skill.name}
                  </span>
                  <span className="text-[10px] text-gray-400 leading-tight">
                    {skill.desc}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}