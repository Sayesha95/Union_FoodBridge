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
          dark: '#0a0f0a',
          card: '#141a14',
          border: '#1f2b1f',
          green: '#16a34a',
          lightGreen: '#22c55e',
          dimGreen: 'rgba(22, 163, 74, 0.12)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
