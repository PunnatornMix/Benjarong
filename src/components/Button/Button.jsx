function Button({ className, color, outline, href, text }) {
  // const HoverColor = colors == "brown" ? "hover:bg-brown1" : "";
  function HoverColor(color, outline) {
    if (color === "brown" && outline !== "outline") {
      return `hover:bg-brown border-brown bg-brown1 text-white `;
    } else if (color === "gray" && outline !== "outline") {
      return `bg-gray-100 hover:bg-gray-200 text-black border-none`;
    }
  }

  function Outline(color, outline) {
    if (outline === "outline") {
      return ` btn-outline  bg-transparent text-brown1 hover:bg-brown1 hover:text-white`;
    }
  }

  const lang = localStorage.getItem("i18nextLng");
  return (
    <a href={href} className={` ${className}`}>
      <button
        className={`btn rounded-3xl w-32 min-h-10 h-10 hover:tracking-wider ${HoverColor(
          color,
          outline
        )}  ${Outline(color, outline)} ${className}`}
      >
        {text || (lang === "th" ? "สั่งซื้อ" : "Shop Now")}
      </button>
    </a>
  );
}

export default Button;
// import React from "react";

// function Button({ className, color, outline }) {
//   const baseClasses = "btn rounded-3xl w-32 min-h-10 h-10";
//   let colorClasses = "";

//   if (outline) {
//     colorClasses = `btn-outline bg-transparent text-${color} hover:bg-${color} hover:text-white`;
//   } else {
//     switch (color) {
//       case "green":
//         colorClasses = "hover:bg-green border-green bg-green text-white";
//         break;
//       case "brown":
//         colorClasses = "hover:bg-brown border-brown bg-brown1 text-white";
//         break;
//       case "Lbrown":
//         colorClasses = "hover:bg-Lbrown border-Lbrown bg-Lbrown text-white";
//         break;
//       // เพิ่ม case สำหรับสีอื่นๆ ที่คุณต้องการใช้
//       default:
//         colorClasses = ""; // กำหนดค่าเริ่มต้นหากไม่พบสีที่ตรงกัน
//     }
//   }

//   const lang = localStorage.getItem("i18nextLng");

//   return (
//     <button className={`${baseClasses} ${colorClasses} ${className}`}>
//       <p>{lang === "th" ? "สั่งซื้อ" : "Shop Now"}</p>
//     </button>
//   );
// }

// export default Button;
