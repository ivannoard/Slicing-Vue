// tailwind.config.js
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#A80038",
        secondary: "#EEEEEE",
        dark: "#2B2024",
      },
      fontFamily: {
        logo: ["Marck Script", "serif"],
        poppins: ["Poppins", "serif"],
      },
      backgroundImage: {
        authBackground: "url(../src/assets/images/bg-auth.png)",
        forgotBackground: "url(../src/assets/images/forgot-bg.png)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
