/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      keyframes: {
        pulse: {
          '0%, 100%': {  opacity: 1 },
          '50%': { opacity: .5 },
        },
      },
      animation: {
        pulseCustom: "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      colors: {
        primary: "#181b20",
        secondary: "#191919",
        greenCl: "#34bb6e",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
      },
      backgroundImage: {
        'card-pattern': "url('https://bttis.s3.amazonaws.com/duotone.png')",
        'cidadao': "url('./src/assets/cidadao.jpg')",
      }
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