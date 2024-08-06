import React, { useState } from "react";

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

function MenuNavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);
  const lang = localStorage.getItem("i18nextLng");

  // const [active, setActive] = useState();
  console.log("pathname", window.location.pathname);
  const path = window.location.pathname;

  const Home = path === "/Home" ? true : false;
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
    <div className="container mx-auto h-32 w-full flex justify-around items-center">
      <img src="/images/logo/band.png" className="h-full py-6" />
      <div className="flex">
        <label className="input input-bordered rounded-[40px] w-96 rounded-r-none border-brown flex items-center gap-2">
          <input
            type="text"
            className="grow "
            placeholder="Search for Products..."
          />
        </label>

        <select className="select select-bordered border-l-0 border-brown w-full rounded-none max-w-40">
          <option disabled selected>
            All Categories
          </option>
          <option>Homer</option>
          <option>Marge</option>
          <option>Bart</option>
          <option>Lisa</option>
          <option>Maggie</option>
        </select>
        <div className="bg-brown h-[48px] w-[52px] flex justify-center items-center rounded-r-[40px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="white"
            className="h-6 w-6 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      <h3>MenuNavBar</h3>
    </div>
  );
}

export default MenuNavBar;
