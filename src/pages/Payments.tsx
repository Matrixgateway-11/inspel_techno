import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
import ServiceIconBadge from '../components/ServiceIcon'

/* "What We Provide the Best" — 2x2 feature cards */
const provideCards = [
  { icon: 'options', title: 'Countless Payment Options', desc: 'UPI, cards, net banking, wallets & more — all supported.' },
  { icon: 'security', title: 'Security-Conscious Design', desc: 'Encrypted transactions and secure data handling at every step.' },
  { icon: 'quick-checkout', title: 'Quick Checkout', desc: 'Fast, frictionless checkout that keeps customers converting.' },
  { icon: 'invoice-pay', title: 'Invoice Payments', desc: 'Collect against invoices with a built-in payment link.' },
]

/* "Getting Onboard" — 2x2 feature cards */
const onboardCards = [
  { icon: 'redo', title: 'Re-do Feature', desc: 'If a transaction fails, retry instantly without re-entering all details — saving time and effort.' },
  { icon: 'payout-links', title: 'Payout Links', desc: 'Multiple gateways ensure seamless transactions. If one path faces issues, payments route intelligently.' },
  { icon: 'emi', title: 'Multiple EMI', desc: 'Multi-bank credit card EMI lets merchants offer flexible payment and sell higher-value products.' },
  { icon: 'options', title: 'Payment Options', desc: 'A wide range of payment-processing solutions built to handle every business need.' },
]

export default function Payments() {
  return (
    <>
      {/* ══ HERO ══ */}
      <section className="relative bg-gradient-to-b from-[#F0F4FF] to-white overflow-hidden">
        {/* diagonal blue panel — desktop only, stays in right column */}
        <div className="hidden lg:block absolute top-0 right-0 w-[42%] h-full pointer-events-none"
          style={{ background: 'linear-gradient(135deg, #1A56DB 0%, #0F1E5C 100%)', clipPath: 'polygon(18% 0%, 100% 0%, 100% 100%, 0% 100%)' }} />

        <div className="container-wide relative z-10 py-20 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

            {/* Left — copy */}
            <div className="max-w-xl">
              <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
                <div className="inline-flex items-center gap-2 mb-5">
                  <span className="w-2 h-2 bg-[#1A56DB] rounded-full" />
                  <span className="text-[#1A56DB] text-xs font-bold uppercase tracking-[0.14em]">Payments</span>
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.08 }}
                className="text-[2.4rem] sm:text-5xl lg:text-[3rem] font-extrabold text-[#0F1E5C] leading-[1.12] tracking-[-0.04em] mb-5"
              >
                Experience Flawless<br />
                Integration of{' '}
                <span className="bg-gradient-to-r from-[#1A56DB] to-[#60A5FA] bg-clip-text text-transparent">
                  Digital Payments
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.16 }}
                className="text-slate-500 text-base sm:text-lg mb-8 max-w-lg leading-relaxed"
              >
                The swiftest and easiest way to collect and disburse payments. Register today and let
                Matrix Gateway be your digital payment partner.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.24 }}
                className="flex flex-col sm:flex-row gap-3"
              >
                <Link to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-[#1A56DB] text-white font-bold text-sm px-7 py-3.5 rounded-xl hover:bg-[#1648C8] transition-colors shadow-lg active:scale-[0.98]">
                  Get Started <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
                </Link>
                <Link to="/payment-gateway"
                  className="inline-flex items-center justify-center gap-2 text-[#1A56DB] font-semibold text-sm px-7 py-3.5 rounded-xl border-2 border-[#1A56DB] hover:bg-[#EFF6FF] transition-colors active:scale-[0.98]">
                  Explore Gateway
                </Link>
              </motion.div>
            </div>

            {/* Right — hero illustration (floats on panel) */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#60A5FA]/25 rounded-full blur-3xl pointer-events-none" />
              <motion.img
                initial={{ opacity: 0, y: 24, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.25, ease: 'easeOut' }}
                src="/images/payments-hero.png"
                alt="Digital payment integration illustration"
                width={560}
                height={440}
                className="relative w-full max-w-md h-auto object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══ WHAT WE PROVIDE THE BEST ══ */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left — text */}
            <ScrollReveal direction="left">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-2 h-2 bg-[#1A56DB] rounded-full" />
                <span className="text-[#1A56DB] text-xs font-bold uppercase tracking-[0.14em]">Why Matrix Gateway</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F1E5C] tracking-[-0.04em] leading-[1.15] mb-5">
                What We Provide the Best
              </h2>
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed mb-4">
                Matrix Gateway offers a wide range of solutions for payment processing. With integration
                across major banks and a broad set of payment options, the platform handles transactions
                through credit cards, debit cards, UPI, IMPS, and more.
              </p>
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed mb-6">
                Built with robust, technologically superior capabilities, the platform efficiently serves
                the needs of a startup or a long-running enterprise — designed to enhance income, ease risk,
                and protect customer data with security-conscious encryption.
              </p>
              <div className="space-y-2.5">
                {['Integration with major banks', 'Support for all popular payment methods', 'Built to scale with your business'].map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-sm text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" strokeWidth={2.5} />{item}
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Right — 2x2 feature cards */}
            <div className="grid grid-cols-2 gap-5">
              {provideCards.map((c, i) => (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-20px' }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="group bg-white rounded-2xl border border-slate-100 shadow-[0_2px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_rgba(26,86,219,0.12)] hover:-translate-y-1 transition-all duration-300 p-6 text-center flex flex-col items-center"
                >
                  <ServiceIconBadge name={c.icon} size={42} variant="naked"
                    className="mb-4 group-hover:scale-110 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  <h3 className="text-sm sm:text-base font-bold text-[#0F1E5C] tracking-[-0.02em] mb-1.5 leading-snug">{c.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{c.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ GETTING ONBOARD ══ */}
      <section className="section-padding bg-slate-50">
        <div className="container-wide">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-2 h-2 bg-[#1A56DB] rounded-full" />
              <span className="text-[#1A56DB] text-xs font-bold uppercase tracking-[0.14em]">Getting Onboard</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F1E5C] tracking-[-0.04em] leading-[1.15] mb-10 max-w-xl">
              Powerful Features for a Smooth Experience
            </h2>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left — 2x2 feature grid */}
            <div className="grid sm:grid-cols-2 gap-8">
              {onboardCards.map((c, i) => (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-20px' }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <ServiceIconBadge name={c.icon} size={40} variant="naked" className="mb-4" />
                  <h3 className="text-base font-bold text-[#0F1E5C] tracking-[-0.02em] mb-1.5">{c.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{c.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Right — onboard illustration */}
            <ScrollReveal direction="right">
              <div className="flex justify-center">
                <motion.img
                  src="/images/payments-onboard.png"
                  alt="Getting onboard with Matrix Gateway"
                  width={500}
                  height={450}
                  loading="lazy"
                  animate={{ y: [-6, 6, -6] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  className="w-full max-w-md h-auto object-contain"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  )
}
