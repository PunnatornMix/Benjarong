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

const Home = () => {
  const [lang, setLang] = useState(localStorage.getItem("i18nextLng") || "th");
  const { t, i18n } = useTranslation();
  const [isHover, setIsHover] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    arrows: true,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };
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
      <Fragment>
        <SEO
          title="Home"
          description="A description of the page"
          name="Company name"
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

        {/*----- Hero ------*/}
        <section>
          <div className="grid grid-cols-2">
            <div className="bg-gra-Lbrown flex items-center pl-20  h-[680px]">
              <div className="flex flex-col gap-4 items-start ">
                <h1>{lang === "th" ? "ข้าวขาวหอมมะลิ" : "Jasmine Rice"}</h1>

                <p>
                  {lang === "th" ? "ข้าวขาวหอมมะลิ 100%" : "100% Jasmine Rice"}
                </p>
                <Button />
              </div>
              <img
                src="/images/Banner/Hero/Jasmine.png"
                className="h-full self-end mx-auto  hover:hero1animate "
              />
            </div>
            <div className="grid grid-cols-2 ">
              <HeroList
                title={
                  lang === "th" ? "ข้าวขาวเสาไห้" : "White Rice, Sao Hai Rice"
                }
                content={
                  lang === "th" ? "ข้าวเสาไห้ 100%" : "Sao Hai Rice (100%)"
                }
                src="/images/Banner/Hero/WhiteRice.png"
                className="bg-gra-gray"
              />
              {lang === "th" ? "" : ""}
              <HeroList
                title={lang === "th" ? "ข้าวสุขภาพ" : "Healthy Rice"}
                content={lang === "th" ? "ข้าวแดงหอม" : "Daeng Hom Rice"}
                src="/images/Banner/Hero/HealthyRice.png"
                className="bg-gra-red"
              />
              <HeroList
                title={lang === "th" ? "ข้าวหอมปทุมธานี" : "Pathumthani Rice"}
                content={
                  lang === "th" ? "ข้าวหอม 100%" : "Thai Aromatic Rice 100%"
                }
                src="/images/Banner/Hero/ThaiAromaticRice.png"
                className=" bg-gra-purple"
              />
              <HeroList
                title={
                  lang === "th"
                    ? "ผลิตภัณฑ์คุณภาพอื่น"
                    : "Other quality products"
                }
                content={lang === "th" ? "ข้าวหอมผสม" : "Mixed Rice"}
                src="/images/Banner/Hero/MixedRice.png"
                className="bg-gra-green "
              />
            </div>
          </div>
        </section>

        {/*----- Categories -----*/}
        <section className="container mx-auto py-16">
          <h1>{lang === "th" ? "หมวดหมู่ต่างๆ" : "Featured Categories"}</h1>
          <div className="h-96 image-slider-container mt-8">
            <Slider {...settings}>
              {/* <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div> */}
              <img src="/images/Banner/Hero/Jasmine.png" />
              <img src="/images/Banner/Hero/WhiteRice.png" />
              <img src="/images/Banner/Hero/HealthyRice.png" />
              <img src="/images/Banner/Hero/ThaiAromaticRice.png" />
              <img src="/images/Banner/Hero/MixedRice.png" />
            </Slider>
          </div>
        </section>

        {lang === "th" ? "" : ""}
        {/*----- Promotion -----*/}
        <section className="container mx-auto">
          <h1>{lang === "th" ? "" : "One More Offer For You!"}</h1>
        </section>
        <Footer />
      </Fragment>
    </div>
  );
};
export default Home;
