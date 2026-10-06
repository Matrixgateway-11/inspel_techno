import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  onClick?: () => void
  disabled?: boolean
  loading?: boolean
  type?: 'button' | 'submit' | 'reset'
  className?: string
  children: React.ReactNode
  external?: boolean
}

const sizeClasses = {
  sm: 'text-sm px-4 py-2 gap-1.5',
  md: 'text-sm px-6 py-3 gap-2',
  lg: 'text-base px-8 py-4 gap-2',
}

const variantClasses = {
  primary: 'bg-[#1A56DB] text-white hover:bg-[#1648C8] shadow-md hover:shadow-[0_0_24px_rgba(26,86,219,0.2)] border-2 border-transparent',
  secondary: 'bg-white text-[#1A56DB] border-2 border-[#1A56DB] hover:bg-[#EFF6FF]',
  ghost: 'text-white border-2 border-white/30 hover:border-white/60 hover:bg-white/10',
  outline: 'bg-transparent text-[#0F1E5C] border-2 border-navy/20 hover:border-navy/40 hover:bg-[#040E2B]/5',
}

export default function Button({
  variant = 'primary', size = 'md', href, onClick, disabled, loading, type = 'button', className = '', children, external,
}: ButtonProps) {
  const baseClass = `inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 
    focus:outline-none focus:ring-2 focus:ring-[#1A56DB] focus:ring-offset-2 
    active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100
    ${sizeClasses[size]} ${variantClasses[variant]} ${className}`

  const content = loading ? (
    <>
      <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
      </svg>
      Loading...
    </>
  ) : children

  if (href) {
    if (external) {
      return (
        <motion.a whileTap={{ scale: 0.97 }} href={href} target="_blank" rel="noopener noreferrer" className={baseClass}>
          {content}
        </motion.a>
      )
    }
    return (
      <motion.div whileTap={{ scale: 0.97 }}>
        <Link to={href} className={baseClass}>{content}</Link>
      </motion.div>
    )
  }

  return (
    <motion.button whileTap={{ scale: 0.97 }} type={type} onClick={onClick} disabled={disabled || loading} className={baseClass}>
      {content}
    </motion.button>
  )
}
