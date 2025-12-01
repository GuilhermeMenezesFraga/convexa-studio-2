import React, { useState, memo } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { FAQ_ITEMS } from '../constants';

export const FAQ: React.FC = memo(() => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-dark-950">
      <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="w-12 h-12 bg-dark-800 rounded-full flex items-center justify-center mb-4 border border-white/5">
             <HelpCircle className="w-6 h-6 text-brand-400" />
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">Dúvidas Frequentes</h2>
        </div>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => (
            <div 
              key={index} 
              className={`border rounded-xl transition-all duration-300 overflow-hidden ${openIndex === index ? 'border-brand-500/50 bg-brand-900/10' : 'border-white/5 bg-dark-900/40 hover:border-white/10'}`}
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className={`font-bold text-lg transition-colors ${openIndex === index ? 'text-brand-300' : 'text-slate-200'}`}>{item.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-brand-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-500" />
                )}
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-slate-400 leading-relaxed text-sm md:text-base border-t border-white/5 pt-4">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});