
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuView from './components/MenuView';
import LocationSocial from './components/LocationSocial';
import GeminiAssistant from './components/GeminiAssistant';
import BrewFinder from './components/BrewFinder';
import CoffeeLab from './components/CoffeeLab';
import { RO_LOGO_SVG, FEATURED_ITEMS, INSTAGRAM_URL, BEAN_COLLECTION, GALLERY_IMAGES } from './constants';

const App: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen font-sans selection:bg-ro-accent selection:text-white relative bg-ro-beige">
      <Navbar onOpenMenu={() => setShowMenu(true)} />
      
      {showMenu && <MenuView onBack={() => setShowMenu(false)} />}

      <main className={showMenu ? 'hidden' : 'block'}>
        <Hero onOpenMenu={() => setShowMenu(true)} />
        
        {/* Featured Items Section */}
        <section id="featured" className="py-24 bg-ro-beige scroll-mt-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-ro-blue/40 uppercase tracking-[0.3em] text-[10px] mb-4 block">Favorilerimiz</span>
              <h2 className="text-ro-blue font-serif text-3xl md:text-5xl italic">Çok Sevilenler</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {FEATURED_ITEMS.map((item, idx) => (
                <div key={idx} className="bg-white p-8 rounded-2xl border border-ro-blue/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                  <div className="text-ro-blue/10 mb-6 group-hover:text-ro-accent transition-colors">
                    {RO_LOGO_SVG}
                  </div>
                  <h3 className="text-xl font-medium text-ro-blue mb-2">{item.name}</h3>
                  <p className="text-ro-blue/50 text-sm mb-6 italic">{item.description}</p>
                  <span className="text-ro-blue font-serif italic text-lg">{item.price}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <button 
                onClick={() => setShowMenu(true)}
                className="text-ro-blue font-medium border-b-2 border-ro-accent pb-1 hover:text-ro-accent transition-colors tracking-widest uppercase text-xs"
              >
                Menünün Tamamı
              </button>
            </div>
          </div>
        </section>

        {/* Brew Finder Tool */}
        <BrewFinder />

        {/* Coffee Lab Section - Interactive calculator */}
        <CoffeeLab />

        {/* Signature Beans Section - Updated with Images and Turkish */}
        <section id="beans" className="py-32 bg-white scroll-mt-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
              <div className="max-w-xl">
                <span className="text-ro-blue/40 uppercase tracking-[0.3em] text-[10px] mb-4 block">Evinize Götürün</span>
                <h2 className="text-4xl md:text-6xl font-serif italic text-ro-blue">İmza Çekirdekler</h2>
              </div>
              <p className="text-ro-blue/60 max-w-sm text-sm italic border-l-2 border-ro-accent pl-6">
                Etik kaynaklı, yerel olarak kavrulmuş. Çekirdeklerimiz haftalık taze kavrulmuş 250g paketlerde sunulmaktadır.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {BEAN_COLLECTION.map((bean, i) => (
                <div key={i} className="group cursor-pointer">
                  <div className="bg-ro-beige aspect-[3/4] rounded-[2.5rem] mb-8 overflow-hidden relative border border-ro-blue/5 shadow-sm">
                    <img 
                      src={bean.image} 
                      alt={bean.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-ro-dark/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="absolute top-6 right-6 text-white scale-75 opacity-0 group-hover:opacity-100 transition-all">
                      {RO_LOGO_SVG}
                    </div>
                  </div>
                  <h3 className="text-xl font-medium text-ro-blue mb-1">{bean.name}</h3>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-ro-accent font-bold mb-4">{bean.origin}</p>
                  <p className="text-ro-blue/50 text-sm mb-6 italic">{bean.notes}</p>
                  <span className="text-ro-blue font-serif italic">{bean.price}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Space/Gallery Section - Clean and prominent visibility as requested */}
        <section className="py-24 bg-ro-beige overflow-hidden">
          <div className="max-w-[1600px] mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-ro-blue font-serif text-3xl md:text-5xl italic">Ro Coffee Alanı</h2>
              <div className="w-12 h-px bg-ro-accent mx-auto mt-6"></div>
              <p className="mt-8 text-ro-blue/40 uppercase tracking-[0.3em] text-[10px]">Atmosferimizi Keşfedin</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {GALLERY_IMAGES.map((img, i) => (
                <div key={i} className="aspect-[4/5] overflow-hidden rounded-[2.5rem] border border-ro-blue/5 shadow-xl group bg-white">
                  <img 
                    src={img} 
                    alt={`Ro Coffee Alanı ${i + 1}`} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[3000ms] ease-out" 
                  />
                  <div className="absolute inset-0 bg-ro-dark/0 group-hover:bg-ro-dark/5 transition-colors duration-500"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-32 bg-white scroll-mt-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="mb-12 flex justify-center text-ro-blue/20 scale-150">
              {RO_LOGO_SVG}
            </div>
            <h2 className="text-ro-blue font-serif text-4xl md:text-6xl italic leading-tight mb-12">
              Zanaatkar kavurma. <br/> Minimalist tasarım.
            </h2>
            <div className="w-12 h-px bg-ro-accent mx-auto mb-12"></div>
            <p className="text-ro-blue/60 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-light italic">
              Mersin, Yenişehir'de bulunan Ro Coffee, bir kafeden daha fazlasıdır. Kaliteli kahvenin ve onun etrafında büyüyen topluluğun sessizce takdir edilmesine adanmış bir alandır.
            </p>
          </div>
        </section>

        <LocationSocial />
      </main>

      <footer className={`bg-ro-dark py-24 text-white/40 ${showMenu ? 'hidden' : 'block'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 border-b border-white/5 pb-16 mb-12">
            <div className="flex flex-col items-center md:items-start gap-4">
              <div className="text-white/60 scale-125">
                {RO_LOGO_SVG}
              </div>
              <span className="font-serif text-lg tracking-[0.2em] text-white">RO COFFEE</span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-12 text-[10px] uppercase tracking-[0.3em] font-medium">
              <button onClick={() => setShowMenu(true)} className="hover:text-white transition-colors">Menü</button>
              <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} className="hover:text-white transition-colors">Hikayemiz</a>
              <a href="#location" onClick={(e) => { e.preventDefault(); scrollToSection('location'); }} className="hover:text-white transition-colors">İletişim</a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 items-center text-[9px] tracking-[0.2em] gap-6 w-full">
            <div className="text-center md:text-left order-2 md:order-1">
              DESIGNED BY <span className="text-white font-bold tracking-[0.3em]">AMRO STUDIO</span>
            </div>
            <div className="text-center italic order-1 md:order-2 text-white/60">
              KAHVE SANATI
            </div>
            <div className="text-center md:text-right uppercase order-3">
              © {new Date().getFullYear()} RO COFFEE — MERSİN
            </div>
          </div>
        </div>
      </footer>

      <GeminiAssistant />
    </div>
  );
};

export default App;
