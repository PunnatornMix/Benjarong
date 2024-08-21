import React from "react";

function LogoNavBar({ src, content, children }) {
  const lang = localStorage.getItem("i18nextLng");

  return (
    <div className="flex gap-3 cursor-pointer">
      {src ? <img src={src} className="logoNavBar " /> : ""}
      {children ? <div className="w-5">{children} </div> : ""}
      <p className="hover:text-brown1">{content}</p>
    </div>
  );
}

export default LogoNavBar;
