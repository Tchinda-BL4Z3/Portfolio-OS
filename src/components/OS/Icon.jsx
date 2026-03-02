// src/components/OS/Icon.jsx
import React from 'react';

export default function Icon({ title, icon, onDoubleClick }) {
  return (
    <div 
      onDoubleClick={onDoubleClick}
      className="flex flex-col items-center justify-center w-24 h-24 cursor-pointer rounded-lg hover:bg-white/10 transition-colors group"
    >
      <div className="text-4xl mb-1 group-hover:scale-110 transition-transform select-none">
        {icon}
      </div>
      <span className="text-white text-xs text-center font-medium drop-shadow-md select-none">
        {title}
      </span>
    </div>
  );
}