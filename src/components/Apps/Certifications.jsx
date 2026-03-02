import React from 'react';
export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-8">
      <h2 className="text-2xl font-bold tracking-widest uppercase opacity-50">Let's Connect</h2>
      <div className="flex gap-6">
        <a href="mailto:contact@tonsite.com" className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center hover:bg-cyan-500/20 hover:border-cyan-500 transition-all shadow-lg shadow-cyan-500/10">📩</a>
        <a href="#" className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center hover:bg-blue-500/20 hover:border-blue-500 transition-all shadow-lg shadow-blue-500/10">🔗</a>
        <a href="#" className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white transition-all shadow-lg shadow-white/10">🐙</a>
      </div>
      <p className="text-xs opacity-40 uppercase tracking-widest font-bold">Disponible pour de nouveaux projets</p>
    </div>
  );
}