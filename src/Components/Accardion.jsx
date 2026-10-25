import React, { useId, useState } from 'react'
import { FiPlus } from 'react-icons/fi'

// Savol-javoblarni shu yerdan o'zgartiring
export const SERVICES = [
  {
    title: 'Gold (XAU/USD) Trading',
    content:
      'Trade gold against the US dollar with transparent pricing. Gold is widely watched as a safe-haven asset, but its price can move fast, so plan your risk before every trade.',
  },
  {
    title: 'Forex Currency Pairs',
    content:
      'Access major pairs such as EUR/USD, GBP/USD and USD/JPY, with market access five days a week.',
  },
  {
    title: 'Cent Accounts',
    content:
      'Practice your strategy with small real-money exposure. A cent account lets you learn the platform and test your approach before you scale up.',
  },
  {
    title: 'Market Analysis & Education',
    content:
      'Learn to read charts, follow economic news and build a clear trading plan, one step at a time.',
  },
  {
    title: 'Risk Management Tools',
    content:
      'Use stop-loss, take-profit and proper position sizing to protect your capital. Discipline matters more than any single trade.',
  },
]

const Item = ({ title, content, open, onToggle }) => {
  const id = useId()
  return (
    <div
      className={`overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
        open
          ? 'border-sky-300 shadow-lg shadow-sky-900/10'
          : 'border-sky-100 shadow-sm hover:border-sky-200'
      }`}
    >
      <h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={`${id}-panel`}
          id={`${id}-button`}
          className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
        >
          <span className="text-base font-bold text-slate-900 sm:text-lg">{title}</span>
          <span
            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
              open ? 'rotate-45 bg-sky-500 text-white' : 'bg-sky-100 text-sky-700'
            }`}
          >
            <FiPlus />
          </span>
        </button>
      </h3>

      <div
        id={`${id}-panel`}
        role="region"
        aria-labelledby={`${id}-button`}
        className={`grid transition-all duration-300 ease-in-out ${
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-5 text-[15px] leading-relaxed text-slate-600 sm:px-6">
            {content}
          </p>
        </div>
      </div>
    </div>
  )
}

const Accardion = ({ items = SERVICES }) => {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <Item
          key={item.title}
          title={item.title}
          content={item.content}
          open={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
        />
      ))}
    </div>
  )
}

export default Accardion