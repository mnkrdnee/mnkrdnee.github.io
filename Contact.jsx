// ─────────────────────────────────────────────────────────────────────────────
// Contact — Reach-out links with animated hover effects
// ─────────────────────────────────────────────────────────────────────────────
import { useRef } from 'react';
import { useInView } from '../hooks/useInView';

const CONTACTS = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
      </svg>
    ),
    label: 'Email',
    value: 'munkherdene@example.com',
    href: 'mailto:munkherdene@example.com',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
      </svg>
    ),
    label: 'Phone',
    value: '+1 (000) 000-0000',
    href: 'tel:+10000000000',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    label: 'LinkedIn',
    value: 'linkedin.com/in/munkherdene',
    href: 'https://linkedin.com/in/munkherdene',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
    label: 'GitHub',
    value: 'github.com/munkherdene',
    href: 'https://github.com/munkherdene',
  },
];

export default function Contact({ isDark }) {
  const ref = useRef(null);
  const visible = useInView(ref, 0.15);

  return (
    <section
      id="contact"
      ref={ref}
      className={`py-28 px-6 ${isDark ? 'bg-navy-900' : 'bg-white'}`}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className={`section-reveal ${visible ? 'visible' : ''}`}>
          <p className={`font-mono text-xs tracking-[0.2em] uppercase mb-3 ${isDark ? 'text-amber-500' : 'text-amber-600'}`}>
            05 / Contact
          </p>
          <h2
            className={`font-serif font-semibold mb-4 ${isDark ? 'text-slate-100' : 'text-navy-950'}`}
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            Let's Connect
          </h2>
          <p className={`text-base max-w-xl mb-16 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
            I'm currently open to new opportunities in ML engineering and data science. Whether you have a project in mind, a research collaboration, or just want to chat about AI — my inbox is open.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 items-start">
          {/* Contact links */}
          <div className={`space-y-3 section-reveal ${visible ? 'visible' : ''}`} style={{ transitionDelay: '0.1s' }}>
            {CONTACTS.map(({ icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className={`group flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 hover:translate-x-2 ${
                  isDark
                    ? 'bg-navy-800 border-amber-500/10 hover:border-amber-500/35 hover:shadow-[0_4px_20px_rgba(245,158,11,0.1)]'
                    : 'bg-slate-50 border-slate-200 hover:border-amber-300 hover:bg-amber-50/50 hover:shadow-md'
                }`}
              >
                <span className={`transition-colors duration-200 ${isDark ? 'text-slate-500 group-hover:text-amber-500' : 'text-slate-400 group-hover:text-amber-600'}`}>
                  {icon}
                </span>
                <div>
                  <p className={`font-mono text-[0.65rem] tracking-widest uppercase mb-0.5 ${isDark ? 'text-slate-600' : 'text-slate-400'}`}>
                    {label}
                  </p>
                  <p className={`text-sm font-medium transition-colors duration-200 ${isDark ? 'text-slate-300 group-hover:text-amber-400' : 'text-slate-700 group-hover:text-amber-700'}`}>
                    {value}
                  </p>
                </div>
                <svg
                  className={`w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-all duration-200 -translate-x-2 group-hover:translate-x-0 ${isDark ? 'text-amber-500' : 'text-amber-600'}`}
                  fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </a>
            ))}
          </div>

          {/* Right: message card */}
          <div
            className={`section-reveal ${visible ? 'visible' : ''} p-8 rounded-2xl border ${
              isDark ? 'bg-navy-800 border-amber-500/12' : 'bg-gradient-to-br from-amber-50 to-cyan-50 border-amber-200'
            }`}
            style={{ transitionDelay: '0.25s' }}
          >
            {/* Decorative element */}
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                style={{ background: 'linear-gradient(135deg, #f59e0b20, #22d3ee20)', border: '1px solid #f59e0b30' }}
              >
                🚀
              </div>
              <h3 className={`font-serif font-semibold text-lg ${isDark ? 'text-slate-100' : 'text-navy-900'}`}>
                Open to Opportunities
              </h3>
            </div>

            <p className={`text-sm leading-relaxed mb-6 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              I'm actively seeking roles in Machine Learning engineering, Data Science, and research positions. I bring strong Python and MATLAB skills, experience with real-world ML pipelines, and a genuine passion for applying AI to scientific problems.
            </p>

            <div className="space-y-2.5">
              {[
                '✓  Available from mid-2026',
                '✓  Open to remote & on-site roles',
                '✓  Interested in research collaboration',
              ].map((item) => (
                <p key={item} className={`font-mono text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  {item}
                </p>
              ))}
            </div>

            <div className="mt-7 pt-5 border-t border-white/10">
              <a
                href="mailto:munkherdene@example.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-amber-500 text-black font-mono text-xs tracking-[0.1em] uppercase font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(245,158,11,0.45)]"
              >
                Send a Message
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
