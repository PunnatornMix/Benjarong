import React, { useEffect, useState } from "react";

function CSRItem({ title, content, date, src }) {
  //   const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const lang = localStorage.getItem("i18nextLng");

  return (
    <div className="flex items-center gap-10 ">
      <img src={src} className="h-[200px] w-[360px] " />
      <div className="flex flex-col gap-2">
        <h2>{title}</h2>
        {lang === "th" ? " " : ""}
        <p className="text-gray-400 font-light">{date}</p>
        <p className="line-clamp-2">{content}</p>
        <div>
          <h3 className="font-bold inline-block">
            {lang === "th" ? "อ่านเพิ่มเติม" : "Read more"}
          </h3>
          <span className="text-gray-400 pl-1"> &gt;&gt;</span>
        </div>
      </div>
    </div>
  );
}

export default CSRItem;
