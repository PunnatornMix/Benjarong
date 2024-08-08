import { colors } from "@mui/material";
import React, { useEffect } from "react";

function Button({ className, color, outline }) {
  // const HoverColor = colors == "brown" ? "hover:bg-brown1" : "";
  function HoverColor(color, outline) {
    if (color == "brown" && outline !== "outline") {
      return `hover:bg-${color} border-${color} bg-${color}1 text-white`;
    }
  }

  function Outline(color, outline) {
    if (outline == "outline") {
      return `btn-outline  bg-transparent text-${color} hover:bg-${color} hover:text-white`;
    }
  }

  const lang = localStorage.getItem("i18nextLng");
  return (
    <button
      className={`btn rounded-3xl w-32 min-h-10 h-10  ${HoverColor(
        color,
        outline
      )}  ${Outline(color, outline)} ${className}`}
    >
      <p className={` `}>{lang === "th" ? "สั่งซื้อ" : "Shop Now"}</p>
    </button>
  );
}

export default Button;
