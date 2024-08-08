import React from "react";
import Button from "../Button/Button";
import { Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

function ProductList({ src, title, sale, price, value, content }) {
  const lang = localStorage.getItem("i18nextLng");

  return (
    <div className="border rounded-lg mx-3">
      <img src={src} className="mx-auto h-72" />
      <div className="flex flex-col pl-10 py-4 text- gap-1">
        <h3 className="font-[500]"> {title}</h3>
        {lang === "th" ? "" : ""}
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
