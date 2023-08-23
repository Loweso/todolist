/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        tasklistgrey: "#d9d9d9",
        tlhovergrey: "#A9A9A9",
        navbarcolor: "#d594ec",
        todotask: "#BCB8B8",
        inprogresstask: "#EFC17D",
        inprogresshover: "#C29D65",
        finishedtask: "#95EA78",
        finishedhover: "#82CD69",
      },
    },
  },
  plugins: [],
};
