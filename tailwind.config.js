/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./utils/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      dropShadow: {
        "hollow": "6px 6px 0px rgba(0,0,0, 0.2)",
      },
      fontFamily: {
        "courgette": ['Courgette'],
        "brush": ['Nanum Brush Script'],
        "ceviche": ['Ceviche One']
      },
      boxShadow: {
        "dim": "rgba(0, 0, 0, 0.18) 0px 2px 4px 0px, rgba(0, 0, 0, 0.5) 0px 2px 16px 0px;"
      }
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
