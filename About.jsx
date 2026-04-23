// ─────────────────────────────────────────────────────────────────────────────
// About — Bio, background highlights, and stat counters
// ─────────────────────────────────────────────────────────────────────────────
import { useRef } from 'react';
import { useInView } from '../hooks/useInView';

const STATS = [
  { value: '4+', label: 'Years of CS Study' },
  { value: '3', label: 'Projects Shipped' },
  { value: '2026', label: 'Graduation Year' },
];

const INTERESTS = [
  'Machine Learning',
  'Deep Learning',
  'Data Engineering',
  'Seismic Analysis',
  'Python',
  'MATLAB',
  'Computer Vision',
  'NLP',
];

export default function About({ isDark }) {
  const ref = useRef(null);
  const visible = useInView(ref);

  return (
    <section
      id="about"
      ref={ref}
      className={`py-28 px-6 ${isDark ? 'bg-navy-900' : 'bg-white'}`}
    >
      <div className={`max-w-5xl mx-auto section-reveal ${visible ? 'visible' : ''}`}>
        {/* Section label */}
        <p className={`font-mono text-xs tracking-[0.2em] uppercase mb-3 ${isDark ? 'text-amber-500' : 'text-amber-600'}`}>
          01 / About
        </p>
        <h2
          className={`font-serif font-semibold mb-16 ${isDark ? 'text-slate-100' : 'text-navy-950'}`}
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
        >
          Bridging Data &amp; Discovery
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: bio text */}
          <div className="space-y-5">
            <p className={`text-base leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              I'm a Computer Science and Technology student at the{' '}
              <span className={isDark ? 'text-amber-400 font-medium' : 'text-amber-600 font-medium'}>
                China University of Petroleum
              </span>
              , graduating in 2026, with a deep focus on Machine Learning and Data Science Engineering.
            </p>
            <p className={`text-base leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              My research sits at a fascinating intersection — applying ML to{' '}
              <span className={isDark ? 'text-cyan-400 font-medium' : 'text-cyan-600 font-medium'}>
                seismic data analysis
              </span>
              , where algorithms interpret subsurface geophysical signals to uncover what lies beneath the earth's surface. This work blends rigorous mathematics, signal processing, and modern deep learning.
            </p>
            <p className={`text-base leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              Beyond research, I thrive on building end-to-end data pipelines and full-stack tools that make data accessible and useful — from non-profit platforms to global food security initiatives.
            </p>

            {/* Interest tags */}
            <div className="flex flex-wrap gap-2 pt-3">
              {INTERESTS.map((tag) => (
                <span
                  key={tag}
                  className={`font-mono text-[0.68rem] px-2.5 py-1 rounded border tracking-wide ${
                    isDark
                      ? 'bg-cyan-400/8 border-cyan-400/25 text-cyan-400'
                      : 'bg-cyan-600/8 border-cyan-600/20 text-cyan-600'
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right: stats + decorative card */}
          <div className="space-y-4">
            {/* Stat cards */}
            {STATS.map(({ value, label }, i) => (
              <div
                key={label}
                className={`flex items-center gap-5 p-5 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                  isDark
                    ? 'bg-navy-800 border-amber-500/10 hover:border-amber-500/30 hover:shadow-[0_8px_30px_rgba(245,158,11,0.08)]'
                    : 'bg-amber-50/50 border-amber-200 hover:border-amber-400'
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <span
                  className="font-serif font-bold text-3xl"
                  style={{
                    background: 'linear-gradient(135deg, #f59e0b, #22d3ee)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {value}
                </span>
                <span className={`text-sm font-medium ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  {label}
                </span>
              </div>
            ))}

            {/* Decorative quote */}
            <div
              className={`p-5 rounded-2xl border-l-2 border-amber-500 ${
                isDark ? 'bg-navy-800/50' : 'bg-amber-50/40'
              }`}
            >
              <p className={`font-serif italic text-base leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                "The goal is to turn data into information, and information into insight."
              </p>
              <p className={`font-mono text-xs mt-2 ${isDark ? 'text-slate-600' : 'text-slate-400'}`}>
                — Carly Fiorina
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
