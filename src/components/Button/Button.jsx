// import React, { useEffect } from "react";

// function Button({ className, color, outline }) {
//   // const HoverColor = colors == "brown" ? "hover:bg-brown1" : "";
//   function HoverColor(color, outline) {
//     if (color && outline !== "outline") {
//       return `hover:bg-${color} border-${color} bg-${color}1 text-white`;
//     }
//   }

//   function Outline(color, outline) {
//     if (outline === "outline") {
//       return ` btn-outline  bg-transparent text-${color} hover:bg-${color} hover:text-white`;
//     }
//   }

//   const lang = localStorage.getItem("i18nextLng");
//   return (
//     <button
//       className={`btn rounded-3xl w-32 min-h-10 h-10  ${HoverColor(
//         color,
//         outline
//       )}  ${Outline(color, outline)} ${className}`}
//     >
//       <p className={` `}>{lang === "th" ? "สั่งซื้อ" : "Shop Now"}</p>
//     </button>
//   );
// }

// export default Button;
import React from "react";

function Button({ className, color, outline }) {
  const baseClasses = "btn rounded-3xl w-32 min-h-10 h-10";
  let colorClasses = "";

  if (outline) {
    colorClasses = `btn-outline bg-transparent text-${color} hover:bg-${color} hover:text-white`;
  } else {
    switch (color) {
      case "green":
        colorClasses = "hover:bg-green border-green bg-green text-white";
        break;
      case "brown":
        colorClasses = "hover:bg-brown border-brown bg-brown1 text-white";
        break;
      case "Lbrown":
        colorClasses = "hover:bg-Lbrown border-Lbrown bg-Lbrown text-white";
        break;
      // เพิ่ม case สำหรับสีอื่นๆ ที่คุณต้องการใช้
      default:
        colorClasses = ""; // กำหนดค่าเริ่มต้นหากไม่พบสีที่ตรงกัน
    }
  }

  const lang = localStorage.getItem("i18nextLng");

  return (
    <button className={`${baseClasses} ${colorClasses} ${className}`}>
      <p>{lang === "th" ? "สั่งซื้อ" : "Shop Now"}</p>
    </button>
  );
}

export default Button;
