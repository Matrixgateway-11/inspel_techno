import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
import ServiceIconBadge from '../components/ServiceIcon'

/* checklist highlights */
const highlights = ['Fast', 'Secure', 'Simple', 'Interoperable']

/* feature cards */
const featureCards = [
  {
    icon: 'no-charge',
    title: 'No Hidden Charges',
    desc: 'No extra charges when customers pay through the wallet. Everything is simple, transparent, and easy to understand.',
  },
  {
    icon: 'security',
    title: 'Secure',
    desc: 'Wallet payments are as safe as paying through UPI. Card and account details stay protected with no third-party interference.',
  },
  {
    icon: 'interoperable',
    title: 'Interoperable',
    desc: 'Works across popular QR and UPI apps — pay using cards or UPI seamlessly from a single balance.',
  },
]

export default function Wallets() {
  return (
    <>
      {/* ══ HERO ══ */}
      <section className="relative bg-gradient-to-b from-[#F0F4FF] to-white overflow-hidden">
        {/* diagonal blue panel — desktop only */}
        <div className="hidden lg:block absolute top-0 right-0 w-[42%] h-full pointer-events-none"
          style={{ background: 'linear-gradient(135deg, #1A56DB 0%, #0F1E5C 100%)', clipPath: 'polygon(18% 0%, 100% 0%, 100% 100%, 0% 100%)' }} />

        <div className="container-wide relative z-10 py-20 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

            {/* Left — copy */}
            <div className="max-w-xl">
              <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
                <div className="inline-flex items-center gap-2 mb-5">
                  <span className="w-2 h-2 bg-[#1A56DB] rounded-full" />
                  <span className="text-[#1A56DB] text-xs font-bold uppercase tracking-[0.14em]">Wallets</span>
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.08 }}
                className="text-[2.4rem] sm:text-5xl lg:text-[3rem] font-extrabold text-[#0F1E5C] leading-[1.12] tracking-[-0.04em] mb-5"
              >
                Matrix Gateway{' '}
                <span className="bg-gradient-to-r from-[#1A56DB] to-[#60A5FA] bg-clip-text text-transparent">
                  Wallet
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.16 }}
                className="text-slate-500 text-base sm:text-lg mb-8 max-w-lg leading-relaxed"
              >
                The easiest way to get paid anytime, anywhere through your wallet.
                No need to wait a long time for payment.
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
                <Link to="/payment"
                  className="inline-flex items-center justify-center gap-2 text-[#1A56DB] font-semibold text-sm px-7 py-3.5 rounded-xl border-2 border-[#1A56DB] hover:bg-[#EFF6FF] transition-colors active:scale-[0.98]">
                  Explore Payments
                </Link>
              </motion.div>
            </div>

            {/* Right — wallet illustration (floats on panel) */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#60A5FA]/25 rounded-full blur-3xl pointer-events-none" />
              <motion.img
                initial={{ opacity: 0, y: 24, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.25, ease: 'easeOut' }}
                src="/images/wallet-hero.png"
                alt="Wallet based digital payment illustration"
                width={560}
                height={440}
                className="relative w-full max-w-md h-auto object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══ ABOUT WALLET ══ */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">

            {/* Left — heading + checklist */}
            <ScrollReveal direction="left">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-2 h-2 bg-[#1A56DB] rounded-full" />
                <span className="text-[#1A56DB] text-xs font-bold uppercase tracking-[0.14em]">About Wallet</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F1E5C] tracking-[-0.04em] leading-[1.15] mb-6">
                Positioning to be at the top with big brands and startups
              </h2>
              <div className="grid grid-cols-2 gap-x-8 gap-y-4 max-w-md">
                {highlights.map((h) => (
                  <div key={h} className="flex items-center gap-2.5 text-sm font-semibold text-[#0F1E5C]">
                    <span className="w-6 h-6 rounded-full bg-[#EFF6FF] flex items-center justify-center flex-shrink-0">
                      <ArrowRight className="w-3.5 h-3.5 text-[#1A56DB]" strokeWidth={2.5} />
                    </span>
                    {h}
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Right — descriptive paragraph */}
            <ScrollReveal direction="right">
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed mb-4">
                The Matrix Gateway wallet is an exciting feature that offers multiple benefits to customers.
                It is an infrastructure-light, interoperable digital payment solution that enables easy, swift,
                and secure payments at merchant locations or physical stores.
              </p>
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
                It's a wallet-based solution that supports digital payments across popular QR and UPI apps.
                Businesses can accept money from their end-customers directly — using cards (via major networks)
                or UPI — making collections a lot easier.
              </p>
            </ScrollReveal>
          </div>

          {/* Feature cards — naked duotone icons */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 pt-14">
            {featureCards.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <div className="group bg-white rounded-2xl p-7 border border-slate-100
                                shadow-[0_4px_20px_rgba(15,30,92,0.06)] hover:shadow-[0_12px_40px_rgba(26,86,219,0.14)]
                                hover:-translate-y-1.5 transition-all duration-300 h-full">
                  <ServiceIconBadge name={c.icon} size={44} variant="naked"
                    className="mb-5 group-hover:scale-110 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  <h3 className="text-base font-bold text-[#0F1E5C] mb-2 tracking-[-0.02em]">{c.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{c.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
