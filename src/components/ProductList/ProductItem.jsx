import React from "react";

function ProductItem({ src, title, content }) {
  const lang = localStorage.getItem("i18nextLng");
  return (
    <div className="flex gap-20">
      <img src={src} className="h-[400px]" />
      <div className="flex flex-col gap-4 items-start">
        <div className="flex items-center gap-4">
          <i
            className="fa-solid fa-utensils fa-2xl"
            style={{ color: "#683423" }}
          ></i>
          <h1 className="font-medium text-brown1">{title}</h1>
        </div>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default ProductItem;
