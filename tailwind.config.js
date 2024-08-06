/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brown: "#481210",
      },
    },
  },
  fontFamily: {
    sans: ["Kanit"],
  },
  plugins: [require("daisyui")],
};
