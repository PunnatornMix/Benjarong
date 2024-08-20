import React, { Fragment, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Box, FormControl, MenuItem, Select } from "@mui/material";
import SEO from "../components/Seo/Seo";
import MenuNavBar from "../components/Navbar/MenuNavBar";
import LogoNavBar from "../components/Navbar/logoNavBar";

import "../image-gallery.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../components/Footer/Footer";

import Subscibe from "../components/Subscibe/Subscibe";
import ProductList from "../components/ProductList/ProductList";

const OurProduct = () => {
  const [lang, setLang] = useState(localStorage.getItem("i18nextLng") || "th");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const { t, i18n } = useTranslation();

  const productList = [
    <ProductList
      src="/images/Banner/Hero/Jasmine.png"
      category="Jasmine Rice"
      title={lang === "th" ? "ข้าวขาวหอมมะลิ 100%" : "100% Jasmine Rice"}
      price={lang === "th" ? "200 บาท" : "200 Bath"}
      sale={lang === "th" ? "250 บาท" : "250 Bath"}
      value={3}
      // day={"5"}
    />,
    <ProductList
      src="/images/Banner/Hero/WhiteRice.png"
      category="White Rice, Sao Hai Rice"
      title={lang === "th" ? "ข้าวเสาไห้ 100%" : "Sao Hai Rice (100%)"}
      price={lang === "th" ? "300 บาท" : "300 Bath"}
      sale={lang === "th" ? "350 บาท" : "350 Bath"}
      value={4}
      // day={"4"}
    />,
    <ProductList
      src="/images/Banner/Hero/HealthyRice.png"
      category="Healthy Rice"
      title={lang === "th" ? "ข้าวแดงหอม" : "Daeng Hom Rice"}
      price={lang === "th" ? "400 บาท" : "400 Bath"}
      sale={lang === "th" ? "450 บาท" : "450 Bath"}
      value={4.5}
      // day={"2.2"}
    />,
    <ProductList
      title={lang === "th" ? "ข้าวหอมปทุมธานี" : "Thai Aromatic Rice 100%"}
      category="Pathumthani Rice"
      src={"/images/Banner/Hero/ThaiAromaticRice.png"}
      price={lang === "th" ? "500 บาท" : "500 Bath"}
      // sale={lang === "th" ? "550 บาท" : "550 Bath"}
      value={4.5}
      // day={"2.2"}
    />,
    <ProductList
      category="Other quality products"
      title={lang === "th" ? "ผลิตภัณฑ์คุณภาพอื่น" : "Mixed Rice"}
      src={"/images/Banner/Hero/MixedRice.png"}
      price={lang === "th" ? "200 บาท" : "500 Bath"}
      // sale={lang === "th" ? "550 บาท" : "550 Bath"}
      value={4.5}
      // day={"2.2"}
    />,
  ];

  useEffect(() => {
    // Sync language with i18n
    const storedLang = localStorage.getItem("i18nextLng");
    if (storedLang !== lang) {
      setLang(storedLang);
    }
  }, [i18n, lang]);

  const handleLanguageChange = (e) => {
    const newLang = e.target.value;
    i18n.changeLanguage(newLang);
    localStorage.setItem("i18nextLng", newLang);
    setLang(newLang);
  };

  useEffect(() => {
    // Filter products when lang or category changes
    setFilteredProducts(
      selectedCategory
        ? productList.filter(
            (product) => product.props.category === selectedCategory
          )
        : productList
    );
  }, [lang, selectedCategory]);

  const handleOnClick = (category) => {
    // const filtered = productList.filter(
    //   (product) => product.category === category
    // );
    setSelectedCategory(category);
  };

  // const productList = [
  //   {
  //     Jasmine: {
  //       src: "/images/Banner/Hero/Jasmine.png",
  //       title: lang === "th" ? "ข้าวขาวหอมมะลิ 100%" : "Sao Hai Rice (100%)",
  //       price: lang === "th" ? "200 บาท" : "200 Bath",
  //       sale: lang === "th" ? "250 บาท" : "250 Bath",
  //       value: `3`,
  //     },
  //   },
  //   {
  //     WhiteRice: {
  //       src: "/images/Banner/Hero/WhiteRice.png",
  //       title: lang === "th" ? "ข้าวเสาไห้ 100%" : "",
  //       price: lang === "th" ? "300 บาท" : "300 Bath",
  //       sale: lang === "th" ? "350 บาท" : "350 Bath",
  //       value: `4`,
  //     },
  //   },
  //   {
  //     HealthyRice: {
  //       src: "/images/Banner/Hero/HealthyRice.png",
  //       title: lang === "th" ? "ข้าวแดงหอม" : "Daeng Hom Rice",
  //       price: lang === "th" ? "200 บาท" : "200 Bath",
  //       sale: lang === "th" ? "250 บาท" : "250 Bath",
  //       value: `3`,
  //     },
  //   },
  //   {
  //     HealthyRice: {
  //       srcL: "/images/Banner/Hero/ThaiAromaticRice.png",
  //       title: lang === "th" ? "ข้าวหอมปทุมธานี" : "Thai Aromatic Rice 100%",
  //       price: lang === "th" ? "200 บาท" : "200 Bath",
  //       sale: lang === "th" ? "250 บาท" : "250 Bath",
  //       value: `3`,
  //     },
  //   },
  //   {
  //     MixedRice: {
  //       srcL: "/images/Banner/Hero/MixedRice.png",
  //       title: lang === "th" ? "ผลิตภัณฑ์คุณภาพอื่น" : "Mixed Rice",
  //       price: lang === "th" ? "200 บาท" : "200 Bath",
  //       sale: lang === "th" ? "250 บาท" : "250 Bath",
  //       value: `3`,
  //     },
  //   },
  // ];

  return (
    <div id="AboutUs">
      <Fragment>
        <SEO
          title="OurProduct"
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
          <div className="container mx-auto flex justify-center py-10">
            <div className="flex flex-col gap-10">
              {/*------ SideBar --------*/}
              <div className="flex flex-col gap-4 min-w-[280px] rounded-md p-4 mr-3 bg-white border ">
                <div className="border-b-2 ">
                  <h3 className="font-medium underline-title">
                    {lang === "th" ? "ประเภทสินค้า" : "Categories"}
                  </h3>
                </div>
                <div
                  onClick={() => setFilteredProducts(productList)}
                  className="flex items-center gap-4 cursor-pointer"
                >
                  <i class="fa-solid fa-list mt-1 ml-1"></i>
                  <p>{lang === "th" ? "สินค้าทั้งหมด" : "All Product"}</p>
                </div>
                <div
                  onClick={() => handleOnClick("Jasmine Rice")}
                  value="Jasmine Rice"
                >
                  <LogoNavBar
                    src="/images/Banner/Hero/Jasmine.png"
                    content={lang === "th" ? "ข้าวขาวหอมมะลิ" : "Jasmine Rice"}
                  />
                </div>
                <div
                  onClick={() => handleOnClick("White Rice, Sao Hai Rice")}
                  value="White Rice, Sao Hai Rice"
                >
                  <LogoNavBar
                    src="/images/Banner/Hero/WhiteRice.png"
                    content={
                      lang === "th"
                        ? "ข้าวขาวเสาไห้"
                        : "White Rice, Sao Hai Rice"
                    }
                  />
                </div>
                <div onClick={() => handleOnClick("Healthy Rice")}>
                  <LogoNavBar
                    src="/images/Banner/Hero/HealthyRice.png"
                    content={lang === "th" ? "ข้าวสุขภาพ" : "Healthy Rice"}
                  />
                </div>
                <div onClick={() => handleOnClick("Pathumthani Rice")}>
                  <LogoNavBar
                    src="/images/Banner/Hero/ThaiAromaticRice.png"
                    content={
                      lang === "th" ? "ข้าวหอมปทุมธานี" : "Pathumthani Rice"
                    }
                  />
                </div>
                <div onClick={() => handleOnClick("Other quality products")}>
                  <LogoNavBar
                    src="/images/Banner/Hero/MixedRice.png"
                    content={
                      lang === "th"
                        ? "ผลิตภัณฑ์คุณภาพอื่น"
                        : "Other quality products"
                    }
                  />
                </div>
              </div>
              <div className="flex flex-col  gap-4 min-w-[280px] rounded-md p-4 mr-3 bg-white border">
                <div className="border-b-2 ">
                  <h3 className="font-medium underline-title">
                    {lang === "th" ? "แบรนด์" : "Brands"}
                  </h3>
                </div>

                <LogoNavBar
                  src="/images/logo/band.png"
                  content={lang === "th" ? "ข้าวเบญจรงค์" : "Benjarong Rice"}
                />
              </div>
            </div>

            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 ">
              {filteredProducts.map((product, index) => product)}
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
export default OurProduct;
