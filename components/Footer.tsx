import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-slate-400 py-12 border-t border-white/10 relative z-10">
      <div className="container mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-white font-heading font-bold text-2xl mb-1 tracking-tight">Convexa Studio</h3>
          <p className="text-xs text-slate-500 uppercase tracking-widest">Performance & Design</p>
        </div>
        
        <div className="text-sm text-center md:text-right text-slate-500">
          <p>&copy; {new Date().getFullYear()} Convexa Studio. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};