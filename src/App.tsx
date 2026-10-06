import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'

// Lazy-loaded pages for performance
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Partner = lazy(() => import('./pages/Partner'))
const Developers = lazy(() => import('./pages/Developers'))
const Contact = lazy(() => import('./pages/Contact'))
const Payments = lazy(() => import('./pages/Payments'))
const PaymentGateway = lazy(() => import('./pages/PaymentGateway'))
const PaymentLinks = lazy(() => import('./pages/PaymentLinks'))
const PaymentPages = lazy(() => import('./pages/PaymentPages'))
const Payouts = lazy(() => import('./pages/Payouts'))
const Wallets = lazy(() => import('./pages/Wallets'))

const RoutePage = lazy(() => import('./pages/Route'))
const Invoice = lazy(() => import('./pages/Invoice'))
const NotFound = lazy(() => import('./pages/NotFound'))

function PageLoader() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="flex items-center gap-3 text-slate-400">
        <svg className="animate-spin h-5 w-5 text-[#1A56DB]" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
        <span className="text-sm font-medium">Loading...</span>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="partner" element={<Partner />} />
            <Route path="developers" element={<Developers />} />
            <Route path="contact" element={<Contact />} />

            {/* Payment routes */}
            <Route path="payment" element={<Payments />} />
            <Route path="payment-gateway" element={<PaymentGateway />} />
            <Route path="payment-links" element={<PaymentLinks />} />
            <Route path="payment-pages" element={<PaymentPages />} />
            <Route path="payouts" element={<Payouts />} />
            <Route path="wallets" element={<Wallets />} />

            <Route path="route" element={<RoutePage />} />
            <Route path="invoice" element={<Invoice />} />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
