/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Nunito"', 'sans-serif'],
        mono: ['"Courier New"', 'monospace'],
      },
      colors: {
        orange: {
          400: '#f5a623',
          500: '#e8961a',
        },
        'dark-bg': '#1a1a2e',
        'dark-card': '#16213e',
        'dark-border': '#0f3460',
      },
      animation: {
        wave: 'wave 4s ease-in-out infinite',
        wave2: 'wave2 5s ease-in-out infinite',
        wave3: 'wave3 6s ease-in-out infinite',
        float: 'float 3s ease-in-out infinite',
        'bounce-star': 'bounceStar 2s ease-in-out infinite',
      },
      keyframes: {
        wave: {
          '0%, 100%': { transform: 'translateX(0) scaleY(1)' },
          '50%': { transform: 'translateX(-3%) scaleY(1.05)' },
        },
        wave2: {
          '0%, 100%': { transform: 'translateX(0) scaleY(1)' },
          '50%': { transform: 'translateX(3%) scaleY(0.95)' },
        },
        wave3: {
          '0%, 100%': { transform: 'translateX(-2%) scaleY(1.02)' },
          '50%': { transform: 'translateX(2%) scaleY(0.98)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(-5deg)' },
          '50%': { transform: 'translateY(-8px) rotate(5deg)' },
        },
        bounceStar: {
          '0%, 100%': { transform: 'translateY(0) rotate(-5deg) scale(1)' },
          '50%': { transform: 'translateY(-6px) rotate(5deg) scale(1.05)' },
        },
      },
    },
  },
  plugins: [],
}
