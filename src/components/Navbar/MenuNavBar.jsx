import React, { useState } from "react";
import ReactSearchBox from "react-search-box";
import { LocationIcon, PhoneIcon, SearchIcon } from "../icons/icons";
import HoverItem from "./HoverItem";
import useWindowSize from "../../useWindowSize/useWindowSize";

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
  const { width } = useWindowSize();

  const handleClose = () => setIsOpen(false);
  const lang = localStorage.getItem("i18nextLng");

  // const [active, setActive] = useState();
  // console.log("pathname", window.location.pathname);
  const path = window.location.pathname;

  const home = path === "/" ? true : false;
  const about = path === "/about-us" ? true : false;

  const product = path === "/our-product" ? true : false;
  const CSR = path === "/CSR" ? true : false;
  const contact = path === "/contact-us" ? true : false;

  function selectMenu(active) {
    let classes = "";
    if (active) {
      classes += "menuActive";
    }
    return classes;
  }

  const handleSelect = (record) => {
    const selectedItem = dataList.find((item) => item.key == record.item.key);
    console.log("record", record);
    navigate(selectedItem.link); // นำทางไปยังลิงก์ที่เลือก
  };

  const dataList = [
    {
      key: "แบเรียมฟลูออไรด์",
      value: "แบเรียมฟลูออไรด์",
      link: "/product-item",
    },
    {
      key: "ผงโซเดียมฟลูออไรด์",
      value: "ผงโซเดียมฟลูออไรด์",
      link: "/product-itemabout-us",
    },
    {
      key: "ผงแคลเซียมฟลูออไรด์",
      value: "ผงแคลเซียมฟลูออไรด์",
      link: "/product-item",
    },
    {
      key: "ผงแมกนีเซียมฟลูออไรด์",
      value: "ผงแมกนีเซียมฟลูออไรด์",
      link: "/product-item",
    },
    {
      key: "ผงอะลูมิเนียมไฮดรอกไซด์",
      value: "ผงอะลูมิเนียมไฮดรอกไซด์",
      link: "/product-item",
    },
    { key: "โพแทสเซียม", value: "โพแทสเซียม", link: "/product-item" },
    {
      key: "โพแทสเซียมอะลูมิเนียมฟลูออไรด์",
      value: "โพแทสเซียมอะลูมิเนียมฟลูออไรด์",
      link: "/product-item",
    },
    {
      key: "โพแทสเซียมฟลูออโรเรต",
      value: "โพแทสเซียมฟลูออโรเรต",
      link: "/product-item",
    },
    {
      key: "เม็ดสีเหล็กออกไซด์",
      value: "เม็ดสีเหล็กออกไซด์",
      link: "/product-item",
    },
    {
      key: "อลูมิเนียมฟลูออไรด์",
      value: "อลูมิเนียมฟลูออไรด์",
      link: "/product-item",
    },
  ];

  return (
    <>
      <section className="container mx-auto h-32 w-full flex justify-between items-center">
        <a href="/">
          <img src="/images/logo/band.png" className="h-32 py-6" />
        </a>
        <div className="flex">
          <div className="my-custom-search-box">
            {/* <div className="my-custom-search-box input input-bordered bg-transparent  rounded-[40px] w-[300px] rounded-r-none border-brown1 flex items-center gap-2"> */}
            <ReactSearchBox
              type="text"
              placeholder={
                lang === "th" ? "ค้นหาสินค้า..." : "Search for Products..."
              }
              value=""
              data={dataList}
              onSelect={handleSelect}
              // inputFontSize={"25px"}
            />
          </div>

          <select className="select select-bordered border-l-0 border-brown1 w-full bg-transparent rounded-none max-w-40 text-[22px]">
            <option disabled selected>
              {lang === "th" ? "หมวดหมู่ทั้งหมด" : "All Categories"}
            </option>
            <option>Home</option>
            <option>Marge</option>
            <option>Bart</option>
            <option>Lisa</option>
            <option>Maggie</option>
          </select>
          <div className="bg-brown1 h-[48px] min-w-[48px] flex justify-center items-center rounded-r-[40px]">
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
                width > 1024
                  ? lang === "th"
                    ? "ถนนบางนา-ตราด, สมุทรปราการ"
                    : "Bangna-Trad Road, Samut Prakan"
                  : ""
              }
            ></HoverItem>
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

      <section className="bg-brown1 ">
        <div className="container mx-auto  text-white flex justify-center h-[60px] items-center gap-20">
          <div className="xl:grid xl:grid-cols-5 hidden  items-center">
            <a href="/" className={`menuHover ${selectMenu(home)}`}>
              {lang === "th" ? "หน้าแรก " : "Home"}
            </a>
            <a href="/about-us" className={`menuHover ${selectMenu(about)}`}>
              {lang === "th" ? "รู้จักเรา " : "About Us"}
            </a>
            <a
              href="/our-product"
              className={`menuHover ${selectMenu(product)}`}
            >
              {lang === "th" ? "ผลิตภัณฑ์ " : "Our Products"}
            </a>
            {lang === "th" ? "" : ""}
            <a href="/CSR" className={`menuHover ${selectMenu(CSR)}`}>
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
