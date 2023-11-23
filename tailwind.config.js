/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
};
