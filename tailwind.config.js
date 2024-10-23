/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        backgroundGrey: "#202124",
      },
    },
  },
  plugins: [],
};
