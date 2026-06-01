/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        navy: {
          800: '#1E2538',
          900: '#0B132B',
          950: '#060B18',
        },
        slate: {
          750: '#1E293B',
          800: '#111827',
          900: '#0F172A',
        },
        forest: {
          400: '#22C55E',
          500: '#15803D',
          600: '#166534',
          700: '#14532D',
          950: '#052E16',
        }
      }
    },
  },
  plugins: [],
}