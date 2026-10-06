import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
import ServiceIconBadge from '../components/ServiceIcon'

/* Three easy steps */
const steps = [
  { icon: 'payment-links', title: 'Generate a Payment Link', desc: 'Create it via API or dashboard, along with free reminders.' },
  { icon: 'corporate-cards', title: 'Enter Customer Details', desc: 'Then share the link via SMS, WhatsApp, email, and more.' },
  { icon: 'mobile', title: 'Accept Payments', desc: 'Receive notifications in real time as payments come in.' },
]

/* Accept payments instantly — 6 feature grid */
const instantFeatures = [
  { icon: 'revenue', title: 'Request Bulk Payment', desc: 'Send payment requests to many customers at once.' },
  { icon: 'track-payments', title: 'Track Sales on Links', desc: 'Monitor which links convert and when they get paid.' },
  { icon: 'custom-fields', title: 'Customize Links', desc: 'Set amounts, expiry, descriptions, and branding.' },
  { icon: 'interoperable', title: 'Switch On / Off Links', desc: 'Activate or deactivate any link instantly.' },
  { icon: 'no-code', title: 'Embed Payment Links', desc: 'Drop links into your site, emails, or messages.' },
  { icon: 'reporting', title: 'Manage from Dashboard', desc: 'Full control over every link in one place.' },
]

export default function PaymentLinks() {
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
                  <span className="text-[#1A56DB] text-xs font-bold uppercase tracking-[0.14em]">Payment Links</span>
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.08 }}
                className="text-[2.4rem] sm:text-5xl lg:text-[2.9rem] font-extrabold text-[#0F1E5C] leading-[1.12] tracking-[-0.04em] mb-5"
              >
                The Ease of Getting Paid Through{' '}
                <span className="bg-gradient-to-r from-[#1A56DB] to-[#60A5FA] bg-clip-text text-transparent">
                  Payment Links
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.16 }}
                className="text-slate-500 text-base sm:text-lg mb-8 max-w-lg leading-relaxed"
              >
                It can't get easier than this. Matrix Gateway links let you get paid immediately — share the
                payment link via email, SMS, messenger, and other platforms. Accepting payments from customers
                is now merely a click away.
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
                src="/images/link-hero.png" alt="Getting paid through payment links" width={560} height={420}
                className="relative w-full max-w-md h-auto object-contain drop-shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* ══ HOW THE LINK WORKS ══ */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-2 h-2 bg-[#1A56DB] rounded-full" />
                <span className="text-[#1A56DB] text-xs font-bold uppercase tracking-[0.14em]">How It Works</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F1E5C] tracking-[-0.04em] leading-[1.15] mb-2">
                How the Payment Link Works
              </h2>
              <p className="text-[#0F1E5C] font-semibold text-sm mb-6">Accepting payments is simple, easy and quick.</p>
              <ul className="space-y-4">
                {[
                  'Create a Payment Link from your dashboard.',
                  'Share it on your channel of choice — email, SMS, WhatsApp, Facebook and others.',
                  'Get paid via any payment method — Debit Card, Credit Card, Net Banking, UPI, Wallets and even NEFT.',
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#EFF6FF] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#1A56DB]" strokeWidth={2.5} />
                    </span>
                    <span className="text-sm text-slate-600 leading-relaxed">{t}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="flex justify-center">
                <motion.img src="/images/link-works.png" alt="How payment links work" width={540} height={400}
                  loading="lazy"
                  animate={{ y: [-6, 6, -6] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  className="w-full max-w-md h-auto object-contain" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══ THREE EASY STEPS — two-tone band ══ */}
      <section className="section-padding bg-slate-50">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 rounded-3xl overflow-hidden shadow-[0_8px_40px_rgba(15,30,92,0.1)]">

            {/* Left — blue block */}
            <div className="relative bg-gradient-to-br from-[#1A56DB] to-[#0F1E5C] p-10 lg:p-14 flex items-center overflow-hidden">
              <div className="absolute inset-0"
                style={{
                  backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
                  backgroundSize: '40px 40px'
                }} />
              <h2 className="relative text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-[-0.04em] leading-[1.1]">
                Three Easy Steps to Accept Payment Links
              </h2>
            </div>

            {/* Right — steps */}
            <div className="bg-white p-10 lg:p-14 space-y-8">
              {steps.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-20px' }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex gap-4"
                >
                  <ServiceIconBadge name={s.icon} size={38} variant="naked" className="flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-base font-bold text-[#1A56DB] tracking-[-0.02em] mb-1">{s.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ ACCEPT PAYMENTS INSTANTLY — 6 feature grid ══ */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 mb-4 justify-center">
                <span className="w-2 h-2 bg-[#1A56DB] rounded-full" />
                <span className="text-[#1A56DB] text-xs font-bold uppercase tracking-[0.14em]">More Control</span>
                <span className="w-2 h-2 bg-[#1A56DB] rounded-full" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F1E5C] tracking-[-0.04em]">
                Accept Payments Instantly Using Links
              </h2>
              <p className="text-slate-500 mt-3 text-sm leading-relaxed">
                Just share payment links with your customers through WhatsApp, SMS, email, chat, or any medium — and get paid instantly.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {instantFeatures.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="group flex flex-col items-center text-center bg-white rounded-2xl border border-slate-100 shadow-[0_2px_12px_rgba(15,30,92,0.05)] hover:shadow-[0_8px_30px_rgba(26,86,219,0.1)] hover:-translate-y-1 transition-all duration-300 p-7"
              >
                <ServiceIconBadge name={f.icon} size={40} variant="naked"
                  className="mb-4 group-hover:scale-110 group-hover:-translate-y-0.5 transition-transform duration-300" />
                <h3 className="text-sm font-bold text-[#0F1E5C] tracking-[-0.02em] mb-1.5">{f.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
