import React, { memo } from 'react';
import { PORTFOLIO_ITEMS } from '../constants';
import { WhatsAppButton } from './WhatsAppButton';

export const Portfolio: React.FC = memo(() => {
  return (
    <section className="py-24 bg-dark-950 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-brand-400 font-bold uppercase tracking-wider text-xs mb-2 block glow-text">Nosso Portfólio</span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-white">
              Projetos de <span className="italic text-slate-500">Alto Nível</span>
            </h2>
          </div>
          <div className="hidden md:block">
             <WhatsAppButton variant="outline" text="Ver mais projetos" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {PORTFOLIO_ITEMS.map((item, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl bg-dark-900 border border-white/5 cursor-pointer">
              <div className="aspect-w-4 aspect-h-3 overflow-hidden">
                {/* Performance: Lazy load off-screen images, async decoding */}
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  loading="lazy"
                  decoding="async"
                  width="800"
                  height="600"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                />
              </div>
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/50 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-300"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-brand-400 text-xs font-bold uppercase tracking-wider mb-2">{item.category}</p>
                    <h3 className="text-white text-2xl font-heading font-bold leading-tight group-hover:text-brand-100 transition-colors">{item.title}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center md:hidden">
            <WhatsAppButton variant="outline" text="Ver mais projetos" fullWidth />
        </div>
      </div>
    </section>
  );
});