import React from "react";

function Subscibe() {
  const lang = localStorage.getItem("i18nextLng");

  return (
    <section className="h-[300px] bg-Lbrown1">
      <div className="container mx-auto h-full flex items-center">
        <div className="w-[40%] flex flex-col items-center gap-3 mx-auto text-center">
          <h1>
            {lang === "th"
              ? "สมัครรับจดหมายข่าวของเรา"
              : "Subscribe our newsletter"}
          </h1>
          <p>
            {lang === "th"
              ? "สมัครรับจดหมายข่าวเพื่อรับข้อมูลอัปเดตเกี่ยวกับข้อเสนอพิเศษ สินค้าใหม่ และโปรโมชั่นต่างๆ ของเรา"
              : "Subscribe to the mailing list to receive updates on special offers, new arrivals and our promotions."}
          </p>

          <label className="input input-bordered rounded-full bg-white flex items-center gap-2 h-14 w-full">
            <input
              type="text"
              placeholder={
                lang === "th"
                  ? "กรุณากรอกอีเมลของคุณ"
                  : "Enter your email address"
              }
              className="  w-full max-w-xs "
            />
            <span className="badge bg-brown1 hover:bg-HoverBrown ml-auto text-white py-[20px] px-5">
              Subscibe
            </span>
          </label>
        </div>
      </div>
    </section>
  );
}

export default Subscibe;
