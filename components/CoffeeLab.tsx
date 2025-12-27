
import React, { useState, useMemo } from 'react';
import { BREWING_METHODS, RO_LOGO_SVG } from '../constants';

const CoffeeLab: React.FC = () => {
  const [coffeeAmount, setCoffeeAmount] = useState<number>(15);
  const [selectedMethod, setSelectedMethod] = useState(BREWING_METHODS[0]);

  const waterAmount = useMemo(() => {
    return coffeeAmount * selectedMethod.ratio;
  }, [coffeeAmount, selectedMethod]);

  return (
    <section id="coffee-lab" className="py-32 bg-ro-dark text-white scroll-mt-20 overflow-hidden relative">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 p-24 text-white/[0.02] scale-[6] pointer-events-none -rotate-12">
        {RO_LOGO_SVG}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          
          {/* Left Side: Content & Guides */}
          <div>
            <span className="text-ro-accent uppercase tracking-[0.4em] text-[10px] mb-6 block font-bold">Zanaatın Kalbi</span>
            <h2 className="text-5xl md:text-7xl font-serif italic mb-10 leading-tight">Ro Coffee Lab.</h2>
            <p className="text-white/50 text-lg mb-12 max-w-lg italic font-light">
              Mükemmel fincan bir tesadüf değildir. Matematik, sıcaklık ve sabrın kusursuz uyumudur. Evdeki demleme deneyiminizi bir üst seviyeye taşıyın.
            </p>

            <div className="space-y-8">
              {BREWING_METHODS.map((method) => (
                <button
                  key={method.id}
                  onClick={() => setSelectedMethod(method)}
                  className={`w-full text-left p-6 rounded-2xl border transition-all duration-500 flex justify-between items-center group
                    ${selectedMethod.id === method.id 
                      ? 'bg-white/10 border-ro-accent border-opacity-100 shadow-2xl' 
                      : 'border-white/5 hover:border-white/20'}`}
                >
                  <div>
                    <h4 className="text-xl font-medium mb-1">{method.name}</h4>
                    <p className="text-[10px] uppercase tracking-widest text-white/40">{method.grind} Grind — {method.temp}</p>
                  </div>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all
                    ${selectedMethod.id === method.id ? 'bg-ro-accent text-white scale-110' : 'bg-white/5 text-white/20'}`}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right Side: The Calculator */}
          <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 p-12 rounded-[3rem] shadow-inner">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-serif italic mb-2">Demleme Hesaplayıcı</h3>
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/30">Altın Oran: 1:{selectedMethod.ratio}</p>
            </div>

            <div className="space-y-12">
              <div className="space-y-6">
                <div className="flex justify-between items-end">
                  <label className="text-sm font-medium text-white/60">Kahve Miktarı</label>
                  <span className="text-3xl font-serif text-ro-accent">{coffeeAmount}<span className="text-sm ml-1 text-white/40">gr</span></span>
                </div>
                <input 
                  type="range" 
                  min="10" 
                  max="50" 
                  step="1"
                  value={coffeeAmount}
                  onChange={(e) => setCoffeeAmount(parseInt(e.target.value))}
                  className="w-full accent-ro-accent h-1 bg-white/10 rounded-full appearance-none cursor-pointer"
                />
              </div>

              <div className="h-px bg-white/5"></div>

              <div className="grid grid-cols-2 gap-8">
                <div className="p-8 bg-white/5 rounded-3xl border border-white/5">
                  <span className="text-[9px] uppercase tracking-widest text-white/30 block mb-4">Gereken Su</span>
                  <div className="text-4xl font-serif text-white">{waterAmount}<span className="text-xs ml-1 text-white/30">ml</span></div>
                </div>
                <div className="p-8 bg-white/5 rounded-3xl border border-white/5">
                  <span className="text-[9px] uppercase tracking-widest text-white/30 block mb-4">Sıcaklık</span>
                  <div className="text-4xl font-serif text-ro-accent">{selectedMethod.temp}</div>
                </div>
              </div>

              <div className="bg-ro-accent/10 p-8 rounded-3xl border border-ro-accent/20">
                <div className="flex gap-4 items-start">
                  <svg className="w-5 h-5 text-ro-accent shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  <p className="text-xs italic text-white/70 leading-relaxed">
                    <strong>Ro İpucu:</strong> {selectedMethod.name} için kahvenizi {selectedMethod.grind.toLowerCase()} derecesinde öğütün. Demlemeye başlamadan önce kağıt filtreyi sıcak suyla ıslatmayı unutmayın.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CoffeeLab;
