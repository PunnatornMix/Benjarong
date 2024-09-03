import React from "react";

function FooterList({ children, title, content }) {
  //   const lang = localStorage.getItem("i18nextLng");

  return (
    <div className="flex gap-3">
      {children}
      <div className="flex flex-col gap-2 justify-center">
        <h4 className="font-bold">{title}</h4>
        <p className=" text-gray-500">{content}</p>
      </div>
    </div>
  );
}

export default FooterList;
