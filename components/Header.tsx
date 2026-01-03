
import React, { useState } from 'react';
import { NAV_ITEMS } from '../constants';
import ThemeToggle from './ThemeToggle';
import { IMAGES } from '../assets/images';

interface HeaderProps {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ theme, onToggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const renderLink = (item: {label: string, href: string}, mobile: boolean = false) => {
    const isExternal = item.href.startsWith('http');
    
    // Mobile links use the #00FF00 color for high visibility and branding as requested
    const className = mobile 
      ? "block px-6 py-4 rounded-2xl text-xl font-black text-white hover:text-[#00FF00] hover:bg-white/10 transition-all active:scale-95 border-l-4 border-transparent hover:border-[#00FF00]"
      : "text-white/90 hover:text-[#00FF00] font-bold transition-all text-sm lg:text-base tracking-wide hover:scale-105 active:scale-95 px-2 whitespace-nowrap";

    if (isExternal) {
      return (
        <a 
          key={item.href} 
          href={item.href} 
          target="_blank" 
          rel="noopener noreferrer" 
          className={className}
          onClick={() => mobile && setIsMenuOpen(false)}
        >
          {item.label}
        </a>
      );
    }

    return (
      <a
        key={item.href}
        href={item.href}
        onClick={() => mobile && setIsMenuOpen(false)}
        className={className}
      >
        {item.label}
      </a>
    );
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1B5E7F] text-white shadow-xl transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo & Portfolio Name - Stays in Left Side corner */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <div className="w-12 h-12 bg-white rounded-full overflow-hidden flex items-center justify-center border-2 border-white/20 shadow-lg group cursor-pointer">
            <a href="">
              <img 
                src={IMAGES.logo} 
                alt="Logo" 
                className="w-full h-full object-cover transition-transform group-hover:scale-110"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://ui-avatars.com/api/?name=Dev&background=fff&color=1B5E7F&bold=true";
                }}
              /> </a>
            </div>
           <a href="">
             <span className="text-xl font-black tracking-widest uppercase hidden sm:block">
              Enyew M.
            </span>
            </a>
          </div>

          {/* Navigation & Toggle - Pushed to Right Side corner for Desktop */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            <nav className="flex items-center space-x-2 lg:space-x-4">
              {NAV_ITEMS.map((item) => renderLink(item))}
            </nav>
            <div className="pl-4 border-l border-white/20 flex items-center">
              <ThemeToggle theme={theme} onToggle={onToggleTheme} />
            </div>
          </div>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center gap-3">
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-xl transition-all duration-300 ring-2 ${isMenuOpen ? 'ring-[#00FF00] bg-white/10' : 'ring-white/20 hover:bg-white/10'}`}
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg 
                className={`h-7 w-7 transition-colors ${isMenuOpen ? 'text-[#00FF00]' : 'text-white'}`} 
                stroke="currentColor" 
                fill="none" 
                viewBox="0 0 24 24"
              >
                <path
                  className={isMenuOpen ? 'hidden' : 'inline-flex'}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M4 6h16M4 12h16M4 18h16"
                />
                <path
                  className={isMenuOpen ? 'inline-flex' : 'hidden'}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav - Responsible & Interactive */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out bg-[#1B5E7F] border-t border-white/10 ${
          isMenuOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="px-4 pt-4 pb-12 space-y-2 max-h-[70vh] overflow-y-auto">
          {NAV_ITEMS.map((item, index) => (
            <div 
              key={item.href} 
              className="transform transition-all duration-300"
              style={{ 
                transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms',
                transform: isMenuOpen ? 'translateX(0)' : 'translateX(-20px)'
              }}
            >
              {renderLink(item, true)}
            </div>
          ))}
          
          {/* Quick Contact Highlight in Menu */}
          <div className="mt-8 px-6 py-6 rounded-2xl bg-black/20 border border-white/10">
            <p className="text-[#00FF00] font-black text-xs uppercase tracking-[0.2em] mb-2">Hire Me</p>
            <p className="text-white text-sm font-medium opacity-80 mb-4">Let's build something amazing together.</p>
            <a 
              href="#contact" 
              onClick={() => setIsMenuOpen(false)}
              className="inline-block w-full text-center py-3 rounded-xl bg-[#00FF00] text-[#1B5E7F] font-black text-sm uppercase tracking-widest hover:brightness-110 transition-all"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
