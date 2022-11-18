/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      Roboto: '"Roboto"',
    },
    extend: {
      backgroundImage: {
        bg1: "url('https://preview.colorlib.com/theme/academia/images/bg_1.jpg.webp')",
        bg2: "url('./assets/bg_3.jpg.webp')",
      },
    },
  },
  plugins: [],
};