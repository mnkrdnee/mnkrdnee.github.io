/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Outfit', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        navy: {
          950: '#060d1f',
          900: '#0c1828',
          800: '#0f2040',
          700: '#132648',
        },
        amber: {
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
        },
        cyan: {
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
        },
      },
      animation: {
        'orb1': 'orb1 14s ease-in-out infinite',
        'orb2': 'orb2 18s ease-in-out infinite',
        'fadeUp': 'fadeUp 0.7s ease both',
        'blink': 'blink 1.1s step-end infinite',
        'shimmer': 'shimmer 4s linear infinite',
      },
      keyframes: {
        orb1: {
          '0%,100%': { transform: 'translate(0,0) scale(1)' },
          '33%': { transform: 'translate(60px,-80px) scale(1.1)' },
          '66%': { transform: 'translate(-40px,40px) scale(0.9)' },
        },
        orb2: {
          '0%,100%': { transform: 'translate(0,0) scale(1)' },
          '33%': { transform: 'translate(-50px,60px) scale(0.95)' },
          '66%': { transform: 'translate(70px,-30px) scale(1.08)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(40px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        blink: {
          '0%,100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        shimmer: {
          from: { backgroundPosition: '-200% center' },
          to: { backgroundPosition: '200% center' },
        },
      },
    },
  },
  plugins: [],
}
