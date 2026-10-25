import React from 'react'
import FinanceCard from './FinanceCard'
import Button from './Button'
import { FiArrowRight } from 'react-icons/fi'

// ---------- Matnlarni shu yerdan o'zgartiring ----------
const CONTENT = {
  eyebrow: 'Our Approach',
  titleStart: 'Our View of the ',
  titleGold: 'Modern',
  titleEnd: ' Financial World',
  text: 'Successful trading is built on three habits: understanding the chart, following the news and protecting your capital. We focus on all three.',
  cta: 'Learn more',
  note: 'Educational content only. It is not investment advice.',
}

const Finance = () => {
  return (
    <section
      id="insights"
      className="relative isolate overflow-hidden bg-white py-16 text-slate-900 sm:py-20 lg:py-24"
    >
      <div className="absolute -left-24 top-10 -z-10 h-[300px] w-[300px] rounded-full bg-amber-100/70 blur-3xl" />
      <div className="absolute -right-24 bottom-0 -z-10 h-[320px] w-[320px] rounded-full bg-sky-100 blur-3xl" />

      <div className="main-container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full border border-sky-200 bg-sky-50 px-4 py-1.5 text-[13px] font-semibold text-sky-800">
            {CONTENT.eyebrow}
          </span>

          <h2 className="mt-5 text-[30px] font-extrabold leading-[1.15] tracking-tight sm:text-4xl lg:text-5xl">
            {CONTENT.titleStart}
            <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              {CONTENT.titleGold}
            </span>
            {CONTENT.titleEnd}
          </h2>

          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            {CONTENT.text}
          </p>
        </div>

        <div className="mt-10 lg:mt-14">
          <FinanceCard />
        </div>

        <div className="mt-10 flex flex-col items-center gap-3">
          <Button title={CONTENT.cta} href="#" variant="outline" icon={FiArrowRight} />
          <p className="text-xs text-slate-500">{CONTENT.note}</p>
        </div>
      </div>
    </section>
  )
}

export default Finance