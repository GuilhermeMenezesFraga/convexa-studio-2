import React, { memo } from 'react';
import { SERVICES } from '../constants';

export const Services: React.FC = memo(() => {
  return (
    <section className="py-32 bg-dark-950 relative" id="servicos">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-brand-400 font-bold tracking-[0.2em] text-xs uppercase mb-3 block glow-text">O Que Entregamos</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Além de um site bonito,<br/>uma <span className="text-brand-400">Estratégia de Poder.</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            Nossa entrega vai muito além do design. Construímos a infraestrutura completa para você vender mais.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            // First item spans 2 columns on desktop
            const colSpan = index === 0 || index === 3 ? "md:col-span-2" : "md:col-span-1";
            const bgGradient = index === 0 
                ? "bg-gradient-to-br from-dark-900 to-dark-800" 
                : "bg-dark-900/40";
            
            return (
              <div 
                key={index} 
                className={`
                    ${colSpan} ${bgGradient}
                    group relative p-10 rounded-3xl border border-white/5 overflow-hidden
                    hover:border-brand-500/30 transition-all duration-500
                `}
              >
                {/* Decoration Circles */}
                <div className="absolute -right-20 -top-20 w-64 h-64 bg-brand-500/5 rounded-full blur-3xl group-hover:bg-brand-500/10 transition-all"></div>

                <div className="relative z-10 h-full flex flex-col justify-between">
                    <div>
                        <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-500/20 group-hover:border-brand-500/50 transition-all duration-300">
                             <Icon className="w-6 h-6 text-white group-hover:text-brand-300" />
                        </div>
                        <h3 className="font-heading text-2xl font-bold text-white mb-4">
                            {service.title}
                        </h3>
                        <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                            {service.description}
                        </p>
                    </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
});