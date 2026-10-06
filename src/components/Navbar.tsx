import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Menu, X, ChevronRight } from 'lucide-react'
import { servicesNav, mainNavItems } from '../data/navigation'

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#1A56DB] focus:ring-offset-2 rounded-lg">
      <div className="flex items-center gap-1.5">
        <div className="w-7 h-7 bg-[#1A56DB] rounded-md flex items-center justify-center flex-shrink-0">
          <span className="text-white font-black text-sm leading-none">M</span>
        </div>
        <span className="font-extrabold text-lg text-[#0F1E5C] tracking-[-0.04em] whitespace-nowrap">
          Matrix<span className="text-[#1A56DB]">Gateway</span>
        </span>
      </div>
    </Link>
  )
}

/* Services dropdown — clean 2-column list of all services */
function ServicesDropdown({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 8, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 8, scale: 0.98 }}
          transition={{ duration: 0.16 }}
          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[560px] max-w-[95vw]
                     bg-white rounded-xl shadow-[0_12px_44px_rgba(15,30,92,0.14)] border border-slate-100
                     p-3 z-50"
        >
          <div className="grid grid-cols-2 gap-1">
            {servicesNav.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={onClose}
                  className="flex items-start gap-3 px-3 py-2.5 rounded-lg hover:bg-[#EFF6FF] group/item transition-colors duration-100"
                >
                  <div className="w-8 h-8 rounded-lg bg-slate-100 group-hover/item:bg-[#1A56DB] flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors duration-150">
                    <Icon className="w-4 h-4 text-slate-500 group-hover/item:text-white transition-colors duration-150" strokeWidth={1.8} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-[#0F1E5C] group-hover/item:text-[#1A56DB] transition-colors duration-100 tracking-[-0.02em]">{item.label}</p>
                    <p className="text-xs text-slate-400 leading-tight mt-0.5 line-clamp-1 font-normal">{item.description}</p>
                  </div>
                </Link>
              )
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [servicesOpen, setServicesOpen] = useState(false)
  const location = useLocation()

  useEffect(() => { onClose() }, [location.pathname])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2 }}
          className="lg:hidden overflow-hidden border-t border-slate-100 bg-white"
        >
          <nav className="container-wide py-3 space-y-0.5" aria-label="Mobile navigation">
            {/* Home */}
            <Link to="/"
              className="flex items-center px-3 py-2.5 rounded-lg text-sm font-semibold text-[#0F1E5C] hover:bg-slate-50 transition-colors">
              Home
            </Link>

            {/* About */}
            <Link to="/about"
              className="flex items-center px-3 py-2.5 rounded-lg text-sm font-semibold text-[#0F1E5C] hover:bg-slate-50 transition-colors">
              About Us
            </Link>

            {/* Services accordion */}
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-left text-sm font-semibold text-[#0F1E5C] hover:bg-slate-50 transition-colors"
              aria-expanded={servicesOpen}
            >
              Services
              <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.18 }}
                  className="overflow-hidden pl-3"
                >
                  {servicesNav.map((item) => {
                    const Icon = item.icon
                    return (
                      <Link key={item.href} to={item.href}
                        className="flex items-center gap-2.5 px-3 py-2 rounded-lg hover:bg-[#EFF6FF] transition-colors">
                        <Icon className="w-4 h-4 text-[#1A56DB] flex-shrink-0" strokeWidth={1.8} />
                        <span className="text-sm font-medium text-[#0F1E5C]">{item.label}</span>
                        <ChevronRight className="w-3 h-3 text-slate-300 ml-auto" />
                      </Link>
                    )
                  })}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Partner, Developers, Contact */}
            {mainNavItems.map((item) => (
              <Link key={item.href} to={item.href}
                className="flex items-center px-3 py-2.5 rounded-lg text-sm font-semibold text-[#0F1E5C] hover:bg-slate-50 transition-colors">
                {item.label}
              </Link>
            ))}

            <div className="pt-3 pb-1 border-t border-slate-100 mt-2">
              <Link to="/contact" className="block w-full text-center py-2.5 rounded-lg text-sm font-bold text-white bg-[#1A56DB] hover:bg-[#1648C8] transition-colors">
                Get Started
              </Link>
            </div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const location = useLocation()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // Close everything on every route change (fires even for same-path clicks via key below)
  useEffect(() => {
    setMobileOpen(false)
    setServicesOpen(false)
  }, [location.pathname])

  // Close the dropdown when clicking anywhere outside it
  useEffect(() => {
    if (!servicesOpen) return
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false)
      }
    }
    // pointerdown catches the interaction before click; only active while open
    document.addEventListener('pointerdown', handleClickOutside)
    return () => document.removeEventListener('pointerdown', handleClickOutside)
  }, [servicesOpen])

  const isActive = (href: string) => location.pathname === href
  // Services is "active" when on any service page
  const servicesActive = servicesNav.some((s) => s.href === location.pathname)

  const linkClass = (active: boolean) =>
    `relative px-3.5 py-2 rounded-lg text-sm font-medium transition-colors
     ${active
       ? 'text-[#1A56DB] font-semibold after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:bg-[#1A56DB] after:rounded-full'
       : 'text-slate-600 hover:text-[#0F1E5C] hover:bg-slate-50'}`

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200
      ${scrolled
        ? 'bg-white/96 backdrop-blur-sm shadow-[0_1px_0_rgba(0,0,0,0.06)]'
        : 'bg-white/95 backdrop-blur-sm'
      }`}>
      <div className="container-wide">
        <div className="flex items-center justify-between h-14">
          <Logo />

          {/* Desktop nav — Home · About · Services · Partner · Developers · Contact */}
          <nav className="hidden lg:flex items-center gap-0.5" aria-label="Main navigation">
            <Link to="/" className={linkClass(isActive('/'))}>Home</Link>
            <Link to="/about" className={linkClass(isActive('/about'))}>About Us</Link>

            {/* Services dropdown */}
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                onKeyDown={(e) => e.key === 'Escape' && setServicesOpen(false)}
                aria-expanded={servicesOpen}
                aria-haspopup="true"
                className={`flex items-center gap-1 px-3.5 py-2 rounded-lg text-sm font-medium transition-colors
                  ${servicesOpen || servicesActive
                    ? 'bg-[#EFF6FF] text-[#1A56DB]'
                    : 'text-slate-600 hover:text-[#0F1E5C] hover:bg-slate-50'}`}
              >
                Services
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} strokeWidth={2.5} />
              </button>
              <ServicesDropdown open={servicesOpen} onClose={() => setServicesOpen(false)} />
            </div>

            {mainNavItems.map((item) => (
              <Link key={item.href} to={item.href} className={linkClass(isActive(item.href))}>
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center">
            <Link to="/contact" className="text-sm font-bold text-white bg-[#1A56DB] hover:bg-[#1648C8] px-5 py-2.5 rounded-lg transition-colors shadow-sm">
              Get Started
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-[#1A56DB]"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-5 h-5" strokeWidth={2} /> : <Menu className="w-5 h-5" strokeWidth={2} />}
          </button>
        </div>
      </div>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  )
}
