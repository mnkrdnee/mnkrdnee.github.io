// ─────────────────────────────────────────────────────────────────────────────
// Navbar — Sticky glassmorphism nav with scroll progress + dark/light toggle
// ─────────────────────────────────────────────────────────────────────────────
import { useState, useEffect } from 'react';

const NAV_ITEMS = ['About', 'Skills', 'Projects', 'Education', 'Contact'];

export default function Navbar({ isDark, setIsDark }) {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      // Scroll progress bar
      const scrollTop = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? (scrollTop / height) * 100 : 0);

      // Active section detection
      for (const id of [...NAV_ITEMS].reverse()) {
        const el = document.getElementById(id.toLowerCase());
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(id.toLowerCase());
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Scroll progress bar */}
      <div
        className="fixed top-0 left-0 z-[9999] h-[2px] bg-amber-500 transition-all duration-100"
        style={{ width: `${progress}%` }}
      />

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? isDark
              ? 'bg-navy-950/90 backdrop-blur-xl border-b border-amber-500/10 shadow-lg shadow-black/20'
              : 'bg-white/90 backdrop-blur-xl border-b border-amber-500/10 shadow-lg shadow-black/10'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo / initials */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={`font-mono text-sm font-medium tracking-widest transition-colors duration-200 ${
              isDark ? 'text-amber-500 hover:text-amber-400' : 'text-amber-600 hover:text-amber-500'
            }`}
          >
            ME_
          </button>

          {/* Nav links — hidden on mobile */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className={`nav-link ${activeSection === item.toLowerCase() ? 'active' : ''} ${
                  isDark ? '' : 'text-slate-600 hover:text-amber-600'
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Dark/light toggle */}
          <button
            onClick={() => setIsDark(!isDark)}
            aria-label="Toggle theme"
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
              isDark
                ? 'bg-navy-800 border border-amber-500/20 text-amber-500 hover:bg-navy-700'
                : 'bg-amber-50 border border-amber-200 text-amber-600 hover:bg-amber-100'
            }`}
          >
            {isDark ? (
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd"/>
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/>
              </svg>
            )}
          </button>
        </div>
      </nav>
    </>
  );
}
