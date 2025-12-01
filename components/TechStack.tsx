import React from 'react';
import { Zap, Code, Layout, ShieldCheck } from 'lucide-react';

export const TechStack: React.FC = () => {
  return (
    <section className="py-12 border-b border-white/5 bg-dark-950">
      <div className="container mx-auto px-4 text-center">
        <p className="text-slate-500 text-xs font-bold uppercase tracking-[0.3em] mb-8">
            Powered by Modern Tech
        </p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex items-center gap-2">
                <Code className="w-6 h-6 text-blue-400" />
                <span className="font-bold text-slate-300">Clean Code</span>
            </div>
            <div className="flex items-center gap-2">
                <Zap className="w-6 h-6 text-yellow-400" />
                <span className="font-bold text-slate-300">Ultra Fast</span>
            </div>
            <div className="flex items-center gap-2">
                <Layout className="w-6 h-6 text-purple-400" />
                <span className="font-bold text-slate-300">Responsive</span>
            </div>
            <div className="flex items-center gap-2">
                <ShieldCheck className="w-6 h-6 text-green-400" />
                <span className="font-bold text-slate-300">Secure</span>
            </div>
        </div>
      </div>
    </section>
  );
};