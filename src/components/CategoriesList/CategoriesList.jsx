import React from "react";

function CategoriesList({ src, title }) {
  return (
    <div className="flex flex-col items-center text-center">
      <img src={src} />
      <h3 className="font-bold border-b-2 border-brown -translate-y-5">
        {title}
      </h3>
    </div>
  );
}

export default CategoriesList;
