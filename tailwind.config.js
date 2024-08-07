/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brown: "#481210",
        brown1: "#683423",
        Lbrown: "#f8dd9d",
        gradient:
          "linear-gradient(135deg,rgba(255, 255, 255, 1) 20%,#f8dd9d 77%)",
      },
    },
    fontFamily: {
      sans: ["Kanit"],
    },
  },
  plugins: [require("daisyui")],
};
