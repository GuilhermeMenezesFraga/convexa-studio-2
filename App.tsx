import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Comparison } from './components/Comparison';
import { Portfolio } from './components/Portfolio';
import { TechStack } from './components/TechStack';
import { Process } from './components/Process';
import { CTASection } from './components/CTASection';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { FloatingCTA } from './components/FloatingCTA';

function App() {
  return (
    <div className="min-h-screen bg-dark-950 font-sans text-slate-200 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <TechStack />
        <Services />
        <Comparison />
        <Portfolio />
        <Process />
        <CTASection />
        <FAQ />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}

export default App;