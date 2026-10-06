import {
  CreditCard, Link2, LayoutTemplate, ArrowRightLeft,
  Wallet, GitBranch, FileText,
  type LucideIcon,
} from 'lucide-react'

export interface Service {
  id: string
  title: string
  description: string
  longDescription: string
  icon: LucideIcon
  href: string
  color: string
  features: string[]
}

export const services: Service[] = [
  {
    id: 'payment-gateway',
    title: 'Payment Gateway',
    description: 'Accept online payments through multiple payment methods with a single integration.',
    longDescription: 'Power your business with a robust payment gateway that supports all major payment methods. From cards and UPI to net banking and wallets — one integration covers it all.',
    icon: CreditCard,
    href: '/payment-gateway',
    color: 'text-blue-600',
    features: ['UPI, Cards, Net Banking, Wallets', 'Real-time payment tracking', 'Developer-friendly APIs', 'Detailed analytics dashboard'],
  },
  {
    id: 'payment-links',
    title: 'Payment Links',
    description: 'Create and share payment links without requiring a full website or checkout flow.',
    longDescription: 'Generate shareable payment links in seconds. Send via WhatsApp, SMS, or email. Customers pay without any extra setup on their end.',
    icon: Link2,
    href: '/payment-links',
    color: 'text-indigo-600',
    features: ['No website required', 'Share via any channel', 'Custom expiry dates', 'Track payments in real time'],
  },
  {
    id: 'payment-pages',
    title: 'Payment Pages',
    description: 'Build customizable, branded payment collection pages for any business need.',
    longDescription: 'Create beautiful, mobile-friendly payment pages with your own branding. Collect payments for events, products, services, or donations.',
    icon: LayoutTemplate,
    href: '/payment-pages',
    color: 'text-violet-600',
    features: ['Custom branding & design', 'Mobile-optimized checkout', 'Multiple payment methods', 'Easy payment tracking'],
  },
  {
    id: 'payouts',
    title: 'Payouts',
    description: 'Send money to customers, vendors, partners, and other recipients at scale.',
    longDescription: 'Disburse funds instantly to any bank account, UPI ID, or wallet. Handle bulk payouts for vendors, refunds, commissions, and more.',
    icon: ArrowRightLeft,
    href: '/payouts',
    color: 'text-emerald-600',
    features: ['Instant bank transfers', 'Bulk payout support', 'Multiple transfer modes', 'Real-time status tracking'],
  },
  {
    id: 'wallets',
    title: 'Wallets',
    description: 'Manage digital balances and payment-related flows for your platform.',
    longDescription: 'Offer wallet functionality to your users. Let them add money, withdraw, and transact seamlessly within your platform.',
    icon: Wallet,
    href: '/wallets',
    color: 'text-cyan-600',
    features: ['User wallet management', 'Add money & withdraw', 'Instant transfers', 'Transaction history'],
  },
  {
    id: 'route',
    title: 'Route',
    description: 'Enable intelligent payment routing and distribution across multiple accounts.',
    longDescription: 'Route payments to the right destination automatically. Split funds across vendors, partners, and accounts based on configurable rules.',
    icon: GitBranch,
    href: '/route',
    color: 'text-pink-600',
    features: ['Automatic fund splitting', 'Multi-destination routing', 'Rule-based distribution', 'Audit trail & reporting'],
  },
  {
    id: 'invoice',
    title: 'Invoice',
    description: 'Create, manage, and collect payments through digital invoices.',
    longDescription: 'Generate professional invoices with a built-in payment link. Track invoice status, send reminders, and manage receivables in one place.',
    icon: FileText,
    href: '/invoice',
    color: 'text-teal-600',
    features: ['Professional invoice creation', 'Integrated payment collection', 'Automated reminders', 'Status tracking & reporting'],
  },
]
