import React, { useCallback, useEffect, useState } from 'react'
import { navbarData } from '../data'
import { bgheader } from '../assets/index'
import { RxHamburgerMenu, RxCross2 } from 'react-icons/rx'
import { FiArrowUpRight } from 'react-icons/fi'

// Brend va matnlarni shu yerdan o'zgartiring
const BRAND = { first: 'Tilla', second: '.fx' }
const CTA_TEXT = 'Start trading'

// Navbarda faqat dastlabki NAV_LIMIT ta havola ko'rinadi ("More" menyusi olib tashlandi)
const NAV_LIMIT = 4
// Ko'rsatilmaydigan havolalar (kichik harfda yozing)
const HIDDEN_LINKS = ['books']
const DESKTOP_BREAKPOINT = 780

// "HOME" -> "Home", "ABOUT US" -> "About Us"
const toTitle = (s = '') =>
  String(s)
    .toLowerCase()
    .replace(/(^|\s)\S/g, (c) => c.toUpperCase())

// Modul darajasida bir marta hisoblanadi (har renderda qayta emas)
const LINKS = navbarData
  .slice(0, NAV_LIMIT)
  .filter((item) => !HIDDEN_LINKS.includes(String(item.text).trim().toLowerCase()))
  .map((item) => ({ ...item, label: toTitle(item.text) }))

// Shrift: Plus Jakarta Sans (zamonaviy fintech uslubi)
const FONT_URL =
  'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap'
const FONT_FAMILY = "'Plus Jakarta Sans', ui-sans-serif, system-ui, sans-serif"

// Logo: ikki tomonga yo'nalgan shamchiq-strelkalar (oltin = o'sish, kumush = tushish)
const Logo = () => (
  <span className="inline-flex items-center gap-2.5">
    <svg viewBox="0 0 40 40" className="h-9 w-9 shrink-0" aria-hidden="true">
      <defs>
        <linearGradient
          id="tf-bg"
          x1="0"
          y1="0"
          x2="40"
          y2="40"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1e293b" />
          <stop offset="1" stopColor="#0b1220" />
        </linearGradient>
        <linearGradient
          id="tf-gold"
          x1="0"
          y1="6"
          x2="0"
          y2="33"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fef3c7" />
          <stop offset="0.45" stopColor="#fbbf24" />
          <stop offset="1" stopColor="#d97706" />
        </linearGradient>
        <linearGradient
          id="tf-silver"
          x1="0"
          y1="7"
          x2="0"
          y2="34"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#cbd5e1" />
          <stop offset="0.55" stopColor="#94a3b8" />
          <stop offset="1" stopColor="#f8fafc" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="11" fill="url(#tf-bg)" />
      <rect
        x="0.5"
        y="0.5"
        width="39"
        height="39"
        rx="10.5"
        fill="none"
        stroke="#fbbf24"
        strokeOpacity="0.25"
      />

      {/* O'ng: oltin strelka yuqoriga = o'sish (shamchiq tanali) */}
      <polygon
        points="27,7 32.5,15 21.5,15"
        fill="url(#tf-gold)"
        stroke="url(#tf-gold)"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <line
        x1="27"
        y1="15"
        x2="27"
        y2="32"
        stroke="url(#tf-gold)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <rect x="24.8" y="19" width="4.4" height="9" rx="1.1" fill="url(#tf-gold)" />

      {/* Chap: kumush strelka pastga = tushish */}
      <polygon
        points="13,33 7.5,25 18.5,25"
        fill="url(#tf-silver)"
        stroke="url(#tf-silver)"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <line
        x1="13"
        y1="25"
        x2="13"
        y2="8"
        stroke="url(#tf-silver)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <rect x="10.8" y="12" width="4.4" height="9" rx="1.1" fill="url(#tf-silver)" />
    </svg>
    <span className="text-[22px] font-extrabold leading-none tracking-tight text-slate-900">
      {BRAND.first}
      <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
        {BRAND.second}
      </span>
    </span>
  </span>
)

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  const closeMenu = useCallback(() => setOpen(false), [])

  // Shriftni bir marta yuklash (keyin index.html ga ko'chirsa ham bo'ladi)
  useEffect(() => {
    if (document.getElementById('tilla-font')) return
    const link = document.createElement('link')
    link.id = 'tilla-font'
    link.rel = 'stylesheet'
    link.href = FONT_URL
    document.head.appendChild(link)
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    const onResize = () => window.innerWidth > DESKTOP_BREAKPOINT && setOpen(false)
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const linkClass =
    'rounded-full px-4 py-2 text-sm font-semibold text-slate-700 transition-colors duration-200 hover:bg-white hover:text-sky-700'

  return (
    <>
      <img
        src={bgheader}
        alt=""
        aria-hidden="true"
        decoding="async"
        className="-z-10 absolute inset-0 w-full"
      />

      <header
        className="sticky top-0 z-50 px-4 pt-4"
        style={{ fontFamily: FONT_FAMILY }}
      >
        <nav
          aria-label="Asosiy menyu"
          className={`mx-auto flex max-w-[1180px] items-center justify-between gap-4 rounded-2xl border px-4 backdrop-blur-xl transition-all duration-300 ${
            scrolled || open
              ? 'border-sky-200 bg-sky-100/90 py-2 shadow-lg shadow-sky-900/10'
              : 'border-sky-200/70 bg-sky-50/95 py-3 shadow-md shadow-sky-900/5'
          }`}
        >
          <a href="/home" onClick={closeMenu} aria-label="Tilla.fx bosh sahifa" className="shrink-0">
            <Logo />
          </a>

          {/* Desktop havolalar */}
          <ul className="flex flex-1 items-center justify-center gap-1 max-[780px]:hidden">
            {LINKS.map((item) => (
              <li key={item.id}>
                <a className={linkClass} href={item.href ?? '#'}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex shrink-0 items-center gap-2">
            <a
              href="#"
              className="group inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-sky-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-sky-500/50 max-[780px]:hidden"
            >
              {CTA_TEXT}
              <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Menyuni yopish' : 'Menyuni ochish'}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="rounded-lg p-2 text-[24px] text-slate-700 transition-colors hover:bg-white min-[781px]:hidden"
            >
              {open ? <RxCross2 /> : <RxHamburgerMenu />}
            </button>
          </div>
        </nav>

        {/* Mobil menyu */}
        <div
          id="mobile-menu"
          aria-hidden={!open}
          className={`mx-auto mt-2 max-w-[1180px] overflow-hidden rounded-2xl border border-sky-200 bg-sky-50/95 shadow-xl shadow-sky-900/10 backdrop-blur-xl transition-all duration-300 min-[781px]:hidden ${
            open
              ? 'visible max-h-[420px] opacity-100'
              : 'invisible max-h-0 border-transparent opacity-0'
          }`}
        >
          <ul className="flex flex-col p-3">
            {LINKS.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href ?? '#'}
                  onClick={closeMenu}
                  className="block rounded-xl px-4 py-3 text-base font-semibold text-slate-700 transition-colors hover:bg-white hover:text-sky-700"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <a
                href="#"
                onClick={closeMenu}
                className="block rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 py-3 text-center text-sm font-bold text-white"
              >
                {CTA_TEXT}
              </a>
            </li>
          </ul>
        </div>
      </header>
    </>
  )
}

export default Navbar