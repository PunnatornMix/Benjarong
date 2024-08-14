import React from "react";

function DescriptionSubpage() {
  const lang = localStorage.getItem("i18nextLng");

  return (
    <section>
      {lang === "th" ? "" : ""}
      <p className="pb-10">
        {lang === "th"
          ? "ข้าวหอมมะลิกลางปี ทีคัดสรรเมล็ดข้าวคุณภาพดีพิเศษ ควบคุมการผลิต โดยคำนึงถุงคุณภาพข้าวหลังหุงเป็นพิเศษ เพื่อให้ข้าวหุงง่าย ได้มาตรฐาน เมล็ดข้าวเรียงตัวสวยงาม หอม นุ่ม และไม่แฉะ     Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni voluptate ea laborum, pariatur sint autem iste, a, inventore earum ipsum ratione facilis! Fuga quia facere sint, sequi obcaecati eligendi suscipit."
          : "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni voluptate ea laborum, pariatur sint autem iste, a, inventore earum ipsum ratione facilis! Fuga quia facere sint, sequi obcaecati eligendi suscipit."}
      </p>
    </section>
  );
}

export default DescriptionSubpage;
