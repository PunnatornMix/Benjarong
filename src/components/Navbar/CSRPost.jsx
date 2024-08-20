import React from "react";

function CSRPost({ src, date, title }) {
  return (
    <div className="flex gap-4">
      <img src={src} className="w-24 h-24 object-cover " />
      <div className="flex flex-col">
        <h3 className="line-clamp-2 font-[500]">{title}</h3>
        <p className=" font-light"> {date}</p>
      </div>
    </div>
  );
}

export default CSRPost;
