import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'

const BASE =
  'group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-[15px] font-bold transition-all duration-300 cursor-pointer'

const VARIANTS = {
  primary:
    'bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-lg shadow-sky-500/30 hover:-translate-y-0.5 hover:shadow-sky-500/50',
  outline:
    'border border-sky-200 bg-white text-slate-800 hover:-translate-y-0.5 hover:border-sky-400 hover:text-sky-700',
  gold: 'bg-gradient-to-r from-amber-400 to-amber-500 text-amber-950 shadow-lg shadow-amber-500/30 hover:-translate-y-0.5 hover:shadow-amber-500/50',
}

// Eslatma: `icon` endi rasm manzili emas, React komponent (masalan FiArrowRight).
// href berilsa <a>, aks holda <button> chiqadi.
const Button = ({
  title,
  href,
  onClick,
  type = 'button',
  variant = 'primary',
  icon: Icon = FiArrowUpRight,
  className = '',
}) => {
  const cls = `${BASE} ${VARIANTS[variant] ?? VARIANTS.primary} ${className}`
  const content = (
    <>
      {title}
      {Icon && (
        <Icon className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      )}
    </>
  )

  if (href) {
    return (
      <a href={href} onClick={onClick} className={cls}>
        {content}
      </a>
    )
  }
  return (
    <button type={type} onClick={onClick} className={cls}>
      {content}
    </button>
  )
}

export default Button