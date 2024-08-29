import React from "react";
import Button from "../Button/Button";
import { ArrowIcon } from "../icons/icons";

function ProductItem({ src, bestseller, title, content }) {
  const lang = localStorage.getItem("i18nextLng");

  return (
    <div className="mx-4">
      <div className="relative bg-Lbrown1 flex justify-center items-center aspect-square ">
        {bestseller ? (
          <button className="absolute top-5 right-5 bg-brown1 text-white py-3 px-10 cursor-default">
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
        <img src={src} className="h-full w-full object-cover p-32" />
      </div>
      <div className="flex justify-between pr-6">
        <div className="text-start pt-12">
          <h2 className="text-brown1">{title}</h2>
          <p className="text-Lbrown">{content}</p>
        </div>
        <div className="pt-14 w-8">
          <ArrowIcon />
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
