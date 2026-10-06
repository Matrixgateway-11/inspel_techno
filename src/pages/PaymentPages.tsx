import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
import ServiceIconBadge from '../components/ServiceIcon'

/* Section 2 — boost your business */
const boostFeatures = [
  { icon: 'free-collection', title: 'Free Collection', desc: 'Collect fees and accept payments in seconds with our hosted form — no paperwork involved.' },
  { icon: 'sell-products', title: 'Sell Products', desc: 'Selling products online? Take orders around the clock with our online order template.' },
  { icon: 'donations', title: 'Accept Donations', desc: 'Raising money for a good cause? Our hosted donations page saves you valuable time.' },
  { icon: 'events', title: 'Events & Tickets', desc: 'Get quick online registration of attendees for your events with ready-to-use pages.' },
]

/* Section 3 — new levels */
const levelFeatures = [
  { icon: 'listings', title: 'Listings for Multiple Products', desc: 'Easily add the products or services you plan to sell and their images on a single payment page.' },
  { icon: 'purchase-control', title: 'Efficient Purchase Control', desc: 'Control minimum and maximum quantities and amounts your customers can buy — full control over your sales.' },
  { icon: 'reporting', title: 'Intuitive Reporting', desc: 'Efficiency in every dimension — track successful and failed payments with clear, actionable reports.' },
]

/* Section 4 — online payment feature grid */
const onlineFeatures = [
  { icon: 'track-payments', title: 'Track Payments', desc: 'Dashboard reports help you make informed decisions with real-time payment data.' },
  { icon: 'custom-fields', title: 'Custom Fields', desc: 'Modify your payment page fields to collect the information that matters to your business.' },
  { icon: 'custom-branded', title: 'Custom Branded', desc: 'Customize the look and feel with your brand colours for a flawless customer experience.' },
  { icon: 'memorable-urls', title: 'Memorable URLs', desc: 'Stand out with your own custom URL for easy recognition of your business.' },
  { icon: 'get-online', title: 'Get Online Fast', desc: 'Look professional with a custom URL that is easy to share and an extension of your brand.' },
  { icon: 'no-code', title: 'No Coding Required', desc: 'Create and publish beautiful payment pages without writing a single line of code.' },
]

export default function PaymentPages() {
  return (
    <>
      {/* ══ HERO ══ */}
      <section className="relative bg-gradient-to-b from-[#F0F4FF] to-white overflow-hidden">
        <div className="hidden lg:block absolute top-0 right-0 w-[42%] h-full pointer-events-none"
          style={{ background: 'linear-gradient(135deg, #1A56DB 0%, #0F1E5C 100%)', clipPath: 'polygon(18% 0%, 100% 0%, 100% 100%, 0% 100%)' }} />

        <div className="container-wide relative z-10 py-20 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

            <div className="max-w-xl">
              <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
                <div className="inline-flex items-center gap-2 mb-5">
                  <span className="w-2 h-2 bg-[#1A56DB] rounded-full" />
                  <span className="text-[#1A56DB] text-xs font-bold uppercase tracking-[0.14em]">Payment Pages</span>
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.08 }}
                className="text-[2.4rem] sm:text-5xl lg:text-[2.9rem] font-extrabold text-[#0F1E5C] leading-[1.12] tracking-[-0.04em] mb-4"
              >
                Collecting Payments{' '}
                <span className="bg-gradient-to-r from-[#1A56DB] to-[#60A5FA] bg-clip-text text-transparent">
                  Needn't Be Cumbersome
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.14 }}
                className="text-[#0F1E5C] text-base font-semibold mb-3"
              >
                Use our custom Payment Pages to receive money quickly.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.18 }}
                className="text-slate-500 text-sm sm:text-base mb-8 max-w-lg leading-relaxed"
              >
                Tackle your payment lifecycles with technology that helps in advanced payment solutions.
                No set-up fee, no maintenance charges, no minimum commitment, no hidden charges.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.24 }}
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

            <div className="relative flex justify-center lg:justify-end">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#60A5FA]/25 rounded-full blur-3xl pointer-events-none" />
              <motion.img
                initial={{ opacity: 0, y: 24, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.25, ease: 'easeOut' }}
                src="/images/pages-hero.png" alt="Custom payment pages illustration" width={480} height={480}
                className="relative w-full max-w-sm h-auto object-contain drop-shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* ══ BOOST YOUR BUSINESS ══ */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-2 h-2 bg-[#1A56DB] rounded-full" />
                <span className="text-[#1A56DB] text-xs font-bold uppercase tracking-[0.14em]">Payment Pages</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F1E5C] tracking-[-0.04em] leading-[1.15] mb-8">
                Payment Pages That Help Boost Your Business
              </h2>
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-8">
                {boostFeatures.map((f) => (
                  <div key={f.title}>
                    <ServiceIconBadge name={f.icon} size={40} variant="naked" className="mb-3" />
                    <h3 className="text-base font-bold text-[#0F1E5C] tracking-[-0.02em] mb-1.5">{f.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="flex justify-center">
                <motion.img src="/images/pages-boost.png" alt="Boost your business with payment pages" width={560} height={440}
                  loading="lazy"
                  animate={{ y: [-6, 6, -6] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  className="w-full max-w-md h-auto object-contain" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══ TAKE BUSINESS TO NEW LEVELS ══ */}
      <section className="section-padding bg-slate-50">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="flex justify-center">
                <img src="/images/payments-onboard.png" alt="Run your business smartly" width={500} height={450}
                  loading="lazy" className="w-full max-w-md h-auto object-contain" />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F1E5C] tracking-[-0.04em] leading-[1.15] mb-3">
                Take Your Business to New Levels
              </h2>
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed mb-8">
                Everything to run your business smartly is right here. Register with Matrix Gateway and get a
                host of features to run your business effectively — from integration kits to detailed controls.
              </p>
              <div className="space-y-6">
                {levelFeatures.map((f) => (
                  <div key={f.title} className="flex gap-4">
                    <ServiceIconBadge name={f.icon} size={34} variant="naked" className="flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-base font-bold text-[#1A56DB] tracking-[-0.02em] mb-1">{f.title}</h3>
                      <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══ ONLINE PAYMENT — tinted feature-card band ══ */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="bg-[#EFF6FF] rounded-3xl px-6 sm:px-10 lg:px-14 py-12 lg:py-16">
            <ScrollReveal>
              <div className="text-center max-w-2xl mx-auto mb-12">
                <div className="inline-flex items-center gap-2 mb-4 justify-center">
                  <span className="w-2 h-2 bg-[#1A56DB] rounded-full" />
                  <span className="text-[#1A56DB] text-xs font-bold uppercase tracking-[0.14em]">Online Payment</span>
                  <span className="w-2 h-2 bg-[#1A56DB] rounded-full" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F1E5C] tracking-[-0.04em] leading-tight">
                  Convenience Is the Key to Online Payments — You Get More Than That
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid sm:grid-cols-2 gap-5">
              {onlineFeatures.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-20px' }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="flex gap-4 bg-white rounded-2xl border border-white shadow-[0_2px_12px_rgba(15,30,92,0.05)] hover:shadow-[0_8px_28px_rgba(26,86,219,0.1)] transition-all duration-300 p-6"
                >
                  <ServiceIconBadge name={f.icon} size={34} variant="naked" className="flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-base font-bold text-[#0F1E5C] tracking-[-0.02em] mb-1.5">{f.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
