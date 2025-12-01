import React from 'react';
import { SERVICES } from '../constants';

export const Benefits: React.FC = () => {
  return (
    <section className="py-24 bg-dark-950 relative" id="beneficios">
      {/* Background Gradient Line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Por que investir numa <span className="text-brand-400">LP Profissional</span>?
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            Não desperdice cliques em um site comum. Nós criamos ecossistemas digitais desenhados psicologicamente para vender.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="group relative p-8 bg-dark-900/40 rounded-2xl border border-white/5 hover:border-brand-500/30 hover:bg-dark-900/60 transition-all duration-500 hover:-translate-y-2">
                {/* Hover Glow Background */}
                <div className="absolute inset-0 bg-brand-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="w-14 h-14 bg-dark-800 border border-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-500/20 group-hover:border-brand-500/50 transition-all duration-300 shadow-lg shadow-black/50">
                  <Icon className="w-7 h-7 text-white group-hover:text-brand-300 transition-colors" />
                </div>
                
                <h3 className="font-heading text-xl font-bold text-white mb-3 relative z-10">
                  {benefit.title}
                </h3>
                <p className="text-slate-400 leading-relaxed text-sm relative z-10 group-hover:text-slate-300 transition-colors">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};