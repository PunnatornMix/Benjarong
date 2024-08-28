import React, { Fragment, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Box, FormControl, MenuItem, Select } from "@mui/material";
import SEO from "../components/Seo/Seo";
import MenuNavBar from "../components/Navbar/MenuNavBar";
import Footer from "../components/Footer/Footer";
import ImageGallery from "react-image-gallery";
import Slider from "react-slick";
import ProductList from "../components/ProductList/ProductList";
import Button from "../components/Button/Button";
import HoverItem from "../components/Navbar/HoverItem";
import { FacebookIcon, XIcon } from "../components/icons/icons";
import { Link, useParams } from "react-router-dom";
import ReviewSubpage from "./Product/ReviewSubpage";
import DescriptionSubpage from "./Product/DescriptionSubpage";
import Subscibe from "../components/Subscibe/Subscibe";

import "../image-gallery.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductDatail = () => {
  const [lang, setLang] = useState(localStorage.getItem("i18nextLng") || "th");
  const [selectedProducts, setSelectedProducts] = useState("five");

  const { t, i18n } = useTranslation();

  const ProductSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  const ProductDetail = [
    {
      Name:
        lang === "th"
          ? "ข้าวหอมมะลิ 100% ขนาด 5 กก."
          : "Jasmine Rice 100% 5 kg.",
      Subtitles:
        lang === "th"
          ? "Lorem ipsum dolor sit amet consectetur adipisicing elit."
          : "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      SaleBy: lang === "th" ? ": ข้าวเบญจรงค์" : ": Benjarong Rice",
      two: {
        Price: lang === "th" ? "90 บาท" : "90 bath",
        Sale: lang === "th" ? "120 บาท" : "120 bath",
      },
      five: {
        Price: lang === "th" ? "185 บาท" : "185 bath",
        Sale: lang === "th" ? "250 บาท" : "250 bath",
      },
      fifteen: {
        Price: lang === "th" ? "415 บาท" : "415 bath",
        Sale: lang === "th" ? "550 บาท" : "550 bath",
      },
      fortyEight: {
        Price: lang === "th" ? "1800 บาท" : "1800 bath",
        Sale: lang === "th" ? "2400 บาท" : "2400 bath",
      },
    },
  ];

  const [filteredProducts, setFilteredProducts] = useState(ProductDetail);

  useEffect(() => {
    setFilteredProducts(
      ProductDetail.filter((product) => product[selectedProducts])
    );
  }, [selectedProducts, lang]);

  const handleOnClick = (category) => {
    setSelectedProducts(category);
  };

  let { subpage } = useParams();
  if (subpage === undefined) {
    subpage = "description";
  }

  const percentSale = (sale, price) => {
    if (sale && price) {
      const saleValue = parseFloat(sale.split(" ")[0]);
      const priceValue = parseFloat(price.split(" ")[0]);

      if (!isNaN(saleValue) && !isNaN(priceValue) && saleValue !== 0) {
        const percent = Math.round(
          ((saleValue - priceValue) / saleValue) * 100
        );
        return percent;
      }
    }
    return false;
  };

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
    return active ? "navActive" : "";
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
                    <p> English</p>
                  </div>
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
        </MenuNavBar>

        <section className="bg-Lbrown2">
          <div className="flex container gap-8 mx-auto py-8 ">
            <ImageGallery
              items={images}
              showFullscreenButton={false}
              showPlayButton={false}
              showNav={false}
              slideDuration={1000}
            />
            <div className="flex flex-col gap-3">
              <h3 className="font-semibold">{filteredProducts[0]?.Name}</h3>
              <p className="font-light text-gray-500">
                {filteredProducts[0]?.Subtitles}
              </p>
              <div>
                <p className="font-medium inline-block">
                  {lang === "th" ? "ขายโดย" : "Sold by"}
                </p>{" "}
                <span>{filteredProducts[0]?.SaleBy} </span>
              </div>
              <div className="flex gap-3 py-5">
                <div onClick={() => handleOnClick("two")}>
                  <Button
                    color={"gray"}
                    text={"2 kg"}
                    className={"font-normal text-lg"}
                  />
                </div>
                <div onClick={() => handleOnClick("five")}>
                  <Button
                    color={"gray"}
                    text={"5 kg"}
                    className={"font-normal text-lg"}
                  />
                </div>
                <div onClick={() => handleOnClick("fifteen")}>
                  <Button
                    color={"gray"}
                    text={"15 kg"}
                    className={"font-normal text-lg"}
                  />
                </div>
                <div onClick={() => handleOnClick("fortyEight")}>
                  <Button
                    color={"gray"}
                    text={"48 kg"}
                    className={"font-normal text-lg"}
                  />
                </div>
              </div>
              <div className="flex items-center gap-5">
                <h1 className="text-green">
                  {filteredProducts[0]?.[selectedProducts]?.Price}
                </h1>
                <h2 className="text-red-500 line-through">
                  {filteredProducts[0]?.[selectedProducts]?.Sale}
                </h2>
                <h4 className="bg-brown1 w-fit text-white py-1 px-2 rounded-md">
                  {percentSale(
                    filteredProducts[0]?.[selectedProducts]?.Sale,
                    filteredProducts[0]?.[selectedProducts]?.Price
                  )}
                  % Off
                </h4>
              </div>
              <a
                className="flex gap-6 py-2 items-center hover:text-red-500 hover:tracking-wider"
                href="https://shop.line.me/@benjarongrice/product/319293667"
              >
                <h3 className="underline font-medium">
                  {lang === "th" ? "ติดต่อสั่งซื้อ" : "Contact to order"}
                </h3>
                <img src="/images/logo/icon-line.png" alt="line" />
              </a>
              <div>
                <p className="font-medium inline-block">
                  {lang === "th"
                    ? "พร้อมจัดส่ง : "
                    : "Available for shipping: "}
                </p>
                <span>{lang === "th" ? " 65 ชิ้น" : " 65 items"}</span>
              </div>
              <div>
                <p className="font-medium inline-block">
                  {lang === "th" ? "แบรนด์ : " : "Brand: "}
                </p>
                <span>
                  {lang === "th" ? " ข้าวเบญจรงค์" : " Benjarong Rice"}
                </span>
              </div>
              <div className="font-medium flex flex-col gap-1">
                <p>{lang === "th" ? "แชร์สิ่งนี้ " : "Share this "}</p>
                <div className="flex items-center ">
                  <a
                    href="https://twitter.com/share?ref_src=twsrc%5Etfw"
                    className="twitter-share-button"
                    data-show-count="false"
                  >
                    <XIcon className="h-14 w-14 fill-[#683423] hover:fill-[#3f0301]" />
                  </a>
                  <script
                    async
                    src="https://platform.twitter.com/widgets.js"
                    charset="utf-8"
                  ></script>
                  <div
                    className="fb-share-button"
                    data-href="https://www.benjarongrice.com/th/ricecategory"
                    data-layout=""
                    data-size=""
                  >
                    <a
                      target="_blank"
                      href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.benjarongrice.com%2Fth%2Fricecategory&amp;src=sdkpreparse"
                      className="fb-xfbml-parse-ignore"
                    >
                      <FacebookIcon className="w-[40px] cursor-pointer fill-brown1 hover:fill-HoverBrown" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container mx-auto pb-16">
            <div className="border-b-2">
              <div className="grid grid-cols-2 w-[25%]">
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

        <section className="container mx-auto my-20">
          <h1 className="my-4">
            {lang === "th" ? "สินค้าที่เกี่ยวข้อง" : "Related Products"}
          </h1>
          <div className="image-slider-container">
            <Slider {...ProductSettings}>
              <ProductList
                src="/images/Banner/Hero/Jasmine.png"
                title={
                  lang === "th" ? "ข้าวขาวหอมมะลิ 100%" : "Jasmine Rice 100%"
                }
                sale={lang === "th" ? "200 บาท" : "200 Bath"}
                price={lang === "th" ? "250 บาท" : "250 Bath"}
              />
              <ProductList
                src="/images/Banner/Hero/WhiteRice.png"
                title={lang === "th" ? "ข้าวเสาไห้ 100%" : "Sao Hai Rice 100%"}
                sale={lang === "th" ? "300 บาท" : "300 Bath"}
                price={lang === "th" ? "350 บาท" : "350 Bath"}
              />
              <ProductList
                src="/images/Banner/Hero/HealthyRice.png"
                title={lang === "th" ? "ข้าวแดงหอม" : "Red Rice"}
                sale={lang === "th" ? "400 บาท" : "400 Bath"}
                price={lang === "th" ? "450 บาท" : "450 Bath"}
              />
              <ProductList
                src="/images/Banner/Hero/ThaiAromaticRice.png"
                title={
                  lang === "th" ? "ข้าวหอม 100%" : "Thai Aromatic Rice 100%"
                }
                sale={lang === "th" ? "500 บาท" : "500 Bath"}
                price={lang === "th" ? "550 บาท" : "550 Bath"}
              />
            </Slider>
          </div>
        </section>

        <Subscibe />
        <Footer />
      </Fragment>
    </div>
  );
};
export default ProductDatail;
