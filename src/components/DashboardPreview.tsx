import { motion } from 'framer-motion'
import { TrendingUp, CheckCircle, Clock, ArrowUpRight, Smartphone, CreditCard, Wallet, type LucideIcon } from 'lucide-react'

const transactions = [
  { method: 'UPI', amount: '₹2,499', status: 'success', name: 'Priya S.', time: '2m ago' },
  { method: 'Card', amount: '₹15,000', status: 'success', name: 'Rahul M.', time: '5m ago' },
  { method: 'Wallet', amount: '₹850', status: 'success', name: 'Aisha K.', time: '8m ago' },
  { method: 'UPI', amount: '₹7,200', status: 'pending', name: 'Dev P.', time: '12m ago' },
]

const methodIcons: Record<string, LucideIcon> = {
  UPI: Smartphone,
  Card: CreditCard,
  Wallet,
}

export default function DashboardPreview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.25 }}
      className="relative"
    >
      {/* Outer glow */}
      <div className="absolute -inset-3 bg-[#1A56DB]/15 rounded-2xl blur-xl pointer-events-none" />

      <motion.div
        animate={{ y: [-3, 3, -3] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="relative bg-[#0D1524]/90 backdrop-blur-sm rounded-2xl border border-white/[0.08]
                   shadow-[0_24px_80px_rgba(0,0,0,0.4)] max-w-[320px] w-full overflow-hidden"
      >
        {/* Header */}
        <div className="bg-[#1A56DB] px-5 py-4">
          <div className="flex items-center justify-between mb-2.5">
            <div>
              <p className="text-white/60 text-[10px] font-medium uppercase tracking-wider mb-0.5">Today's Revenue</p>
              <p className="text-white text-2xl font-extrabold tracking-[-0.04em]">₹4,82,350</p>
            </div>
            <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center">
              <TrendingUp className="w-4.5 h-4.5 text-white" strokeWidth={2} />
            </div>
          </div>
          <div className="flex items-center gap-1">
            <ArrowUpRight className="w-3 h-3 text-emerald-300" strokeWidth={2.5} />
            <span className="text-emerald-300 text-xs font-semibold">+18.4% vs yesterday</span>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 divide-x divide-white/[0.06] border-b border-white/[0.06]">
          {[
            { label: 'Transactions', value: '1,247', color: 'text-white' },
            { label: 'Success Rate', value: '98.7%', color: 'text-emerald-400' },
            { label: 'Settlements', value: '342', color: 'text-[#60A5FA]' },
          ].map(({ label, value, color }) => (
            <div key={label} className="flex flex-col items-center py-3 px-2">
              <span className={`text-base font-extrabold tracking-[-0.03em] ${color}`}>{value}</span>
              <span className="text-[10px] text-white/35 text-center mt-0.5">{label}</span>
            </div>
          ))}
        </div>

        {/* Method bars */}
        <div className="px-5 py-3.5 border-b border-white/[0.06]">
          <p className="text-[10px] font-semibold text-white/35 uppercase tracking-wider mb-2.5">Payment Methods</p>
          <div className="space-y-2">
            {[
              { label: 'UPI', pct: 58, color: 'bg-[#1A56DB]' },
              { label: 'Cards', pct: 24, color: 'bg-[#3B82F6]' },
              { label: 'Wallets', pct: 12, color: 'bg-[#60A5FA]' },
              { label: 'Other', pct: 6, color: 'bg-white/20' },
            ].map(({ label, pct, color }) => (
              <div key={label} className="flex items-center gap-2">
                <span className="text-[10px] text-white/40 w-10 flex-shrink-0">{label}</span>
                <div className="flex-1 h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${pct}%` }}
                    transition={{ duration: 0.9, delay: 0.7, ease: 'easeOut' }}
                    className={`h-full ${color} rounded-full`}
                  />
                </div>
                <span className="text-[10px] text-white/35 w-6 text-right flex-shrink-0">{pct}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Transactions */}
        <div className="px-5 pt-3.5 pb-4">
          <p className="text-[10px] font-semibold text-white/35 uppercase tracking-wider mb-2.5">Recent</p>
          <div className="space-y-2.5">
            {transactions.map((tx, i) => {
              const Icon = methodIcons[tx.method] || CreditCard
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 + i * 0.08 }}
                  className="flex items-center gap-2.5"
                >
                  <div className="w-7 h-7 bg-white/[0.06] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-3.5 h-3.5 text-[#60A5FA]" strokeWidth={1.8} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-white/80 truncate tracking-[-0.01em]">{tx.name}</p>
                    <p className="text-[10px] text-white/30">{tx.method} · {tx.time}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-bold text-white/80">{tx.amount}</p>
                    <div className="flex items-center gap-0.5 justify-end">
                      {tx.status === 'success'
                        ? <CheckCircle className="w-2.5 h-2.5 text-emerald-400" />
                        : <Clock className="w-2.5 h-2.5 text-amber-400" />}
                      <span className={`text-[10px] ${tx.status === 'success' ? 'text-emerald-400' : 'text-amber-400'}`}>
                        {tx.status}
                      </span>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
