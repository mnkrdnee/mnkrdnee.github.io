// ─────────────────────────────────────────────────────────────────────────────
// Education — Timeline-style card with degree details
// ─────────────────────────────────────────────────────────────────────────────
import { useRef } from 'react';
import { useInView } from '../hooks/useInView';

export default function Education({ isDark }) {
  const ref = useRef(null);
  const visible = useInView(ref, 0.2);

  return (
    <section
      id="education"
      ref={ref}
      className={`py-28 px-6 ${isDark ? 'bg-navy-950 grid-bg' : 'bg-slate-50 grid-bg'}`}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className={`section-reveal ${visible ? 'visible' : ''}`}>
          <p className={`font-mono text-xs tracking-[0.2em] uppercase mb-3 ${isDark ? 'text-amber-500' : 'text-amber-600'}`}>
            04 / Education
          </p>
          <h2
            className={`font-serif font-semibold mb-16 ${isDark ? 'text-slate-100' : 'text-navy-950'}`}
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            Academic Background
          </h2>
        </div>

        {/* Education card */}
        <div
          className={`section-reveal ${visible ? 'visible' : ''} relative overflow-hidden rounded-2xl border p-8 md:p-10 ${
            isDark
              ? 'bg-navy-800 border-amber-500/12'
              : 'bg-white border-amber-200 shadow-lg'
          }`}
          style={{ transitionDelay: '0.15s' }}
        >
          {/* Left accent stripe */}
          <div
            className="absolute left-0 top-0 bottom-0 w-[3px]"
            style={{ background: 'linear-gradient(180deg, #f59e0b, #22d3ee)' }}
          />

          {/* Background glow (dark only) */}
          {isDark && (
            <div
              className="absolute top-0 right-0 w-72 h-72 pointer-events-none opacity-10"
              style={{
                background: 'radial-gradient(circle, #f59e0b 0%, transparent 70%)',
                filter: 'blur(60px)',
              }}
            />
          )}

          <div className="relative grid md:grid-cols-[1fr_auto] gap-8 items-start">
            {/* Left: details */}
            <div>
              {/* Institution */}
              <div className="flex items-center gap-3 mb-1">
                <span className="text-2xl">🎓</span>
                <h3
                  className={`font-serif font-semibold text-2xl ${isDark ? 'text-slate-100' : 'text-navy-900'}`}
                >
                  China University of Petroleum
                </h3>
              </div>

              {/* Degree */}
              <p
                className={`font-medium text-base mb-5 ml-10 ${isDark ? 'text-amber-400' : 'text-amber-600'}`}
              >
                Bachelor of Engineering — Computer Science and Technology
              </p>

              {/* Highlights */}
              <div className="grid sm:grid-cols-2 gap-3 ml-0 md:ml-10">
                {[
                  { icon: '📅', label: 'Duration', value: '2022 – 2026' },
                  { icon: '🌍', label: 'Location', value: 'China' },
                  { icon: '🎯', label: 'Specialization', value: 'ML & Data Science' },
                  { icon: '🔬', label: 'Research Focus', value: 'Seismic Data Analysis' },
                ].map(({ icon, label, value }) => (
                  <div
                    key={label}
                    className={`flex items-start gap-3 p-3.5 rounded-xl ${
                      isDark ? 'bg-navy-900/60' : 'bg-slate-50'
                    }`}
                  >
                    <span className="text-base mt-0.5">{icon}</span>
                    <div>
                      <p className={`font-mono text-[0.65rem] tracking-widest uppercase mb-0.5 ${isDark ? 'text-slate-600' : 'text-slate-400'}`}>
                        {label}
                      </p>
                      <p className={`text-sm font-medium ${isDark ? 'text-slate-200' : 'text-navy-800'}`}>
                        {value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Relevant coursework */}
              <div className="mt-6 ml-0 md:ml-10">
                <p className={`font-mono text-[0.65rem] tracking-widest uppercase mb-3 ${isDark ? 'text-slate-600' : 'text-slate-400'}`}>
                  Relevant Coursework
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Data Structures & Algorithms',
                    'Machine Learning',
                    'Database Systems',
                    'Signal Processing',
                    'Linear Algebra',
                    'Statistics & Probability',
                    'Computer Networks',
                    'Software Engineering',
                  ].map((course) => (
                    <span
                      key={course}
                      className={`font-mono text-[0.65rem] px-2.5 py-1 rounded border ${
                        isDark
                          ? 'bg-amber-500/5 border-amber-500/15 text-amber-400/60'
                          : 'bg-amber-50 border-amber-200 text-amber-700'
                      }`}
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: graduation year badge */}
            <div className="flex flex-col items-center md:items-end">
              <div
                className={`px-5 py-3 rounded-xl text-center ${
                  isDark ? 'bg-amber-500/10 border border-amber-500/25' : 'bg-amber-100 border border-amber-300'
                }`}
              >
                <p className={`font-mono text-[0.6rem] tracking-[0.15em] uppercase mb-1 ${isDark ? 'text-amber-500/70' : 'text-amber-600'}`}>
                  Graduating
                </p>
                <p
                  className="font-serif font-bold text-3xl"
                  style={{
                    background: 'linear-gradient(135deg, #f59e0b, #22d3ee)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  2026
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
