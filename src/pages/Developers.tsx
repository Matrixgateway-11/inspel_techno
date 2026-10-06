import { motion } from 'framer-motion'
import { ArrowRight, Download, FileText, Code2, Smartphone, Building2, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import CTASection from '../components/CTASection'
import ScrollReveal from '../components/ScrollReveal'

const serverUtils = [
  { name: 'PHP', file: 'php.png', desc: 'Server-side SDK for PHP applications' },
  { name: 'Java', file: 'java.jpg', desc: 'Robust SDK for Java backends' },
  { name: 'Node.js', file: 'nodejs.png', desc: 'Modern SDK for Node.js runtimes' },
  { name: 'ASP.NET', file: 'dotnet.png', desc: 'SDK for .NET web applications' },
  { name: 'Python', file: 'python.jpg', desc: 'Pythonic SDK for quick integration' },
  { name: 'WooCommerce', file: 'woocommerce.png', desc: 'Plugin for WooCommerce stores' },
]

/* ── Integration Flow hero visual ── */
function IntegrationFlow() {
  const nodes = [
    { icon: Code2, label: 'Your App', sub: 'API request' },
    { icon: Building2, label: 'Matrix API', sub: 'Processing' },
    { icon: Smartphone, label: 'Bank / UPI', sub: 'Authorising' },
    { icon: CheckCircle2, label: 'Success', sub: 'Confirmed' },
  ]

  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* card wrapper */}
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-white rounded-2xl border border-slate-100 shadow-[0_20px_60px_rgba(26,86,219,0.15)] p-6 sm:p-8"
      >
        {/* header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-bold text-[#0F1E5C]">API Status: Operational</span>
          </div>
          <span className="text-[10px] font-mono bg-[#EFF6FF] text-[#1A56DB] px-2 py-1 rounded-md font-semibold">POST /v1/payments</span>
        </div>

        {/* flow nodes */}
        <div className="space-y-3">
          {nodes.map((n, i) => {
            const Icon = n.icon
            return (
              <motion.div
                key={n.label}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.15 }}
                className="relative"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0
                    ${i === 3 ? 'bg-emerald-500' : 'bg-gradient-to-br from-[#1A56DB] to-[#0F1E5C]'}`}>
                    <Icon className="w-5 h-5 text-white" strokeWidth={1.8} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-[#0F1E5C] tracking-[-0.02em]">{n.label}</p>
                    <p className="text-xs text-slate-400">{n.sub}</p>
                  </div>
                  {i < 3 && (
                    <motion.span
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
                      className="text-[#1A56DB] text-xs font-bold"
                    >
                      ▼
                    </motion.span>
                  )}
                </div>
                {/* connecting line */}
                {i < 3 && <div className="absolute left-5 top-10 w-px h-3 bg-[#1A56DB]/20" />}
              </motion.div>
            )
          })}
        </div>

        {/* footer chips */}
        <div className="mt-6 pt-5 border-t border-slate-100 flex items-center gap-2 flex-wrap">
          <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Avg</span>
          <span className="text-xs font-bold text-[#0F1E5C]">142ms</span>
          <span className="w-px h-3 bg-slate-200" />
          <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Success</span>
          <span className="text-xs font-bold text-emerald-600">99.9%</span>
          <span className="w-px h-3 bg-slate-200" />
          <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Uptime</span>
          <span className="text-xs font-bold text-[#1A56DB]">99.99%</span>
        </div>
      </motion.div>

      {/* floating badge */}
      <motion.div
        animate={{ y: [-6, 6, -6] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-4 -right-3 bg-[#0F1E5C] text-white text-xs font-bold px-3 py-2 rounded-xl shadow-lg hidden sm:block"
      >
        200 OK
      </motion.div>
    </div>
  )
}

export default function Developers() {
  return (
    <>
      {/* ══ HERO ══ */}
      <section className="relative bg-gradient-to-b from-[#F0F4FF] to-white overflow-hidden">
        {/* Grid */}
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
                <div className="inline-flex items-center gap-2 mb-5">
                  <span className="w-2 h-2 bg-[#1A56DB] rounded-full" />
                  <span className="text-[#1A56DB] text-xs font-bold uppercase tracking-[0.14em]">Developer Portal</span>
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.08 }}
                className="text-[2.6rem] sm:text-5xl lg:text-[3.2rem] font-extrabold text-[#0F1E5C] mb-5 leading-[1.1] tracking-[-0.04em]"
              >
                Payments Built for<br />
                <span className="bg-gradient-to-r from-[#1A56DB] to-[#60A5FA] bg-clip-text text-transparent">
                  Developers
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.16 }}
                className="text-slate-500 text-base sm:text-lg mb-8 max-w-lg leading-relaxed"
              >
                Server-side SDKs for every popular language and comprehensive documentation.
                Integrate Matrix Gateway into your stack quickly and reliably.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.24 }}
                className="flex flex-col sm:flex-row gap-3"
              >
                <Link to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-[#1A56DB] text-white font-bold text-sm px-7 py-3.5 rounded-xl hover:bg-[#1648C8] transition-colors shadow-lg active:scale-[0.98]">
                  Start Building <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
                </Link>
                <a href="#server-utilities"
                  className="inline-flex items-center justify-center gap-2 text-[#1A56DB] font-semibold text-sm px-7 py-3.5 rounded-xl border-2 border-[#1A56DB] hover:bg-[#EFF6FF] transition-colors active:scale-[0.98]">
                  Browse SDKs
                </a>
              </motion.div>
            </div>

            {/* Right — integration flow visual */}
            <div className="hidden lg:block">
              <IntegrationFlow />
            </div>
          </div>
        </div>
      </section>

      {/* ══ SERVER SIDE UTILITIES ══ */}
      <section id="server-utilities" className="section-padding bg-slate-50 scroll-mt-16">
        <div className="container-wide">
          <ScrollReveal>
            <div className="mb-3">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-2 h-2 bg-[#1A56DB] rounded-full" />
                <span className="text-[#1A56DB] text-xs font-bold uppercase tracking-[0.14em]">Server Side Utilities for Web</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F1E5C] tracking-[-0.04em] mb-3">
                SDKs for Your Favourite Language
              </h2>
              <p className="text-slate-500 text-sm sm:text-base max-w-2xl leading-relaxed">
                Want an API or package for your favourite development language? Let us know and we'll see if
                we can make it happen. Download and integrate in minutes.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
            {serverUtils.map((sdk, i) => (
              <motion.div
                key={sdk.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="group flex flex-col items-center text-center bg-white rounded-2xl border border-slate-100
                           shadow-[0_2px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_36px_rgba(26,86,219,0.12)]
                           hover:-translate-y-1 transition-all duration-300 p-8"
              >
                <div className="h-24 flex items-center justify-center mb-5">
                  <img
                    src={`/images/dev/${sdk.file}`}
                    alt={`${sdk.name} SDK`}
                    loading="lazy"
                    className="max-h-20 max-w-[160px] object-contain group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      const el = e.currentTarget
                      el.style.display = 'none'
                      const fb = el.nextElementSibling as HTMLElement
                      if (fb) fb.style.display = 'flex'
                    }}
                  />
                  <div className="hidden w-20 h-20 rounded-2xl bg-[#EFF6FF] items-center justify-center">
                    <Code2 className="w-9 h-9 text-[#1A56DB]" strokeWidth={1.5} />
                  </div>
                </div>

                <h3 className="text-base font-bold text-[#0F1E5C] tracking-[-0.02em] mb-1">{sdk.name}</h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-6 max-w-[220px]">{sdk.desc}</p>

                <span className="inline-flex items-center gap-2 bg-[#1A56DB] text-white font-semibold text-sm
                                 px-6 py-2.5 rounded-lg group-hover:bg-[#1648C8] transition-colors cursor-default select-none">
                  <Download className="w-4 h-4" strokeWidth={2.2} />
                  Download
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ API DOCUMENTATION BAND ══ */}
      <section className="pt-4 pb-16 sm:pb-20 lg:pb-24 bg-slate-50">
        <div className="container-wide">
          <ScrollReveal>
            <div className="bg-gradient-to-br from-[#1A56DB] to-[#0F1E5C] rounded-3xl px-8 sm:px-12 py-10 sm:py-12 relative overflow-hidden">
              <div className="absolute inset-0"
                style={{
                  backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
                  backgroundSize: '48px 48px'
                }} />
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 mb-4">
                  <span className="w-2 h-2 bg-white/60 rounded-full" />
                  <span className="text-white/70 text-xs font-bold uppercase tracking-[0.14em]">API Documentation</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-[-0.04em] mb-2">
                  Integrate Quickly with Comprehensive Docs
                </h2>
                <p className="text-blue-100/70 text-sm leading-relaxed mb-8 max-w-2xl">
                  Everything you need to integrate Matrix Gateway. Test our APIs on staging right away.
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  {[
                    'Payout / Disbursement API Guide',
                    'Payment Gateway Integration Guide',
                  ].map((doc) => (
                    <span key={doc}
                      className="inline-flex items-center gap-2.5 bg-white text-[#0F1E5C] font-semibold text-sm
                                 px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-shadow cursor-default select-none">
                      <FileText className="w-4 h-4 text-[#1A56DB]" strokeWidth={2} />
                      {doc}
                      <Download className="w-4 h-4 text-slate-400" strokeWidth={2} />
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTASection title="Ready to Build?" subtitle="Get your API keys and start integrating in minutes." primaryLabel="Get API Access" />
    </>
  )
}
