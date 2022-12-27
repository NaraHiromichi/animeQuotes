/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      quote: ["Spectral", "serif"],
      secondaryQuote: ["Spirax", "cursive"],
      display: ["Noto Serif", "serif"],
    },
    extend: {
      screens: {
        sm: "460px",
      },
    },
  },
  plugins: [],
};
