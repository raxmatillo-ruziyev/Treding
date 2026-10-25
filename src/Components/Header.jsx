import React from 'react'
import {
  FiArrowRight,
  FiArrowUpRight,
  FiZap,
  FiEye,
  FiLayers,
  FiClock,
  FiTrendingUp,
  FiTrendingDown,
} from 'react-icons/fi'

// ---------- Matnlarni shu yerdan o'zgartiring ----------
const CONTENT = {
  badge: '100% Transparent Trading',
  titleStart: 'Trade ',
  titleGold: 'Gold',
  titleEnd: ' & Forex with Precision',
  text: 'Tilla.fx brings fast execution, clear pricing and professional tools for XAU/USD and the major currency pairs, from your first cent account to a full-scale portfolio.',
  primary: 'Get started',
  secondary: 'Explore Markets',
  risk: 'Trading leveraged products carries a high level of risk and may result in the loss of your capital. Trade only with funds you can afford to lose.',
  chartNote: 'Illustrative chart. Not live market data.',
}

const FEATURES = [
  { icon: FiZap, text: 'Fast execution' },
  { icon: FiEye, text: 'Transparent pricing' },
  { icon: FiLayers, text: 'Cent & standard accounts' },
  { icon: FiClock, text: '24/5 market access' },
]

// Namuna ma'lumotlar (jonli narx emas)
const PAIRS = [
  { name: 'EUR/USD', change: '+0.42%', up: true },
  { name: 'GBP/USD', change: '-0.18%', up: false },
  { name: 'USD/JPY', change: '+0.27%', up: true },
]

// Grafik chizig'i (namuna)
const LINE =
  'M0 150 C28 140 46 160 78 128 S128 88 160 108 S212 66 242 80 S300 34 330 54 S372 22 392 26'
const AREA = `${LINE} L392 190 L0 190 Z`

const GRID_STYLE = {
  backgroundImage:
    'linear-gradient(to right, rgba(14,116,144,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(14,116,144,0.08) 1px, transparent 1px)',
  backgroundSize: '44px 44px',
  WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
  maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
}

const animations = `
@keyframes tf-draw { to { stroke-dashoffset: 0; } }
@keyframes tf-fade { from { opacity: 0; } to { opacity: 1; } }
@keyframes tf-float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
.tf-draw { stroke-dasharray: 1; stroke-dashoffset: 1; animation: tf-draw 2s ease-out 0.3s forwards; }
.tf-fade { opacity: 0; animation: tf-fade 1s ease-out 1.2s forwards; }
.tf-float { animation: tf-float 5s ease-in-out infinite; }
@media (prefers-reduced-motion: reduce) {
  .tf-draw { stroke-dashoffset: 0; animation: none; }
  .tf-fade { opacity: 1; animation: none; }
  .tf-float { animation: none; }
}
`

const Header = () => {
  return (
    <section
      id="home"
      className="relative isolate -mt-24 overflow-hidden pt-24 text-slate-900"
    >
      <style>{animations}</style>

      {/* Fon qatlamlari */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-sky-100 via-sky-50 to-white" />
      <div className="absolute inset-0 -z-10" style={GRID_STYLE} aria-hidden="true" />
      <div className="absolute -right-24 -top-24 -z-10 h-[420px] w-[420px] rounded-full bg-sky-300/40 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 -z-10 h-[360px] w-[360px] rounded-full bg-amber-200/50 blur-3xl" />

      <div className="main-container grid items-center gap-14 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:py-24">
        {/* Chap: matn */}
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-4 py-1.5 text-[13px] font-semibold text-sky-800 shadow-sm backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {CONTENT.badge}
          </span>

          <h1 className="mt-6 text-[34px] font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-[56px]">
            {CONTENT.titleStart}
            <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              {CONTENT.titleGold}
            </span>
            {CONTENT.titleEnd}
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg lg:mx-0">
            {CONTENT.text}
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href="#"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 px-7 py-3.5 text-[15px] font-bold text-white shadow-lg shadow-sky-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-sky-500/50 sm:w-auto"
            >
              {CONTENT.primary}
              <FiArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a
              href="#"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-sky-200 bg-white px-7 py-3.5 text-[15px] font-bold text-slate-800 transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-400 hover:text-sky-700 sm:w-auto"
            >
              {CONTENT.secondary}
              <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm font-medium text-slate-600 lg:justify-start">
            {FEATURES.map(({ icon: Icon, text }) => (
              <li key={text} className="inline-flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-sky-100 text-sky-600">
                  <Icon className="text-[15px]" />
                </span>
                {text}
              </li>
            ))}
          </ul>

          <p className="mx-auto mt-8 max-w-xl text-xs leading-relaxed text-slate-500 lg:mx-0">
            {CONTENT.risk}
          </p>
        </div>

        {/* O'ng: bozor kartochkasi (bezak) */}
        <div className="relative mx-auto w-full max-w-[520px]">
          <div
            aria-hidden="true"
            className="rounded-3xl border border-sky-100 bg-white/80 p-5 shadow-2xl shadow-sky-900/10 backdrop-blur-xl sm:p-6"
          >
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-amber-200 via-amber-400 to-amber-600 text-sm font-extrabold text-amber-950 shadow-md shadow-amber-500/30">
                  Au
                </span>
                <div>
                  <p className="text-[15px] font-bold leading-tight">XAU/USD</p>
                  <p className="text-xs text-slate-500">Gold vs US Dollar</p>
                </div>
              </div>
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-600">
                <FiTrendingUp />
                +1.24%
              </span>
            </div>

            <div className="mt-4">
              <svg viewBox="0 0 400 190" className="h-auto w-full">
                <defs>
                  <linearGradient id="hero-area" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#fbbf24" stopOpacity="0.35" />
                    <stop offset="1" stopColor="#fbbf24" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id="hero-line" x1="0" y1="0" x2="1" y2="0">
                    <stop stopColor="#f59e0b" />
                    <stop offset="1" stopColor="#d97706" />
                  </linearGradient>
                </defs>
                {[40, 80, 120, 160].map((y) => (
                  <line
                    key={y}
                    x1="0"
                    x2="400"
                    y1={y}
                    y2={y}
                    stroke="#0ea5e9"
                    strokeOpacity="0.14"
                    strokeDasharray="4 6"
                  />
                ))}
                <path d={AREA} fill="url(#hero-area)" className="tf-fade" />
                <path
                  d={LINE}
                  pathLength="1"
                  fill="none"
                  stroke="url(#hero-line)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="tf-draw"
                />
                <g className="tf-fade">
                  <circle cx="392" cy="26" r="9" fill="#f59e0b" fillOpacity="0.2" />
                  <circle cx="392" cy="26" r="4.5" fill="#fff" stroke="#f59e0b" strokeWidth="2.5" />
                </g>
              </svg>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-2">
              {PAIRS.map((pair) => (
                <div
                  key={pair.name}
                  className="rounded-2xl border border-sky-100 bg-sky-50/70 px-3 py-2.5"
                >
                  <p className="text-xs font-bold text-slate-700">{pair.name}</p>
                  <p
                    className={`mt-1 inline-flex items-center gap-1 text-xs font-bold ${
                      pair.up ? 'text-emerald-600' : 'text-rose-600'
                    }`}
                  >
                    {pair.up ? <FiTrendingUp /> : <FiTrendingDown />}
                    {pair.change}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-3 text-center text-[11px] text-slate-400">{CONTENT.chartNote}</p>

          {/* Suzuvchi belgilar */}
          <div
            aria-hidden="true"
            className="tf-float absolute -bottom-2 -left-3 hidden items-center gap-2 rounded-2xl border border-amber-100 bg-white px-4 py-2.5 text-xs font-bold text-slate-700 shadow-xl shadow-amber-900/10 sm:flex"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-100 text-amber-600">
              <FiZap />
            </span>
            Fast execution
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header