import React from 'react'
import Accardion from './Accardion'
import Button from './Button'

// ---------- Matnlarni shu yerdan o'zgartiring ----------
const CONTENT = {
  eyebrow: 'What We Offer',
  titleStart: 'Our ',
  titleGold: 'Services',
  text: 'Everything you need to trade gold and forex with confidence: clear pricing, practical tools and learning resources, built around disciplined risk management.',
  cta: 'Open an account',
}

const Services = () => {
  return (
    <section
      id="services"
      className="relative isolate overflow-hidden bg-white py-16 text-slate-900 sm:py-20 lg:py-24"
    >
      <div className="absolute -right-20 top-0 -z-10 h-[320px] w-[320px] rounded-full bg-sky-100 blur-3xl" />
      <div className="absolute -left-20 bottom-0 -z-10 h-[280px] w-[280px] rounded-full bg-amber-100/70 blur-3xl" />

      <div className="main-container grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="text-center lg:sticky lg:top-28 lg:text-left">
          <span className="inline-flex items-center rounded-full border border-sky-200 bg-sky-50 px-4 py-1.5 text-[13px] font-semibold text-sky-800">
            {CONTENT.eyebrow}
          </span>

          <h2 className="mt-5 text-[32px] font-extrabold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">
            {CONTENT.titleStart}
            <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              {CONTENT.titleGold}
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg lg:mx-0">
            {CONTENT.text}
          </p>

          <div className="mt-8 flex justify-center lg:justify-start">
            <Button title={CONTENT.cta} href="#" />
          </div>
        </div>

        <Accardion />
      </div>
    </section>
  )
}

export default Services