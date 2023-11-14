/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "light-blue": "#31c3bd",
      "light-blue-hover": "#65e9e4",
      "light-yellow": "#f2b137",
      "light-yellow-hover": "#ffc860",
      "dark-navy": "#1a2a33",
      "semi-dark-navy": "#1f3641",
      silver: "#a8bfc9",
      "silver-hover": "#dbe8ed",
    },
    fontFamily: {
      outfit: ["Outfit", "sans-serif"],
    },
    fontSize: {
      xs: "10px",
      sm: "12px",
      base: "14px",
      lg: "16px",
      xl: "20px",
      "2xl": "24px",
      "3xl": "40px",
    },
    extend: {},
  },
  plugins: [],
};
