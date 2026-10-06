/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#1A56DB',
          700: '#1648C8',
          800: '#1E3A8A',
          900: '#1E3A8A',
          950: '#0F1E5C',
        },
        navy: {
          DEFAULT: '#0F1E5C',
          dark: '#090F2E',
          light: '#1E3A8A',
        },
        electric: {
          DEFAULT: '#1A56DB',
          light: '#2563EB',
          bright: '#60A5FA',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #0F1E5C 0%, #1D4ED8 50%, #1A56DB 100%)',
        'gradient-hero':  'linear-gradient(135deg, #020A1F 0%, #040E2B 50%, #1A56DB 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'slide-up': 'slideUp 0.5s ease-out',
        'fade-in': 'fadeIn 0.4s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      boxShadow: {
        'card':       '0 1px 3px rgba(15,30,92,0.06), 0 4px 16px rgba(15,30,92,0.04)',
        'card-hover': '0 4px 24px rgba(26,86,219,0.12), 0 1px 3px rgba(15,30,92,0.08)',
        'blue-glow':  '0 0 32px rgba(26,86,219,0.2)',
      },
    },
  },
  plugins: [],
}
