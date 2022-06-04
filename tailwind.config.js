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
          gray: "#808686",
          "lily-white":"#ECEEED",
          "light-gray": "#F4F4F4",
          "primary-magenta": "#A53C92",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
