// ─────────────────────────────────────────────────────────────────────────────
// Skills — Animated progress bars across three skill categories
// ─────────────────────────────────────────────────────────────────────────────
import { useRef, useEffect, useState } from 'react';
import { useInView } from '../hooks/useInView';

const SKILL_CATEGORIES = [
  {
    label: 'Programming Languages',
    icon: '⌨️',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'MATLAB', level: 75 },
      { name: 'SQL', level: 80 },
    ],
  },
  {
    label: 'ML & Data Science',
    icon: '🧠',
    skills: [
      { name: 'Machine Learning', level: 85 },
      { name: 'Data Analysis & Viz', level: 88 },
      { name: 'Deep Learning', level: 72 },
    ],
  },
  {
    label: 'Tools & Frameworks',
    icon: '🛠',
    skills: [
      { name: 'Pandas / NumPy', level: 88 },
      { name: 'Scikit-learn', level: 82 },
      { name: 'Excel & Spreadsheets', level: 85 },
    ],
  },
];

function SkillBar({ name, level, visible, isDark }) {
  return (
    <div>
      <div className="flex justify-between items-center mb-1.5">
        <span className={`text-sm font-medium ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
          {name}
        </span>
        <span className={`font-mono text-xs ${isDark ? 'text-amber-500' : 'text-amber-600'}`}>
          {level}%
        </span>
      </div>
      <div className={`h-[3px] rounded-full ${isDark ? 'bg-white/5' : 'bg-slate-200'}`}>
        <div
          className="skill-bar-fill"
          style={{ width: visible ? `${level}%` : '0%' }}
        />
      </div>
    </div>
  );
}

export default function Skills({ isDark }) {
  const ref = useRef(null);
  const visible = useInView(ref, 0.2);

  return (
    <section
      id="skills"
      ref={ref}
      className={`py-28 px-6 ${isDark ? 'bg-navy-950 grid-bg' : 'bg-slate-50 grid-bg'}`}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className={`section-reveal ${visible ? 'visible' : ''}`}>
          <p className={`font-mono text-xs tracking-[0.2em] uppercase mb-3 ${isDark ? 'text-amber-500' : 'text-amber-600'}`}>
            02 / Skills
          </p>
          <h2
            className={`font-serif font-semibold mb-16 ${isDark ? 'text-slate-100' : 'text-navy-950'}`}
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            Tools of the Trade
          </h2>
        </div>

        {/* Skill cards grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat, i) => (
            <div
              key={cat.label}
              className={`section-reveal p-7 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                isDark
                  ? 'bg-navy-800 border-amber-500/10 hover:border-amber-500/25 hover:shadow-[0_12px_40px_rgba(245,158,11,0.07)]'
                  : 'bg-white border-amber-200 hover:border-amber-400 shadow-sm hover:shadow-md'
              } ${visible ? 'visible' : ''}`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* Category label */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{cat.icon}</span>
                <h3 className={`text-sm font-semibold tracking-wide ${isDark ? 'text-slate-200' : 'text-navy-900'}`}>
                  {cat.label}
                </h3>
              </div>

              {/* Skill bars */}
              <div className="space-y-5">
                {cat.skills.map((skill) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    visible={visible}
                    isDark={isDark}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional tool tags */}
        <div className={`mt-12 p-6 rounded-2xl border section-reveal ${visible ? 'visible' : ''} ${
          isDark ? 'bg-navy-800/50 border-amber-500/8' : 'bg-white border-amber-100'
        }`} style={{ transitionDelay: '0.4s' }}>
          <p className={`font-mono text-xs tracking-widest uppercase mb-4 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
            Also familiar with
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              'TensorFlow', 'PyTorch', 'Jupyter', 'Git', 'Matplotlib',
              'Seaborn', 'OpenCV', 'REST APIs', 'Linux', 'Data Pipelines',
            ].map((tool) => (
              <span
                key={tool}
                className={`font-mono text-[0.68rem] px-3 py-1.5 rounded-md border ${
                  isDark
                    ? 'bg-amber-500/5 border-amber-500/15 text-amber-400/70'
                    : 'bg-amber-50 border-amber-200 text-amber-700'
                }`}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
