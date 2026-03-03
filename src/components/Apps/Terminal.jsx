// src/components/Apps/Terminal.jsx
import React, { useState, useEffect, useRef } from 'react';

export default function Terminal() {
  const [history, setHistory] = useState([
    "TCHINDA OS [Version 1.0.42] - SECURE KERNEL BOOTED",
    "(c) 2024 Tchinda Corporation. Tous droits réservés.",
    "Session établie pour l'utilisateur : guest@tchinda-os",
    "",
    "Tapez 'help' pour voir la liste des protocoles disponibles.",
    ""
  ]);

  const [input, setInput] = useState("");
  
  const terminalEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
    inputRef.current?.focus();
  }, [history]);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  const processCommand = (cmd) => {
    const fullCmd = cmd.trim();
    const args = fullCmd.toLowerCase().split(' ');
    const command = args[0];
    let response = "";

    switch (command) {
      case 'help':
        response = [
          "--- PROTOCOLES DISPONIBLES ---",
          "about      : Afficher le profil du développeur",
          "projects   : Analyser la base de données projets",
          "skills     : Lister l'arsenal technologique",
          "ls         : Explorer le répertoire virtuel",
          "cat <file> : Lire le contenu d'un fichier (ex: cat bio.txt)",
          "whoami     : Afficher les privilèges utilisateur",
          "status     : État du système TchindaOS",
          "social     : Liens vers les réseaux externes",
          "date       : Synchronisation horloge système",
          "clear      : Purger l'affichage du terminal",
          "sudo       : Accès administrateur (restreint)"
        ];
        break;

      case 'about':
        response = [
          "NOM : Tchinda Fogang",
          "RÔLE : Développeur Fullstack & Analyste Sécurité",
          "DÉTAILS : Passionné par la création d'applications web robustes",
          "et l'intégration de protocoles de sécurité avancés. Expert en",
          "architectures modernes et interfaces futuristes."
        ];
        break;

      case 'projects':
        response = [
          "ACCÈS BDD PROJETS...",
          "1. NeoTrade OS - Plateforme Trading Crypto",
          "2. Cyber-Store - E-commerce Micro-services",
          "3. Z-Pulse      - Monitor Système Haute Performance",
          "Tapez 'projects' dans le Dock pour plus de détails visuels."
        ];
        break;

      case 'skills':
        response = [
          "--- STACK TECHNIQUE ---",
          "[FRONTEND] : React, Next.js, Tailwind CSS",
          "[BACKEND]  : Node.js, Python, Django, PHP",
          "[DATABASE] : PostgreSQL, MySQL, MongoDB",
          "[DEV OPS]  : Docker, Linux, Git, Nginx",
          "[SECURITY] : OWASP, Pentesting Junior"
        ];
        break;

      case 'ls':
        response = "drwxr-xr-x  1  root  guest  4096  bio.txt  projects.lnk  contact.cfg  secret.sh";
        break;

      case 'cat':
        if (args[1] === 'bio.txt') {
            response = "Développeur autodidacte curieux, je transforme des idées complexes en code propre et sécurisé.";
        } else if (args[1] === 'contact.cfg') {
            response = "Email: contact@tchinda.dev | Location: Yaoundé, CM";
        } else if (args[1] === 'secret.sh') {
            response = "C0D3_S0URC3_TCH1ND4_0S_ENCRYPTED_BY_AES256";
        } else {
            response = `cat: ${args[1] || 'null'}: Aucun fichier de ce nom dans le répertoire.`;
        }
        break;

      case 'whoami':
        response = "User: guest_42 | Role: Visitor | Status: Unauthorized_for_Sudo";
        break;

      case 'status':
        response = [
          "CPU  : [||||||||||----------] 42%",
          "MEM  : [||||||--------------] 28%",
          "NET  : SECURE CONNECTION ESTABLISHED",
          "OS   : TCHINDA-KERNEL v1.0.42 STABLE"
        ];
        break;

      case 'social':
        response = "GITHUB: https://github.com/votre-pseudo | LINKEDIN: https://linkedin.com/in/votre-nom";
        break;

      case 'date':
        response = "Current System Time: " + new Date().toLocaleString();
        break;

      case 'sudo':
        response = "guest n'apparaît pas dans le fichier sudoers. Cet incident sera signalé.";
        break;

      case 'clear':
        setHistory([]);
        return;

      case '':
        return;

      default:
        response = `Command '${command}' not found. Type 'help' for valid protocols.`;
    }

    const newHistory = [...history, `tchinda@os:~$ ${fullCmd}`];
    if (Array.isArray(response)) {
      setHistory([...newHistory, ...response, ""]);
    } else {
      setHistory([...newHistory, response, ""]);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      processCommand(input);
      setInput("");
    }
  };

  return (
    <div 
      className="h-full flex flex-col font-mono text-[13px] bg-black/40 backdrop-blur-md text-cyan-400 p-4 cursor-text select-text"
      onClick={focusInput}
    >
      <div className="flex-1 overflow-y-auto custom-scrollbar pr-2">
        <pre className="text-[10px] leading-none mb-6 text-cyan-500 opacity-80 select-none">
{`
  _______ _____ _    _ _____ _   _ _____          
 |__   __/ ____| |  | |_   _| \\ | |  __ \\   /\\    
    | | | |    | |__| | | | |  \\| | |  | | /  \\   
    | | | |    |  __  | | | | . \` | |  | |/ /\\ \\  
    | | | |____| |  | |_| |_| |\\  | |__| / ____ \\ 
    |_|  \\_____|_|  |_|_____|_| \\_|_____/_/    \\_\\
`}
        </pre>

        {history.map((line, index) => (
          <div key={index} className={line.startsWith('tchinda@os') ? "text-white font-bold mb-1" : "text-cyan-400/90 mb-0.5"}>
            {line}
          </div>
        ))}
        <div ref={terminalEndRef} />
      </div>

      <div className="mt-3 flex items-center gap-2 border-t border-white/5 pt-3">
        <span className="text-white font-bold shrink-0">tchinda@os:~$</span>
        <input
          ref={inputRef}
          type="text"
          className="bg-transparent border-none outline-none flex-1 text-cyan-200 caret-cyan-500 w-full"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          spellCheck="false"
          autoComplete="off"
        />
      </div>
    </div>
  );
}