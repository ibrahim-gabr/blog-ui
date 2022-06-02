module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        theme: {
          primary: "#5DD5C4",
          secondary: "#FF9F4B",
          black: "#202221",
          "light-black": "#404343",         
          "primary-red": "#FE4668",
          "primary-magenta": "#A53C92",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
