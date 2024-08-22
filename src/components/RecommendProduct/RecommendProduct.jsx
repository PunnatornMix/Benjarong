import React, { useState } from "react";

function RecommendProduct({ src, nameTH, nameEN, className }) {
  const lang = localStorage.getItem("i18nextLng");
  const [hover, setHover] = useState(false);

  return (
    <a
      href="/product-detail"
      className="mx-auto "
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <p className={`text-center h-[10px] ${hover ? "underline-product" : ""}`}>
        {nameTH}
      </p>
      <img
        src={src}
        className={`h-[400px] pt-12 ${
          hover ? "productAnimate" : ""
        } ${className} `}
      />
      {lang === "th" ? "" : ""}
      <h3 className={`home_button ${hover ? "tracking-wider bg-brown" : ""}`}>
        {nameEN}
      </h3>
    </a>
  );
}

export default RecommendProduct;
