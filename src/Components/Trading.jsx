import React from 'react'
import TradingCrad from './TradingCrad'

// ---------- Matnlarni shu yerdan o'zgartiring ----------
const CONTENT = {
  eyebrow: 'Our Values',
  titleStart: 'The Values Behind ',
  titleBrand: 'Tilla.fx',
  text: 'Trading is built on trust, discipline and clarity. These principles guide how we build the platform and how we work with every trader.',
}

const Trading = () => {
  return (
    <section
      id="values"
      className="relative isolate overflow-hidden bg-gradient-to-b from-white via-sky-50 to-sky-100/60 py-16 text-slate-900 sm:py-20 lg:py-24"
    >
      <div className="absolute left-1/2 top-0 -z-10 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-sky-200/40 blur-3xl" />

      <div className="main-container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full border border-sky-200 bg-white px-4 py-1.5 text-[13px] font-semibold text-sky-800 shadow-sm">
            {CONTENT.eyebrow}
          </span>

          <h2 className="mt-5 text-[30px] font-extrabold leading-[1.15] tracking-tight sm:text-4xl lg:text-5xl">
            {CONTENT.titleStart}
            <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              {CONTENT.titleBrand}
            </span>
          </h2>

          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            {CONTENT.text}
          </p>
        </div>

        <div className="mt-10 lg:mt-14">
          <TradingCrad />
        </div>
      </div>
    </section>
  )
}

export default Trading