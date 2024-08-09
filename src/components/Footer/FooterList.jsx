import React from "react";

function FooterList({ children, title, content }) {
  //   const lang = localStorage.getItem("i18nextLng");

  return (
    <div className="flex gap-3">
      {children}
      <div className="flex flex-col gap-2 justify-center">
        <h3>{title}</h3>
        <h5 className="text-light text-gray-500">{content}</h5>
      </div>
    </div>
  );
}

export default FooterList;
