// ─────────────────────────────────────────────────────────────────────────────
// Footer — Minimal with back-to-top
// ─────────────────────────────────────────────────────────────────────────────
export default function Footer({ isDark }) {
  return (
    <footer
      className={`py-10 px-6 border-t ${
        isDark ? 'bg-navy-950 border-amber-500/8' : 'bg-slate-50 border-slate-200'
      }`}
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left: name & year */}
        <div className="flex items-center gap-3">
          <span className={`font-mono text-xs tracking-widest ${isDark ? 'text-amber-500' : 'text-amber-600'}`}>
            ME_
          </span>
          <span className={`font-mono text-xs ${isDark ? 'text-slate-600' : 'text-slate-400'}`}>
            © {new Date().getFullYear()} Munkh-Erdene Erdenetogtokh
          </span>
        </div>

        {/* Center: built with */}
        <p className={`font-mono text-[0.65rem] tracking-widest ${isDark ? 'text-slate-700' : 'text-slate-400'}`}>
          Built with React + Tailwind CSS
        </p>

        {/* Right: back to top */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className={`flex items-center gap-2 font-mono text-xs transition-colors duration-200 ${
            isDark ? 'text-slate-600 hover:text-amber-500' : 'text-slate-400 hover:text-amber-600'
          }`}
        >
          Back to top
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7"/>
          </svg>
        </button>
      </div>
    </footer>
  );
}
