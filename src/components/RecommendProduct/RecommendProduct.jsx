import React, { useState } from "react";

function RecommendProduct({ src, bg, nameTH, nameEN, className }) {
  const lang = localStorage.getItem("i18nextLng");
  const [hover, setHover] = useState(false);

  return (
    <a
      href="/product-detail"
      className="mx-auto "
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* <p className={`text-center h-[10px] ${hover ? "underline-product" : ""}`}>
        {nameTH}
      </p> */}
      <div className="flex relative">
        <div className="flex flex-col ">
          <img src={src} className={`h-[400px] z-10 p-3`} />

          <h3
            className={`home_button ${hover ? "tracking-wider bg-brown" : ""}`}
          >
            {nameEN}
          </h3>
        </div>
        <img
          src={bg}
          className={`absolute top-1/2 left-[30%] transform -translate-y-[55%]  h-[320px] min-w-[320px] my-auto ${
            hover ? "animationBigger scale-105" : ""
          } `}
        />
      </div>
      {lang === "th" ? "" : ""}
      {/* <h3 className={`home_button ${hover ? "tracking-wider bg-brown" : ""}`}>
        {nameEN}
      </h3> */}
    </a>
  );
}

export default RecommendProduct;
