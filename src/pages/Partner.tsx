import { motion } from 'framer-motion'
import { Shield, Lightning, CurrencyInr } from '@phosphor-icons/react'
import SectionHeader from '../components/SectionHeader'
import CTASection from '../components/CTASection'
import ScrollReveal from '../components/ScrollReveal'
import ServiceIconBadge from '../components/ServiceIcon'

/* ── Financial institution logos ──
   Add PNG files to public/images/logos/ using these exact filenames.
   Only the ones present will display cleanly (missing images hide via onError). */
const cardLogos = [
  { name: 'RuPay', file: 'rupay.png' },
  { name: 'Visa', file: 'visa.png' },
  { name: 'Mastercard', file: 'mastercard.png' },
  { name: 'American Express', file: 'amex.png' },
]

const upiLogos = [
  { name: 'UPI', file: 'upi.png' },
  { name: 'BHIM', file: 'bhim.png' },
  { name: 'Google Pay', file: 'gpay.png' },
  { name: 'PhonePe', file: 'phonepe.png' },
]

const walletLogos = [
  { name: 'Paytm', file: 'paytm.png' },
  { name: 'Amazon Pay', file: 'amazonpay.png' },
  { name: 'MobiKwik', file: 'mobikwik.png' },
  { name: 'JioMoney', file: 'jiomoney.png' },
]

const bankLogos = [
  { name: 'HDFC Bank', file: 'hdfc.png' },
  { name: 'SBI', file: 'sbi.png' },
  { name: 'ICICI Bank', file: 'icici.png' },
  { name: 'Axis Bank', file: 'axis.png' },
  { name: 'Kotak', file: 'kotak.png' },
  { name: 'Bank of Baroda', file: 'bob.png' },
  { name: 'Canara Bank', file: 'canara.png' },
  { name: 'Citibank', file: 'citibank.png' },
  { name: 'IDBI Bank', file: 'idbi.png' },
  { name: 'YES Bank', file: 'yesbank.png' },
  { name: 'Bank of Maharashtra', file: 'bom.png' },
  { name: 'Karur Vysya Bank', file: 'kvb.png' },
  { name: 'IDFC First Bank', file: 'idfc.png' },
]

/* Animated partner-network visual for the hero */
function PartnerNetwork() {
  // Chips positioned around the center node (using existing uploaded logos)
  const orbit = [
    { file: 'visa.png',     top: '2%',   left: '18%', delay: 0 },
    { file: 'hdfc.png',     top: '8%',   left: '72%', delay: 0.4 },
    { file: 'phonepe.png',  top: '40%',  left: '90%', delay: 0.8 },
    { file: 'paytm.png',    top: '78%',  left: '74%', delay: 1.2 },
    { file: 'rupay.png',    top: '88%',  left: '20%', delay: 0.6 },
    { file: 'icici.png',    top: '44%',  left: '0%',  delay: 1.0 },
    { file: 'gpay.png',     top: '18%',  left: '44%', delay: 0.2 },
    { file: 'sbi.png',      top: '70%',  left: '42%', delay: 1.4 },
  ]

  return (
    <div className="relative w-[420px] h-[420px]">
      {/* Concentric rings */}
      {[280, 200, 120].map((size) => (
        <div
          key={size}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#1A56DB]/10"
          style={{ width: size, height: size }}
        />
      ))}

      {/* connecting dotted lines via SVG */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 420 420" fill="none">
        {orbit.map((o, i) => {
          const x = (parseFloat(o.left) / 100) * 420 + 28
          const y = (parseFloat(o.top) / 100) * 420 + 20
          return (
            <line key={i} x1="210" y1="210" x2={x} y2={y}
              stroke="rgba(26,86,219,0.18)" strokeWidth="1" strokeDasharray="3 4" />
          )
        })}
      </svg>

      {/* Center node */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
      >
        <div className="relative w-24 h-24 rounded-2xl bg-gradient-to-br from-[#1A56DB] to-[#0F1E5C] flex items-center justify-center shadow-[0_8px_40px_rgba(26,86,219,0.35)]">
          <span className="text-white font-black text-4xl">M</span>
          {/* pulse ring */}
          <motion.div
            animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0, 0.4] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute inset-0 rounded-2xl border-2 border-[#1A56DB]"
          />
        </div>
      </motion.div>

      {/* Orbiting logo chips */}
      {orbit.map((o, i) => (
        <motion.div
          key={o.file}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1, y: [0, -6, 0] }}
          transition={{
            scale: { duration: 0.4, delay: 0.4 + i * 0.08 },
            opacity: { duration: 0.4, delay: 0.4 + i * 0.08 },
            y: { duration: 3 + (i % 3), repeat: Infinity, ease: 'easeInOut', delay: o.delay },
          }}
          className="absolute w-14 h-14 bg-white rounded-xl shadow-[0_4px_20px_rgba(26,86,219,0.15)] border border-slate-100 flex items-center justify-center p-2.5 z-10"
          style={{ top: o.top, left: o.left }}
        >
          <img
            src={`/images/logos/${o.file}`}
            alt=""
            loading="lazy"
            className="max-w-full max-h-full object-contain"
            onError={(e) => { (e.currentTarget.parentElement as HTMLElement).style.display = 'none' }}
          />
        </motion.div>
      ))}
    </div>
  )
}

function LogoTile({ name, file, index }: { name: string; file: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.04 }}
      className="flex items-center justify-center h-16 sm:h-20 px-3 bg-white rounded-xl border border-slate-100
                 shadow-[0_1px_4px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_16px_rgba(26,86,219,0.08)]
                 hover:border-[#1A56DB]/15 transition-all duration-200"
    >
      <img
        src={`/images/logos/${file}`}
        alt={name}
        loading="lazy"
        className="max-h-8 sm:max-h-10 max-w-full object-contain"
        onError={(e) => { (e.currentTarget.parentElement as HTMLElement).style.display = 'none' }}
      />
    </motion.div>
  )
}

export default function Partner() {
  return (
    <>
      {/* ══ HERO ══ */}
      <section className="relative bg-gradient-to-b from-[#F0F4FF] to-white overflow-hidden">
        {/* Subtle grid */}
        <div className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(rgba(26,86,219,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(26,86,219,0.04) 1px, transparent 1px)',
            backgroundSize: '64px 64px'
          }} />
        {/* Soft glows */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#1A56DB]/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-[#60A5FA]/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="container-wide relative z-10 py-20 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* Left — copy */}
            <div className="max-w-xl">
              <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
                <div className="inline-flex items-center gap-2 mb-5">
                  <span className="w-2 h-2 bg-[#1A56DB] rounded-full" />
                  <span className="text-[#1A56DB] text-xs font-bold uppercase tracking-[0.14em]">Partner Program</span>
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.08 }}
                className="text-[2.6rem] sm:text-5xl lg:text-[3.2rem] font-extrabold text-[#0F1E5C] mb-5 leading-[1.1] tracking-[-0.04em]"
              >
                Grow Together with<br />
                <span className="bg-gradient-to-r from-[#1A56DB] to-[#60A5FA] bg-clip-text text-transparent">
                  Matrix Gateway
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.16 }}
                className="text-slate-500 text-base sm:text-lg mb-8 max-w-lg leading-relaxed"
              >
                Bring best-in-class payment infrastructure to your customers, clients, and platform users —
                backed by our network of 140+ financial institutions.
              </motion.p>

              {/* Trust chips */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-2.5"
              >
                {[
                  { icon: Shield, label: '140+ Institutions' },
                  { icon: Lightning, label: 'Secure Integrations' },
                  { icon: CurrencyInr, label: 'Revenue Sharing' },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="inline-flex items-center gap-1.5 bg-white border border-slate-100 shadow-[0_1px_4px_rgba(0,0,0,0.04)] rounded-lg px-3 py-2">
                    <Icon size={15} weight="duotone" className="text-[#1A56DB]" />
                    <span className="text-xs font-semibold text-slate-700">{label}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right — partner network visual */}
            <div className="hidden lg:flex justify-center">
              <PartnerNetwork />
            </div>
          </div>
        </div>
      </section>

      {/* ══ FINANCIAL INSTITUTIONS ══ */}
      <section className="section-padding bg-slate-50">
        <div className="container-wide">
          <ScrollReveal>
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-2 h-2 bg-[#1A56DB] rounded-full" />
                <span className="text-[#1A56DB] text-xs font-bold uppercase tracking-[0.14em]">Our Network</span>
                <span className="w-2 h-2 bg-[#1A56DB] rounded-full" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F1E5C] tracking-[-0.04em]">
                Working with 140+ Financial Institutions
              </h2>
              <p className="text-slate-500 mt-3 max-w-xl mx-auto text-sm leading-relaxed">
                Matrix Gateway integrates with leading card networks, UPI apps, wallets, and banks across India.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14">
            {/* Left column — Cards, UPI, Wallets */}
            <div className="space-y-8">
              <div>
                <h3 className="text-sm font-bold text-[#0F1E5C] uppercase tracking-wide mb-4">Credit / Debit Cards</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {cardLogos.map((logo, i) => <LogoTile key={logo.file} {...logo} index={i} />)}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-bold text-[#0F1E5C] uppercase tracking-wide mb-4">UPI Payments</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {upiLogos.map((logo, i) => <LogoTile key={logo.file} {...logo} index={i} />)}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-bold text-[#0F1E5C] uppercase tracking-wide mb-4">Wallets</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {walletLogos.map((logo, i) => <LogoTile key={logo.file} {...logo} index={i} />)}
                </div>
              </div>
            </div>

            {/* Right column — Net Banking */}
            <div>
              <h3 className="text-sm font-bold text-[#0F1E5C] uppercase tracking-wide mb-4">80+ Net Banking Options</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {bankLogos.map((logo, i) => <LogoTile key={logo.file} {...logo} index={i} />)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <SectionHeader label="Partner Benefits" title="Why Partner with Matrix Gateway?" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
            {[
              { icon: 'revenue', title: 'Revenue Sharing', desc: 'Competitive revenue sharing model with transparent payouts.' },
              { icon: 'growth', title: 'Growth Support', desc: 'Marketing materials, co-selling resources, and go-to-market support.' },
              { icon: 'fast-integration', title: 'Fast Integration', desc: 'Well-documented APIs and SDKs to get up and running quickly.' },
              { icon: 'reliable', title: 'Reliable Platform', desc: 'High-uptime infrastructure that you can confidently offer to your customers.' },
            ].map((b, i) => (
              <ScrollReveal key={b.title} delay={i * 0.1}>
                <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)] text-center flex flex-col items-center">
                  <ServiceIconBadge name={b.icon} size={42} variant="naked" className="mb-4" />
                  <h3 className="font-bold text-[#0F1E5C] mb-2">{b.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{b.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Ready to Partner with Us?" subtitle="Let's explore how we can build something valuable together." primaryLabel="Apply to Partner Program" primaryHref="/contact" secondaryLabel="Learn More" secondaryHref="/about" />
    </>
  )
}
