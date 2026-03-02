// src/components/Apps/Terminal.jsx
import React, { useState, useEffect, useRef } from 'react';

export default function Terminal() {
  const [history, setHistory] = useState([
    "TCHINDA OS [Version 1.0.42]",
    "(c) 2024 Tchinda Corporation. Tous droits réservés.",
    "",
    "Tapez 'help' pour voir la liste des commandes disponibles.",
    ""
  ]);

  const [input, setInput] = useState("");
  
  // Références
  const terminalEndRef = useRef(null);
  const inputRef = useRef(null); // Référence pour l'input

  // Scroller vers le bas
  const scrollToBottom = () => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
    // Forcer le focus au chargement
    inputRef.current?.focus();
  }, [history]);

  // Fonction pour forcer le focus quand on clique n'importe où dans le terminal
  const focusInput = () => {
    inputRef.current?.focus();
  };

  const processCommand = (cmd) => {
    const command = cmd.trim().toLowerCase();
    let response = "";

    switch (command) {
      case 'help':
        response = [
          "--- COMMANDES DISPONIBLES ---",
          "about      : Infos sur le dev",
          "projects   : Liste des projets",
          "skills     : Skills tech",
          "clear      : Nettoyer l'écran",
          "date       : Heure actuelle",
          "ls         : Voir les dossiers",
        ];
        break;
      case 'about':
        response = "Tchinda : Développeur Full-Stack & UI Designer.";
        break;
      case 'clear':
        setHistory([]);
        return;
      case 'ls':
        response = "documents/  projects/  system_conf.yaml  readme.txt";
        break;
      case 'date':
        response = new Date().toLocaleString();
        break;
      case '':
        return;
      default:
        response = `Commande inconnue: ${command}`;
    }

    const newHistory = [...history, `tchinda@os:~$ ${cmd}`];
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
    /* 
       IMPORTANT: onClick={focusInput} permet de cliquer n'importe où 
       dans le noir pour activer le curseur 
    */
    <div 
      className="h-full flex flex-col font-mono text-[13px] bg-black/20 text-cyan-400 p-2 cursor-text"
      onClick={focusInput}
    >
      {/* Zone de texte historique */}
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
          <div key={index} className={line.startsWith('tchinda@os') ? "text-white font-bold" : "text-cyan-400/80"}>
            {line}
          </div>
        ))}
        <div ref={terminalEndRef} />
      </div>

      {/* Ligne de saisie active */}
      <div className="mt-2 flex items-center gap-2 border-t border-white/5 pt-2">
        <span className="text-white font-bold shrink-0">tchinda@os:~$</span>
        <input
          ref={inputRef}
          type="text"
          className="bg-transparent border-none outline-none flex-1 text-cyan-200 caret-cyan-500 w-full"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          autoFocus
          spellCheck="false"
          autoComplete="off"
        />
      </div>
    </div>
  );
}