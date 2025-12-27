
import React from 'react';
import { MAPS_URL } from '../constants';

interface HeroProps {
  onOpenMenu: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenMenu }) => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-ro-dark">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop" 
          alt="Ro Coffee Atmosphere" 
          className="w-full h-full object-cover opacity-90 transition-opacity duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ro-dark/30 via-transparent to-ro-dark/60"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <span className="text-white/80 uppercase tracking-[0.4em] text-xs mb-8 block fade-in drop-shadow-md">RO COFFEE MERSİN</span>
        <h1 className="text-white text-6xl md:text-8xl font-serif mb-10 leading-[1.1] fade-in drop-shadow-lg" style={{ animationDelay: '0.2s' }}>
          Simplicity in <br/>
          <span className="italic">Every Sip.</span>
        </h1>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center fade-in" style={{ animationDelay: '0.4s' }}>
          <button 
            onClick={onOpenMenu}
            className="group px-12 py-5 bg-white text-ro-dark font-medium rounded-full hover:bg-ro-accent hover:text-white transition-all duration-300 transform hover:-translate-y-1 shadow-2xl"
          >
            MENÜYÜ KEŞFET
          </button>
          <a 
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-medium border-b border-white/50 hover:border-white transition-all py-2 text-sm tracking-widest uppercase drop-shadow-md"
          >
            Bizi Bulun
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
