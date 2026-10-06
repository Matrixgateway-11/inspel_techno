import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Lightbulb, Target } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import CTASection from '../components/CTASection'
import ScrollReveal from '../components/ScrollReveal'
import ServiceIconBadge from '../components/ServiceIcon'

/* Reusable eyebrow label */
function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <div className="inline-flex items-center gap-2 mb-4">
      <span className={`w-2 h-2 rounded-full ${light ? 'bg-white/60' : 'bg-[#1A56DB]'}`} />
      <span className={`text-xs font-bold uppercase tracking-[0.14em] ${light ? 'text-white/70' : 'text-[#1A56DB]'}`}>
        {children}
      </span>
    </div>
  )
}

/* Tech / dashboard illustration */
function TechIllustration() {
  return (
    <motion.div
      animate={{ y: [-6, 6, -6] }}
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      className="relative w-full flex items-center justify-center"
    >
      <img
        src="/images/about-tech.png"
        alt="Modern payment technology illustration"
        loading="lazy"
        className="w-full max-w-lg h-auto object-contain drop-shadow-xl"
      />
    </motion.div>
  )
}

/* Finance growth illustration */
function GrowthIllustration() {
  return (
    <motion.div
      animate={{ y: [-5, 5, -5] }}
      transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
      className="relative w-full max-w-sm mx-auto flex items-center justify-center"
    >
      <img
        src="/images/about-growth.png"
        alt="Business growth illustration"
        loading="lazy"
        className="w-full h-auto object-contain"
      />
    </motion.div>
  )
}

export default function About() {
  const expertise = [
    { label: 'Online Payments', pct: 96 },
    { label: 'Platform Reliability', pct: 92 },
    { label: 'Developer Experience', pct: 89 },
  ]

  return (
    <>
      {/* ══ HERO ══ */}
      <section className="relative bg-gradient-to-b from-[#F0F4FF] to-white overflow-hidden">
        {/* Grid + glows (matches other page heroes) */}
        <div className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(rgba(26,86,219,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(26,86,219,0.04) 1px, transparent 1px)',
            backgroundSize: '64px 64px'
          }} />
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#1A56DB]/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-[#60A5FA]/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="container-wide relative z-10 py-20 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* Left — copy */}
            <div className="max-w-xl">
              <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
                <Eyebrow>About Us</Eyebrow>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.08 }}
                className="text-[2.6rem] sm:text-5xl lg:text-[3.2rem] font-extrabold text-[#0F1E5C] tracking-[-0.04em] leading-[1.1] mb-5"
              >
                Modern Payment<br />
                Infrastructure for<br />
                <span className="bg-gradient-to-r from-[#1A56DB] to-[#60A5FA] bg-clip-text text-transparent">
                  the Future
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.16 }}
                className="text-slate-500 text-base sm:text-lg mb-8 max-w-lg leading-relaxed"
              >
                Matrix Gateway is a modern payment infrastructure company providing businesses across
                India with the tools they need to accept, process, and disburse digital payments.
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
                <Link to="/contact"
                  className="inline-flex items-center justify-center gap-2 text-[#1A56DB] font-semibold text-sm px-7 py-3.5 rounded-xl border-2 border-[#1A56DB] hover:bg-[#EFF6FF] transition-colors active:scale-[0.98]">
                  Contact Us
                </Link>
              </motion.div>
            </div>

            {/* Right — tech illustration */}
            <div className="hidden lg:flex justify-center">
              <TechIllustration />
            </div>
          </div>
        </div>
      </section>

      {/* ══ IMPACT SECTION (grey card) ══ */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="bg-slate-50 rounded-3xl p-8 sm:p-12 lg:p-16">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
              <ScrollReveal direction="left">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F1E5C] tracking-[-0.04em] leading-[1.15] mb-5">
                  The Impact of Payments<br />on Modern Business
                </h2>
                <p className="text-slate-500 text-sm sm:text-base leading-relaxed mb-4">
                  Digital payments have transformed the way businesses operate. From e-commerce to
                  subscriptions, seamless payment experiences have become the backbone of growth for
                  companies of every size across India.
                </p>
                <p className="text-slate-500 text-sm sm:text-base leading-relaxed mb-7">
                  Matrix Gateway brings all payment methods, payouts, and automation together in a single
                  platform — so you can focus on your business, not your billing.
                </p>
                <Link to="/payment-gateway"
                  className="inline-flex items-center gap-2 bg-[#1A56DB] text-white font-bold text-sm px-6 py-3 rounded-xl hover:bg-[#1648C8] transition-colors shadow-md active:scale-[0.98]">
                  Read More <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
                </Link>
              </ScrollReveal>

              <ScrollReveal direction="right">
                {/* Stat cards — distinct visual from the hero illustration */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { v: 'All Types', l: 'Businesses Served', sub: 'Registered or not, online or offline' },
                    { v: '150+', l: 'Payment Methods', sub: 'Cards, UPI, wallets, net banking' },
                    { v: 'T+1', l: 'Settlement', sub: 'Next-day funds to your account' },
                    { v: '99.9%', l: 'Platform Uptime', sub: 'Reliable when you need it most' },
                  ].map((s) => (
                    <div key={s.l} className="bg-white rounded-2xl border border-slate-100 shadow-[0_2px_12px_rgba(0,0,0,0.05)] p-5">
                      <p className="text-2xl sm:text-3xl font-extrabold text-[#1A56DB] tracking-[-0.04em] mb-1">{s.v}</p>
                      <p className="text-sm font-bold text-[#0F1E5C] mb-1">{s.l}</p>
                      <p className="text-xs text-slate-400 leading-relaxed">{s.sub}</p>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ══ ABOUT COMPANY + VISION/MISSION ══ */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left — text + vision/mission */}
            <ScrollReveal direction="left">
              <Eyebrow>About Company</Eyebrow>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F1E5C] tracking-[-0.04em] leading-[1.15] mb-4">
                We Are The Best Online<br />Payment Gateway Platform
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-8 max-w-lg">
                Matrix Gateway is dedicated to providing affordable, reliable payment infrastructure for all
                types of businesses across India — with transparent pricing and best-in-class technology.
              </p>

              {/* Vision */}
              <div className="flex gap-5 mb-6">
                <Lightbulb size={40} weight="duotone" className="text-[#1A56DB] flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-lg font-extrabold text-[#0F1E5C] tracking-[-0.03em] mb-1.5">Our Vision</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    To be the foundation that powers digital commerce in India — guiding businesses toward
                    frictionless payments and helping them achieve sustainable growth.
                  </p>
                </div>
              </div>

              {/* Mission */}
              <div className="flex gap-5">
                <Target size={40} weight="duotone" className="text-[#1A56DB] flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-lg font-extrabold text-[#0F1E5C] tracking-[-0.03em] mb-1.5">Our Mission</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    To provide the most trusted payment service in India through strong partnerships and
                    continuous commitment — helping businesses maximise profits and create lasting value.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Right — illustration */}
            <ScrollReveal direction="right">
              <div className="bg-[#F0F4FF] rounded-3xl p-10 flex items-center justify-center">
                <GrowthIllustration />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══ WHO WE ARE (split, image + expertise card) ══ */}
      <section className="bg-white">
        <div className="grid lg:grid-cols-2">

          {/* Left — image area with floating expertise card */}
          <div className="relative min-h-[420px] lg:min-h-[560px] flex items-center justify-center overflow-hidden">
            <img
              src="/images/about-team.jpg"
              alt="Businesses growing with Matrix Gateway"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Blue overlay for brand cohesion */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0F1E5C]/50 via-[#1A56DB]/15 to-transparent" />

            {/* Floating expertise card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="absolute bottom-8 left-6 right-6 sm:left-10 sm:right-auto sm:w-80 bg-white rounded-2xl shadow-2xl p-6"
            >
              <h3 className="text-lg font-extrabold text-[#0F1E5C] tracking-[-0.03em] mb-4">Our Expertise</h3>
              <div className="space-y-4">
                {expertise.map((e, i) => (
                  <div key={e.label}>
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="font-semibold text-slate-700">{e.label}</span>
                      <span className="font-bold text-[#1A56DB]">{e.pct}%</span>
                    </div>
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }} whileInView={{ width: `${e.pct}%` }} viewport={{ once: true }}
                        transition={{ duration: 0.9, delay: 0.2 + i * 0.15, ease: 'easeOut' }}
                        className="h-full bg-gradient-to-r from-[#1A56DB] to-[#60A5FA] rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right — text */}
          <div className="flex items-center px-6 sm:px-10 lg:px-16 py-16 lg:py-24">
            <ScrollReveal direction="right">
              <Eyebrow>Who We Are</Eyebrow>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F1E5C] tracking-[-0.04em] leading-[1.15] mb-5">
                Helping Businesses Grow with Seamless Payments
              </h2>
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed mb-6">
                Let your business grow with a seamless checkout experience powered by Matrix Gateway.
                Whether you're a startup or an enterprise, we provide the infrastructure to accept,
                process, and disburse payments reliably.
              </p>
              <div className="space-y-2.5">
                {['Trusted by businesses across India', 'Transparent, affordable pricing', 'Fast onboarding & integration', 'Dedicated support team'].map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-sm text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" strokeWidth={2.5} />{item}
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══ VALUES GRID ══ */}
      <section className="section-padding bg-[#F8FAFF]">
        <div className="container-wide">
          <ScrollReveal>
            <div className="text-center mb-12">
              <div className="flex justify-center"><Eyebrow>Our Values</Eyebrow></div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F1E5C] tracking-[-0.04em]">What Drives Us</h2>
              <p className="text-slate-500 mt-3 max-w-xl mx-auto text-sm leading-relaxed">
                The principles that guide every product decision we make.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: 'security', title: 'Security First', desc: 'Payment workflows built with security-conscious practices at every layer.' },
              { icon: 'speed', title: 'Speed & Reliability', desc: 'Payments should work every time, instantly. Reliability is non-negotiable.' },
              { icon: 'developers', title: 'Developer Experience', desc: 'Clean APIs and tools that developers genuinely enjoy working with.' },
              { icon: 'interoperable', title: 'Continuous Innovation', desc: 'We evolve constantly to meet the changing needs of Indian businesses.' },
            ].map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="p-6 bg-white rounded-2xl border border-slate-100 shadow-[0_2px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_6px_30px_rgba(26,86,219,0.1)] hover:-translate-y-1 transition-all duration-300"
              >
                <ServiceIconBadge name={v.icon} size={42} variant="naked" className="mb-4" />
                <h3 className="font-bold text-[#0F1E5C] mb-2 tracking-[-0.02em]">{v.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ JOIN CTA BANNER ══ */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <ScrollReveal>
            <div className="bg-[#F0F4FF] rounded-3xl px-8 sm:px-12 py-10 sm:py-12">
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                <div className="max-w-xl">
                  <Eyebrow>Want To Join?</Eyebrow>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F1E5C] tracking-[-0.04em] mb-2">
                    Join Now & Start Accepting Payments
                  </h2>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Our all-in-one payment platform is built to take your business to the next level.
                  </p>
                </div>
                <Link to="/contact"
                  className="inline-flex items-center gap-2 bg-[#1A56DB] text-white font-bold text-sm px-8 py-4 rounded-xl hover:bg-[#1648C8] transition-colors shadow-lg active:scale-[0.98] flex-shrink-0">
                  Apply Now <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTASection title="Ready to Build with Matrix Gateway?" subtitle="Start today and get your payment infrastructure live fast." />
    </>
  )
}
