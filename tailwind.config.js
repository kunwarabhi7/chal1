/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'md': '375px',
        // => @media (min-width: 640px) { ... }
  
        'lg': '1440px',
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
}
