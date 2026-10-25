import React from 'react'
import { FiTrendingUp, FiGlobe, FiLayers } from 'react-icons/fi'

// Bozorlar ro'yxatini shu yerdan o'zgartiring.
// Eslatma: endi '../data' dagi marketCards ishlatilmaydi.
export const MARKETS = [
  {
    icon: FiTrendingUp,
    gold: true,
    title: 'Gold (XAU/USD)',
    text: 'The most popular precious metal market. Follow gold against the US dollar and react to inflation data, interest rates and global events.',
    tags: ['XAU/USD'],
  },
  {
    icon: FiGlobe,
    title: 'Major Pairs',
    text: 'The most traded currency pairs in the world, known for deep liquidity and tight spreads during active sessions.',
    tags: ['EUR/USD', 'GBP/USD', 'USD/JPY', 'USD/CHF'],
  },
  {
    icon: FiLayers,
    title: 'Cross Pairs',
    text: 'Currency pairs without the US dollar. A way to trade the relative strength of two economies directly.',
    tags: ['EUR/GBP', 'EUR/JPY', 'GBP/JPY'],
  },
]

const MarketCard = ({ items = MARKETS }) => {
  return (
    <div className="grid gap-4 sm:gap-5 md:grid-cols-3">
      {items.map(({ icon: Icon, gold, title, text, tags }) => (
        <article
          key={title}
          className="group flex h-full flex-col rounded-3xl border border-sky-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-sky-300 hover:shadow-xl hover:shadow-sky-900/10"
        >
          <span
            className={`flex h-12 w-12 items-center justify-center rounded-2xl text-[22px] shadow-md ${
              gold
                ? 'bg-gradient-to-br from-amber-200 via-amber-400 to-amber-600 text-amber-950 shadow-amber-500/30'
                : 'bg-gradient-to-br from-sky-400 to-blue-600 text-white shadow-sky-500/30'
            }`}
          >
            <Icon />
          </span>

          <h3 className="mt-5 text-xl font-bold text-slate-900">{title}</h3>
          <p className="mt-2 flex-1 text-[15px] leading-relaxed text-slate-600">{text}</p>

          <ul className="mt-5 flex flex-wrap gap-2">
            {tags.map((t) => (
              <li
                key={t}
                className={`rounded-full px-3 py-1 text-xs font-bold ${
                  gold ? 'bg-amber-50 text-amber-700' : 'bg-sky-50 text-sky-700'
                }`}
              >
                {t}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  )
}

export default MarketCard