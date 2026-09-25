// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#f7f6fb',
        surface: '#ffffff',
        ink: '#14141f',
        primary: '#ef4444',
        secondary: '#ea580c',
        accent: '#e11d48',
        muted: '#6b7280'
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif']
      },
      backdropBlur: {
        xs: '2px'
      },
      boxShadow: {
        glow: '0 0 40px rgba(239, 68, 68, 0.35)',
        'glow-cyan': '0 0 40px rgba(249, 115, 22, 0.35)'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' }
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        spinSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        fadeUp: 'fadeUp 0.8s ease-out forwards',
        'spin-slow': 'spinSlow 14s linear infinite'
      }
    }
  },
  plugins: []
}
