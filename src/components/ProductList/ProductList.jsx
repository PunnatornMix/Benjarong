import React from "react";
import Button from "../Button/Button";
import { Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import Countdown from "react-countdown";
import { Link } from "react-router-dom";

function ProductList({ src, title, sale, price, value, day, content }) {
  const lang = localStorage.getItem("i18nextLng");
  const Completionist = () => (
    <span className="text-red-500">Out Off Time!</span>
  );

  // console.log(price.split(" ")[0]);
  // console.log(sale.split(" ")[0]);
  const percentSale = (sale, price) => {
    if (sale && price) {
      // แปลงค่า sale และ price จากสตริงเป็นตัวเลข โดยการเอาตัวเลขออกจากสตริง
      const saleValue = parseFloat(sale.split(" ")[0]);
      const priceValue = parseFloat(price.split(" ")[0]);

      // ตรวจสอบว่าค่าที่ได้ไม่เป็น NaN และราคามีค่าไม่เป็นศูนย์
      if (!isNaN(saleValue) && !isNaN(priceValue) && saleValue !== 0) {
        // คำนวณเปอร์เซ็นต์ส่วนลด
        const percent = Math.round(
          ((saleValue - priceValue) / saleValue) * 100
        );
        return percent;
      }
    }
    return false;
  };
  //   ((sale.split(" ")[0] - price.split(" ")[0]) / sale.split(" ")[0]) *
  //   100
  // ).toFixed(2);

  // console.log("percent", percent);

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <div className="flex -translate-y-2 gap-1 mx-auto justify-center">
          <div className="border w-[60px] text-center py-1 bg-Lbrown2">
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
    <div className="relative border rounded-md mx-3 min-w-[280px] border-Lbrown bg-white hover:border-brown1 pt-4 my-3">
      {percentSale(sale, price) ? (
        <h4 className="bg-brown1 w-fit  text-white py-1 px-2 absolute top-4 left-4  rounded-md">
          {percentSale(sale, price)}% Off
        </h4>
      ) : (
        <></>
      )}
      <Link to="/product-detail">
        <img
          src={src}
          className="mx-auto h-[clamp(200px,20vw,280px)] transition hover:scale-105 duration-400 cursor-pointer"
        />
      </Link>
      <Countdown
        date={Date.now() + day * 1000 * 60 * 60 * 24}
        renderer={renderer}
      >
        {/* <Completionist /> */}
      </Countdown>
      <div className="flex flex-col pl-10 py-4 text- gap-1 ">
        <h3 className="font-[500]"> {title}</h3>
        <Rating
          name="text-feedback"
          value={value}
          readOnly
          precision={0.5}
          emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        />

        <h5>
          {lang === "th" ? "จำหน่ายโดย ข้าวเบญจรงค์" : "Sold by Benjarong"}
        </h5>
        <div className="flex gap-5">
          <p className="text-green">{price}</p>
          <p className="text-red-500 line-through">{sale}</p>
        </div>

        <Button
          href={"/product-detail"}
          color={"brown"}
          outline={"outline"}
          className={"mt-3"}
        />
      </div>
    </div>
  );
}

export default ProductList;
