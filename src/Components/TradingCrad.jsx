import React from 'react'
import { FiEye, FiZap, FiLock, FiTarget, FiBookOpen, FiHeadphones } from 'react-icons/fi'

// Qadriyatlar (kartochkalar) matnini shu yerdan o'zgartiring.
// Eslatma: endi '../data' dagi tradingCards ishlatilmaydi.
export const VALUES = [
  {
    icon: FiEye,
    title: 'Transparency',
    text: 'Clear pricing and open trading conditions. You always know what you trade and what it costs.',
  },
  {
    icon: FiZap,
    title: 'Speed',
    text: 'Fast order execution and a responsive platform, so you can act the moment the market moves.',
  },
  {
    icon: FiLock,
    title: 'Security',
    text: 'We treat the protection of your funds and personal data as a top priority.',
  },
  {
    icon: FiTarget,
    title: 'Risk Awareness',
    text: 'No promises of easy profit. We promote stop-loss, position sizing and disciplined decisions.',
  },
  {
    icon: FiBookOpen,
    title: 'Education',
    text: 'Market insights and cent accounts that let you learn and practice with small risk.',
  },
  {
    icon: FiHeadphones,
    title: 'Support',
    text: 'Responsive help with your account, deposits and platform questions when you need it.',
  },
]

const TradingCrad = ({ items = VALUES }) => {
  return (
    <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
      {items.map(({ icon: Icon, title, text }, i) => (
        <article
          key={title}
          className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-sky-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-sky-300 hover:shadow-xl hover:shadow-sky-900/10"
        >
          <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-sky-50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          <div className="relative flex items-start justify-between">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400 to-blue-600 text-[22px] text-white shadow-md shadow-sky-500/30">
              <Icon />
            </span>
            <span className="text-sm font-extrabold text-slate-300 transition-colors duration-300 group-hover:text-amber-500">
              {String(i + 1).padStart(2, '0')}
            </span>
          </div>

          <h3 className="relative mt-5 text-xl font-bold text-slate-900">{title}</h3>
          <p className="relative mt-2 text-[15px] leading-relaxed text-slate-600">{text}</p>
        </article>
      ))}
    </div>
  )
}

export default TradingCrad