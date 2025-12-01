import React, { memo } from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';
import { COMPARISON_DATA } from '../constants';

export const Comparison: React.FC = memo(() => {
  return (
    <section className="py-24 bg-black relative border-y border-white/5">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="text-brand-400 font-bold tracking-[0.2em] text-xs uppercase mb-3 block">Comparativo de Valor</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">
            Freelancer <span className="text-slate-600">vs</span> Convexa Studio
          </h2>
        </div>

        <div className="max-w-4xl mx-auto bg-dark-900/50 rounded-3xl border border-white/5 overflow-hidden backdrop-blur-sm">
          {/* Header */}
          <div className="grid grid-cols-3 p-6 border-b border-white/5 bg-white/5">
            <div className="col-span-1 text-slate-500 font-bold uppercase text-xs tracking-wider pt-2">Critério</div>
            <div className="col-span-1 text-center text-slate-400 font-bold text-sm md:text-lg opacity-60">Outros</div>
            <div className="col-span-1 text-center text-brand-400 font-bold text-lg md:text-xl flex items-center justify-center gap-2">
                Convexa
                <span className="hidden md:inline-block w-2 h-2 bg-brand-400 rounded-full animate-pulse"></span>
            </div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-white/5">
            {COMPARISON_DATA.map((row, index) => (
              <div key={index} className="grid grid-cols-3 p-6 hover:bg-white/5 transition-colors items-center">
                <div className="col-span-1 font-heading font-bold text-white text-sm md:text-lg pr-2">
                    {row.feature}
                </div>
                
                <div className="col-span-1 flex flex-col items-center justify-center text-center opacity-60">
                    <XCircle className="w-6 h-6 text-red-500/50 mb-2" />
                    <span className="text-xs md:text-sm text-slate-500">{row.others}</span>
                </div>
                
                <div className="col-span-1 flex flex-col items-center justify-center text-center bg-brand-500/5 -my-6 py-6 border-x border-brand-500/10">
                    <div className="bg-green-500/20 p-1 rounded-full mb-2">
                        <CheckCircle2 className="w-6 h-6 text-green-400" />
                    </div>
                    <span className="text-xs md:text-sm text-white font-medium">{row.us}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});