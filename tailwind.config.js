import { green } from "@mui/material/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        HoverBrown: "#3f0301",
        brown: "#481210",
        brown1: "#683423",
        Lbrown: "#f8dd9d",
        Lbrown1: "#fcf4e0",
        Lbrown2: "#fcfaf7",
        green: "#61a402",
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
