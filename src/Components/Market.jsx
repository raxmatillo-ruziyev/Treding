import React from 'react'
import MarketCard from './MarketCard'
import Button from './Button'
import { FiArrowRight } from 'react-icons/fi'

// ---------- Matnlarni shu yerdan o'zgartiring ----------
const CONTENT = {
  eyebrow: 'Markets',
  titleStart: 'Start Trading the ',
  titleGold: 'Markets',
  titleEnd: ' Today',
  text: 'Choose from gold and the most liquid currency pairs. Learn how each market behaves, build a plan and start with a risk you are comfortable with.',
  cta: 'Explore Markets',
}

const Market = () => {
  return (
    <section
      id="markets"
      className="relative isolate overflow-hidden bg-sky-50 py-16 text-slate-900 sm:py-20 lg:py-24"
    >
      <div className="absolute left-1/2 top-0 -z-10 h-[280px] w-[560px] -translate-x-1/2 rounded-full bg-sky-200/50 blur-3xl" />

      <div className="main-container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full border border-sky-200 bg-white px-4 py-1.5 text-[13px] font-semibold text-sky-800 shadow-sm">
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

          <div className="mt-7 flex justify-center">
            <Button title={CONTENT.cta} href="#" icon={FiArrowRight} />
          </div>
        </div>

        <div className="mt-10 lg:mt-14">
          <MarketCard />
        </div>
      </div>
    </section>
  )
}

export default Market