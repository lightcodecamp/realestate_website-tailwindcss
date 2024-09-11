/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      sm: "340px",
      md: "540px",
      lg: "768px",
      xl: "1180px"
    },
    extend: {
      colors: {
        firstcolor: "#A02334",
        secondcolor: "#000",
        secondcolorlight: "#0c0c0c",
        whitecolor: "#fff",
        blackcolor: "#000",
        graycolor: "#C4C4C450",
        paragraphcolor: "#000000B3"
      }
    },
    fontFamily: {
      Montserrat: ["Montserrat", "sans-serif"]
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "12px",
        md: "24px"
      }
    }
  },
  plugins: [],
}