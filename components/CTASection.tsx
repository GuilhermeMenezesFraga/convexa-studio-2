import React from 'react';
import { WhatsAppButton } from './WhatsAppButton';

export const CTASection: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background with complex gradients */}
      <div className="absolute inset-0 bg-dark-950"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-brand-900/40 via-dark-950 to-brand-900/40"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-600/20 blur-[120px] rounded-full"></div>
      
      {/* Abstract Texture */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
        <h2 className="font-heading text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight drop-shadow-lg">
          Seu negócio merece ser <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-white">Extraordinário.</span>
        </h2>
        
        <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light">
          A diferença entre um curioso e um cliente está na apresentação. <br className="hidden md:block"/>
          Vamos construir sua autoridade digital hoje?
        </p>
        
        <div className="flex flex-col items-center">
          <WhatsAppButton 
            text="Solicitar Orçamento no WhatsApp" 
            size="large" 
            variant="glow"
            className="w-full sm:w-auto scale-110"
          />
          <p className="mt-6 text-sm text-slate-500 flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Consultores online agora
          </p>
        </div>
      </div>
    </section>
  );
};