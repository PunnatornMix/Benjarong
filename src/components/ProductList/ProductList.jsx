import React from "react";
import Button from "../Button/Button";
import { Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import Countdown from "react-countdown";

function ProductList({ src, title, sale, price, value, day, content }) {
  const lang = localStorage.getItem("i18nextLng");
  console.log("day", day);
  const Completionist = () => (
    <span className="text-red-500">Out Off Time!</span>
  );

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <div className="flex -translate-y-2 gap-1 mx-auto justify-center">
          <div className="border w-[60px] text-center py-1  bg-Lbrown2">
            <h3 className="text-brown1">0{days}</h3>
            <p className="font-light text-gray-500 text-[16px]">Days</p>
          </div>
          <div className="border w-[60px] text-center py-1 bg-Lbrown2">
            <h3 className="  text-brown1">
              {" "}
              {hours >= 10 ? "" : "0"}
              {hours}
            </h3>
            <p className="font-light text-gray-500 text-[16px]">Hours</p>
          </div>
          <div className="border w-[60px] text-center py-1 bg-Lbrown2">
            <h3 className="  text-brown1"> {minutes}</h3>
            <p className="font-light text-gray-500 text-[16px]">Mins</p>
          </div>
          <div className="border w-[60px] text-center py-1 bg-Lbrown2">
            <h3 className=" text-brown1 ">{seconds}</h3>
            <p className="font-light text-gray-500 text-[16px]">Secs</p>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="border rounded-lg mx-3">
      <img src={src} className="mx-auto h-72" />
      <Countdown
        date={Date.now() + day * 1000 * 60 * 60 * 24}
        renderer={renderer}
      >
        {/* <Completionist /> */}
      </Countdown>
      <div className="flex flex-col pl-10 py-4 text- gap-1">
        <h3 className="font-[500]"> {title}</h3>
        <Rating
          name="text-feedback"
          value={value}
          readOnly
          precision={0.5}
          emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        />

        <h5>{lang === "th" ? "จำหน่ายโดย ข้าวเบญจรงค์" : ""}</h5>
        <div className="flex gap-5">
          <p className="text-green">{sale}</p>
          <p className="text-red-500 line-through">{price}</p>
        </div>
        <Button color={"brown"} outline={"outline"} className={"mt-3"} />
      </div>
    </div>
  );
}

export default ProductList;
