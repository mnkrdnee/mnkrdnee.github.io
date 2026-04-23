// ─────────────────────────────────────────────────────────────────────────────
// App.jsx — Root component, dark/light theme state, section composition
// ─────────────────────────────────────────────────────────────────────────────
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  // Default to dark theme
  const [isDark, setIsDark] = useState(true);

  // Sync <html> class for Tailwind darkMode: 'class'
  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    // Also update meta theme-color for mobile browsers
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', isDark ? '#060d1f' : '#f8fafc');
  }, [isDark]);

  return (
    <div className={isDark ? 'bg-navy-950 text-slate-100' : 'bg-slate-50 text-navy-950'}>
      {/* ── Sticky navigation ──────────────────────────────── */}
      <Navbar isDark={isDark} setIsDark={setIsDark} />

      {/* ── Page sections ──────────────────────────────────── */}
      <main>
        <Hero     isDark={isDark} />
        <About    isDark={isDark} />
        <Skills   isDark={isDark} />
        <Projects isDark={isDark} />
        <Education isDark={isDark} />
        <Contact  isDark={isDark} />
      </main>

      {/* ── Footer ─────────────────────────────────────────── */}
      <Footer isDark={isDark} />
    </div>
  );
}
