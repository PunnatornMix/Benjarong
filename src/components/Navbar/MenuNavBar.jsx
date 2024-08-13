import React, { useState } from "react";
import { LocationIcon, PhoneIcon, SearchIcon } from "../icons/icons";
import HoverItem from "./HoverItem";

window.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY;
  const targetPosition = 5; // ตำแหน่งที่คุณต้องการให้แสดง bg

  const contentElement = document.getElementById("content");

  if (scrollPosition >= targetPosition) {
    contentElement.classList.remove("hidden");
  } else {
    contentElement.classList.add("hidden");
  }
});

function MenuNavBar({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);
  const lang = localStorage.getItem("i18nextLng");

  // const [active, setActive] = useState();
  console.log("pathname", window.location.pathname);
  const path = window.location.pathname;

  const home = path === "/" ? true : false;
  const about = path === "/about-us" ? true : false;

  const product = path === "/product-list" ? true : false;
  const news = path === "/news-activity" ? true : false;
  const contact = path === "/contact-us" ? true : false;

  function selectMenu(active) {
    let classes = "";
    if (active) {
      classes += "menuActive";
    }
    return classes;
  }

  return (
    <>
      <section className=" mx-auto h-32 w-full flex justify-around items-center">
        <img src="/images/logo/band.png" className="h-full py-6" />
        <div className="flex">
          <label className="input input-bordered bg-transparent  rounded-[40px] w-96 rounded-r-none border-brown1 flex items-center gap-2">
            <input
              type="text"
              className="grow "
              placeholder={
                lang === "th" ? "ค้นหาสินค้า..." : "Search for Products..."
              }
            />
          </label>
          <select className="select select-bordered border-l-0 border-brown1 w-full bg-transparent rounded-none max-w-40">
            <option disabled selected>
              {lang === "th" ? "หมวดหมู่ทั้งหมด" : "All Categories"}
            </option>
            <option>Home</option>
            <option>Marge</option>
            <option>Bart</option>
            <option>Lisa</option>
            <option>Maggie</option>
          </select>
          <div className="bg-brown1 h-[48px] w-[52px] flex justify-center items-center rounded-r-[40px]">
            <SearchIcon />
          </div>
        </div>
        <div className="flex gap-6">
          <a
            className="flex justify-center items-center gap-2"
            href="https://maps.app.goo.gl/SQbYXdJpsX7mqNvu6"
            target="_blank"
          >
            <HoverItem
              icon={"LocationIcon"}
              content={
                lang === "th"
                  ? "ถนนบางนา-ตราด, สมุทรปราการ"
                  : "Bangna-Trad Road, Samut Prakan"
              }
            >
              {/* <LocationIcon className={"w-[30px]"} /> */}

              <h5>
                {lang === "th"
                  ? "ถนนบางนา-ตราด, สมุทรปราการ"
                  : "Bangna-Trad Road, Samut Prakan"}
              </h5>
            </HoverItem>
          </a>

          <a
            className="flex justify-center items-center gap-2"
            href="tel:023120151"
            target="_blank"
          >
            <HoverItem icon={"PhoneIcon"} content={"023 120151"}>
              {/* <PhoneIcon /> */}
            </HoverItem>
          </a>
          <div className="form">{children}</div>
        </div>
      </section>
      {lang === "th" ? "" : ""}

      <section className="bg-brown1 ">
        <div className="container mx-auto pl-[11%] text-white flex h-[60px] items-center gap-20">
          <div className="xl:grid xl:grid-cols-5 hidden  items-center">
            <a href="/" className={`menuHover ${selectMenu(home)}`}>
              {lang === "th" ? "หน้าแรก " : "Home"}
            </a>
            <a href="/about-us" className={`menuHover ${selectMenu(about)}`}>
              {lang === "th" ? "รู้จักเรา " : "About Us"}
            </a>
            <a
              href="/product-list"
              className={`menuHover ${selectMenu(product)}`}
            >
              {lang === "th" ? "ผลิตภัณฑ์ " : "Our Products"}
            </a>
            {lang === "th" ? "" : ""}
            <a
              href="/news-activity"
              className={`menuHover ${selectMenu(news)}`}
            >
              {lang === "th" ? "กิจกรรม " : "Activities"}
            </a>
            <a
              href="/contact-us"
              className={`menuHover ${selectMenu(contact)}`}
            >
              {lang === "th" ? "รีวิว" : "Review"}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default MenuNavBar;
