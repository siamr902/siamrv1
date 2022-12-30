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
        "brush": ['Nanum Brush Script'],
        "ceviche": ['Ceviche One'],
        "bubble": ['Londrina Outline'],
        "ui": ["Josefin Sans"],
        "headline": ["Ubuntu"],
      },
      boxShadow: {
        "dim": "rgba(0, 0, 0, 0.18) 0px 2px 4px 0px, rgba(0, 0, 0, 0.5) 0px 2px 16px 0px"
      },
      colors: {
        "skyblue": "#12c2e9",
        "skypurple": "#c471ed",
        "darkred": "#c31432",
        "darkpurple": "#240b36",
      }
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
