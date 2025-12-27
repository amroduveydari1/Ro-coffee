
import React, { useState } from 'react';
import { BREW_QUIZ, RO_LOGO_SVG, MENU_DIGITAL_URL } from '../constants';

const BrewFinder: React.FC = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [result, setResult] = useState<{name: string, desc: string} | null>(null);

  const handleOption = (questionId: string, optionId: string) => {
    const newAnswers = { ...answers, [questionId]: optionId };
    setAnswers(newAnswers);
    
    if (step < BREW_QUIZ.questions.length - 1) {
      setStep(step + 1);
    } else {
      const key = `${newAnswers.vibe}-${newAnswers.taste}`;
      // @ts-ignore
      setResult(BREW_QUIZ.results[key] || { name: 'Caffè Latte', desc: 'Her mod için klasik bir seçim.' });
    }
  };

  const reset = () => {
    setStep(0);
    setAnswers({});
    setResult(null);
  };

  return (
    <div id="brew-finder" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-ro-beige rounded-[3rem] p-12 md:p-20 shadow-sm border border-ro-blue/5 overflow-hidden relative">
          <div className="absolute top-0 right-0 p-12 text-ro-blue/[0.03] scale-[4] rotate-12 pointer-events-none">
            {RO_LOGO_SVG}
          </div>

          {!result ? (
            <div className="relative z-10">
              <span className="text-ro-accent uppercase tracking-[0.4em] text-[10px] mb-4 block">İnteraktif Araç</span>
              <h2 className="text-3xl md:text-5xl font-serif italic text-ro-blue mb-12">
                Mükemmel Kahveni Bul
              </h2>

              <div className="space-y-8">
                <p className="text-ro-blue/40 text-[10px] uppercase tracking-widest mb-4">Soru {step + 1} / {BREW_QUIZ.questions.length}</p>
                <h3 className="text-2xl text-ro-blue font-medium mb-8">{BREW_QUIZ.questions[step].text}</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {BREW_QUIZ.questions[step].options.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => handleOption(BREW_QUIZ.questions[step].id, opt.id)}
                      className="bg-white border border-ro-blue/10 p-8 rounded-3xl hover:border-ro-accent hover:shadow-lg transition-all text-center group"
                    >
                      <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform">{opt.icon}</div>
                      <div className="text-sm font-semibold text-ro-blue uppercase tracking-wider">{opt.text}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="relative z-10 text-center animate-in fade-in zoom-in duration-500">
              <span className="text-ro-accent uppercase tracking-[0.4em] text-[10px] mb-8 block">Önerimiz</span>
              <div className="text-ro-blue/10 mb-8 scale-150 flex justify-center">{RO_LOGO_SVG}</div>
              <h3 className="text-5xl md:text-7xl font-serif italic text-ro-blue mb-6">{result.name}</h3>
              <p className="text-ro-blue/60 text-lg italic mb-12 max-w-md mx-auto leading-relaxed">{result.desc}</p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={reset}
                  className="px-8 py-4 border border-ro-blue/20 text-ro-blue rounded-full text-xs font-bold tracking-widest uppercase hover:bg-ro-blue hover:text-white transition-all"
                >
                  Tekrar Dene
                </button>
                <a 
                  href={MENU_DIGITAL_URL}
                  target="_blank"
                  className="px-8 py-4 bg-ro-accent text-white rounded-full text-xs font-bold tracking-widest uppercase hover:shadow-xl transition-all"
                >
                  Sipariş Ver
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BrewFinder;
