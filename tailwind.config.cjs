/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "33FCFF",
        secundary: {
          100: "#293131",
          900: "#070F0F",
        },
      },
    },
  },
  plugins: [],
};
