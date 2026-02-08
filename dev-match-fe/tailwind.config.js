/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      keyframes: {
        'scroll-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-50%))' },
        },
        'scroll-right': {
          '0%': { transform: 'translateX(calc(-50%))' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        'scroll-left': 'scroll-left 25s linear infinite',
        'scroll-right': 'scroll-right 25s linear infinite',
      },
    },
  },
  plugins: [],
}

