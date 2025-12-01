import React, { memo } from 'react';
import { PROCESS_STEPS } from '../constants';
import { ArrowDown } from 'lucide-react';

export const Process: React.FC = memo(() => {
  return (
    <section className="py-24 bg-dark-900/50 overflow-hidden relative border-y border-white/5">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-20">
          <span className="text-brand-400 font-bold tracking-widest text-xs uppercase mb-2 block">Metodologia Exclusiva</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Do Briefing ao Lucro
          </h2>
          <p className="text-slate-400">Processo ágil, sem enrolação.</p>
        </div>

        <div className="relative">
            {/* Connecting line for desktop - Glowing Beam */}
            <div className="hidden lg:block absolute top-10 left-0 w-full h-1 bg-gradient-to-r from-dark-800 via-brand-600 to-dark-800 shadow-[0_0_15px_rgba(124,58,237,0.5)] z-0 rounded-full opacity-50"></div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
            {PROCESS_STEPS.map((step, index) => (
                <div key={index} className="flex flex-col items-center text-center relative group">
                    {/* Number Circle */}
                    <div className="w-20 h-20 bg-dark-950 border-4 border-dark-900 outline outline-1 outline-brand-500/30 rounded-full text-2xl font-heading font-bold text-white flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(0,0,0,0.5)] group-hover:scale-110 group-hover:border-brand-500/50 transition-all duration-300 z-10 relative">
                        {step.number}
                        {/* Glow behind number */}
                        <div className="absolute inset-0 rounded-full bg-brand-500/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                    
                    <div className="bg-dark-950/50 p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-colors w-full">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-300 transition-colors">{step.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
                    </div>
                    
                    {/* Mobile Connector */}
                    {index !== PROCESS_STEPS.length - 1 && (
                        <div className="lg:hidden mt-8 text-slate-700 animate-bounce">
                            <ArrowDown className="w-6 h-6" />
                        </div>
                    )}
                </div>
            ))}
            </div>
        </div>
      </div>
    </section>
  );
});