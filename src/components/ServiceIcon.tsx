import {
  CreditCard, ArrowsLeftRight, Wallet, LinkSimple, Browsers,
  GitBranch, Receipt, Stack, ShieldCheck, Lightning, Globe,
  UsersThree, TrendUp, DeviceMobile, Handshake, CurrencyInr,
  ArrowClockwise, ListChecks, Briefcase, Cube, Coins, Ticket,
  Storefront, GameController, TestTube, Buildings, Bank, Timer,
  ChatCircleDots, Code, Envelope, Phone, Palette, Rocket,
  MagnifyingGlass, DownloadSimple, Key, ThumbsUp, FileText,
  SealCheck, Cardholder,
  type Icon as PhosphorIcon,
} from '@phosphor-icons/react'

/* Central registry — maps a key to a Phosphor icon.
   Change an icon here and it updates everywhere it's used. */
export const serviceIcons: Record<string, PhosphorIcon> = {
  // Core services
  'payment-gateway': CreditCard,
  'payments': Stack,
  'payouts': ArrowsLeftRight,
  'wallets': Wallet,
  'payment-links': LinkSimple,
  'payment-pages': Browsers,
  'route': GitBranch,
  'invoice': Receipt,

  // "Why choose us" / capabilities
  'security': ShieldCheck,
  'speed': Lightning,
  'methods': Globe,
  'business': UsersThree,
  'scalable': TrendUp,
  'mobile': DeviceMobile,

  // Payments page
  'options': Stack,
  'quick-checkout': Lightning,
  'invoice-pay': Receipt,
  'redo': ArrowClockwise,
  'payout-links': GitBranch,
  'emi': Cardholder,

  // Wallets page
  'no-charge': SealCheck,
  'interoperable': ArrowClockwise,

  // Partner page
  'revenue': CurrencyInr,
  'growth': TrendUp,
  'fast-integration': Lightning,
  'reliable': ShieldCheck,
  'handshake': Handshake,

  // Payment Pages
  'free-collection': Briefcase,
  'sell-products': Cube,
  'donations': Coins,
  'events': Ticket,
  'listings': DownloadSimple,
  'purchase-control': Key,
  'reporting': ThumbsUp,
  'track-payments': MagnifyingGlass,
  'custom-fields': ListChecks,
  'custom-branded': Palette,
  'memorable-urls': LinkSimple,
  'get-online': Rocket,
  'no-code': Code,

  // Payouts page use cases
  'corporate-cards': CreditCard,
  'penny-testing': TestTube,
  'rental': Buildings,
  'ecommerce': Storefront,
  'gaming': GameController,

  // Payment Gateway
  'gateway-platform': DeviceMobile,
  'retry': ListChecks,
  'collection': Bank,
  'settlement': Handshake,

  // Contact hub
  'email': Envelope,
  'phone': Phone,
  'chat': ChatCircleDots,
  'developers': Code,

  // Route
  'linked-accounts': LinkSimple,
  'transfer': ArrowsLeftRight,

  // misc
  'file': FileText,
  'timer': Timer,
}

interface ServiceIconBadgeProps {
  name: keyof typeof serviceIcons | string
  size?: number
  /**
   * gradient — blue gradient tile, white duotone icon
   * soft     — light-blue tile, blue duotone icon
   * naked    — no tile, larger duotone icon in brand blue (premium, reference style)
   */
  variant?: 'gradient' | 'soft' | 'naked'
  className?: string
}

export default function ServiceIconBadge({
  name, size = 26, variant = 'naked', className = '',
}: ServiceIconBadgeProps) {
  const Icon = serviceIcons[name] ?? Stack

  // Naked — icon sits free on the card, no background tile (reference look)
  if (variant === 'naked') {
    return <Icon size={size} weight="duotone" className={`text-[#1A56DB] ${className}`} />
  }

  const tile =
    variant === 'gradient'
      ? 'bg-gradient-to-br from-[#1A56DB] to-[#0F1E5C] shadow-[0_8px_20px_rgba(26,86,219,0.28)]'
      : 'bg-[#EFF6FF]'

  const iconColor = variant === 'gradient' ? 'text-white' : 'text-[#1A56DB]'

  return (
    <span className={`inline-flex items-center justify-center rounded-2xl ${tile} ${className}`}>
      <Icon size={size} weight="duotone" className={iconColor} />
    </span>
  )
}
