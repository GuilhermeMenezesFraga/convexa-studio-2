import React, { useEffect, useState } from 'react';
import { WhatsAppButton } from './WhatsAppButton';

export const FloatingCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past the hero (approx 500px)
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-dark-950/80 backdrop-blur-md border-t border-white/10 shadow-[0_-10px_20px_rgba(0,0,0,0.3)] md:hidden z-50 flex justify-center animate-slide-up">
      <WhatsAppButton text="Pedir Orçamento Agora" fullWidth variant="glow" />
    </div>
  );
};