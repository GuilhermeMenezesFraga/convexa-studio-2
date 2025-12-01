import React, { memo } from 'react';
import { WhatsAppButton } from './WhatsAppButton';
import { Sparkles } from 'lucide-react';

export const Navbar: React.FC = memo(() => {
  return (
    <nav className="sticky top-0 z-50 bg-dark-950/60 backdrop-blur-xl border-b border-white/5 supports-[backdrop-filter]:bg-dark-950/30">
      <div className="container mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative">
              <div className="absolute inset-0 bg-brand-500 blur-lg opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative w-10 h-10 bg-gradient-to-br from-brand-950 to-black rounded-xl flex items-center justify-center border border-white/10 group-hover:border-brand-500/50 transition-colors">
                  <span className="text-white font-heading font-bold text-lg">C</span>
                  <div className="absolute -top-1 -right-1">
                    <Sparkles className="w-3 h-3 text-brand-400 animate-pulse" />
                  </div>
              </div>
            </div>
            <div className="leading-none">
              <span className="font-heading font-bold text-xl text-white tracking-tight block group-hover:text-brand-100 transition-colors">Convexa</span>
              <span className="text-[10px] text-brand-400 font-medium tracking-[0.2em] uppercase hidden sm:block">Studio</span>
            </div>
        </div>
        
        <div className="hidden md:block">
            <WhatsAppButton size="normal" text="Iniciar Projeto" variant="outline" />
        </div>
      </div>
    </nav>
  );
});