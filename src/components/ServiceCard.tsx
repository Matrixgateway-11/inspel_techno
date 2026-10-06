import { motion } from 'framer-motion'
import { ArrowRight, type LucideIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

interface ServiceCardProps {
  title: string
  description: string
  icon: LucideIcon
  href: string
  color?: string
  index?: number
}

export default function ServiceCard({ title, description, icon: Icon, href, index = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
    >
      <Link
        to={href}
        className="group flex flex-col h-full bg-white rounded-xl border border-slate-100 p-6
                   shadow-[0_1px_4px_rgba(0,0,0,0.05),0_4px_16px_rgba(0,0,0,0.04)]
                   hover:shadow-[0_4px_24px_rgba(26,86,219,0.1),0_1px_4px_rgba(0,0,0,0.06)]
                   hover:-translate-y-0.5 transition-all duration-200
                   focus:outline-none focus:ring-2 focus:ring-[#1A56DB] focus:ring-offset-2"
      >
        {/* Icon — small, sharp, no big circle */}
        <div className="w-10 h-10 bg-[#EFF6FF] rounded-lg flex items-center justify-center mb-5
                        group-hover:bg-[#1A56DB] transition-colors duration-200">
          <Icon className="w-5 h-5 text-[#1A56DB] group-hover:text-white transition-colors duration-200" strokeWidth={1.8} />
        </div>

        <h3 className="text-[0.95rem] font-bold text-[#0F1E5C] mb-2 tracking-[-0.02em]">{title}</h3>
        <p className="text-sm text-slate-500 leading-relaxed flex-1 font-normal tracking-[-0.005em]">{description}</p>

        <div className="flex items-center gap-1.5 mt-5 text-[#1A56DB] text-sm font-semibold
                        group-hover:gap-2.5 transition-all duration-200">
          Learn more
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" strokeWidth={2.5} />
        </div>
      </Link>
    </motion.div>
  )
}
