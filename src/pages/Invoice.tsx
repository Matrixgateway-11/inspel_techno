import { motion } from 'framer-motion'
import {
  ArrowRight, Receipt, Mail, Image as ImageIcon, ShieldCheck, CheckCircle2,
  GitBranch, Link2, LayoutTemplate, CreditCard,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'

/* "Instantly payable" features */
const payableFeatures = [
  { icon: Receipt, title: 'Create GST-Ready Invoices', desc: 'Generate professional GST-ready invoices through an effective, easy-to-use platform.' },
  { icon: Mail, title: 'Keep Customers Updated', desc: 'Automatically keep your customers up to date with email and SMS notifications.' },
  { icon: ImageIcon, title: 'Get Paid Directly', desc: 'Get paid quickly and without hassle — directly from the invoice payment link.' },
  { icon: ShieldCheck, title: 'Security-Conscious Design', desc: 'Every invoice payment is handled with secure data practices and encryption.' },
]

/* "Other Resources" numbered grid */
const resources = [
  { no: '01', title: 'GST Compliance', desc: 'Add GST, discounts, and shipping details — the invoicing solution handles the calculations.' },
  { no: '02', title: 'Partial Payments', desc: 'Enable partial payments for customers directly when creating invoices from the dashboard.' },
  { no: '03', title: 'One-time Effort', desc: 'Save time by saving invoices as templates and reusing them across future invoices.' },
  { no: '04', title: 'Download Options', desc: 'Let customers save and download a PDF version of invoices for immediate or future reference.' },
  { no: '05', title: 'Track Accounts', desc: 'Boost transparency by keeping a check on all account receivables against invoices paid.' },
  { no: '06', title: 'Dashboard Reporting', desc: 'Get useful insights from reports and real-time data available on the dashboard.' },
]

/* Product suite cross-links */
const suite = [
  { icon: GitBranch, title: 'Route', desc: 'Split payments, make vendor payouts, and manage marketplace money flow.', href: '/route' },
  { icon: Link2, title: 'Payment Links', desc: 'Share a payment link via email, SMS, or messenger and get paid instantly.', href: '/payment-links' },
  { icon: LayoutTemplate, title: 'Payment Pages', desc: 'Custom-branded payment pages generated on demand with automation.', href: '/payment-pages' },
  { icon: CreditCard, title: 'Payment Gateway', desc: 'Accept payments across all major methods with a single integration.', href: '/payment-gateway' },
]

export default function Invoice() {
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
                  <span className="text-[#1A56DB] text-xs font-bold uppercase tracking-[0.14em]">Invoice</span>
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.08 }}
                className="text-[2.4rem] sm:text-5xl lg:text-[3rem] font-extrabold text-[#0F1E5C] leading-[1.12] tracking-[-0.04em] mb-5"
              >
                GST-Ready{' '}
                <span className="bg-gradient-to-r from-[#1A56DB] to-[#60A5FA] bg-clip-text text-transparent">
                  Payable Invoices
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.16 }}
                className="text-slate-500 text-base sm:text-lg mb-8 max-w-lg leading-relaxed"
              >
                Swift financial transactions help you generate quicker returns. Create and send GST-ready
                invoices that your customers can pay online instantly — a sure-shot way to get paid faster
                and enable better cash flow.
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
              {/* soft glow behind the transparent illustration for depth */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#60A5FA]/25 rounded-full blur-3xl pointer-events-none" />
              <motion.img
                initial={{ opacity: 0, y: 24, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.25, ease: 'easeOut' }}
                src="/images/invoice-hero.png"
                alt="GST-ready payable invoice illustration"
                width={520} height={440}
                className="relative w-full max-w-md h-auto object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══ INSTANTLY PAYABLE ══ */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-2 h-2 bg-[#1A56DB] rounded-full" />
                <span className="text-[#1A56DB] text-xs font-bold uppercase tracking-[0.14em]">Instantly Payable</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F1E5C] tracking-[-0.04em] leading-[1.15] mb-5">
                Invoices That Are Instantly Payable
              </h2>
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
                It's a lot easier than you think. No matter what business your customers are in — freelancers,
                teachers, boutique owners, homemakers, or professionals — Matrix Gateway helps you accept
                payments from everyone.
              </p>
            </ScrollReveal>

            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-8">
              {payableFeatures.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-20px' }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <div className="w-11 h-11 rounded-xl bg-[#EFF6FF] flex items-center justify-center mb-3">
                    <f.icon className="w-5 h-5 text-[#1A56DB]" strokeWidth={1.8} />
                  </div>
                  <h3 className="text-base font-bold text-[#0F1E5C] tracking-[-0.02em] mb-1.5">{f.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ WIN CUSTOMERS' TRUST ══ */}
      <section className="section-padding bg-slate-50">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="flex justify-center">
                <img src="/images/invoice-trust.png" alt="Win customer trust with detailed invoices" width={480} height={440}
                  loading="lazy" className="w-full max-w-md h-auto object-contain" />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-2 h-2 bg-[#1A56DB] rounded-full" />
                <span className="text-[#1A56DB] text-xs font-bold uppercase tracking-[0.14em]">Invoices</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F1E5C] tracking-[-0.04em] leading-[1.15] mb-6">
                Win Customer Trust by Sharing Detailed Invoices
              </h2>
              <ul className="space-y-4">
                {[
                  'Be crystal-clear in your billing. Share detailed invoices with a full breakdown of price, taxes, and discounts — giving clients accurate information and faster access to funds.',
                  'Provide an unforgettable experience through well-designed invoices that reflect your brand personality.',
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-1" strokeWidth={2.5} />
                    <span className="text-sm text-slate-600 leading-relaxed">{t}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══ OTHER RESOURCES — numbered grid ══ */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <ScrollReveal>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 mb-4 justify-center">
                <span className="w-2 h-2 bg-[#1A56DB] rounded-full" />
                <span className="text-[#1A56DB] text-xs font-bold uppercase tracking-[0.14em]">Other Resources</span>
                <span className="w-2 h-2 bg-[#1A56DB] rounded-full" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F1E5C] tracking-[-0.04em]">
                Everything Invoicing Should Do
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
            {resources.map((r, i) => (
              <motion.div
                key={r.no}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="border-l-2 border-[#EFF6FF] pl-5 hover:border-[#1A56DB] transition-colors duration-300"
              >
                <span className="text-sm font-black text-[#1A56DB]">{r.no}</span>
                <h3 className="text-base font-bold text-[#0F1E5C] tracking-[-0.02em] mt-1 mb-2">{r.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PRODUCT SUITE CROSS-LINKS ══ */}
      <section className="section-padding bg-slate-50">
        <div className="container-wide">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F1E5C] tracking-[-0.04em]">
                The Matrix Gateway Product Suite Includes Invoices Too
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {suite.map((s, i) => {
              const Icon = s.icon
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-20px' }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <Link to={s.href}
                    className="group flex flex-col items-center text-center bg-white rounded-2xl border border-slate-100 shadow-[0_2px_12px_rgba(15,30,92,0.05)] hover:shadow-[0_8px_30px_rgba(26,86,219,0.1)] hover:-translate-y-1 transition-all duration-300 p-7 h-full">
                    <div className="w-14 h-14 rounded-full bg-[#EFF6FF] flex items-center justify-center mb-4 group-hover:bg-[#1A56DB] transition-colors duration-300">
                      <Icon className="w-6 h-6 text-[#1A56DB] group-hover:text-white transition-colors duration-300" strokeWidth={1.7} />
                    </div>
                    <h3 className="text-base font-bold text-[#0F1E5C] tracking-[-0.02em] mb-1.5">{s.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">{s.desc}</p>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
