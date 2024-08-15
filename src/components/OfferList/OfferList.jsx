import React from "react";
import Button from "../Button/Button";

function OfferList({ title, content }) {
  const lang = localStorage.getItem("i18nextLng");

  return (
    <div
      className="flex flex-col items-start bg-Lbrown rounded-2xl py-6 px-10 min-h-[280px] bg-[url('/images/Fruit.png')] bg-no-repeat"
      style={{
        backgroundPosition: "right 10% bottom 10%",
        backgroundSize: "40%",
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
