import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

interface WhatsAppButtonProps {
  text?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'glow';
  fullWidth?: boolean;
  className?: string;
  size?: 'normal' | 'large';
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ 
  text = "Falar com Consultor", 
  variant = 'primary',
  fullWidth = false,
  className = '',
  size = 'normal'
}) => {
  
  const baseStyles = "inline-flex items-center justify-center font-bold transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark-950 tracking-wide";
  
  const variants = {
    primary: "bg-whatsapp-500 hover:bg-whatsapp-400 text-white shadow-[0_0_15px_rgba(37,211,102,0.3)] hover:shadow-[0_0_25px_rgba(37,211,102,0.6)] hover:-translate-y-1",
    glow: "bg-gradient-to-r from-whatsapp-600 to-whatsapp-500 hover:from-whatsapp-500 hover:to-whatsapp-400 text-white shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:shadow-[0_0_40px_rgba(37,211,102,0.7)] hover:-translate-y-1 border border-whatsapp-400/20",
    secondary: "bg-brand-600 hover:bg-brand-500 text-white shadow-lg shadow-brand-900/50 hover:shadow-brand-600/50",
    outline: "bg-transparent border border-slate-700 text-slate-300 hover:bg-white/5 hover:border-slate-500 hover:text-white backdrop-blur-sm"
  };

  const sizes = {
    normal: "py-3 px-6 text-sm md:text-base",
    large: "py-4 px-8 text-base md:text-lg"
  };

  return (
    <a 
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        ${baseStyles} 
        ${variants[variant]} 
        ${sizes[size]} 
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
    >
      <MessageCircle className="w-5 h-5 md:w-6 md:h-6 mr-2 fill-current" />
      {text}
    </a>
  );
};