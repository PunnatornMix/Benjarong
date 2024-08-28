import React from "react";
import Button from "../Button/Button";
import { ArrowIcon } from "../icons/icons";

function ProductItem({ src, bestseller }) {
  return (
    <div>
      <div className="relative bg-Lbrown1 flex justify-center items-center aspect-square ">
        {bestseller ? (
          <button className="absolute top-5 right-5 bg-brown1 text-white py-3 px-10 	cursor-default">
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
      <div className="flex gap-8">
        <div className="text-start pt-12">
          <h2 className="text-brown1">ข้าวขาวหอมมะลิ 100% ตรา เบญจรงค์</h2>
          <p className="text-Lbrown">
            ขนาดบรรจุ: ซอง 200 กรัม กล่อง 800 กรัม (4ซอง)2 / 5 / 15 / 48
            กิโลกรัม
          </p>
        </div>
        <div className="pt-14">
          <ArrowIcon />
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
