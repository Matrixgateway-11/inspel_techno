import { ArrowLeft, Home } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'

export default function NotFound() {
  const navigate = useNavigate()

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center p-6">
      <div className="text-center max-w-md">
        <div className="text-9xl font-black text-[#DBEAFE] mb-4 leading-none select-none">404</div>
        <h1 className="text-2xl font-bold text-[#0F1E5C] mb-3">Page Not Found</h1>
        <p className="text-slate-500 mb-8 leading-relaxed">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button onClick={() => navigate(-1)}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border-2 border-slate-200 text-slate-600 font-semibold hover:bg-slate-50 transition-colors text-sm">
            <ArrowLeft className="w-4 h-4" /> Go Back
          </button>
          <Link to="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#1A56DB] text-white font-semibold hover:bg-[#1A56DB]-light transition-colors shadow-md text-sm">
            <Home className="w-4 h-4" /> Return Home
          </Link>
        </div>
      </div>
    </div>
  )
}
