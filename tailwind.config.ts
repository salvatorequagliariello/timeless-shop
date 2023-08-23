const { withAnimations } = require('animated-tailwindcss')

module.exports = withAnimations({
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        barrels: ['TT Barrels'],
        futura: ["Futura PT"]
      }
    },
  },
  plugins: [],
});
