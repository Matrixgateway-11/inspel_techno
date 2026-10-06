import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, CheckCircle2, Loader2, Headset, MessageSquare, Handshake, Code2, Send } from 'lucide-react'
import { FormInput, FormTextarea } from '../components/FormInput'
import ScrollReveal from '../components/ScrollReveal'
import { companyInfo } from '../data/content'

interface FormState {
  name: string
  email: string
  phone: string
  company: string
  inquiry: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

const initialForm: FormState = { name: '', email: '', phone: '', company: '', inquiry: 'general', message: '' }

/* ── Connection hub hero visual ── */
function ConnectionHub() {
  const nodes = [
    { icon: Mail, label: 'Email', top: '4%', left: '38%', delay: 0 },
    { icon: Phone, label: 'Phone', top: '30%', left: '82%', delay: 0.4 },
    { icon: MessageSquare, label: 'Chat', top: '76%', left: '72%', delay: 0.8 },
    { icon: Handshake, label: 'Partners', top: '80%', left: '12%', delay: 0.6 },
    { icon: Code2, label: 'Developers', top: '30%', left: '0%', delay: 1.0 },
  ]

  return (
    <div className="relative w-[380px] h-[380px]">
      {[300, 210, 120].map((size) => (
        <div key={size}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#1A56DB]/10"
          style={{ width: size, height: size }} />
      ))}

      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 380 380" fill="none">
        {nodes.map((n, i) => {
          const x = (parseFloat(n.left) / 100) * 380 + 32
          const y = (parseFloat(n.top) / 100) * 380 + 28
          return <line key={i} x1="190" y1="190" x2={x} y2={y} stroke="rgba(26,86,219,0.18)" strokeWidth="1" strokeDasharray="3 4" />
        })}
      </svg>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
      >
        <div className="relative w-24 h-24 rounded-2xl bg-gradient-to-br from-[#1A56DB] to-[#0F1E5C] flex items-center justify-center shadow-[0_8px_40px_rgba(26,86,219,0.35)]">
          <Headset className="w-11 h-11 text-white" strokeWidth={1.5} />
          <motion.div
            animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0, 0.4] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute inset-0 rounded-2xl border-2 border-[#1A56DB]"
          />
        </div>
      </motion.div>

      {nodes.map((n, i) => {
        const Icon = n.icon
        return (
          <motion.div
            key={n.label}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1, y: [0, -6, 0] }}
            transition={{
              scale: { duration: 0.4, delay: 0.4 + i * 0.1 },
              opacity: { duration: 0.4, delay: 0.4 + i * 0.1 },
              y: { duration: 3 + (i % 3), repeat: Infinity, ease: 'easeInOut', delay: n.delay },
            }}
            className="absolute flex flex-col items-center gap-1 z-10"
            style={{ top: n.top, left: n.left }}
          >
            <div className="w-14 h-14 bg-white rounded-2xl shadow-[0_4px_20px_rgba(26,86,219,0.15)] border border-slate-100 flex items-center justify-center">
              <Icon className="w-6 h-6 text-[#1A56DB]" strokeWidth={1.7} />
            </div>
            <span className="text-[10px] font-semibold text-slate-500">{n.label}</span>
          </motion.div>
        )
      })}
    </div>
  )
}

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialForm)
  const [errors, setErrors] = useState<FormErrors>({})
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  function validate(): boolean {
    const newErrors: FormErrors = {}
    if (!form.name.trim()) newErrors.name = 'Name is required'
    if (!form.email.trim()) newErrors.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Enter a valid email address'
    if (!form.message.trim()) newErrors.message = 'Message is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1500))
    console.log('Form submitted:', form)
    setLoading(false)
    setSuccess(true)
    setForm(initialForm)
  }

  return (
    <>
      {/* ══ HERO ══ */}
      <section className="relative bg-gradient-to-b from-[#F0F4FF] to-white overflow-hidden">
        <div className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(rgba(26,86,219,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(26,86,219,0.04) 1px, transparent 1px)',
            backgroundSize: '64px 64px'
          }} />
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#1A56DB]/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-[#60A5FA]/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="container-wide relative z-10 py-20 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-14 items-center">

            <div className="max-w-xl">
              <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
                <div className="inline-flex items-center gap-2 mb-5">
                  <span className="w-2 h-2 bg-[#1A56DB] rounded-full" />
                  <span className="text-[#1A56DB] text-xs font-bold uppercase tracking-[0.14em]">Contact Us</span>
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.08 }}
                className="text-[2.6rem] sm:text-5xl lg:text-[3.2rem] font-extrabold text-[#0F1E5C] mb-5 leading-[1.1] tracking-[-0.04em]"
              >
                Let's Talk —<br />
                <span className="bg-gradient-to-r from-[#1A56DB] to-[#60A5FA] bg-clip-text text-transparent">
                  We're Here to Help
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.16 }}
                className="text-slate-500 text-base sm:text-lg mb-8 max-w-lg leading-relaxed"
              >
                Whether it's a sales inquiry, partnership discussion, or a technical question — our team is
                ready to help and typically responds within one business day.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-2.5"
              >
                <a href={`mailto:${companyInfo.email}`}
                  className="inline-flex items-center gap-2 bg-white border border-slate-100 shadow-[0_1px_4px_rgba(0,0,0,0.04)] rounded-lg px-3.5 py-2.5 hover:border-[#1A56DB]/20 transition-colors">
                  <Mail className="w-4 h-4 text-[#1A56DB]" strokeWidth={2} />
                  <span className="text-xs font-semibold text-slate-700">{companyInfo.email}</span>
                </a>
                <div className="inline-flex items-center gap-2 bg-white border border-slate-100 shadow-[0_1px_4px_rgba(0,0,0,0.04)] rounded-lg px-3.5 py-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" strokeWidth={2} />
                  <span className="text-xs font-semibold text-slate-700">Replies within 24 hours</span>
                </div>
              </motion.div>
            </div>

            <div className="hidden lg:flex justify-center">
              <ConnectionHub />
            </div>
          </div>
        </div>
      </section>

      {/* ══ CONTACT SECTION ══ */}
      <section className="section-padding bg-slate-50">
        <div className="container-wide">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">

            {/* Contact info */}
            <div className="lg:col-span-1">
              <ScrollReveal direction="left">
                <div className="bg-white rounded-2xl border border-slate-100 shadow-[0_2px_12px_rgba(0,0,0,0.05)] p-7">
                  <h2 className="text-lg font-bold text-[#0F1E5C] mb-2 tracking-[-0.02em]">Get in Touch</h2>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">
                    Reach out through any channel below. For urgent technical issues, use your dashboard support.
                  </p>

                  <div className="space-y-4 mb-6">
                    {[
                      { icon: Mail, label: 'Email', value: companyInfo.email, href: `mailto:${companyInfo.email}` },
                      { icon: Phone, label: 'Phone', value: companyInfo.phone, href: undefined },
                      { icon: MapPin, label: 'Address', value: companyInfo.address, href: undefined },
                    ].map(({ icon: Icon, label, value, href }) => (
                      <div key={label} className="flex items-start gap-3">
                        <div className="w-9 h-9 bg-[#EFF6FF] rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="w-4 h-4 text-[#1A56DB]" strokeWidth={1.9} />
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{label}</p>
                          {href
                            ? <a href={href} className="text-sm text-[#1A56DB] hover:underline break-all">{value}</a>
                            : <p className="text-sm text-slate-700">{value}</p>}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-5 border-t border-slate-100">
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">We Can Help With</p>
                    <div className="space-y-2">
                      {['Sales & Pricing', 'Partnership Opportunities', 'Developer Support', 'General Questions'].map((t) => (
                        <div key={t} className="flex items-center gap-2 text-sm text-slate-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" strokeWidth={2.5} />{t}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <ScrollReveal direction="right">
                <div className="bg-white rounded-2xl border border-slate-100 shadow-[0_2px_12px_rgba(0,0,0,0.05)] p-6 sm:p-8">
                  {success ? (
                    <div className="flex flex-col items-center justify-center py-16 text-center">
                      <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-5">
                        <CheckCircle2 className="w-8 h-8 text-emerald-600" strokeWidth={2} />
                      </div>
                      <h3 className="text-xl font-bold text-[#0F1E5C] mb-2 tracking-[-0.02em]">Message Sent!</h3>
                      <p className="text-slate-500 text-sm mb-6 max-w-sm">Thanks for reaching out. Our team will get back to you within one business day.</p>
                      <button
                        onClick={() => setSuccess(false)}
                        className="inline-flex items-center gap-2 bg-[#1A56DB] text-white font-semibold text-sm px-6 py-2.5 rounded-lg hover:bg-[#1648C8] transition-colors active:scale-[0.98]"
                      >
                        Send Another Message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} noValidate className="space-y-5">
                      <div>
                        <h2 className="text-lg font-bold text-[#0F1E5C] tracking-[-0.02em]">Send us a Message</h2>
                        <p className="text-sm text-slate-400 mt-1">Fill out the form and we'll be in touch shortly.</p>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <FormInput label="Full Name" placeholder="Your full name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} error={errors.name} />
                        <FormInput label="Email Address" type="email" placeholder="you@company.com" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} error={errors.email} />
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <FormInput label="Phone Number" type="tel" placeholder="+91-XXXXX-XXXXX" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                        <FormInput label="Company" placeholder="Your company name" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} />
                      </div>

                      <div className="space-y-1.5">
                        <label htmlFor="inquiry" className="block text-sm font-semibold text-slate-700">Inquiry Type</label>
                        <select
                          id="inquiry"
                          value={form.inquiry}
                          onChange={(e) => setForm({ ...form, inquiry: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A56DB] focus:border-[#1A56DB] bg-white"
                        >
                          <option value="general">General Inquiry</option>
                          <option value="sales">Sales & Pricing</option>
                          <option value="partnership">Partnership</option>
                          <option value="developer">Developer Support</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <FormTextarea label="Message" placeholder="Tell us how we can help..." required rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} error={errors.message} />

                      {/* properly-sized submit button, right-aligned */}
                      <div className="flex justify-end pt-1">
                        <button
                          type="submit"
                          disabled={loading}
                          className="inline-flex items-center justify-center gap-2 bg-[#1A56DB] text-white font-semibold text-sm px-7 py-3 rounded-lg hover:bg-[#1648C8] transition-colors shadow-md active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed min-w-[150px]"
                        >
                          {loading ? (
                            <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</>
                          ) : (
                            <>Send Message <Send className="w-4 h-4" strokeWidth={2.2} /></>
                          )}
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
