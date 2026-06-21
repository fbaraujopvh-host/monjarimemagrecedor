/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fff1f2',
          100: '#ffe1e3',
          400: '#ff6b81',
          500: '#ff3b58',
          600: '#e8203f',
          700: '#c01833',
        },
        ink: {
          900: '#0b0e14',
          800: '#11151d',
          700: '#1a202c',
        },
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(255,59,88,0.55)' },
          '50%': { boxShadow: '0 0 0 14px rgba(255,59,88,0)' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp .6s ease-out forwards',
        pulseGlow: 'pulseGlow 1.8s infinite',
      },
    },
  },
  plugins: [],
};
