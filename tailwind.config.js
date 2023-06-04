/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "460px",
        exs: "400px",
      },
      colors: {
        main: "#090913",
        dark: "#363c44",
        primary: "#3EAF9B",
        "cl-left": "#43AF9B",
        "cl-right": "#004B3D",
        "light-gray": "#DFDEDA",
        "dim-gray": "#ABA8A5",
        mail: "#F4F5F7",
      },
      backgroundImage: {
        map: "../images/map.svg",
      },
      fontFamily: {
        codePro: "Code Pro regular",
        codeProLight: "Code Pro light",
        codeProBold: "Code Pro bold",
        Montserrat: "Montserrat",
      },
      keyframes: {},
      animation: {},
    },
  },
  plugins: [],
  fontDisplay: {},
};
