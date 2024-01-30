/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '280px',
      // => @media (min-width: 280px) { ... }
      'sm': '400px',
      // => @media (min-width: 400px) { ... }

      'md': '770px',
      // => @media (min-width: 640px) { ... }

      'xl': '1024px',
      // => @media (min-width: 1024px) { ... }

      '2xl': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: []
}
