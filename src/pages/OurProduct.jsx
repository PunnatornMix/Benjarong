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
import Button from "../components/Button/Button";
import HeroList from "../components/Hero/HeroList";
import Slider from "react-slick";
import ProductItem from "../components/ProductList/ProductItem";
import ProductNarbar from "../components/Navbar/ProductNarbar";

const OurProduct = () => {
  const [lang, setLang] = useState(localStorage.getItem("i18nextLng") || "th");

  const productList = [
    <ProductItem
      category={"ข้าวหอมมะลิ"}
      bestseller={true}
      src="/images/OurProduct/Category/ข้าวหอมมะลิ/1.ข้าวหอมมะลิ-100_ ถุงทอง.png"
      title={
        lang === "th"
          ? "ข้าวขาวหอมมะลิ 100% ตรา เบญจรงค์"
          : "100% Jasmine Rice Benjarong"
      }
      content={
        lang === "th"
          ? "ขนาดบรรจุ: ซอง 200 กรัม กล่อง 800 กรัม (4ซอง)2 / 5 / 15 / 48 กิโลกรัม"
          : "Capacity: 200 grams. Box 800 grams (4 packets) 2 / 5 / 15 / 48 kilograms"
      }
    />,
    <ProductItem
      category={"ข้าวหอมมะลิ"}
      src="/images/OurProduct/Category/ข้าวหอมมะลิ/2.ข้าวหอมมะลิใหม่ 100_retouch copy.png"
      title={lang === "th" ? "ข้าวหอมมะลิใหม่ 100%" : "100% Jasmine Rice"}
      content={
        lang === "th" ? "ขนาดบรรจุ: 5 กิโลกรัม" : "Capacity: 5 kilograms"
      }
    />,
    <ProductItem
      category={"ข้าวหอมมะลิ"}
      src="/images/OurProduct/Category/ข้าวหอมมะลิ/3.ข้าวหอมมะลิทอง.png"
      title={lang === "th" ? "ข้าวหอมมะลิทอง " : ""}
      content={
        lang === "th"
          ? "ขนาดบรรจุ : 2 / 5 / 15 / 48 กิโลกรัม"
          : "Capacity: 2 / 5 / 15 / 48 kilograms"
      }
    />,
    <ProductItem
      category={"ข้าวหอม"}
      bestseller={true}
      src="/images/OurProduct/Category/ข้าวหอม/4.ข้าวหอมปทุม.png"
      title={lang === "th" ? "ข้าวหอมปทุม" : ""}
      content={
        lang === "th" ? "ขนาดบรรจุ: 5 กิโลกรัม" : "Capacity: 5 kilograms"
      }
    />,
    <ProductItem
      category={"ข้าวหอม"}
      src="/images/OurProduct/Category/ข้าวหอม/5.ข้าวหอม (ถุงเขียว).png"
      title={lang === "th" ? "ข้าวหอม (ถุงเขียว)" : ""}
      content={
        lang === "th" ? "ขนาดบรรจุ: 5 กิโลกรัม" : "Capacity: 5 kilograms"
      }
    />,
    <ProductItem
      bestseller={true}
      category={"ข้าวเสาไห้"}
      src="/images/OurProduct/Category/ข้าวขาวเสาไห้/6.ข้าวเสาไห้.png"
      title={lang === "th" ? "ข้าวเสาไห้" : ""}
      content={
        lang === "th" ? "ขนาดบรรจุ: 5 กิโลกรัม" : "Capacity: 5 kilograms"
      }
    />,
    <ProductItem
      category={"ข้าวเสาไห้"}
      src="/images/OurProduct/Category/ข้าวขาวเสาไห้/7.ข้าวสาวไห้ 5_.png"
      title={lang === "th" ? "ข้าวเสาไห้" : ""}
      content={
        lang === "th" ? "ขนาดบรรจุ: 5 กิโลกรัม" : "Capacity: 5 kilograms"
      }
    />,
    <ProductItem
      category={"ข้าวเสาไห้"}
      src="/images/OurProduct/Category/ข้าวขาวเสาไห้/8.ข้าวขาวคัดพิเศษ.png"
      title={lang === "th" ? "ข้าวขาวคัดพิเศษ" : ""}
      content={
        lang === "th" ? "ขนาดบรรจุ: 5 กิโลกรัม" : "Capacity: 5 kilograms"
      }
    />,
    <ProductItem
      category={"ข้าวสุขภาพ"}
      src="/images/OurProduct/Category/ข้าวสุขภาพ/9.ข้าวแดงหอม.png"
      title={lang === "th" ? "ข้าวแดงหอม" : ""}
      content={
        lang === "th" ? "ขนาดบรรจุ: 5 กิโลกรัม" : "Capacity: 5 kilograms"
      }
    />,
    <ProductItem
      category={"ข้าวสุขภาพ"}
      src="/images/OurProduct/Category/ข้าวสุขภาพ/10.ข้าวก่ำแดงหอม.png"
      title={lang === "th" ? "ข้าวก่ำแดงหอม" : ""}
      content={
        lang === "th" ? "ขนาดบรรจุ: 5 กิโลกรัม" : "Capacity: 5 kilograms"
      }
    />,
    <ProductItem
      category={"ข้าวสุขภาพ"}
      src="/images/OurProduct/Category/ข้าวสุขภาพ/11.ข้าวไรซ์เบอร์รี่ 1 กิโล front.png"
      title={lang === "th" ? "ข้าวไรซ์เบอร์รี่" : ""}
      content={
        lang === "th" ? "ขนาดบรรจุ: 5 กิโลกรัม" : "Capacity: 5 kilograms"
      }
    />,
    <ProductItem
      category={"ข้าวเหนียว"}
      src="/images/OurProduct/Category/ข้าวเหนียว/12.ข้าวเหนียวขาว.png"
      title={lang === "th" ? "ข้าวเหนียวขาว" : ""}
      content={
        lang === "th" ? "ขนาดบรรจุ: 5 กิโลกรัม" : "Capacity: 5 kilograms"
      }
    />,
  ];
  const [filteredProducts, setFilteredProducts] = useState(productList);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [openItems, setOpenItems] = useState({});
  const [classItem, setClassItem] = useState(null);

  const { t, i18n } = useTranslation();

  const ProductSettings = {
    // dots: true,
    infinite: true,
    speed: 1000,
    arrows: true,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

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

  //-------------- Comment Function --------------------//

  useEffect(() => {
    setFilteredProducts(
      selectedCategory
        ? productList.filter(
            (product) => product.props.category === selectedCategory
          )
        : productList
    );
  }, [lang, selectedCategory]);

  const handleOnClick = (category) => {
    setSelectedCategory(category);
  };

  const handleToggle = (id) => {
    setOpenItems((prevState) => {
      const newState = { ...prevState };
      Object.keys(newState).forEach((key) => {
        newState[key] = false; // ปิด ProductNarbar ทุกอัน
      });
      newState[id] = !prevState[id]; // เปิดหรือปิด ProductNarbar ที่ถูกคลิก
      setClassItem("tracking-wider");
      return newState;
    });
  };

  const productsNav = [
    {
      id: 1,
      title: lang === "th" ? "ข้าวขาวหอมมะลิ" : "",
      category: "ข้าวหอมมะลิ",

      content:
        lang === "th"
          ? "ข้าวหอมมะลิกลางปี ทีคัดสรรเมล็ดข้าวคุณภาพดีพิเศษ ควบคุมการผลิต โดยคำนึงถุงคุณภาพข้าวหลังหุงเป็นพิเศษ เพื่อให้ข้าวหุงง่าย ได้มาตรฐาน เมล็ดข้าวเรียงตัวสวยงาม หอม นุ่ม และไม่แฉะ"
          : "",
    },
    {
      id: 2,
      title: lang === "th" ? "ข้าวหอม" : "",
      category: "ข้าวหอม",

      content:
        lang === "th"
          ? "ข้าวหอมปทุมธานี 100% ที่ผ่านการคัดสรรเมล็ดข้าวที่มีคุณภาพดีเป็นพิเศษทำให้ได้ข้าวหุงสุกที่มีความนุ่มกลิ่นหอมอ่อนๆด้วยคุณสมบัติของพันธุ์ข้าวเมื่อทิ้งไว้จนเย็นข้าวจะมีความแข็งขึ้นเล็กน้อยเป็นข้าวคุณภาพดีราคาประหยัดเหมาะสำหรับทุกครอบครัวและร้านอาหารทั่วไป"
          : "",
    },
    {
      id: 3,
      title: lang === "th" ? "ข้าวขาวเสาไห้" : "",
      category: "ข้าวเสาไห้",

      content:
        lang === "th"
          ? "คัดสรรเมล็ดข้าวที่คุณภาพดี เต็มเมล็ด เหมาะสำหรับร้านค้า ร้านอาหารทั่วไปหรือภายในครัวเรือน เป็นข้าวแข็งปานกลาง ขาว หุงขึ้นหม้อ"
          : "",
    },
    {
      id: 4,
      title: lang === "th" ? "ข้าวสุขภาพ" : "",
      category: "ข้าวสุขภาพ",

      content:
        lang === "th"
          ? "ข้าวหอมมะลิผสมข้าวกล้องหอมมะลิแดงเป็นข้าวที่ได้คิดส่วนผสมที่ลงตัวสุกง่าย หลังข้าวสุก ข้าวจะนุ่มรับประทานง่ายสามารถเพิ่มคุณค่าให้กับทุกมื้ออาหารของท่านในทุกๆวัน"
          : "",
    },

    {
      id: 5,
      title: lang === "th" ? "ข้าวเหนียว" : "",
      category: "ข้าวเหนียว",

      content:
        lang === "th"
          ? "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla pariatur sapiente voluptate sunt sequi facilis soluta iusto fugit itaque officia cum obcaecati id ipsum odit nam magni, qui eum blanditiis?"
          : "",
    },
    {
      id: 6,
      title: lang === "th" ? "ผลิตภัณฑ์คุณภาพอื่น" : "",
      category: "ผลิตภัณฑ์คุณภาพอื่น",

      content:
        lang === "th"
          ? "ส่วนผสม ข้าวหอมมะลิ 50% และ ข้าวขาว 50% เหมาะสำหรับหุงข้าวในร้านค้า ร้านอาหารทั่วไป ข้าวขาว หอม นุ่มปานกลาง หุงขึ้นหม้อ ราคาย่อมเยาว์"
          : "",
    },
  ];

  return (
    <div id="AboutUs">
      <header>
        <SEO
          title="ผลิตภัณฑ์ของเรา - ข้าวหอมมะลิและสินค้าอื่น ๆ จากเบญจรงค์"
          description="สำรวจผลิตภัณฑ์ของบริษัทเบญจรงค์ รวมถึงข้าวหอมมะลิคุณภาพสูงและสินค้าอื่น ๆ ที่เรามีให้บริการ เพื่อให้คุณได้เลือกสิ่งที่ดีที่สุดสำหรับความต้องการของคุณ"
          name="เบญจรงค์"
          type="article"
          keywords="ผลิตภัณฑ์, ข้าวหอมมะลิ, ข้าวเบญจรงค์, สินค้าข้าว, คุณภาพสูง"
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
                    <h4 className="font-[TH-Baijam]"> TH</h4>
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
                    <h4 className="font-[TH-Baijam]"> EN</h4>
                  </div>
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
        </MenuNavBar>
      </header>

      <main>
        {/*------- Hero -------*/}
        <section>
          <img src="/images/OurProduct/Banner-Product-17.jpg" />
        </section>
        {/*------- Hero -------*/}

        <section className=" mx-auto pt-16">
          <div className="text-center">
            <h4 className="font-[300] text-Lbrown ">OUR PRODUCT</h4>
            <h2 className="text-brown1 ">สินค้าแนะนำ</h2>
            <div className="grid grid-cols-3  mx-6 py-16  border-Lbrown border-b-[1px]">
              <ProductItem
                bestseller={true}
                src="/images/Banner/Hero/Jasmine.png"
                title={
                  lang === "th"
                    ? "ข้าวขาวหอมมะลิ 100% ตรา เบญจรงค์"
                    : "100% Jasmine Rice Benjarong"
                }
                content={
                  lang === "th"
                    ? "ขนาดบรรจุ: ซอง 200 กรัม กล่อง 800 กรัม (4ซอง)2 / 5 / 15 / 48 กิโลกรัม"
                    : "Capacity: 200 grams. Box 800 grams (4 packets) 2 / 5 / 15 / 48 kilograms"
                }
              />
              <ProductItem
                bestseller={true}
                src="/images/Banner/Hero/ThaiAromaticRice.png"
                title={
                  lang === "th"
                    ? "ข้าวขาวหอมมะลิ (ใหม่) 100% ตรา เบญจรงค์"
                    : "100% Jasmine Rice (New Crop) Benjarong"
                }
                content={
                  lang === "th"
                    ? "ขนาดบรรจุ: 5 กิโลกรัม"
                    : "Capacity: 5 kilograms"
                }
              />
              <ProductItem
                bestseller={true}
                src="/images/Banner/Hero/WhiteRice.png"
                title={
                  lang === "th"
                    ? "ข้าวเสาไห้ 100%"
                    : "Sao Hai Rice (100%) Benjarong"
                }
                content={
                  lang === "th"
                    ? "ขนาดบรรจุ : 2 / 5 / 15 / 48 กิโลกรัม"
                    : "Capacity: 2 / 5 / 15 / 48 kilograms"
                }
              />
              ,
            </div>
          </div>
        </section>

        {/*------- Hero -------*/}
        <section>
          <img src="/images/OurProduct/Banner-Product-18.jpg" />
        </section>
        {/*------- Hero -------*/}

        <section>
          <div className="text-center pt-16">
            <h4 className="font-[300] text-Lbrown ">OUR RICE</h4>
            <h2 className="text-brown1 ">ข้าวทั้งหมด</h2>
          </div>
          <div className="flex bg-Lbrown2 h-[750px] mt-20 py-6">
            <div className="flex flex-col mt-4 mx-5  px-24 w-1/3">
              <div className="">
                {lang === "th" ? "" : ""}
                <h3 className="text-Lbrown font-light">
                  {lang === "th" ? "ชนิดของข้าว" : ""}
                </h3>
                {productsNav.map((product) => (
                  <div onClick={() => handleOnClick(product.category)}>
                    <ProductNarbar
                      key={product.id}
                      isOpen={!!openItems[product.id]}
                      classItem={classItem}
                      title={product.title}
                      content={product.content}
                      onToggle={() => handleToggle(product.id)}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="image-slider-container w-[60%] my-auto ">
              {filteredProducts.length > 1 ? (
                <Slider {...ProductSettings}>
                  {filteredProducts.map((product, index) => product)}
                </Slider>
              ) : (
                <>{filteredProducts.map((product, index) => product)}</>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer>
        {/*------- Subscribe our newsletter ------*/}
        <Subscibe />
        <Footer />
      </footer>
    </div>
  );
};
export default OurProduct;
