import React from "react";

function ReviewMenu({ src, title, content }) {
  return (
    <div className="flex gap-20">
      <img src={src} className="h-[400px]" />
      <div className="flex flex-col gap-4 items-start">
        <div className="flex items-center gap-4">
          <i
            className="fa-solid fa-utensils fa-2xl"
            style={{ color: "#683423" }}
          ></i>
          <h2 className="font-medium text-brown1">{title}</h2>
        </div>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default ReviewMenu;
