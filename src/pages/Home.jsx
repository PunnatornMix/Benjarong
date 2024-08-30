import React, { Fragment, useState, useEffect } from "react";

import { useTranslation } from "react-i18next";

import { ThailandIcon, UnitedStates } from "../components/icons/icons";
import { Box, FormControl, MenuItem, Select } from "@mui/material";

import SEO from "../components/Seo/Seo";
import MenuNavBar from "../components/Navbar/MenuNavBar";
import Button from "../components/Button/Button";
import HeroList from "../components/Hero/HeroList";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../components/Footer/Footer";
import CategoriesList from "../components/CategoriesList/CategoriesList";
import OfferList from "../components/OfferList/OfferList";
import ProductList from "../components/ProductList/ProductList";
import Subscibe from "../components/Subscibe/Subscibe";
import { Link } from "react-router-dom";
import RecommendProduct from "../components/RecommendProduct/RecommendProduct";
import { Repeat } from "@mui/icons-material";

const Home = () => {
  const [lang, setLang] = useState(localStorage.getItem("i18nextLng") || "th");
  const { t, i18n } = useTranslation();

  // const CategoriesSettings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 1000,
  //   arrows: true,
  //   slidesToShow: 5,
  //   slidesToScroll: 1,
  // };

  // const ProductSettings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 1000,
  //   arrows: true,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  // };

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

  return (
    <div id="home">
      <header>
        <SEO
          title="หน้าแรกของเบญจรงค์ - ข้าวหอมมะลิคุณภาพสูงและสินค้าอื่น ๆ"
          description="ยินดีต้อนรับสู่หน้าแรกของเบญจรงค์! สำรวจข้าวหอมมะลิคุณภาพสูงและผลิตภัณฑ์ข้าวอื่น ๆ ที่คัดสรรมาพิเศษ พร้อมข้อมูลเกี่ยวกับบริษัทและการบริการของเรา"
          name="เบญจรงค์"
          type="article"
          keywords="หน้าแรก, ข้าวเบญจรงค์, ข้าวหอมมะลิ, ข้าวคุณภาพ, บริษัทข้าว, ผลิตภัณฑ์ข้าว"
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
                    <p>TH</p>
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
                    <p>EN</p>
                  </div>
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
        </MenuNavBar>
      </header>

      <main>
        {/*----- Hero -----*/}
        <section className="bg-[url('/images/home/BG/BannerBG-01.png')] h-[1080px] bannerImages flex items-end justify-center pb-[120px]">
          <div className="flex">
            <img
              src="/images/home/Bannerถุงข้าวheader-07-07.png"
              className="h-[610px] translate-x-[175px] -translate-y-[20px] animationBigger"
            />
            <img
              src="/images/home/Bannerถุงข้าวheader-07-08.png"
              className="h-[610px] z-10 animationBigger"
            />
            <img
              src="/images/home/Bannerถุงข้าวheader-07-09.png"
              className="h-[610px] -translate-x-[175px] -translate-y-[20px]  animationBigger"
            />
          </div>
        </section>

        {/*----- Best Jasmine Rice -----*/}
        <section
          className="h-[750px] bg-[url('/images/home/BG/BannerBG-02.png')]  bannerImages flex  items-center w-full"
          // style={{
          //   backgroundImage:
          //     " url('/images/home/BG/BannerBG-01.png') ,url('/images/home/BG/BannerBG-02.png')",
          //   backgroundRepeat: "no-repeat, no-repeat ",
          //   backgroundPosition: "right , left",
          //   backgroundSize: "20%,100%",
          // }}
        >
          <div className=" mt-auto mb-20 w-[35%]  ">
            <img
              src="/images/home/รางวัล-10.png"
              className=" object-contain h-full scale-[1.8] "
            />
          </div>
          <div className="flex flex-col text-center w-[40%] px-10">
            <h1 className="font-normal text-[70px] text-brown1 tracking-wider">
              Best Jasmine Rice
            </h1>
            <p className="text-brown1">
              {lang === "th"
                ? `โรงงานข้าวเบญจรงค์ตั้งอยู่ที่จังหวัดฉะเชิงเทรา ซึ่งเป็นที่รู้จักในเรื่องการปลูกข้าวหอมมะลิที่ยอดเยี่ยม โดยเฉพาะพันธุ์ข้าวหอมมะลิ 105 ที่เป็นที่นิยมในประเทศไทยและทั่วโลก
                ตั้งแต่ปี 2013 โรงงานเบญจรงค์ได้เริ่มใช้เทคโนโลยีหุ่นยนต์ในการคัดแยกและบรรจุข้าวในถุงขนาด 5 กิโลกรัม และเราเป็นรายแรกในประเทศที่ใช้วิธีการผลิตเช่นนี้
                ตั้งแต่ปี 2019 เราได้เริ่มใช้พลังงานแสงอาทิตย์ในการผลิตไฟฟ้า ซึ่งทำให้เราสามารถลดการปล่อยก๊าซ CO2 ได้มากกว่า 1,600 ตัน และแสดงถึงความมุ่งมั่นของเราในเรื่องการรักษาสิ่งแวดล้อม
                เพื่อเฉลิมฉลองครบรอบ 25 ปีในปี 2022-23 เราได้มอบข้าวหอมมะลิเบญจรงค์พิเศษจำนวนมากกว่า 8 ล้านถุงเป็นของขวัญให้แก่ลูกค้าของเรา เพื่อแสดงความขอบคุณสำหรับการสนับสนุนอย่างต่อเนื่อง
                ในช่วงการสร้างแบรนด์ข้าวเบญจรงค์นั้น เราตั้งใจย่อชื่อเป็น BJR ซึ่งย่อมาจาก “Best Jasmine Rice” หรือ “ข้าวหอมมะลิที่ดีที่สุด” เพื่อสะท้อนถึงความมุ่งมั่นในการผลิตข้าวหอมมะลิที่มีคุณภาพสูงสุด
                `
                : ""}
            </p>
          </div>
          <div className="w-[30%] ">
            <img
              src="/images/home/รางวัล-14.png "
              className=" object-contain h-full scale-[1.1] origin-right "
            />
          </div>
        </section>

        {/*----- About US -----*/}
        <section className="h-[700px] z-10 bg-white bannerImages">
          <div className="container mx-auto grid grid-cols-2 h-full py-20 gap-20">
            <div className="flex flex-col gap-4 items-center justify-center">
              <h1>ASIA INTER RICE CO., LTD</h1>
              <h2 className="text-center">
                {lang === "th" ? (
                  <>
                    บริษัทดำเนินธุรกิจด้านการผลิตสินค้าข้าวสารบรรจุถุง <br />{" "}
                    เวลามากกว่า 20 ปี
                  </>
                ) : (
                  <>
                    Asia Inter Rice has a great long history
                    <br /> for over 20 years.
                  </>
                )}
              </h2>
              <p className="pt-4">
                {lang === "th"
                  ? "ภายใต้แบรนด์ ข้าวเบญจรงค์ ข้าวสุพรรณหงษ์ ข้าวมิตรภาพ และอีกหลากหลายแบรนด์ เพื่อตอบสนองความต้องการที่หลากหลายของผู้บริโภค เรามุ่งมั่นและพัฒนาในการดำเนินการผลิตให้เป็นไปตามระบบคุณภาพ GMP HACCP และ HALAL ซึ่งมีความสำคัญต่อผลิตภัณฑ์ข้าวสารบรรจุถุง เนื่องจากระบบจะให้ความสำคัญต่อการใช้เครื่องจักรอุปกรณ์ที่มีประสิทธิภาพควบคุมทุกขั้นตอนของกระบวนการผลิต"
                  : "Operating under the brands such as Benjarong Rice, Supanahong Rice, Mittrapap Rice,and other brands to satisfy the various consumer needs.We strive to up hold the standard of GMP HACCP and HALAL, which has the importance in production in making bag packed rice since the system focuses on the efficiency of the machinery and equipments to control the production process."}
              </p>
            </div>
            <img src="/images/mock/homepic.png" />
          </div>
        </section>

        {/*----- Recommend Product -----*/}
        <section className="bg-[url('/images/home/BG/BannerBG-04-04.png')] bannerImages py-12">
          <div className="container  mx-auto py-12">
            <h1 className="mb-12 text-center">
              {lang === "th" ? "สินค้าแนะนำ" : "One More Offer For You!"}
            </h1>
            {/* <div className="grid grid-cols-3 gap-6">
              <OfferList
                src={"/images/Banner/Hero/HealthyRice.png"}
                title={
                  lang === "th"
                    ? "Get 30% off on Fruit"
                    : "Get 30% off on Fruit"
                }
                content={
                  lang === "th"
                    ? "There are many variations of passages of Lorem Ipsum available."
                    : "There are many variations of passages of Lorem Ipsum available."
                }
              />
              <OfferList
                src={"/images/Banner/Hero/Jasmine.png"}
                title={
                  lang === "th"
                    ? "Get 30% off on Fruit"
                    : "Get 30% off on Fruit"
                }
                content={
                  lang === "th"
                    ? "There are many variations of passages of Lorem Ipsum available."
                    : "There are many variations of passages of Lorem Ipsum available."
                }
              />
              <OfferList
                src={"/images/Banner/Hero/MixedRice.png"}
                title={
                  lang === "th"
                    ? "Get 30% off on Fruit"
                    : "Get 30% off on Fruit"
                }
                content={
                  lang === "th"
                    ? "There are many variations of passages of Lorem Ipsum available."
                    : "There are many variations of passages of Lorem Ipsum available."
                }
              />
            </div> */}
            <div className="grid grid-cols-3 gap-6">
              <RecommendProduct
                src={"/images/Banner/Hero/Jasmine.png "}
                nameEN={lang === "th" ? "100% Jasmine Rice" : ""}
                nameTH={lang === "th" ? "ข้าวขาวหอมมะลิ 100%" : ""}
              />
              <RecommendProduct
                src={"/images/Banner/Hero/WhiteRice.png"}
                nameEN={lang === "th" ? "Sao Hai Rice" : ""}
                nameTH={lang === "th" ? "ข้าวขาวเสาไห้" : ""}
              />
              <RecommendProduct
                src={"/images/Banner/Hero/RiceBerry.png"}
                nameEN={lang === "th" ? "Healthy Rice" : ""}
                nameTH={lang === "th" ? "ข้าวเพื่อสุขภาพ" : ""}
                className={"w-[267px] object-cover"}
              />
            </div>
          </div>
        </section>
      </main>

      <footer>
        {/*------- Subscribe our newsletter ------*/}
        <div className="border-t-2 border-b-2 bg-white">
          <div className="container mx-auto h-[200px] grid grid-cols-6 justify-center items-center ">
            <i class="fa-brands fa-twitter text-5xl mx-auto "></i>
            <i class="fa-brands fa-twitter text-5xl mx-auto "></i>
            <i class="fa-brands fa-twitter text-5xl mx-auto "></i>
            <i class="fa-brands fa-twitter text-5xl mx-auto "></i>
            <i class="fa-brands fa-twitter text-5xl mx-auto "></i>
            <i class="fa-brands fa-twitter text-5xl mx-auto "></i>
          </div>
        </div>

        <Subscibe />
        <Footer />
      </footer>
    </div>
  );
};
export default Home;

{
  /*----- Categories Comment Old Design -----*/
}
{
  /* <section className="container mx-auto py-16">
          <h1>{lang === "th" ? "หมวดหมู่ต่างๆ" : "Featured Categories"}</h1>
          <div className="h-96 image-slider-container mt-8">
            <Slider {...CategoriesSettings}>
              <CategoriesList
                title={lang === "th" ? "ข้าวขาวหอมมะลิ" : "Jasmine Rice"}
                src={"/images/Banner/Hero/Jasmine.png"}
              />
              <CategoriesList
                title={
                  lang === "th" ? "ข้าวขาวเสาไห้" : "White Rice, Sao Hai Rice"
                }
                src={"/images/Banner/Hero/WhiteRice.png"}
              />
              <CategoriesList
                title={lang === "th" ? "ข้าวสุขภาพ" : "Healthy Rice"}
                src={"/images/Banner/Hero/HealthyRice.png"}
              />
              <CategoriesList
                title={lang === "th" ? "ข้าวหอมปทุมธานี" : "Pathumthani Rice"}
                src={"/images/Banner/Hero/ThaiAromaticRice.png"}
              />
              <CategoriesList
                title={
                  lang === "th"
                    ? "ผลิตภัณฑ์คุณภาพอื่น"
                    : "Other quality products"
                }
                src={"/images/Banner/Hero/MixedRice.png"}
              />
            </Slider>
          </div>
        </section> */
}

{
  /*----- Deal of the Day Comment Old Design-----*/
}
{
  /* <section className="container mx-auto my-20">
          <h1 className="my-4">
            {lang === "th" ? "สินค้าลดราคาวันนี้" : "Deals Of The Day"}
          </h1>
          <div className="image-slider-container">
            <Slider {...ProductSettings}>
              <ProductList
                src="/images/Banner/Hero/Jasmine.png"
                title={
                  lang === "th" ? "ข้าวขาวหอมมะลิ 100%" : "100% Jasmine Rice"
                }
                // content={lang === "th" ? "จำหน่ายโดย ข้าวเบญจรงค์" : ""}
                price={lang === "th" ? "200 บาท" : "200 Bath"}
                sale={lang === "th" ? "250 บาท" : "250 Bath"}
                value={3}
                day={"5"}
              />
              <ProductList
                src="/images/Banner/Hero/WhiteRice.png"
                title={
                  lang === "th" ? "ข้าวเสาไห้ 100%" : "Sao Hai Rice (100%)"
                }
                price={lang === "th" ? "300 บาท" : "300 Bath"}
                sale={lang === "th" ? "350 บาท" : "350 Bath"}
                value={4}
                day={"4"}
              />
              <ProductList
                src="/images/Banner/Hero/HealthyRice.png"
                title={lang === "th" ? "ข้าวแดงหอม" : "Daeng Hom Rice"}
                price={lang === "th" ? "400 บาท" : "400 Bath"}
                sale={lang === "th" ? "450 บาท" : "450 Bath"}
                value={4.5}
                day={"2.2"}
              />
              <ProductList
                src="/images/Banner/Hero/ThaiAromaticRice.png"
                title={
                  lang === "th" ? "ข้าวหอม 100%" : "Thai Aromatic Rice 100%"
                }
                price={lang === "th" ? "500 บาท" : "500 Bath"}
                sale={lang === "th" ? "550 บาท" : "550 Bath"}
                value={4.5}
                day={"3.5"}
              />
            </Slider>
          </div>
        </section> */
}
