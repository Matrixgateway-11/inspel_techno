import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

interface CTASectionProps {
  title?: string
  subtitle?: string
  primaryLabel?: string
  primaryHref?: string
  secondaryLabel?: string
  secondaryHref?: string
}

export default function CTASection({
  title = 'Start Accepting Payments Today',
  subtitle = 'Join businesses across India that trust Matrix Gateway for their payment infrastructure.',
  primaryLabel = 'Get Started Free',
  primaryHref = '/contact',
  secondaryLabel = 'Talk to Sales',
  secondaryHref = '/contact',
}: CTASectionProps) {
  return (
    <section className="py-20 sm:py-24 bg-[#040E2B] relative overflow-hidden">
      <div className="absolute inset-0"
        style={{
          backgroundImage: 'linear-gradient(rgba(26,86,219,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(26,86,219,0.06) 1px, transparent 1px)',
          backgroundSize: '64px 64px'
        }} />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#1A56DB]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-[-0.04em] leading-[1.1] mb-5">
            {title}
          </h2>
          <p className="text-[#93C5FD]/70 text-base mb-9 leading-relaxed">{subtitle}</p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to={primaryHref}
              className="inline-flex items-center justify-center gap-2 bg-[#1A56DB] text-white font-bold
                         text-sm px-7 py-3.5 rounded-lg hover:bg-[#1648C8] transition-colors shadow-lg
                         active:scale-[0.98]">
              {primaryLabel}
              <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
            </Link>
            <Link to={secondaryHref}
              className="inline-flex items-center justify-center gap-2 text-white font-semibold
                         text-sm px-7 py-3.5 rounded-lg border border-white/15
                         hover:border-white/30 hover:bg-white/5 transition-all">
              {secondaryLabel}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
