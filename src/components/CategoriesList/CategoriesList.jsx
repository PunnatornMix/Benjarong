import React from "react";
import { Link } from "react-router-dom";

function CategoriesList({ src, title }) {
  return (
    <a
      href="/our-product"
      className="flex flex-col items-center text-center hover:hero1animate cursor-pointer outline-none"
    >
      <img src={src} />
      <h3 className="font-bold border-b-2 border-brown -translate-y-5">
        {title}
      </h3>
    </a>
  );
}

export default CategoriesList;
