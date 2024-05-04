/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        victoria: {
          50: "#f3f5fb",
          100: "#e5e6f4",
          200: "#d0d4ed",
          300: "#b0b8e0",
          400: "#8a93d0",
          500: "#6e74c3",
          600: "#5b5bb5",
          700: "#5450a5",
          800: "#4c478a",
          900: "#3f3c6c",
          950: "#2a2843",
        },
      },
    },
  },
  plugins: [],
};
