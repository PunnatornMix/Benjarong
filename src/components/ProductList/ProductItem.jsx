import React, { useState } from "react";
import Button from "../Button/Button";
import { ArrowIcon } from "../icons/icons";
import classNames from "classnames";
import { Link } from "react-router-dom";

function ProductItem({ src, bestseller, title, content, className }) {
  const lang = localStorage.getItem("i18nextLng");
  const [hover, setHover] = useState(false);

  return (
    <div className={`w-[544px] justify-self-center mx-auto`}>
      <a
        className="w-[544px] h-[544px] relative bg-Lbrown1 flex justify-center items-center aspect-square "
        href="/product-detail"
      >
        {bestseller ? (
          <button className="absolute top-5 right-5 bg-brown1 text-[20px] text-white py-2 px-8 cursor-default">
            BEST SELLER
          </button>
        ) : (
          ""
        )}
        {/* <Button
          className={"absolute top-2 right-2 rounded-none"}
          color={"brown"}
          text={"BEST SELLER"}
        /> */}
        <img
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          src={src}
          className={`${
            hover ? "animationBigger" : ""
          } w-full object-cover p-28`}
        />
      </a>
      <div className="flex justify-between pr-6 ">
        <div className="text-start pt-12">
          <h3 className="text-brown1 font-bold">{title}</h3>
          <p className="text-Lbrown line-clamp-1">{content}</p>
        </div>
        <div
          className={`pt-14 w-8 ${
            hover ? "animationBigger translate-x-2 " : ""
          } `}
        >
          <ArrowIcon />
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
