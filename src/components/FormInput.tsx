import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
  required?: boolean
}

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
  error?: string
  required?: boolean
  rows?: number
}

export function FormInput({ label, error, required, id, ...props }: InputProps) {
  const inputId = id || label.toLowerCase().replace(/\s+/g, '-')
  return (
    <div className="space-y-1.5">
      <label htmlFor={inputId} className="block text-sm font-semibold text-slate-700">
        {label}{required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <input
        id={inputId}
        {...props}
        aria-describedby={error ? `${inputId}-error` : undefined}
        aria-invalid={!!error}
        className={`w-full px-4 py-3 rounded-xl border text-sm transition-all duration-150 bg-white
          focus:outline-none focus:ring-2 focus:ring-[#1A56DB] focus:ring-offset-0
          placeholder:text-slate-400
          ${error
            ? 'border-red-400 focus:ring-red-400'
            : 'border-slate-200 focus:border-[#1A56DB]'
          } ${props.className || ''}`}
      />
      {error && (
        <p id={`${inputId}-error`} role="alert" className="text-xs text-red-600 flex items-center gap-1">
          {error}
        </p>
      )}
    </div>
  )
}

export function FormTextarea({ label, error, required, id, rows = 4, ...props }: TextareaProps) {
  const inputId = id || label.toLowerCase().replace(/\s+/g, '-')
  return (
    <div className="space-y-1.5">
      <label htmlFor={inputId} className="block text-sm font-semibold text-slate-700">
        {label}{required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <textarea
        id={inputId}
        rows={rows}
        {...props}
        aria-describedby={error ? `${inputId}-error` : undefined}
        aria-invalid={!!error}
        className={`w-full px-4 py-3 rounded-xl border text-sm transition-all duration-150 bg-white resize-none
          focus:outline-none focus:ring-2 focus:ring-[#1A56DB] focus:ring-offset-0
          placeholder:text-slate-400
          ${error
            ? 'border-red-400 focus:ring-red-400'
            : 'border-slate-200 focus:border-[#1A56DB]'
          } ${props.className || ''}`}
      />
      {error && (
        <p id={`${inputId}-error`} role="alert" className="text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  )
}
