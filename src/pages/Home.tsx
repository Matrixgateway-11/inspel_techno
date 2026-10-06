import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { TrendUp } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
import CTASection from '../components/CTASection'
import ServiceIconBadge from '../components/ServiceIcon'

/* ─── service cards data (icon key → duotone icon via ServiceIconBadge) ── */
const serviceCards = [
  { icon: 'payment-gateway', title: 'Payment Gateway', desc: 'Accept online payments through cards, UPI, wallets & net banking — all in one integration.', href: '/payment-gateway' },
  { icon: 'payouts',         title: 'Payouts',          desc: 'Send money instantly to vendors, customers, and partners at scale.', href: '/payouts' },
  { icon: 'wallets',         title: 'Wallets',          desc: 'Manage digital balances and embedded wallet flows for your platform.', href: '/wallets' },
  { icon: 'payment-links',   title: 'Payment Links',    desc: 'The ease of getting paid through shareable payment links — no website needed.', href: '/payment-links' },
  { icon: 'payment-pages',   title: 'Payment Pages',    desc: 'Tackle your payment lifecycles with technology that helps in advanced payment solutions.', href: '/payment-pages' },
  { icon: 'payments',        title: 'Payments',         desc: 'One suite for every way you collect — cards, UPI, links, pages, and more.', href: '/payment' },
  { icon: 'route',           title: 'Route',            desc: 'Intelligent routing and distribution for converged payment solutions.', href: '/route' },
  { icon: 'invoice',         title: 'Invoice',          desc: 'No matter what business your customers are in — Matrix Gateway helps you accept payments for everyone.', href: '/invoice' },
]

const whyIcons: Record<string, string> = {
  'Security-Conscious Design': 'security',
  'Instant Processing': 'speed',
  '150+ Payment Methods': 'methods',
  'For All Business Types': 'business',
  'Scalable Infrastructure': 'scalable',
  'Mobile Ready': 'mobile',
}

const paymentModes = [
  { img: '/images/onsite-payments.png',  label: 'Onsite Payments',  desc: 'In-person card & UPI acceptance' },
  { img: '/images/fast-settlements.png', label: 'Fast Settlements', desc: 'T+1 settlement to your account' },
  { img: '/images/invoice-cloud.png',    label: 'Invoice Cloud',    desc: 'Digital invoicing with payment links' },
  { img: '/images/bank-transfer.png',    label: 'Bank Transfer',    desc: 'NEFT / RTGS / IMPS transfers' },
]

/* ─── animated count-up counter ───────────────────────
   Parses "2,000+" → prefix "", number 2000, suffix "+".
   On scroll into view: spins through random values quickly,
   then decelerates and settles on the final number.        */
function StatBadge({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  // parse the target string
  const match = value.match(/^([^\d]*)([\d,]+)(.*)$/)
  const prefix = match?.[1] ?? ''
  const target = match ? parseInt(match[2].replace(/,/g, ''), 10) : 0
  const suffix = match?.[3] ?? ''

  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return

    let raf = 0
    const spinDuration = 550   // fast random spin phase (ms)
    const countDuration = 1400 // settle count-up phase (ms)
    const start = performance.now()

    // easeOutExpo — fast then smooth deceleration
    const easeOut = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t))

    const tick = (now: number) => {
      const elapsed = now - start

      if (elapsed < spinDuration) {
        // random spin — numbers change rapidly
        setDisplay(Math.floor(Math.random() * target))
        raf = requestAnimationFrame(tick)
      } else if (elapsed < spinDuration + countDuration) {
        // smooth decelerating count-up to the target
        const p = (elapsed - spinDuration) / countDuration
        setDisplay(Math.floor(easeOut(p) * target))
        raf = requestAnimationFrame(tick)
      } else {
        // land exactly on the target
        setDisplay(target)
      }
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, target])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <p className="text-5xl sm:text-6xl font-black text-slate-300 tracking-[-0.05em] leading-none tabular-nums">
        {prefix}{display.toLocaleString('en-IN')}{suffix}
      </p>
      <p className="text-xs font-bold text-slate-500 uppercase tracking-[0.12em] mt-2">{label}</p>
    </motion.div>
  )
}

export default function Home() {
  return (
    <>
      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section className="relative bg-[#F0F4FF] overflow-hidden">
        {/* Right blue panel — desktop only, stays strictly in right column so text never overlaps */}
        <div className="hidden lg:block absolute top-0 right-0 w-[42%] h-full pointer-events-none"
          style={{ background: 'linear-gradient(135deg, #1A56DB 0%, #0F1E5C 100%)', clipPath: 'polygon(18% 0%, 100% 0%, 100% 100%, 0% 100%)' }} />

        <div className="container-wide relative z-10 py-16 lg:py-0 lg:min-h-[88vh] flex items-center">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-8 items-center w-full">

            {/* Left — text (always on light bg → perfect contrast) */}
            <div className="max-w-xl lg:py-24">
              <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
                <div className="inline-flex items-center gap-2 mb-5">
                  <span className="w-2 h-2 bg-[#1A56DB] rounded-full" />
                  <span className="text-[#1A56DB] text-xs font-bold uppercase tracking-[0.14em]">Feel The Convenience</span>
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.08 }}
                className="text-[2.8rem] sm:text-5xl lg:text-[3.2rem] font-extrabold text-[#0F1E5C] leading-[1.1] tracking-[-0.04em] mb-5"
              >
                A simple and secure<br />
                way to accept<br />
                payments for your<br />
                <span className="text-[#1A56DB]">business</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.16 }}
                className="text-slate-500 text-base leading-relaxed mb-8 max-w-md"
              >
                Matrix Gateway offers a comprehensive and secure range of payment channels
                to simplify making payments or receiving them.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.22 }}
                className="flex flex-col sm:flex-row gap-3"
              >
                <Link to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-[#1A56DB] text-white
                             font-bold text-sm px-7 py-3.5 rounded-xl hover:bg-[#1648C8]
                             transition-colors shadow-lg active:scale-[0.98]">
                  Get Started
                  <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
                </Link>
                <Link to="/payment-gateway"
                  className="inline-flex items-center justify-center gap-2 text-[#1A56DB] font-semibold
                             text-sm px-7 py-3.5 rounded-xl border-2 border-[#1A56DB]
                             hover:bg-[#EFF6FF] transition-colors active:scale-[0.98]">
                  Explore Products
                </Link>
              </motion.div>
            </div>

            {/* Right — person image */}
            <div className="relative flex justify-center items-end lg:h-full lg:self-stretch">
              {/* mobile/tablet blue backdrop card */}
              <div className="lg:hidden absolute inset-x-4 bottom-0 top-8 rounded-3xl"
                style={{ background: 'linear-gradient(135deg, #1A56DB 0%, #0F1E5C 100%)' }} />

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25, ease: 'easeOut' }}
                className="relative z-10 flex items-end lg:h-full"
              >
                {/* soft glow behind person for depth */}
                <div className="absolute left-1/2 -translate-x-1/2 bottom-10 w-64 h-64 bg-[#60A5FA]/25 rounded-full blur-3xl pointer-events-none" />
                <img
                  src="/images/hero-person.png"
                  alt="Person making a secure payment with card and phone"
                  width={434}
                  height={574}
                  className="relative w-auto h-[420px] sm:h-[480px] lg:h-[560px] max-w-full object-contain object-bottom drop-shadow-2xl"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SERVICES INTRO SPLIT
      ══════════════════════════════════════ */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-6">

            {/* Left dark card */}
            <ScrollReveal direction="left">
              <div className="bg-[#1A56DB] rounded-2xl p-8 h-full flex flex-col justify-between min-h-[200px]">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight tracking-[-0.03em] mb-4">
                  We Provide<br />Awesome Services
                </h2>
                <p className="text-white/70 text-sm leading-relaxed">
                  "Matrix Gateway provides multiple features with a single registration — here are our awesome services"
                </p>
              </div>
            </ScrollReveal>

            {/* Right checklist + CTA */}
            <ScrollReveal direction="right">
              <div className="bg-white rounded-2xl border border-slate-100 shadow-[0_2px_20px_rgba(0,0,0,0.06)] p-8 h-full">
                <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3 mb-6">
                  {[
                    'Online Payment', 'Platform Support',
                    'Secure Transaction', 'Responsive Web App',
                    'Divide Group Payments', 'Lock Protection',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2.5 text-sm text-slate-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#1A56DB] flex-shrink-0" strokeWidth={2.5} />
                      {item}
                    </div>
                  ))}
                </div>
                <div className="border-t border-slate-100 pt-5">
                  <h3 className="text-lg font-extrabold text-[#0F1E5C] tracking-[-0.03em] mb-1.5">
                    Let's get you started with your Matrix Gateway account
                  </h3>
                  <p className="text-sm text-slate-500 mb-4">Our sales team will get in touch with you within 24 hours. Promise!</p>
                  <Link to="/contact"
                    className="inline-flex items-center gap-2 bg-[#1A56DB] text-white font-bold text-sm px-5 py-2.5 rounded-lg hover:bg-[#1648C8] transition-colors">
                    Contact Sales <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          STATS BAR
      ══════════════════════════════════════ */}
      <section className="py-14 bg-slate-50 border-y border-slate-100">
        <div className="container-wide">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <StatBadge value="999+" label="Happy Merchants" />
            <StatBadge value="100+" label="Payment Options" />
            <StatBadge value="2,000+" label="Customers Walk In" />
            <StatBadge value="50+" label="Channel Partners" />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SERVICES GRID
      ══════════════════════════════════════ */}
      <section className="section-padding bg-[#F8FAFF]">
        <div className="container-wide">
          <ScrollReveal>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-2 h-2 bg-[#1A56DB] rounded-full" />
                <span className="text-[#1A56DB] text-xs font-bold uppercase tracking-[0.14em]">Our Services</span>
                <span className="w-2 h-2 bg-[#1A56DB] rounded-full" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F1E5C] tracking-[-0.04em] uppercase">
                Our Best Features For<br />Your Convenience
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {serviceCards.map((svc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="relative"
              >
                <Link to={svc.href}
                  className="group relative flex flex-col bg-white rounded-2xl p-7 border border-slate-100
                             shadow-[0_4px_20px_rgba(15,30,92,0.06)] hover:shadow-[0_12px_40px_rgba(26,86,219,0.14)]
                             hover:-translate-y-1.5 transition-all duration-300 h-full">

                  {/* Naked duotone icon — sits free, no tile */}
                  <ServiceIconBadge
                    name={svc.icon}
                    size={44}
                    variant="naked"
                    className="mb-5 group-hover:scale-110 group-hover:-translate-y-0.5 transition-transform duration-300"
                  />

                  <h3 className="text-base font-bold text-[#0F1E5C] mb-2 tracking-[-0.02em]">{svc.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed flex-1">{svc.desc}</p>

                  <span className="mt-4 inline-flex items-center gap-1.5 text-[#1A56DB] text-sm font-semibold
                                   opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    Learn more
                    <ArrowRight className="w-3.5 h-3.5" strokeWidth={2.5} />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          ONBOARDING SECTION
      ══════════════════════════════════════ */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* Left — CSS illustration (no image needed) */}
            <ScrollReveal direction="left">
              <div className="relative bg-[#F0F4FF] rounded-2xl p-8 flex items-center justify-center min-h-[300px] overflow-hidden">
                {/* Background decoration */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-[#1A56DB]/10 rounded-full" />
                <div className="absolute bottom-4 left-4 w-14 h-14 bg-[#1A56DB]/5 rounded-full" />

                {/* Simple SVG illustration - finance/payment concept */}
                <div className="relative z-10 flex flex-col items-center gap-4 w-full max-w-xs">
                  {/* Chart bars */}
                  <div className="flex items-end gap-2 h-24">
                    {[40, 65, 50, 80, 55, 90, 70].map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 + i * 0.07 }}
                        className="w-6 rounded-t-md"
                        style={{ background: i === 5 ? '#1A56DB' : `rgba(26,86,219,${0.2 + i * 0.08})` }}
                      />
                    ))}
                  </div>

                  {/* Rupee coins row */}
                  <div className="flex items-center gap-3">
                    {[1, 2, 3].map((n) => (
                      <div key={n} className="w-12 h-12 rounded-full bg-[#1A56DB] flex items-center justify-center shadow-md">
                        <span className="text-white font-black text-lg">₹</span>
                      </div>
                    ))}
                    <motion.div
                      animate={{ y: [-4, 4, -4] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                      className="w-14 h-14 rounded-full bg-[#0F1E5C] flex items-center justify-center shadow-lg"
                    >
                      <span className="text-white font-black text-xl">₹</span>
                    </motion.div>
                  </div>

                  {/* Trend arrow */}
                  <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-100">
                    <TrendUp size={16} weight="bold" className="text-emerald-500" />
                    <span className="text-xs font-bold text-emerald-600">Revenue Growing</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Right — checklist */}
            <ScrollReveal direction="right">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F1E5C] tracking-[-0.04em] leading-tight mb-6">
                Get onboarded and start accepting payments within minutes.
              </h2>
              <div className="space-y-4 mb-8">
                {[
                  'Seamless onboarding with minimum documentation',
                  'Track payments on the go',
                  'Accept payments & issue refunds with a single click',
                  'Get detailed payments insights',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#1A56DB] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
                    </div>
                    <span className="text-slate-700 text-sm font-medium leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/contact"
                className="inline-flex items-center gap-2 bg-[#1A56DB] text-white font-bold text-sm px-7 py-3.5 rounded-xl hover:bg-[#1648C8] transition-colors shadow-md active:scale-[0.98]">
                Start Now <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SUCCESS STORY BANNER
      ══════════════════════════════════════ */}
      <section className="section-padding bg-[#1A56DB] relative overflow-hidden">
        <div className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
            backgroundSize: '48px 48px'
          }} />
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#0F1E5C]/30 rounded-full blur-3xl pointer-events-none" />

        <div className="container-wide relative z-10 text-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 mb-5">
              <span className="w-2 h-2 bg-white/50 rounded-full" />
              <span className="text-white/70 text-xs font-bold uppercase tracking-[0.14em]">Our Story</span>
              <span className="w-2 h-2 bg-white/50 rounded-full" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-[-0.04em] leading-tight mb-6 max-w-3xl mx-auto">
              Matrix Gateway — India's Modern Payment Infrastructure
            </h2>
            <p className="text-white/70 text-base leading-relaxed max-w-2xl mx-auto mb-10">
              Matrix Gateway provides the services of online payment transfer from customers to merchants,
              making the whole process simplified and fast. It can be used in all types of businesses —
              registered or not, with or without a website, small startup or large enterprise — any
              business can use our services.
            </p>
          </ScrollReveal>

          {/* Payment mode cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
            {paymentModes.map((mode, i) => (
              <motion.div
                key={mode.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white rounded-2xl overflow-hidden group hover:-translate-y-1 transition-all duration-300 shadow-[0_2px_12px_rgba(0,0,0,0.08)]"
              >
                {/* Image */}
                <div className="h-40 overflow-hidden">
                  <img
                    src={mode.img}
                    alt={mode.label}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Label */}
                <div className="px-4 py-3 text-center border-t-2 border-[#1A56DB]/10">
                  <p className="text-sm font-bold text-[#0F1E5C] tracking-[-0.02em]">{mode.label}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{mode.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          WHY MATRIX GATEWAY
      ══════════════════════════════════════ */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <ScrollReveal>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-2 h-2 bg-[#1A56DB] rounded-full" />
                <span className="text-[#1A56DB] text-xs font-bold uppercase tracking-[0.14em]">Why Choose Us</span>
                <span className="w-2 h-2 bg-[#1A56DB] rounded-full" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F1E5C] tracking-[-0.04em]">
                Built for Every Business
              </h2>
              <p className="text-slate-500 mt-3 max-w-xl mx-auto text-sm leading-relaxed">
                From a solo entrepreneur to a large enterprise — Matrix Gateway provides the infrastructure you need.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: 'Security-Conscious Design', desc: 'Payment workflows built with secure data handling and encrypted transmission at every layer.' },
              { title: 'Instant Processing',        desc: 'Real-time payment confirmation so your customers get a seamless checkout experience.' },
              { title: '150+ Payment Methods',      desc: 'UPI, cards, net banking, wallets, EMI — one integration, all methods.' },
              { title: 'For All Business Types',    desc: 'Registered or unregistered, online or offline — Matrix Gateway works for everyone.' },
              { title: 'Scalable Infrastructure',   desc: 'Built to handle growing transaction volumes without any performance compromise.' },
              { title: 'Mobile Ready',              desc: 'Every checkout experience is fully optimised for mobile — where India pays.' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="flex gap-4 p-5 rounded-xl border border-slate-100 hover:border-[#1A56DB]/20 hover:shadow-[0_4px_20px_rgba(26,86,219,0.07)] transition-all duration-300"
              >
                <ServiceIconBadge name={whyIcons[item.title]} size={30} variant="naked" className="flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold text-[#0F1E5C] mb-1 tracking-[-0.02em]">{item.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
