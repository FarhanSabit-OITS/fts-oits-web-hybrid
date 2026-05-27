/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        swiss: {
          black: '#0A0A0A',
          white: '#F5F5F7',
          muted: '#88888F',
          accent: '#2563EB',
        },
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.7s ease-out forwards',
        'subtle-bounce': 'subtleBounce 0.6s ease-in-out infinite',
        'slow-pulse': 'slowPulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'text-glow': 'textGlow 3s ease-in-out infinite alternate',
        'blink': 'blink 1s step-end infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        subtleBounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-3px)' },
        },
        slowPulse: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        textGlow: {
          '0%': { textShadow: '0 0 10px rgba(255,255,255,0.1)' },
          '100%': {
            textShadow: '0 0 25px rgba(37,99,235,0.6), 0 0 10px rgba(37,99,235,0.3)',
          },
        },
        blink: {
          'from, to': { borderColor: 'transparent' },
          '50%': { borderColor: '#2563EB' },
        },
      },
      boxShadow: {
        'premium-glow': '0 0 20px rgba(37,99,235,0.4)',
        'card-hover': '0 20px 40px -15px rgba(0,0,0,0.7)',
      },
    }
  },
  plugins: [],
}