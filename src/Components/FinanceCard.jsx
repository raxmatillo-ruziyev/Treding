import React from 'react'
import { FiBarChart2, FiFileText, FiShield } from 'react-icons/fi'

// Kartochkalarni shu yerdan o'zgartiring.
// Eslatma: endi '../data' dagi financeCards ishlatilmaydi.
export const PILLARS = [
  {
    icon: FiBarChart2,
    title: 'Technical Analysis',
    text: 'Read price action, trends, support and resistance to find clear entry and exit points.',
  },
  {
    icon: FiFileText,
    title: 'Economic News',
    text: 'Central bank decisions, inflation and jobs data move gold and currencies. Know what is coming.',
  },
  {
    icon: FiShield,
    title: 'Risk & Money Management',
    text: 'Risk a small, fixed part of your balance on each trade and always know your exit before you enter.',
  },
]

const FinanceCard = ({ items = PILLARS }) => {
  return (
    <div className="grid gap-4 sm:gap-5 md:grid-cols-3">
      {items.map(({ icon: Icon, title, text }, i) => (
        <article
          key={title}
          className="group relative overflow-hidden rounded-3xl border border-sky-100 bg-gradient-to-b from-sky-50 to-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-sky-300 hover:shadow-xl hover:shadow-sky-900/10"
        >
          <span className="absolute right-5 top-4 text-5xl font-extrabold text-sky-100 transition-colors duration-300 group-hover:text-amber-100">
            {String(i + 1).padStart(2, '0')}
          </span>

          <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400 to-blue-600 text-[22px] text-white shadow-md shadow-sky-500/30">
            <Icon />
          </span>

          <h3 className="relative mt-5 text-xl font-bold text-slate-900">{title}</h3>
          <p className="relative mt-2 text-[15px] leading-relaxed text-slate-600">{text}</p>
        </article>
      ))}
    </div>
  )
}

export default FinanceCard