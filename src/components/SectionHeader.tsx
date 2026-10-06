import { motion } from 'framer-motion'

interface SectionHeaderProps {
  label?: string
  title: string
  subtitle?: string
  center?: boolean
  light?: boolean
  className?: string
}

export default function SectionHeader({ label, title, subtitle, center = true, light = false, className = '' }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.45 }}
      className={`${center ? 'text-center' : ''} ${className}`}
    >
      {label && (
        <div className={`inline-flex items-center gap-2 mb-4
          ${light ? 'text-blue-300' : 'text-[#1A56DB]'}`}>
          <span className={`w-2 h-2 rounded-full ${light ? 'bg-blue-300' : 'bg-[#1A56DB]'}`} />
          <span className="text-xs font-bold uppercase tracking-[0.12em]">{label}</span>
        </div>
      )}
      <h2 className={`text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold leading-[1.15] tracking-[-0.03em] text-balance
        ${light ? 'text-white' : 'text-[#0F1E5C]'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base sm:text-lg leading-relaxed max-w-2xl font-normal tracking-[-0.01em]
          ${center ? 'mx-auto' : ''}
          ${light ? 'text-blue-200/70' : 'text-slate-500'}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
