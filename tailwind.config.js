/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#FFFFFF",
        secondary: "#4453C2",
        tertiary: "#2e3884",
        tertiaryDark: "#1d2352",
        secondaryVariant: "#0918CB",
        "black-100": "#100d25",
        "black-200": "#161a3e",
        "grey-100": "#DEDCDD",
        "grey-200": "#5B5D67",
        "white-100": "#5B5D67",
        "white-200": "#878fce",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};
