import React, { useState } from "react";

function RecommendProduct({ src, bg, nameTH, name, className }) {
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
          <img
            src={src}
            className={`h-[clamp(250px,25vw,400px)] w-fit z-10 p-3`}
          />

          <h3
            className={`home_button w-[clamp(200px,25vw,305px)] ${
              hover ? "tracking-wider bg-brown" : ""
            }`}
          >
            {name}
          </h3>
        </div>
        <img
          src={bg}
          className={`absolute top-1/2 left-[30%] transform -translate-y-[60%] h-[clamp(200px,20vw,320px)] w-[clamp(180px,18vw,320px)] my-auto ${
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
