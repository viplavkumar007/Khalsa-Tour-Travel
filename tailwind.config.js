/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#e8ecf4',
          100: '#c5cfe2',
          200: '#9fb0ce',
          300: '#7891ba',
          400: '#587aab',
          500: '#38639c',
          600: '#2a4f84',
          700: '#1a3866',
          800: '#0e2448',
          900: '#061530',
          950: '#030c1e',
        },
        gold: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['DM Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #fbbf24 0%, #d97706 50%, #fbbf24 100%)',
        'navy-gradient': 'linear-gradient(135deg, #061530 0%, #1a3866 50%, #0e2448 100%)',
        'hero-gradient': 'linear-gradient(135deg, rgba(6,21,48,0.92) 0%, rgba(26,56,102,0.85) 50%, rgba(14,36,72,0.9) 100%)',
      },
      boxShadow: {
        'gold': '0 4px 24px rgba(251,191,36,0.35)',
        'gold-lg': '0 8px 40px rgba(251,191,36,0.45)',
        'navy': '0 4px 24px rgba(6,21,48,0.35)',
        'card': '0 2px 16px rgba(6,21,48,0.10), 0 1px 4px rgba(6,21,48,0.06)',
        'card-hover': '0 12px 40px rgba(6,21,48,0.18), 0 4px 12px rgba(6,21,48,0.10)',
      },
      animation: {
        'pulse-gold': 'pulse-gold 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        'pulse-gold': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(251,191,36,0.4)' },
          '50%': { boxShadow: '0 0 0 12px rgba(251,191,36,0)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
