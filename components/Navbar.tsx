
import React, { useState, useEffect } from 'react';
import { RO_LOGO_SVG, INSTAGRAM_URL } from '../constants';

interface NavbarProps {
  onOpenMenu: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenMenu }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Menü', action: onOpenMenu, isButton: true },
    { name: 'Hikayemiz', href: '#about' },
    { name: 'İletişim', href: '#location' },
  ];

  const textColorClass = isScrolled ? 'text-ro-blue' : 'text-white';
  const logoColorClass = isScrolled ? 'text-ro-blue' : 'text-white';

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const id = href.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMobileMenuOpen(false);
      }
    }
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-[80] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] px-6 md:px-16
          ${isScrolled 
            ? 'py-4 bg-white shadow-[0_4px_30px_-10px_rgba(0,0,0,0.1)]' 
            : 'py-8 bg-transparent'
          }`}
      >
        <div className="max-w-[1600px] mx-auto flex justify-between items-center">
          {/* Brand Logo */}
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className={`${logoColorClass} transition-all duration-500 transform hover:opacity-70 active:scale-95
              ${isScrolled ? 'scale-90' : 'scale-100'}`}
          >
            {RO_LOGO_SVG}
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-14">
            <div className="flex gap-12">
              {navLinks.map((link) => (
                link.isButton ? (
                  <button
                    key={link.name}
                    onClick={link.action}
                    className={`nav-link text-[11px] font-semibold tracking-[0.4em] uppercase transition-all duration-300 hover:text-ro-accent ${textColorClass}`}
                  >
                    {link.name}
                  </button>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href!)}
                    className={`nav-link text-[11px] font-semibold tracking-[0.4em] uppercase transition-all duration-300 hover:text-ro-accent ${textColorClass}`}
                  >
                    {link.name}
                  </a>
                )
              ))}
            </div>

            <a 
              href={INSTAGRAM_URL} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`relative group overflow-hidden px-8 py-3 rounded-full transition-all duration-500 hover:shadow-lg
                ${isScrolled ? 'bg-ro-blue text-white' : 'bg-white text-ro-blue'}`}
            >
              <div className="absolute inset-0 bg-ro-accent transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
              <span className="relative z-10 text-[10px] font-bold tracking-[0.3em] uppercase">Instagram</span>
            </a>
          </div>

          {/* Mobile Interaction */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden relative w-12 h-12 flex flex-col justify-center items-center transition-colors focus:outline-none z-[90] ${isMobileMenuOpen ? 'text-ro-blue' : textColorClass}`}
            aria-label="Toggle Menu"
          >
            <div className="relative w-6 h-5">
              <span className={`absolute left-0 w-full h-[1.5px] bg-current transition-all duration-500 ease-in-out ${isMobileMenuOpen ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-0'}`}></span>
              <span className={`absolute left-0 w-full h-[1.5px] bg-current transition-all duration-500 ease-in-out top-1/2 -translate-y-1/2 ${isMobileMenuOpen ? 'opacity-0 scale-x-0' : 'opacity-100 scale-x-100'}`}></span>
              <span className={`absolute left-0 w-full h-[1.5px] bg-current transition-all duration-500 ease-in-out ${isMobileMenuOpen ? 'bottom-1/2 translate-y-1/2 -rotate-45' : 'bottom-0'}`}></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Modern Fullscreen Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[75] bg-white transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] md:hidden
          ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <div className="h-full flex flex-col pt-32 px-12 pb-20 justify-between">
          <div className="space-y-10">
            {navLinks.map((link, i) => (
              <div 
                key={link.name}
                className={`transform transition-all duration-700
                  ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {link.isButton ? (
                  <button
                    onClick={() => { onOpenMenu(); setIsMobileMenuOpen(false); }}
                    className="text-4xl sm:text-5xl font-serif text-ro-blue italic hover:text-ro-accent transition-colors text-left"
                  >
                    {link.name}
                  </button>
                ) : (
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href!)}
                    className="text-4xl sm:text-5xl font-serif text-ro-blue italic hover:text-ro-accent transition-colors block"
                  >
                    {link.name}
                  </a>
                )}
              </div>
            ))}
          </div>

          <div 
            className={`space-y-12 transform transition-all duration-1000 delay-500
              ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
          >
            <div className="h-px bg-ro-blue/5 w-full"></div>
            <div className="flex flex-col gap-8">
              <a 
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[12px] tracking-[0.4em] text-ro-accent font-bold uppercase hover:opacity-70 transition-opacity"
              >
                @rocofee — Instagram
              </a>
              <div className="text-ro-blue/30 text-[10px] tracking-[0.2em] leading-loose uppercase italic">
                Barbaros Mah. No:13/B <br/>
                Yenişehir, Mersin
              </div>
            </div>
          </div>
        </div>
        
        {/* Subtle Watermark in background */}
        <div className="absolute bottom-10 right-10 text-ro-blue/[0.03] -rotate-12 select-none pointer-events-none scale-[3] origin-bottom-right">
          {RO_LOGO_SVG}
        </div>
      </div>
    </>
  );
};

export default Navbar;
