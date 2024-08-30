import { green, yellow } from "@mui/material/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        HoverBrown: "#3f0301",
        brown: "#481210",
        brown1: "#714818",
        Lbrown: "#BC8D48",
        Lbrown1: "#efebd6",
        Lbrown2: "#F7F5EA",
        yellow: "#F1C232",
        green: "#BC8D48",
        gradient:
          "linear-gradient(135deg,rgba(255, 255, 255, 1) 20%,#f8dd9d 77%)",
      },
    },
    fontFamily: {
      sans: ["Kanit"],
    },
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
      "100%": "100%",
    },
  },
  plugins: [require("daisyui")],
};
