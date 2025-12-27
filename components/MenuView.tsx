
import React from 'react';
import { MENU_DATA, RO_LOGO_SVG, MENU_DIGITAL_URL } from '../constants';

interface MenuViewProps {
  onBack: () => void;
}

const MenuView: React.FC<MenuViewProps> = ({ onBack }) => {
  // QR points directly to the digital menu URL
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(MENU_DIGITAL_URL)}&color=3b4b5e&bgcolor=fdfcf8`;

  return (
    <div className="fixed inset-0 bg-ro-beige z-[100] overflow-y-auto animate-in fade-in duration-500 printable-menu">
      <div className="max-w-5xl mx-auto px-6 py-12 md:py-24">
        <header className="flex justify-between items-center mb-16 md:mb-24 no-print">
          <button 
            onClick={onBack}
            className="group flex items-center gap-2 text-ro-blue font-medium transition-all text-xs tracking-widest"
          >
            <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
            KAPAT
          </button>
          <div className="text-ro-blue scale-125">
            {RO_LOGO_SVG}
          </div>
          <div className="w-16"></div>
        </header>

        {/* This header is visible in print only */}
        <div className="hidden print:flex flex-col items-center mb-12 border-b border-ro-blue/10 pb-8">
          <div className="text-ro-blue scale-150 mb-6">
            {RO_LOGO_SVG}
          </div>
          <h2 className="text-ro-blue font-serif italic text-2xl tracking-widest">RO COFFEE MERSİN</h2>
          <p className="text-[10px] text-ro-blue/50 uppercase tracking-[0.4em] mt-2">The Art of Coffee — Yenişehir</p>
        </div>

        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-8xl font-serif text-ro-blue italic mb-6">Menü</h1>
          <p className="text-ro-blue/40 uppercase tracking-[0.4em] text-[10px] mb-12 no-print">Ro Coffee Mersin Selection</p>
          
          {/* QR Section */}
          <div className="flex flex-col items-center justify-center p-8 bg-white/50 border border-ro-blue/5 rounded-3xl max-w-sm mx-auto shadow-sm backdrop-blur-sm no-print qr-section">
            <div className="mb-4 bg-ro-beige p-2 rounded-xl border border-ro-blue/10">
              <img 
                src={qrCodeUrl} 
                alt="Digital Menu Link" 
                className="w-32 h-32 md:w-40 md:h-40 object-contain mix-blend-multiply"
              />
            </div>
            <div className="text-center">
              <h3 className="text-ro-blue font-serif italic text-lg mb-1">Dijital Menü</h3>
              <p className="text-[9px] text-ro-blue/40 uppercase tracking-[0.2em] mb-4">Tüm seçenekleri görmek için tıklayın veya taratın</p>
              <a 
                href={MENU_DIGITAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2 bg-ro-blue text-white rounded-full text-[10px] font-bold tracking-widest uppercase hover:bg-ro-accent transition-colors shadow-lg"
              >
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                OPEN DIGITAL MENU
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-20 pb-32 menu-category-grid">
          {MENU_DATA.map((category, idx) => (
            <div key={idx} className="fade-in break-inside-avoid-page" style={{ animationDelay: `${idx * 0.1}s` }}>
              <div className="flex items-center gap-6 mb-10">
                <h2 className="text-2xl font-serif text-ro-blue italic whitespace-nowrap tracking-wide">{category.title}</h2>
                <div className="h-px bg-ro-blue/10 w-full"></div>
              </div>
              
              <div className="space-y-6">
                {category.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="group">
                    <div className="flex justify-between items-baseline mb-1">
                      <h4 className="text-md font-medium text-ro-dark group-hover:text-ro-accent transition-colors duration-300">{item.name}</h4>
                      <div className="flex-1 border-b border-dotted border-ro-blue/10 mx-4 mb-1"></div>
                      <span className="text-ro-blue/70 font-serif italic text-sm">{item.price}</span>
                    </div>
                    {item.description && (
                      <p className="text-ro-blue/40 text-[11px] leading-relaxed font-light italic">{item.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <footer className="border-t border-ro-blue/5 pt-16 text-center print:pt-10">
          <div className="text-ro-blue/20 mb-8 flex justify-center print:mb-4">
             {RO_LOGO_SVG}
          </div>
          <p className="text-ro-blue/40 italic text-xs tracking-widest uppercase mb-4">
            Her yudumda sadelik — Mersin
          </p>
          <div className="hidden print:block text-[8px] text-ro-blue/30 uppercase tracking-[0.2em]">
            Barbaros, Mehmet Dündar bey ap No:13/B, Yenişehir/Mersin <br/>
            Instagram: @rocofee
          </div>
        </footer>
      </div>
    </div>
  );
};

export default MenuView;
