import React from "react";
import Button from "../Button/Button";

function OfferList({ title, content, src }) {
  const lang = localStorage.getItem("i18nextLng");

  return (
    <div
      className="flex flex-col items-start bg-Lbrown rounded-2xl py-6 px-10 min-h-[280px] bg-no-repeat"
      style={{
        backgroundImage: `url(${src})`,
        backgroundPosition: "right 10% bottom 10%",
        backgroundSize: "33%",
      }}
    >
      <h2>{title}</h2>

      <p className="pt-4 font-light w-2/3">{content}</p>
      <Button color="brown" className="justify-self-end mt-auto" />
      {/* <img src="/images/Fruit.png" className="h-36" /> */}
    </div>
  );
}

export default OfferList;
