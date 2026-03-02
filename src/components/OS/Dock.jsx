// src/components/OS/Dock.jsx
export default function Dock({ apps, onOpenApp }) {
  return (
    <div className="fixed left-2 top-1/2 -translate-y-1/2 bg-[#1d1d1d]/80 backdrop-blur-md p-2 rounded-2xl flex flex-col gap-4 border border-white/10 shadow-xl">
      {Object.keys(apps).map((id) => (
        <button 
          key={id}
          onClick={() => onOpenApp(id)}
          title={apps[id].title}
          className="w-12 h-12 flex items-center justify-center text-3xl hover:bg-white/10 rounded-xl transition-all hover:scale-110 active:scale-90"
        >
          {apps[id].icon}
        </button>
      ))}
    </div>
  );
}