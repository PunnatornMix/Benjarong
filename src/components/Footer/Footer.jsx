import React from "react";
import HoverItem from "../Navbar/HoverItem";
import {
  CirclePhone,
  FacebookIcon,
  LocationIcon,
  PhoneIcon,
} from "../icons/icons";
import FooterList from "./FooterList";
import { Phone } from "@mui/icons-material";

function Footer() {
  const lang = localStorage.getItem("i18nextLng");

  return (
    <section className="bg-Lbrown2 border-t-2">
      <div className="grid container mx-auto grid-cols-3 ">
        <div className="flex flex-col gap-5 footer  items-start">
          <img src="/images/logo/band.png" className="h-20" />
          <h5 className="font-light text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            debitis consequuntur quo, excepturi rerum, obcaecati harum ab itaque
            facilis eveniet sint nobis deserunt at dolore culpa soluta libero
            expedita a.
          </h5>
          <div className="flex gap-2 items-center pt-2">
            <a href="https://line.me/ti/p/~@benjarongrice" target="_blank">
              <HoverItem icon="Line"></HoverItem>
            </a>
            <a href="tel:023120151" target="_blank">
              <HoverItem icon="CirclePhone"></HoverItem>
            </a>

            <a href="https://www.facebook.com/Benjarongrice/" target="_blank">
              <FacebookIcon
                className={
                  "w-[40px] cursor-pointer fill-brown1 hover:fill-HoverBrown "
                }
              ></FacebookIcon>
            </a>
          </div>
        </div>
        <div className="border-l-2 border-r-2 footer pt-16 ">
          <div className="flex flex-col gap-6  h-full">
            <h3 className="pb-2">บริษัท เอเชีย อินเตอร์ ไรซ์ สำนักงานใหญ่</h3>
            <a href="tel:023120151" target="_blank">
              <FooterList
                title={lang === "th" ? "เบอร์โทรศัพท์" : "Phone"}
                content={"023 120151"}
              >
                <PhoneIcon
                  className="w-[60px] bg-brown1 hover:bg-HoverBrown rounded-full p-4 "
                  stroke="white"
                />
              </FooterList>
            </a>
            <a href="https://maps.app.goo.gl/SQbYXdJpsX7mqNvu6" target="_blank">
              <FooterList
                title={lang === "th" ? "สถานที่ตั้ง" : "Address"}
                content={lang === "th" ? "ถนนบางนา-ตราด, สมุทรปราการ" : ""}
              >
                <LocationIcon
                  className="w-[60px] bg-brown1 hover:bg-HoverBrown rounded-full p-4 "
                  stroke="white"
                />
              </FooterList>
            </a>
          </div>
        </div>

        <div className="flex flex-col footer pt-16 ">
          <h2>Quick links</h2>
          <div className="grid grid-cols-2 ">
            {lang === "th" ? "" : ""}
            <h5 className="font-light">
              {lang === "th" ? "เกี่ยวกับเรา" : "About us"}
            </h5>
            <h5 className="font-light">
              {lang === "th" ? "นโยบายความเป็นส่วนตัว" : "Privacy Policy"}
            </h5>
            <h5 className="font-light">
              {lang === "th" ? "นโยบายคุกกี้" : "Cookie Policy"}
            </h5>
            <h5 className="font-light">
              {lang === "th" ? "ข้อกำหนดและเงื่อนไข" : "Terms and Conditions"}
            </h5>
            <h5 className="font-light">
              {lang === "th" ? "นโยบายการซื้อ" : "Purchasing Policy"}
            </h5>
            <h5 className="font-light">
              {lang === "th" ? "ติดต่อเรา" : "Contact us"}
            </h5>
            <h5 className="font-light">{lang === "th" ? "รีวิว" : "Review"}</h5>
            <h5 className="font-light">
              {lang === "th" ? "กิจกรรม" : "Event"}
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
