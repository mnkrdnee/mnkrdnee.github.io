// ─────────────────────────────────────────────────────────────────────────────
// Hero — Animated intro with typewriter tagline, floating orbs, CTA buttons
// ─────────────────────────────────────────────────────────────────────────────
import { useState, useEffect } from 'react';

const TAGLINES = [
  'Transforming raw data into actionable intelligence.',
  'Building ML systems that see beneath the surface.',
  'From seismic signals to intelligent predictions.',
  'Data-driven. Curiosity-led. Results-focused.',
];

function useTypewriter(words, speed = 70, pause = 2400) {
  const [displayed, setDisplayed] = useState('');
  const [idx, setIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[idx];
    let timeout;
    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => setCharIdx((c) => c + 1), speed);
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx((c) => c - 1), speed / 2.2);
    } else {
      setDeleting(false);
      setIdx((i) => (i + 1) % words.length);
    }
    setDisplayed(current.slice(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, idx, words, speed, pause]);

  return displayed;
}

export default function Hero({ isDark }) {
  const tagline = useTypewriter(TAGLINES);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="hero"
      className={`relative min-h-screen flex items-center justify-center overflow-hidden grid-bg ${
        isDark ? 'bg-navy-950' : 'bg-slate-50'
      }`}
    >
      {/* ── Floating gradient orbs ────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="orb-1 absolute w-[500px] h-[500px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, #f59e0b 0%, transparent 70%)',
            top: '10%',
            right: '5%',
            filter: 'blur(60px)',
          }}
        />
        <div
          className="orb-2 absolute w-[400px] h-[400px] rounded-full opacity-15"
          style={{
            background: 'radial-gradient(circle, #22d3ee 0%, transparent 70%)',
            bottom: '15%',
            left: '0%',
            filter: 'blur(70px)',
          }}
        />
        <div
          className="orb-1 absolute w-[300px] h-[300px] rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, #a78bfa 0%, transparent 70%)',
            top: '40%',
            left: '20%',
            filter: 'blur(50px)',
            animationDelay: '-5s',
          }}
        />
      </div>

      {/* ── Hero content ─────────────────────────────────────── */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Label */}
        <div
          className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.2em] uppercase mb-6 animate-fadeUp"
          style={{ animationDelay: '0.1s' }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full bg-amber-500"
            style={{ boxShadow: '0 0 8px #f59e0b' }}
          />
          <span className={isDark ? 'text-amber-500' : 'text-amber-600'}>
            Available for opportunities
          </span>
        </div>

        {/* Name */}
        <h1
          className={`font-serif font-bold leading-[1.1] mb-4 animate-fadeUp ${
            isDark ? 'text-slate-100' : 'text-navy-950'
          }`}
          style={{ fontSize: 'clamp(2.4rem, 6vw, 5rem)', animationDelay: '0.2s' }}
        >
          Munkh-Erdene
          <br />
          <span className="shimmer-text">Erdenetogtokh</span>
        </h1>

        {/* Title */}
        <p
          className={`font-mono text-sm md:text-base tracking-[0.12em] uppercase mb-8 animate-fadeUp ${
            isDark ? 'text-slate-400' : 'text-slate-500'
          }`}
          style={{ animationDelay: '0.35s' }}
        >
          Machine Learning & Data Science Engineer
        </p>

        {/* Typewriter tagline */}
        <div
          className={`font-sans text-lg md:text-xl mb-12 h-8 flex items-center justify-center animate-fadeUp ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}
          style={{ animationDelay: '0.5s' }}
        >
          <span>{tagline}</span>
          <span
            className={`cursor-blink ml-1 font-light ${
              isDark ? 'text-amber-500' : 'text-amber-600'
            }`}
          >
            |
          </span>
        </div>

        {/* CTA Buttons */}
        <div
          className="flex flex-wrap items-center justify-center gap-4 animate-fadeUp"
          style={{ animationDelay: '0.65s' }}
        >
          <button
            onClick={() => scrollTo('projects')}
            className="group relative px-7 py-3 rounded-lg font-mono text-xs tracking-[0.1em] uppercase font-medium bg-amber-500 text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(245,158,11,0.5)]"
          >
            View Projects
            <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1 inline-block">
              →
            </span>
          </button>

          <button
            onClick={() => scrollTo('contact')}
            className={`px-7 py-3 rounded-lg font-mono text-xs tracking-[0.1em] uppercase font-medium border transition-all duration-300 hover:-translate-y-1 ${
              isDark
                ? 'border-amber-500/25 text-slate-300 hover:border-amber-500 hover:text-amber-500'
                : 'border-amber-300 text-slate-600 hover:border-amber-500 hover:text-amber-600'
            }`}
          >
            Contact Me
          </button>
        </div>

        {/* Scroll hint */}
        <div
          className={`mt-20 flex flex-col items-center gap-2 animate-fadeUp ${
            isDark ? 'text-slate-600' : 'text-slate-400'
          }`}
          style={{ animationDelay: '1s' }}
        >
          <span className="font-mono text-xs tracking-widest">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-amber-500/60 to-transparent" />
        </div>
      </div>
    </section>
  );
}
