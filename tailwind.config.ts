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
      },
      colors: {
        primary: "hsl(var(--color-primary) / <alpha-value>)",
        secondary: "hsl(var(--color-secondary) / <alpha-value>)",
        hov: "hsl(var(--color-hover1) / <alpha-value>)",
        accent: {
          blue1: "hsl(var(--color-accent-blue1) / <alpha-value>)",
          blue2: "hsl(var(--color-accent-blue2) / <alpha-value>)",
          grey1: "hsl(var(--color-accent-grey1) / <alpha-value>)",
        },
      }
    },
  },
  plugins: [],
});
