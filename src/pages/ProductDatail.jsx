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

const ProductDatail = () => {
  const [lang, setLang] = useState(localStorage.getItem("i18nextLng") || "th");
  const { t, i18n } = useTranslation();

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

        {lang === "th" ? "" : ""}

        <section className="bg-Lbrown2">
          <div className="flex container gap-8 mx-auto pt-10 ">
            {/* <img src="Jasmine.png" /> */}
            <ImageGallery
              items={images}
              //   thumbnailClass={{ heigsht: "200px" }}
              showFullscreenButton={false}
              showPlayButton={false}
              showNav={false}
            />
            <div>
              <h3 className="font-semibold">
                {lang === "th" ? "ข้าวหอมมะลิ 100% ขนาด 5 กก." : ""}
              </h3>
              <p>
                {lang === "th"
                  ? " Lorem ipsum dolor sit amet consectetur adipisicing elit."
                  : ""}
              </p>
              <h3>{lang === "th" ? "" : ""}</h3>
            </div>
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
