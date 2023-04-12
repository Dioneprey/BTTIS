/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#181b20",
        secondary: "#191919",
        greenCl: "#34bb6e",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      sM: "890px",
      ms: "950px",
      md: "1060px",
      lg: "1200px",
      lG: "1300px",
      xl: "1500px",
    },
  },
  plugins: [],
};