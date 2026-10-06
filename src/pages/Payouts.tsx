import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
import ServiceIconBadge from '../components/ServiceIcon'

/* Supercharge use-case cards */
const useCases = [
  { icon: 'corporate-cards', title: 'Corporate Credit Cards', desc: 'Keep a tab on your expenses and manage funds effectively with corporate cards.' },
  { icon: 'penny-testing', title: 'Penny Testing', desc: 'Validate bank account details by making small sample transactions before payouts.' },
  { icon: 'payout-links', title: 'Payout Links', desc: 'Send easy-to-create links to capture the necessary beneficiary account details.' },
  { icon: 'rental', title: 'Rental Business', desc: 'Automate rent collection and disbursements for property and rental businesses.' },
  { icon: 'ecommerce', title: 'E-commerce', desc: 'Easily make vendor payments and disburse instant refunds to different customers.' },
  { icon: 'gaming', title: 'Online Gaming', desc: 'Instantly pay out cashbacks, winnings, and earnings directly to your users.' },
]

export default function Payouts() {
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
                  <span className="text-[#1A56DB] text-xs font-bold uppercase tracking-[0.14em]">Payouts</span>
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.08 }}
                className="text-[2.4rem] sm:text-5xl lg:text-[3rem] font-extrabold text-[#0F1E5C] leading-[1.12] tracking-[-0.04em] mb-5"
              >
                Matrix Gateway{' '}
                <span className="bg-gradient-to-r from-[#1A56DB] to-[#60A5FA] bg-clip-text text-transparent">
                  Payouts
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.16 }}
                className="text-slate-500 text-base sm:text-lg mb-8 max-w-lg leading-relaxed"
              >
                Disbursing money is an inevitable part of business — and the better the technology, the better
                the results. Matrix Gateway brings you a powerful set of payout tools that make sending money
                fast, reliable, and effortless.
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

            {/* Right — transparent hero image (floats on panel) */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#60A5FA]/25 rounded-full blur-3xl pointer-events-none" />
              <motion.img
                initial={{ opacity: 0, y: 24, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.25, ease: 'easeOut' }}
                src="/images/payout-hero.png"
                alt="Payout disbursement technology"
                width={560} height={440}
                className="relative w-full max-w-md h-auto object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══ ABOUT PAYOUTS ══ */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left — payout dashboard mock */}
            <ScrollReveal direction="left">
              <div className="bg-slate-900 rounded-2xl p-5 shadow-[0_20px_50px_rgba(15,30,92,0.25)]">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-white font-bold text-sm">Payout Dashboard</h3>
                  <span className="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded-full">Live</span>
                </div>
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {[{ l: 'Sent Today', v: '₹8.4L' }, { l: 'Pending', v: '₹1.2L' }, { l: 'Success', v: '99.2%' }].map(({ l, v }) => (
                    <div key={l} className="bg-slate-800 rounded-xl p-3 text-center">
                      <p className="text-white font-bold text-base">{v}</p>
                      <p className="text-slate-400 text-xs mt-0.5">{l}</p>
                    </div>
                  ))}
                </div>
                <div className="space-y-2">
                  {[
                    { name: 'Vendor A', amt: '₹50,000', mode: 'NEFT', status: 'success' },
                    { name: 'Vendor B', amt: '₹25,000', mode: 'IMPS', status: 'success' },
                    { name: 'Employee C', amt: '₹82,000', mode: 'NEFT', status: 'processing' },
                    { name: 'Partner D', amt: '₹12,500', mode: 'UPI', status: 'success' },
                  ].map((p, i) => (
                    <div key={i} className="flex items-center justify-between bg-slate-800 rounded-xl px-4 py-2.5">
                      <div>
                        <p className="text-white text-xs font-semibold">{p.name}</p>
                        <p className="text-slate-500 text-xs">{p.mode}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-white text-xs font-bold">{p.amt}</p>
                        <span className={`text-xs ${p.status === 'success' ? 'text-emerald-400' : 'text-amber-400'}`}>{p.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Right — text */}
            <ScrollReveal direction="right">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-2 h-2 bg-[#1A56DB] rounded-full" />
                <span className="text-[#1A56DB] text-xs font-bold uppercase tracking-[0.14em]">About Payouts</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F1E5C] tracking-[-0.04em] leading-[1.15] mb-5">
                Disburse Money with Ease
              </h2>
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed mb-4">
                It's easy with minimum documentation and hassle-free transactions. Matrix Gateway gives you the
                convenience to send money to vendors, partners, employees, and customers — all from one place.
              </p>
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed mb-6">
                Payouts come with all the features you need: multiple transfer modes, bulk disbursement, plus
                powerful capabilities like API-driven payouts, approvals, workflows, and insightful reports.
              </p>
              <div className="space-y-2.5">
                {['Instant bank & UPI transfers', 'Bulk payout support', 'API-driven automation & approvals', 'Real-time status tracking'].map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-sm text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" strokeWidth={2.5} />{item}
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══ SUPERCHARGE — tinted card grid ══ */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="bg-[#EFF6FF] rounded-3xl px-6 sm:px-10 lg:px-14 py-12 lg:py-16">
            <ScrollReveal>
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 mb-4 justify-center">
                  <span className="w-2 h-2 bg-[#1A56DB] rounded-full" />
                  <span className="text-[#1A56DB] text-xs font-bold uppercase tracking-[0.14em]">Use Cases</span>
                  <span className="w-2 h-2 bg-[#1A56DB] rounded-full" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F1E5C] tracking-[-0.04em]">
                  Supercharge with Our Payouts
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {useCases.map((uc, i) => (
                <motion.div
                  key={uc.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-20px' }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="group bg-white rounded-2xl border border-white shadow-[0_2px_12px_rgba(15,30,92,0.05)] hover:shadow-[0_8px_28px_rgba(26,86,219,0.1)] hover:-translate-y-1 transition-all duration-300 p-6"
                >
                  <ServiceIconBadge name={uc.icon} size={42} variant="naked"
                    className="mb-4 group-hover:scale-110 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  <h3 className="text-base font-bold text-[#0F1E5C] tracking-[-0.02em] mb-1.5">{uc.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{uc.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
