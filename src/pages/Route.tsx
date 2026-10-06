import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
import ServiceIconBadge from '../components/ServiceIcon'

/* Payment lifecycle use-case cards */
const lifecycleCards = [
  {
    title: 'E-commerce & Marketplaces',
    points: [
      'Simple commission payments & refund setup for sellers across the country',
      'Enhanced payment lifecycle for service providers, vendors, partners & customers',
      'Complete elimination of manual reconciliation',
    ],
  },
  {
    title: 'Service Aggregators',
    points: [
      'Easy payouts to service providers',
      'Handle larger volumes of commission payments',
      'Quick and enhanced payment & refund lifecycles',
    ],
  },
  {
    title: 'Educational Services',
    points: [
      'Comfortable payouts across departments',
      'Automated payouts to save time and resources',
      'Transparent tracking & reporting across branches',
    ],
  },
  {
    title: 'Real Estate',
    points: [
      'Manage multiple payments while disbursing for maintenance, utilities & deposits',
      'Automate early payments of dues',
      'Streamlined collections from members & tenants',
    ],
  },
]

/* Feature cards */
const featureCards = [
  { icon: 'linked-accounts', title: 'Linked Accounts', desc: 'No paperwork. Hassle-free online onboarding lets you easily add vendors, sellers, and service providers as linked accounts on Route.' },
  { icon: 'transfer', title: 'Transfer', desc: 'Cut down the complexity. For every payment, create as many transfers as you need to other linked accounts — you decide how to split.' },
  { icon: 'settlement', title: 'Settlements', desc: 'Have everything under control. Manage the entire fund movement with flexible settlement plans — periodic or deferred, as you need.' },
]

export default function RoutePage() {
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
                  <span className="text-[#1A56DB] text-xs font-bold uppercase tracking-[0.14em]">Matrix Gateway Route</span>
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.08 }}
                className="text-[2.4rem] sm:text-5xl lg:text-[3rem] font-extrabold text-[#0F1E5C] leading-[1.12] tracking-[-0.04em] mb-5"
              >
                Enables Split &{' '}
                <span className="bg-gradient-to-r from-[#1A56DB] to-[#60A5FA] bg-clip-text text-transparent">
                  Transfer Payments
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.16 }}
                className="text-slate-500 text-base sm:text-lg mb-8 max-w-lg leading-relaxed"
              >
                A converged payments solution that makes it simple for your business to uninterruptedly
                accept, manage, and disburse money — offering a secure, convenient, and personalised
                payments experience.
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
                src="/images/route-hero.png" alt="Split and transfer payments illustration" width={540} height={400}
                className="relative w-full max-w-md h-auto object-contain drop-shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* ══ TACKLES FINANCIAL COMPLEXITIES ══ */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <ScrollReveal>
            <div className="max-w-3xl mb-4">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-2 h-2 bg-[#1A56DB] rounded-full" />
                <span className="text-[#1A56DB] text-xs font-bold uppercase tracking-[0.14em]">Financial Complexities</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F1E5C] tracking-[-0.04em] leading-[1.15] mb-5">
                Tackles Financial Complexities with Ease
              </h2>
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
                Handling money in the real world is a mammoth task — strict compliance, regular auditing, and
                manual processes across various systems. Route efficiently handles all of these for you, taking
                care of every kind of complexity so you can start splitting payments through a reliable,
                intuitive platform.
              </p>
            </div>
          </ScrollReveal>

          {/* Payment lifecycle cards */}
          <h3 className="text-lg font-extrabold text-[#0F1E5C] tracking-[-0.03em] uppercase mt-10 mb-6">
            Payment Lifecycle with Route
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {lifecycleCards.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white rounded-2xl border border-slate-100 shadow-[0_2px_12px_rgba(15,30,92,0.05)] hover:shadow-[0_8px_30px_rgba(26,86,219,0.1)] hover:-translate-y-1 transition-all duration-300 p-6"
              >
                <h4 className="text-base font-bold text-[#0F1E5C] tracking-[-0.02em] mb-4 pb-4 border-b border-slate-100">{c.title}</h4>
                <ul className="space-y-3">
                  {c.points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-sm text-slate-500 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1A56DB] flex-shrink-0 mt-1.5" />
                      {p}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ AUTOMATE YOUR PAYMENT LIFECYCLE ══ */}
      <section className="section-padding bg-slate-50">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-2 h-2 bg-[#1A56DB] rounded-full" />
                <span className="text-[#1A56DB] text-xs font-bold uppercase tracking-[0.14em]">Automation</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F1E5C] tracking-[-0.04em] leading-[1.15] mb-5">
                Automate Your Entire Payment Lifecycle
              </h2>
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed mb-4">
                A robust and secure payment gateway is essential for accepting payments from end-customers
                through any payment mode — one you can always trust.
              </p>
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
                It offers security even when accepting payments through subscriptions, payment links, invoices,
                and more. These can all be easily split using Matrix Gateway Route.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(15,30,92,0.25)]">
                <img src="/images/route-automate.png" alt="Automated payment lifecycle" width={560} height={400}
                  loading="lazy" className="w-full h-auto object-cover" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══ FEATURE CARDS ══ */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
