import React, { Fragment, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Box, FormControl, MenuItem, Select } from "@mui/material";
import SEO from "../components/Seo/Seo";
import MenuNavBar from "../components/Navbar/MenuNavBar";

import "../image-gallery.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../components/Footer/Footer";
import ImageGallery from "react-image-gallery";

import Subscibe from "../components/Subscibe/Subscibe";
import Button from "../components/Button/Button";
import HoverItem from "../components/Navbar/HoverItem";
import { FacebookIcon } from "../components/icons/icons";
import { Link, useParams } from "react-router-dom";
import ReviewSubpage from "./Product/ReviewSubpage";
import DescriptionSubpage from "./Product/DescriptionSubpage";
import ProductList from "../components/ProductList/ProductList";
import Slider from "react-slick";

const ProductDatail = () => {
  const [lang, setLang] = useState(localStorage.getItem("i18nextLng") || "th");
  const { t, i18n } = useTranslation();

  const ProductSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  let { subpage } = useParams();
  if (subpage === undefined) {
    subpage = "description";
  }

  const images = [
    {
      original: "/images/product/Jasmine.png",
      thumbnail: "/images/product/Jasmine.png",
    },
    {
      original: "/images/product/mock01.png",
      thumbnail: "/images/product/mock01.png",
    },
    {
      original: "/images/product/mock02.png",
      thumbnail: "/images/product/mock02.png",
    },
  ];

  useEffect(() => {
    const storedLang = localStorage.getItem("i18nextLng");
    console.log("storedLang", storedLang);
  }, [i18n]);

  const handleLanguageChange = (e) => {
    const newLang = e.target.value;
    i18n.changeLanguage(newLang);
    localStorage.setItem("i18nextLng", newLang);
    setLang(newLang);
  };
  const path = window.location.pathname;

  const description = path === "/product-detail" ? true : false;
  const reviews = path === "/product-detail/review" ? true : false;

  function selectMenu(active) {
    let classes = "";
    if (active) {
      classes += "navActive";
    }
    return classes;
  }

  return (
    <div id="AboutUs">
      <Fragment>
        <SEO
          title="product-detail"
          description="A description of the page"
          name="Benjarong"
          type="articlec"
          keywords="HTML, CSS, JavaScript"
        />
        <MenuNavBar>
          <Box>
            <FormControl fullWidth variant="standard">
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={localStorage.getItem("i18nextLng")}
                className="border-0px lang"
                onChange={handleLanguageChange}
              >
                <MenuItem value={"th"}>
                  <div className="flex gap-1 items-center MenuItem">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802"
                      />
                    </svg>

                    {/* <UnitedStates className="w-[25px]" /> */}
                    <p> Thailand</p>
                  </div>
                </MenuItem>
                <MenuItem value={"en"}>
                  <div className="flex gap-1 items-center MenuItem">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802"
                      />
                    </svg>

                    {/* <UnitedStates className="w-[25px]" /> */}
                    <p> English</p>
                  </div>
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
        </MenuNavBar>

        <section className="bg-Lbrown2">
          {/*---- Product ----*/}
          <div className="flex container gap-8 mx-auto py-8 ">
            {/* <img src="Jasmine.png" /> */}
            <ImageGallery
              items={images}
              showFullscreenButton={false}
              showPlayButton={false}
              showNav={false}
              slideDuration={1000}
            />
            <div className="flex flex-col gap-3">
              <h3 className="font-semibold">
                {lang === "th" ? "ข้าวหอมมะลิ 100% ขนาด 5 กก." : ""}
              </h3>
              <p className="font-light text-gray-500">
                {lang === "th"
                  ? " Lorem ipsum dolor sit amet consectetur adipisicing elit."
                  : ""}
              </p>
              <div>
                <p className="font-medium inline-block">
                  {lang === "th" ? "ขายโดย" : ""}
                </p>{" "}
                <span>{lang === "th" ? ": ข้าวเบญจรงค์" : ""} </span>
              </div>
              <div className="flex gap-3 py-5">
                <Button
                  color={"gray"}
                  text={"2 kg"}
                  className={"font-normal text-lg"}
                />
                <Button
                  color={"gray"}
                  text={"5 kg"}
                  className={"font-normal text-lg"}
                />
                <Button
                  color={"gray"}
                  text={"15 kg"}
                  className={"font-normal text-lg"}
                />
                <Button
                  color={"gray"}
                  text={"48 kg"}
                  className={"font-normal text-lg"}
                />
              </div>
              <div className="flex items-center gap-5">
                <h1 className="text-green">
                  {lang === "th" ? "185 บาท" : "185 bath"}
                </h1>
                <h2 className="text-red-500 line-through">
                  {lang === "th" ? "250 บาท" : ""}
                </h2>
              </div>
              <a
                className="flex gap-6 py-2 items-center hover:text-red-500 hover:tracking-wider"
                href="https://shop.line.me/@benjarongrice/product/319293667"
              >
                {lang === "th" ? "" : ""}

                <h3 className="underline font-medium">
                  {lang === "th" ? "ติดต่อสั่งซื้อ" : ""}
                </h3>

                {/* <img
                  src="/images/logo/icon-facebook-messenger.png"
                  alt="facebook"
                /> */}
                <img src="/images/logo/icon-line.png" alt="line" />
              </a>
              <div>
                <p className="font-medium inline-block">
                  {lang === "th" ? "พร้อมจัดส่ง : " : ""}
                </p>
                <span>{lang === "th" ? " 65 ชิ้น" : ""}</span>
                <p>{lang === "th" ? "" : ""}</p>
              </div>
              <div>
                <p className="font-medium inline-block">
                  {lang === "th" ? "แบรนด์ : " : ""}
                </p>
                <span>{lang === "th" ? " ข้าวเบญจรงค์" : ""}</span>
              </div>
              {lang === "th" ? "" : ""}
              <div className="font-medium flex flex-col gap-1">
                <p>{lang === "th" ? "แชร์สิ่งนี้ " : "share this "}</p>
                <div className="flex items-center gap-1">
                  <a
                    href="https://line.me/ti/p/~@benjarongrice"
                    target="_blank"
                  >
                    <HoverItem icon="Line"></HoverItem>
                  </a>

                  <a
                    href="https://www.facebook.com/Benjarongrice/"
                    target="_blank"
                  >
                    <FacebookIcon
                      className={
                        "w-[40px] cursor-pointer fill-brown1 hover:fill-HoverBrown "
                      }
                    ></FacebookIcon>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/*---- description && review ----*/}
          <div className="container mx-auto pb-16">
            <div className="border-b-2">
              <div className="grid grid-cols-2  w-[25%] ">
                <Link
                  to={"/product-detail"}
                  className={`navSubpage ${selectMenu(description)}`}
                >
                  {lang === "th" ? "รายละเอียดสินค้า" : "Description"}
                </Link>
                <Link
                  to={"/product-detail/review"}
                  className={`navSubpage ${selectMenu(reviews)}`}
                >
                  {lang === "th" ? "รีวิว" : "Reviews"}
                </Link>
              </div>
            </div>
            <div className="mt-10">
              {subpage === "description" && <DescriptionSubpage />}
              {subpage === "review" && <ReviewSubpage />}
            </div>
          </div>
        </section>

        {/*----- All Product -----*/}
        <section className="container mx-auto my-20">
          <h1 className="my-4">
            {lang === "th" ? "สินค้าที่เกี่ยวข้อง" : "Related Products"}
          </h1>
          <div className=" image-slider-container ">
            <Slider {...ProductSettings}>
              <ProductList
                src="/images/Banner/Hero/Jasmine.png"
                title={lang === "th" ? "ข้าวขาวหอมมะลิ 100%" : ""}
                // content={lang === "th" ? "จำหน่ายโดย ข้าวเบญจรงค์" : ""}
                sale={lang === "th" ? "200 บาท" : "200 Bath"}
                price={lang === "th" ? "250 บาท" : "250 Bath"}
              />
              <ProductList
                src="/images/Banner/Hero/WhiteRice.png"
                title={lang === "th" ? "ข้าวเสาไห้ 100%" : ""}
                sale={lang === "th" ? "300 บาท" : "300 Bath"}
                price={lang === "th" ? "350 บาท" : "350 Bath"}
              />
              <ProductList
                src="/images/Banner/Hero/HealthyRice.png"
                title={lang === "th" ? "ข้าวแดงหอม" : ""}
                sale={lang === "th" ? "400 บาท" : "400 Bath"}
                price={lang === "th" ? "450 บาท" : "450 Bath"}
              />
              <ProductList
                src="/images/Banner/Hero/ThaiAromaticRice.png"
                title={lang === "th" ? "ข้าวหอม 100%" : ""}
                sale={lang === "th" ? "500 บาท" : "500 Bath"}
                price={lang === "th" ? "550 บาท" : "550 Bath"}
              />
            </Slider>
          </div>
        </section>

        {/*------- Subscribe our newsletter ------*/}
        <Subscibe />

        <Footer />
      </Fragment>
    </div>
  );
};
export default ProductDatail;
