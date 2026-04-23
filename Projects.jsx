// ─────────────────────────────────────────────────────────────────────────────
// Projects — Animated cards with tech tags, GitHub/demo links
// ─────────────────────────────────────────────────────────────────────────────
import { useRef } from 'react';
import { useInView } from '../hooks/useInView';

const PROJECTS = [
  {
    id: 1,
    title: 'Seismic Impedance Inversion',
    category: 'ML Research',
    description:
      'Developed an ML-powered geophysical inversion model that interprets subsurface acoustic impedance from seismic reflection data. Enables non-invasive petroleum reservoir characterization and reduces the need for costly exploratory drilling.',
    highlights: [
      'Model-based and sparse-spike inversion algorithms',
      'Feature extraction from seismic waveforms',
      'Validated against borehole well-log data',
    ],
    tags: ['Python', 'MATLAB', 'Machine Learning', 'NumPy', 'Scikit-learn'],
    icon: '🌊',
    accentColor: '#f59e0b',
    github: '#',
    demo: null,
  },
  {
    id: 2,
    title: 'Food Summit International',
    category: 'Data Engineering',
    description:
      'Built an end-to-end data engineering pipeline for an international food security project. Ingested, cleaned, and aggregated heterogeneous agricultural datasets from multiple countries, then produced visualizations and dashboards to support policy decisions.',
    highlights: [
      'Multi-source ETL pipeline with deduplication',
      'Interactive summary dashboards',
      'Automated data quality validation',
    ],
    tags: ['Python', 'SQL', 'Pandas', 'Excel', 'Data Pipelines'],
    icon: '🌾',
    accentColor: '#22d3ee',
    github: '#',
    demo: null,
  },
  {
    id: 3,
    title: 'Check-check Non-profit',
    category: 'Web + Data',
    description:
      'Designed and built a full-stack web platform and analytics dashboard for a non-profit organization. The platform facilitates transparent reporting, volunteer task tracking, and real-time operational metrics for board members.',
    highlights: [
      'Volunteer management & task assignment module',
      'Admin analytics dashboard with KPI tracking',
      'Role-based access control',
    ],
    tags: ['Web Dev', 'Python', 'SQL', 'Data Analysis', 'Dashboard'],
    icon: '✓',
    accentColor: '#a78bfa',
    github: '#',
    demo: null,
  },
];

// External link icon
const IconExternal = () => (
  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
  </svg>
);

// GitHub icon
const IconGithub = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);

export default function Projects({ isDark }) {
  const ref = useRef(null);
  const visible = useInView(ref, 0.1);

  return (
    <section
      id="projects"
      ref={ref}
      className={`py-28 px-6 ${isDark ? 'bg-navy-900' : 'bg-white'}`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className={`section-reveal ${visible ? 'visible' : ''}`}>
          <p className={`font-mono text-xs tracking-[0.2em] uppercase mb-3 ${isDark ? 'text-amber-500' : 'text-amber-600'}`}>
            03 / Projects
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-4">
            <h2
              className={`font-serif font-semibold ${isDark ? 'text-slate-100' : 'text-navy-950'}`}
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              Selected Work
            </h2>
            <p className={`text-sm max-w-sm ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
              A selection of projects spanning ML research, data engineering, and web development.
            </p>
          </div>
        </div>

        {/* Project cards */}
        <div className="grid lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, i) => (
            <div
              key={project.id}
              className={`project-card group section-reveal ${visible ? 'visible' : ''} ${
                isDark
                  ? 'bg-navy-800 border border-amber-500/10 hover:border-amber-500/40 hover:shadow-[0_24px_48px_rgba(245,158,11,0.12)]'
                  : 'bg-slate-50 border border-slate-200 hover:border-amber-300 hover:shadow-xl'
              } rounded-2xl p-7 flex flex-col`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Card top: category badge + icon */}
              <div className="flex items-start justify-between mb-6">
                <span
                  className="font-mono text-[0.65rem] tracking-widest uppercase px-2.5 py-1 rounded"
                  style={{
                    background: `${project.accentColor}14`,
                    border: `1px solid ${project.accentColor}30`,
                    color: project.accentColor,
                  }}
                >
                  {project.category}
                </span>
                <span className="text-3xl">{project.icon}</span>
              </div>

              {/* Title */}
              <h3
                className={`font-serif font-semibold text-xl mb-3 leading-snug ${
                  isDark ? 'text-slate-100' : 'text-navy-900'
                }`}
              >
                {project.title}
              </h3>

              {/* Description */}
              <p className={`text-sm leading-relaxed mb-5 flex-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                {project.description}
              </p>

              {/* Highlights */}
              <ul className="space-y-1.5 mb-6">
                {project.highlights.map((h) => (
                  <li
                    key={h}
                    className={`flex items-start gap-2 text-xs ${isDark ? 'text-slate-500' : 'text-slate-400'}`}
                  >
                    <span
                      className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0"
                      style={{ background: project.accentColor }}
                    />
                    {h}
                  </li>
                ))}
              </ul>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`font-mono text-[0.62rem] px-2 py-1 rounded border ${
                      isDark
                        ? 'bg-cyan-400/5 border-cyan-400/20 text-cyan-400'
                        : 'bg-cyan-50 border-cyan-200 text-cyan-700'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-1.5 font-mono text-xs transition-colors duration-200 ${
                    isDark ? 'text-slate-500 hover:text-amber-500' : 'text-slate-400 hover:text-amber-600'
                  }`}
                >
                  <IconGithub />
                  GitHub
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-1.5 font-mono text-xs transition-colors duration-200 ${
                      isDark ? 'text-slate-500 hover:text-cyan-400' : 'text-slate-400 hover:text-cyan-600'
                    }`}
                  >
                    <IconExternal />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
