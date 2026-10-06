import { Link } from 'react-router-dom'
import { Twitter, Linkedin, Github, Mail, MapPin } from 'lucide-react'
import { footerLinks, companyInfo } from '../data/content'

function FooterCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="text-xs font-bold text-white/50 uppercase tracking-[0.12em] mb-4">{title}</h3>
      <ul className="space-y-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link to={link.href}
              className="text-sm text-white/50 hover:text-white transition-colors duration-150 font-normal">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="bg-[#040E2B] border-t border-white/[0.06]" role="contentinfo">
      <div className="container-wide pt-14 pb-8">
        {/* Main grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-10 pb-12 border-b border-white/[0.06]">

          {/* Brand */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-2">
            <Link to="/" className="flex items-center gap-1.5 mb-5 w-fit focus:outline-none focus:ring-2 focus:ring-[#1A56DB] rounded-lg">
              <div className="w-7 h-7 bg-[#1A56DB] rounded-md flex items-center justify-center">
                <span className="text-white font-black text-sm leading-none">M</span>
              </div>
              <span className="font-extrabold text-lg text-white tracking-[-0.04em]">
                Matrix<span className="text-[#60A5FA]">Gateway</span>
              </span>
            </Link>
            <p className="text-sm text-white/40 leading-relaxed max-w-xs mb-6 font-normal">
              Modern payment infrastructure for Indian businesses. Accept, process, and disburse — one platform.
            </p>
            <div className="space-y-2 mb-6">
              <a href={`mailto:${companyInfo.email}`}
                className="flex items-center gap-2 text-xs text-white/35 hover:text-white/70 transition-colors">
                <Mail className="w-3.5 h-3.5 flex-shrink-0" strokeWidth={1.8} />
                {companyInfo.email}
              </a>
              <div className="flex items-center gap-2 text-xs text-white/35">
                <MapPin className="w-3.5 h-3.5 flex-shrink-0" strokeWidth={1.8} />
                {companyInfo.address}
              </div>
            </div>
            <div className="flex items-center gap-2">
              {[
                { icon: Twitter, label: 'Twitter', href: '#' },
                { icon: Linkedin, label: 'LinkedIn', href: '#' },
                { icon: Github, label: 'GitHub', href: '#' },
              ].map(({ icon: Icon, label, href }) => (
                <a key={label} href={href} aria-label={label}
                  className="w-8 h-8 rounded-lg bg-white/5 hover:bg-[#1A56DB]/30 flex items-center justify-center transition-colors duration-150">
                  <Icon className="w-3.5 h-3.5 text-white/40" strokeWidth={1.8} />
                </a>
              ))}
            </div>
          </div>

          <FooterCol title="Products" links={footerLinks.products} />
          <FooterCol title="Solutions" links={footerLinks.solutions} />
          <div className="space-y-8">
            <FooterCol title="Company" links={footerLinks.company} />
            <FooterCol title="Get Started" links={footerLinks.getStarted} />
          </div>
        </div>

        {/* Bottom — links row */}
        <div className="pt-7 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/25">
            © {new Date().getFullYear()} Matrix Gateway. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="#" className="text-xs text-white/25 hover:text-white/50 transition-colors">Privacy Policy</Link>
            <Link to="#" className="text-xs text-white/25 hover:text-white/50 transition-colors">Terms of Service</Link>
          </div>
        </div>

        {/* Legal copyright line */}
        <div className="mt-6 pt-5 border-t border-white/[0.06] text-center">
          <p className="text-xs text-white/30 leading-relaxed">
            © Copyright {new Date().getFullYear()} {companyInfo.legalName}. CIN: {companyInfo.cin}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
