import React from 'react'
import {
  FiArrowUpRight,
  FiGlobe,
  FiShield,
  FiBookOpen,
  FiUserPlus,
  FiCreditCard,
  FiBarChart2,
} from 'react-icons/fi'

// ---------- Matnlarni shu yerdan o'zgartiring ----------
const CONTENT = {
  eyebrow: 'About Tilla.fx',
  titleStart: 'What is ',
  titleBrand: 'Tilla.fx',
  titleEnd: '?',
  paragraphs: [
    'Tilla.fx is an online trading platform focused on gold and forex. Trade XAU/USD and the major currency pairs with transparent pricing and fast order execution, all in one clean workspace.',
    'Whether you place your first trade on a small cent account or manage a larger portfolio, Tilla.fx gives you the tools to plan every position and keep your risk under control.',
  ],
  cta: 'Open an account',
  stepsTitle: 'How it works',
}

const MARKETS = ['XAU/USD', 'EUR/USD', 'GBP/USD', 'USD/JPY']

const CARDS = [
  {
    icon: FiShield,
    title: 'Risk management tools',
    text: 'Set stop-loss and take-profit levels on every trade and size your positions to match your account.',
  },
  {
    icon: FiBookOpen,
    title: 'Learn as you trade',
    text: 'Start small on a cent account, follow the market and build your strategy step by step.',
  },
]

const STEPS = [
  {
    icon: FiUserPlus,
    title: 'Create your account',
    text: 'Sign up and verify your details to get access to the platform.',
  },
  {
    icon: FiCreditCard,
    title: 'Fund it when you are ready',
    text: 'Deposit only the amount you are comfortable risking.',
  },
  {
    icon: FiBarChart2,
    title: 'Start trading',
    text: 'Pick a market, set your risk and place your first trade.',
  },
]

const Hero = () => {
  return (
    <section
      id="about"
      className="relative isolate overflow-hidden bg-white py-16 text-slate-900 sm:py-20 lg:py-24"
    >
      <div className="absolute -left-24 top-10 -z-10 h-[320px] w-[320px] rounded-full bg-sky-100 blur-3xl" />
      <div className="absolute -right-24 bottom-0 -z-10 h-[300px] w-[300px] rounded-full bg-amber-100/70 blur-3xl" />

      <div className="main-container">
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          {/* Chap: matn */}
          <div>
            <span className="inline-flex items-center rounded-full border border-sky-200 bg-sky-50 px-4 py-1.5 text-[13px] font-semibold text-sky-800">
              {CONTENT.eyebrow}
            </span>

            <h2 className="mt-5 text-[32px] font-extrabold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">
              {CONTENT.titleStart}
              <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                {CONTENT.titleBrand}
              </span>
              {CONTENT.titleEnd}
            </h2>

            <div className="mt-5 space-y-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              {CONTENT.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>

            <a
              href="#"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 px-7 py-3.5 text-[15px] font-bold text-white shadow-lg shadow-sky-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-sky-500/50"
            >
              {CONTENT.cta}
              <FiArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* O'ng: kartochkalar */}
          <div className="grid gap-4 sm:grid-cols-2">
            <article className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 p-6 text-white shadow-xl shadow-slate-900/20 sm:col-span-2">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-amber-400/20 blur-2xl" />
              <span className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-amber-200 via-amber-400 to-amber-600 text-xl text-amber-950 shadow-md shadow-amber-500/30">
                <FiGlobe />
              </span>
              <h3 className="relative mt-4 text-xl font-bold">Gold &amp; Forex markets</h3>
              <p className="relative mt-2 text-sm leading-relaxed text-slate-300">
                Trade XAU/USD alongside the major currency pairs, 24 hours a day, five days a week.
              </p>
              <ul className="relative mt-4 flex flex-wrap gap-2">
                {MARKETS.map((m) => (
                  <li
                    key={m}
                    className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-amber-100"
                  >
                    {m}
                  </li>
                ))}
              </ul>
            </article>

            {CARDS.map(({ icon: Icon, title, text }) => (
              <article
                key={title}
                className="rounded-3xl border border-sky-100 bg-sky-50/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg hover:shadow-sky-900/10"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 text-xl text-white shadow-md shadow-sky-500/30">
                  <Icon />
                </span>
                <h3 className="mt-4 text-lg font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </div>

        {/* Qanday ishlaydi */}
        <div className="mt-16 lg:mt-20">
          <h3 className="text-center text-2xl font-extrabold tracking-tight sm:text-3xl">
            {CONTENT.stepsTitle}
          </h3>
          <ol className="mt-8 grid gap-4 md:grid-cols-3">
            {STEPS.map(({ icon: Icon, title, text }, i) => (
              <li
                key={title}
                className="relative rounded-2xl border border-sky-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-900/10"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-100 text-sm font-extrabold text-sky-700">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <Icon className="text-2xl text-amber-500" />
                </div>
                <h4 className="mt-4 text-base font-bold">{title}</h4>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

export default Hero