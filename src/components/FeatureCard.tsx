import { motion } from 'framer-motion'
import { CheckCircle2, type LucideIcon } from 'lucide-react'

interface FeatureCardProps {
  icon?: LucideIcon
  title: string
  description: string
  features?: string[]
  index?: number
  light?: boolean
}

export default function FeatureCard({ icon: Icon, title, description, features, index = 0, light = false }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className={`p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1
        ${light
          ? 'bg-white/5 border-white/10 hover:bg-white/10'
          : 'bg-white border-slate-100 shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_24px_rgba(26,86,219,0.1)]'}`}
    >
      {Icon && (
        <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4
          ${light ? 'bg-white/10' : 'bg-[#EFF6FF]'}`}>
          <Icon className={`w-5 h-5 ${light ? 'text-blue-200' : 'text-[#1A56DB]'}`} />
        </div>
      )}
      <h3 className={`text-base font-bold mb-2 ${light ? 'text-white' : 'text-[#0F1E5C]'}`}>{title}</h3>
      <p className={`text-sm leading-relaxed ${light ? 'text-blue-100/70' : 'text-slate-500'}`}>{description}</p>

      {features && features.length > 0 && (
        <ul className="mt-4 space-y-2">
          {features.map((f, i) => (
            <li key={i} className={`flex items-start gap-2 text-sm ${light ? 'text-blue-100/80' : 'text-slate-600'}`}>
              <CheckCircle2 className={`w-4 h-4 mt-0.5 flex-shrink-0 ${light ? 'text-blue-300' : 'text-emerald-500'}`} />
              {f}
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  )
}
