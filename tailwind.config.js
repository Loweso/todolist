/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        tasklistgrey: "#d9d9d9",
        tlhovergrey: "#A9A9A9",
        navbarcolor: "#d594ec",
      },
    },
  },
  plugins: [],
};
