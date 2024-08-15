import React from "react";

function LogoNavBar({ src, content }) {
  const lang = localStorage.getItem("i18nextLng");

  return (
    <div className="flex gap-3 cursor-pointer">
      <img src={src} className="logoNavBar " />
      <p className="hover:text-brown1">{content}</p>
    </div>
  );
}

export default LogoNavBar;
