import React, { useState } from 'react'
import Button from './Button'
import { FiMail } from 'react-icons/fi'
import { FaTelegram, FaInstagram, FaYoutube, FaXTwitter } from 'react-icons/fa6'

// ---------- Matnlarni va havolalarni shu yerdan o'zgartiring ----------
const BRAND = { first: 'Tilla', second: '.fx' }

const CONTENT = {
  eyebrow: 'Stay in touch',
  titleStart: "Let's Connect with ",
  titleBrand: 'Tilla.fx',
  text: 'Get market insights, learning materials and platform updates straight to your inbox.',
  placeholder: 'Enter your email',
  submit: 'Subscribe',
  success: 'Thank you! You are subscribed.',
  about:
    'Trade gold and forex with transparent pricing, practical tools and a focus on risk management.',
  risk: 'Risk warning: trading leveraged products such as forex and gold carries a high level of risk and may not be suitable for all investors. You may lose more than your initial deposit. Make sure you understand the risks and trade only with money you can afford to lose.',
}

const COLUMNS = [
  {
    title: 'Product',
    links: [
      { text: 'Markets', href: '#markets' },
      { text: 'Services', href: '#services' },
      { text: 'Accounts', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { text: 'About', href: '#about' },
      { text: 'Education', href: '#insights' },
      { text: 'Contact', href: '#contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { text: 'Risk Disclosure', href: '#' },
      { text: 'Privacy Policy', href: '#' },
      { text: 'Cookie Policy', href: '#' },
    ],
  },
]

const SOCIALS = [
  { icon: FaTelegram, label: 'Telegram', href: '#' },
  { icon: FaInstagram, label: 'Instagram', href: '#' },
  { icon: FaYoutube, label: 'YouTube', href: '#' },
  { icon: FaXTwitter, label: 'X (Twitter)', href: '#' },
]

const FooterLogo = () => (
  <span className="inline-flex items-center gap-2.5">
    <svg viewBox="0 0 40 40" className="h-9 w-9 shrink-0" aria-hidden="true">
      <defs>
        <linearGradient id="tf-ft-bg" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1e293b" />
          <stop offset="1" stopColor="#0b1220" />
        </linearGradient>
        <linearGradient id="tf-ft-gold" x1="0" y1="6" x2="0" y2="33" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fef3c7" />
          <stop offset="0.45" stopColor="#fbbf24" />
          <stop offset="1" stopColor="#d97706" />
        </linearGradient>
        <linearGradient id="tf-ft-silver" x1="0" y1="7" x2="0" y2="34" gradientUnits="userSpaceOnUse">
          <stop stopColor="#cbd5e1" />
          <stop offset="0.55" stopColor="#94a3b8" />
          <stop offset="1" stopColor="#f8fafc" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="11" fill="url(#tf-ft-bg)" />
      <rect x="0.5" y="0.5" width="39" height="39" rx="10.5" fill="none" stroke="#fbbf24" strokeOpacity="0.25" />
      <polygon points="27,7 32.5,15 21.5,15" fill="url(#tf-ft-gold)" stroke="url(#tf-ft-gold)" strokeWidth="1.2" strokeLinejoin="round" />
      <line x1="27" y1="15" x2="27" y2="32" stroke="url(#tf-ft-gold)" strokeWidth="1.5" strokeLinecap="round" />
      <rect x="24.8" y="19" width="4.4" height="9" rx="1.1" fill="url(#tf-ft-gold)" />
      <polygon points="13,33 7.5,25 18.5,25" fill="url(#tf-ft-silver)" stroke="url(#tf-ft-silver)" strokeWidth="1.2" strokeLinejoin="round" />
      <line x1="13" y1="25" x2="13" y2="8" stroke="url(#tf-ft-silver)" strokeWidth="1.5" strokeLinecap="round" />
      <rect x="10.8" y="12" width="4.4" height="9" rx="1.1" fill="url(#tf-ft-silver)" />
    </svg>
    <span className="text-[22px] font-extrabold leading-none tracking-tight text-slate-900">
      {BRAND.first}
      <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
        {BRAND.second}
      </span>
    </span>
  </span>
)

const Footer = () => {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    if (!email.trim()) return
    // TODO: bu yerda emailni serverga yuboring (API chaqiruvi)
    setDone(true)
    setEmail('')
  }

  return (
    <footer
      id="contact"
      className="relative isolate overflow-hidden bg-gradient-to-b from-sky-50 to-sky-100 pt-16 text-slate-900 sm:pt-20"
    >
      <div className="main-container">
        {/* Obuna kartochkasi */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 px-6 py-10 text-center text-white shadow-2xl shadow-sky-900/20 sm:px-12 sm:py-14">
          <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-amber-400/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-sky-400/20 blur-3xl" />

          <span className="relative inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-[13px] font-semibold text-sky-100">
            {CONTENT.eyebrow}
          </span>

          <h2 className="relative mt-5 text-[28px] font-extrabold leading-[1.15] tracking-tight sm:text-4xl">
            {CONTENT.titleStart}
            <span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
              {CONTENT.titleBrand}
            </span>
          </h2>

          <p className="relative mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
            {CONTENT.text}
          </p>

          <form
            onSubmit={onSubmit}
            className="relative mx-auto mt-7 flex max-w-lg flex-col gap-3 sm:flex-row"
          >
            <label className="relative flex-1">
              <span className="sr-only">Email</span>
              <FiMail className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-lg text-slate-400" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  if (done) setDone(false)
                }}
                placeholder={CONTENT.placeholder}
                className="w-full rounded-full border border-white/15 bg-white/10 py-3.5 pl-11 pr-4 text-[15px] text-white placeholder:text-slate-400 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400/40"
              />
            </label>
            <Button title={CONTENT.submit} type="submit" className="sm:shrink-0" />
          </form>

          <p
            role="status"
            aria-live="polite"
            className={`relative mt-3 h-5 text-sm font-medium text-emerald-300 transition-opacity duration-300 ${
              done ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {done ? CONTENT.success : ''}
          </p>
        </div>

        {/* Havolalar */}
        <div className="grid gap-10 py-14 md:grid-cols-[1.2fr_2fr]">
          <div>
            <a href="#home" aria-label="Tilla.fx bosh sahifa" className="inline-block">
              <FooterLogo />
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-600">
              {CONTENT.about}
            </p>

            <ul className="mt-5 flex gap-2">
              {SOCIALS.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-sky-200 bg-white text-lg text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-400 hover:text-sky-600"
                  >
                    <Icon />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {COLUMNS.map((col) => (
              <nav key={col.title} aria-label={col.title}>
                <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-900">
                  {col.title}
                </h3>
                <ul className="mt-4 space-y-3">
                  {col.links.map((l) => (
                    <li key={l.text}>
                      <a
                        href={l.href}
                        className="text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-sky-700"
                      >
                        {l.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        {/* Pastki qism */}
        <div className="border-t border-sky-200 py-8">
          <p className="text-xs leading-relaxed text-slate-500">{CONTENT.risk}</p>
          <p className="mt-4 text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Tilla.fx. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer