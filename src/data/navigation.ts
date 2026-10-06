import {
  CreditCard, Link2, LayoutTemplate, ArrowRightLeft,
  Wallet, GitBranch, FileText, Layers,
  type LucideIcon,
} from 'lucide-react'

export interface NavItem {
  label: string
  href: string
}

export interface ServiceNavItem {
  label: string
  href: string
  description: string
  icon: LucideIcon
}

/* Ordered service list shown in the Services dropdown */
export const servicesNav: ServiceNavItem[] = [
  { label: 'Payments',        href: '/payment',          description: 'All payment collection products',          icon: Layers },
  { label: 'Payouts',         href: '/payouts',          description: 'Send money to vendors & customers',        icon: ArrowRightLeft },
  { label: 'Wallets',         href: '/wallets',          description: 'Manage digital balances & flows',          icon: Wallet },
  { label: 'Payment Gateway', href: '/payment-gateway',  description: 'Accept cards, UPI, wallets & netbanking',   icon: CreditCard },
  { label: 'Payment Link',    href: '/payment-links',    description: 'Share payment links without a website',     icon: Link2 },
  { label: 'Payment Pages',   href: '/payment-pages',    description: 'Custom-branded payment pages',              icon: LayoutTemplate },
  { label: 'Route',           href: '/route',            description: 'Intelligent payment routing',               icon: GitBranch },
  { label: 'Invoice',         href: '/invoice',          description: 'Digital invoicing & collection',            icon: FileText },
]

/* Main nav — Home and Services are rendered separately in the Navbar.
   These are the plain links that sit after the Services dropdown. */
export const mainNavItems: NavItem[] = [
  { label: 'Partner', href: '/partner' },
  { label: 'Developers', href: '/developers' },
  { label: 'Contact', href: '/contact' },
]
