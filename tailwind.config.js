/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "340px",

      md: "768px",

      lg: "1024px",

      xl: "1280px",

      xxl: "1380px",

      "2xl": "1536px",
    },
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
      montserratalt: ["Montserrat Alternates", "sans-serif"],
      plusjakarta: ["Plus Jakarta Sans", "sans-serif"],
      archivo: ["Archivo", "sans-serif"],
      oswald: ["Oswald", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        customPink: "#C2278E",
      },
    },
  },

  plugins: [],
};
