import React, { memo } from 'react';
import { Check, Star, Zap } from 'lucide-react';
import { WhatsAppButton } from './WhatsAppButton';
import { HERO_CONTENT } from '../constants';

export const Hero: React.FC = memo(() => {
  return (
    <section className="relative overflow-hidden pt-12 pb-24 lg:pt-32 lg:pb-40">
      
      {/* Cinematic Background Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-brand-600/10 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-indigo-900/20 rounded-full blur-[100px] mix-blend-screen"></div>
        
        {/* Grid Texture */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-xs font-bold tracking-widest text-brand-300 uppercase bg-white/5 border border-white/10 rounded-full backdrop-blur-md shadow-[0_0_15px_rgba(139,92,246,0.1)]">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
              Agenda Aberta para Novos Projetos
            </div>
            
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-8 tracking-tight">
              {HERO_CONTENT.headline.split('.')[0]}.<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-white to-brand-300 animate-text">
                {HERO_CONTENT.headline.split('.')[1]}
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light border-l-2 border-brand-500/30 pl-6">
              {HERO_CONTENT.subheadline}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 text-left max-w-lg mx-auto lg:mx-0">
              {HERO_CONTENT.bullets.map((bullet, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-500/10 flex items-center justify-center border border-brand-500/20">
                    <Check className="w-3 h-3 text-brand-300" />
                  </div>
                  <span className="text-slate-300 text-sm font-medium">{bullet}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-5">
              <WhatsAppButton 
                text={HERO_CONTENT.ctaText} 
                size="large" 
                variant="glow"
                className="w-full sm:w-auto"
              />
              <p className="text-xs text-slate-500 mt-4 sm:mt-0 sm:self-center max-w-[200px] sm:max-w-none text-center sm:text-left opacity-70">
                {HERO_CONTENT.microCopy}
              </p>
            </div>
          </div>

          {/* Right Image/Mockup - Cinematic 3D look */}
          <div className="flex-1 w-full max-w-xl lg:max-w-none relative perspective-1000 group">
            <div className="relative z-10 animate-float transition-all duration-700 group-hover:rotate-1">
               {/* Glow behind mockup */}
               <div className="absolute inset-0 bg-gradient-to-tr from-brand-600 to-cyan-500 blur-[80px] opacity-20 transform scale-90"></div>
               
               <div className="relative rounded-2xl bg-[#0f1014] border border-white/10 p-2 shadow-2xl backdrop-blur-sm ring-1 ring-white/5">
                   {/* Browser Bar */}
                   <div className="h-10 bg-[#1a1b21] rounded-t-xl flex items-center justify-between px-4 border-b border-white/5">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
                        <div className="w-3 h-3 rounded-full bg-[#febc2e]"></div>
                        <div className="w-3 h-3 rounded-full bg-[#28c840]"></div>
                      </div>
                      <div className="h-6 w-1/2 bg-white/5 rounded-md flex items-center justify-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        <span className="text-[10px] text-slate-500">convexa.studio/seu-projeto</span>
                      </div>
                      <div className="w-4"></div>
                   </div>
                   {/* Image */}
                   <div className="relative overflow-hidden rounded-b-lg">
                     {/* Performance Optimization: fetchPriority='high' for LCP, explicit dimensions */}
                     <img 
                       src="https://picsum.photos/seed/convexa/800/1000" 
                       alt="Exemplo de Landing Page do Convexa Studio" 
                       width="800"
                       height="1000"
                       fetchPriority="high"
                       className="w-full h-auto opacity-90 shadow-inner hover:scale-105 transition-transform duration-1000"
                     />
                     {/* Scanline effect */}
                     <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent h-[10px] w-full animate-[scan_3s_linear_infinite]"></div>
                   </div>

                    {/* Floating Tech Badge */}
                   <div className="absolute -right-6 top-1/3 bg-black/80 backdrop-blur-md border border-brand-500/30 p-4 rounded-xl shadow-2xl flex flex-col gap-2 items-center animate-bounce-slow hover:scale-110 transition-transform">
                     <Zap className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                     <div className="text-center">
                        <p className="text-white font-bold text-xl leading-none">99</p>
                        <p className="text-[10px] text-slate-400 uppercase tracking-wider">Performance</p>
                     </div>
                   </div>
                   
                   {/* Floating Results Badge */}
                   <div className="absolute -bottom-8 -left-8 bg-dark-900/90 backdrop-blur-md border border-white/10 p-5 rounded-2xl shadow-xl flex items-center gap-4">
                     <div className="bg-green-500/10 p-3 rounded-xl border border-green-500/20">
                       <Star className="w-5 h-5 text-green-400 fill-green-400" />
                     </div>
                     <div>
                       <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-0.5">Resultado</p>
                       <p className="text-white font-bold text-lg leading-none">+300% Leads</p>
                     </div>
                   </div>
               </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
});