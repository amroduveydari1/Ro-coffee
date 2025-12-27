
import React from 'react';
import { MENU_DATA } from '../constants';

const Menu: React.FC = () => {
  return (
    <section id="menu" className="py-24 bg-ro-beige">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-ro-blue font-serif text-4xl mb-4 italic">Our Selection</h2>
          <div className="w-12 h-1 bg-ro-accent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
          {MENU_DATA.map((category, idx) => (
            <div key={idx} className="space-y-8">
              <h3 className="text-ro-blue text-2xl font-serif border-b border-ro-blue/10 pb-2">{category.title}</h3>
              <div className="space-y-6">
                {category.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="group cursor-default">
                    <div className="flex justify-between items-baseline mb-1">
                      <h4 className="text-lg font-medium text-ro-dark group-hover:text-ro-accent transition-colors">{item.name}</h4>
                      <span className="text-ro-blue/60 font-medium">{item.price}</span>
                    </div>
                    <p className="text-sm text-ro-blue/70 italic leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <p className="text-ro-blue/60 text-sm max-w-lg mx-auto italic">
            * Seasonal variations may occur. Please ask our baristas about our current single origin guest roasts.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Menu;
