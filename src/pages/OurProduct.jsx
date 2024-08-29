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
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [openItems, setOpenItems] = useState({});
  const [classItem, setClassItem] = useState(null);

  const { t, i18n } = useTranslation();

  const productList = [
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
    />,
    <ProductItem
      src="/images/Banner/Hero/Jasmine.png"
      category="Jasmine Rice"
      title={lang === "th" ? "ข้าวขาวหอมมะลิ 100%" : "100% Jasmine Rice"}
      content={
        lang === "th" ? "ขนาดบรรจุ: 5 กิโลกรัม" : "Capacity: 5 kilograms"
      }
    />,
    <ProductItem
      bestseller={true}
      src="/images/Banner/Hero/WhiteRice.png"
      title={
        lang === "th" ? "ข้าวเสาไห้ 100%" : "Sao Hai Rice (100%) Benjarong"
      }
      content={
        lang === "th"
          ? "ขนาดบรรจุ : 2 / 5 / 15 / 48 กิโลกรัม"
          : "Capacity: 2 / 5 / 15 / 48 kilograms"
      }
    />,

    // <ProductList
    //   category="Other quality products"
    //   title={lang === "th" ? "ผลิตภัณฑ์คุณภาพอื่น" : "Mixed Rice"}
    //   src={"/images/Banner/Hero/MixedRice.png"}
    //   price={lang === "th" ? "200 บาท" : "500 Bath"}
    //   sale={lang === "th" ? "550 บาท" : "550 Bath"}
    //   value={4.5}
    //   day={"2.2"}
    // />,
  ];

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

  const products = [
    {
      id: 1,
      title: lang === "th" ? "ข้าวขาวหอมมะลิ" : "",
      content:
        lang === "th"
          ? "ข้าวหอมมะลิกลางปี ทีคัดสรรเมล็ดข้าวคุณภาพดีพิเศษ ควบคุมการผลิต โดยคำนึงถึงคุณภาพข้าวหลังหุงเป็นพิเศษ..."
          : "",
    },
    {
      id: 2,
      title: lang === "th" ? "ข้าวขาวเสาไห้" : "",
      content:
        lang === "th"
          ? "ข้าวหอมมะลิกลางปี ทีคัดสรรเมล็ดข้าวคุณภาพดีพิเศษ ควบคุมการผลิต โดยคำนึงถึงคุณภาพข้าวหลังหุงเป็นพิเศษ..."
          : "",
    },
    {
      id: 3,
      title: lang === "th" ? "ข้าวสุขภาพ" : "",
      content:
        lang === "th"
          ? "ข้าวหอมมะลิกลางปี ทีคัดสรรเมล็ดข้าวคุณภาพดีพิเศษ ควบคุมการผลิต โดยคำนึงถึงคุณภาพข้าวหลังหุงเป็นพิเศษ..."
          : "",
    },
    {
      id: 4,
      title: lang === "th" ? "ข้าวหอมปทุมธานี" : "",
      content:
        lang === "th"
          ? "ข้าวหอมมะลิกลางปี ทีคัดสรรเมล็ดข้าวคุณภาพดีพิเศษ ควบคุมการผลิต โดยคำนึงถึงคุณภาพข้าวหลังหุงเป็นพิเศษ..."
          : "",
    },
    {
      id: 5,
      title: lang === "th" ? "ผลิตภัณฑ์คุณภาพอื่น" : "",
      content:
        lang === "th"
          ? "ข้าวหอมมะลิกลางปี ทีคัดสรรเมล็ดข้าวคุณภาพดีพิเศษ ควบคุมการผลิต โดยคำนึงถึงคุณภาพข้าวหลังหุงเป็นพิเศษ..."
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
                    <p> TH</p>
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
                    <p> EN</p>
                  </div>
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
        </MenuNavBar>
      </header>

      <main>
        <section className=" mx-auto py-24">
          <div className="text-center">
            <h3 className="font-[300] text-Lbrown translate-y-2">
              OUR PRODUCT
            </h3>
            <h1 className="text-brown1 ">สินค้าแนะนำ</h1>
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

        <section>
          <div className="text-center">
            <h3 className="font-[300] text-Lbrown ">OUR RICE</h3>
            <h1 className="text-brown1 ">ข้าวทั้งหมด</h1>
          </div>
          <div className="flex bg-Lbrown2 my-20 py-6">
            <div className="flex flex-col my-20 mx-5  px-24 w-1/3">
              <div className="">
                {lang === "th" ? "" : ""}
                <h2 className="text-Lbrown font-light">
                  {lang === "th" ? "ชนิดของข้าว" : ""}
                </h2>
                <div>
                  {products.map((product) => (
                    <ProductNarbar
                      key={product.id}
                      isOpen={!!openItems[product.id]}
                      classItem={classItem}
                      title={product.title}
                      content={product.content}
                      onToggle={() => handleToggle(product.id)}
                    />
                  ))}
                </div>
                {/* <ProductNarbar
                  isOpen={true}
                  title={lang === "th" ? "ข้าวขาวหอมมะลิ" : ""}
                  content={
                    lang === "th"
                      ? "ข้าวหอมมะลิกลางปี ทีคัดสรรเมล็ดข้าวคุณภาพดีพิเศษ ควบคุมการผลิต โดยคำนึงถุงคุณภาพข้าวหลังหุงเป็นพิเศษ เพื่อให้ข้าวหุงง่าย ได้มาตรฐาน เมล็ดข้าวเรียงตัวสวยงาม หอม นุ่ม และไม่แฉะ"
                      : ""
                  }
                />
                <ProductNarbar
                  title={lang === "th" ? "ข้าวขาวเสาไห้" : ""}
                  content={
                    lang === "th"
                      ? "ข้าวหอมมะลิกลางปี ทีคัดสรรเมล็ดข้าวคุณภาพดีพิเศษ ควบคุมการผลิต โดยคำนึงถุงคุณภาพข้าวหลังหุงเป็นพิเศษ เพื่อให้ข้าวหุงง่าย ได้มาตรฐาน เมล็ดข้าวเรียงตัวสวยงาม หอม นุ่ม และไม่แฉะ"
                      : ""
                  }
                />
                <ProductNarbar
                  title={lang === "th" ? "ข้าวสุขภาพ" : ""}
                  content={
                    lang === "th"
                      ? "ข้าวหอมมะลิกลางปี ทีคัดสรรเมล็ดข้าวคุณภาพดีพิเศษ ควบคุมการผลิต โดยคำนึงถุงคุณภาพข้าวหลังหุงเป็นพิเศษ เพื่อให้ข้าวหุงง่าย ได้มาตรฐาน เมล็ดข้าวเรียงตัวสวยงาม หอม นุ่ม และไม่แฉะ"
                      : ""
                  }
                />
                <ProductNarbar
                  title={lang === "th" ? "ข้าวหอมปทุมธานี" : ""}
                  content={
                    lang === "th"
                      ? "ข้าวหอมมะลิกลางปี ทีคัดสรรเมล็ดข้าวคุณภาพดีพิเศษ ควบคุมการผลิต โดยคำนึงถุงคุณภาพข้าวหลังหุงเป็นพิเศษ เพื่อให้ข้าวหุงง่าย ได้มาตรฐาน เมล็ดข้าวเรียงตัวสวยงาม หอม นุ่ม และไม่แฉะ"
                      : ""
                  }
                />
                <ProductNarbar
                  title={lang === "th" ? "ผลิตภัณฑ์คุณภาพอื่น" : ""}
                  content={
                    lang === "th"
                      ? "ข้าวหอมมะลิกลางปี ทีคัดสรรเมล็ดข้าวคุณภาพดีพิเศษ ควบคุมการผลิต โดยคำนึงถุงคุณภาพข้าวหลังหุงเป็นพิเศษ เพื่อให้ข้าวหุงง่าย ได้มาตรฐาน เมล็ดข้าวเรียงตัวสวยงาม หอม นุ่ม และไม่แฉะ"
                      : ""
                  }
                /> */}
              </div>
            </div>
            <div className="image-slider-container w-[60%] my-auto">
              <Slider {...ProductSettings}>
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
                      ? "ข้าวขาว 5% เบญจรงค์"
                      : "White Rice (5%) Benjarong"
                  }
                  content={
                    lang === "th"
                      ? "ขนาดบรรจุ : 1 / 5 กิโลกรัม"
                      : "Capacity : 1 / 5 kilograms"
                  }
                />
              </Slider>
            </div>
          </div>
        </section>

        {/*----- Hero Old Code ------*/}
        {/* <section>
          <div className="grid grid-cols-2">
            <div className="bg-gra-Lbrown flex items-center pl-20  h-[680px]">
              <div className="flex flex-col gap-4 items-start ">
                <h1>{lang === "th" ? "ข้าวขาวหอมมะลิ" : "Jasmine Rice"}</h1>

                <p>
                  {lang === "th" ? "ข้าวขาวหอมมะลิ 100%" : "100% Jasmine Rice"}
                </p>
                <Button
                  href="/product-detail"
                  color={"brown"}
                  outline={"outline"}
                  text={lang === "th" ? "สั่งซื้อ" : "Shop Now"}
                />
              </div>
              <a href="/product-detail" className="h-full">
                <img
                  src="/images/Banner/Hero/Jasmine.png"
                  className="h-full self-end mx-auto hover:hero1animate cursor-pointer"
                />
              </a>
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
                href="/product-detail"
              />
              {lang === "th" ? true : ""}
              <HeroList
                title={lang === "th" ? "ข้าวสุขภาพ" : "Healthy Rice"}
                content={lang === "th" ? "ข้าวแดงหอม" : "Daeng Hom Rice"}
                src="/images/Banner/Hero/HealthyRice.png"
                className="bg-gra-red"
                href="/product-detail"
              />
              <HeroList
                title={lang === "th" ? "ข้าวหอมปทุมธานี" : "Pathumthani Rice"}
                content={
                  lang === "th" ? "ข้าวหอม 100%" : "Thai Aromatic Rice 100%"
                }
                src="/images/Banner/Hero/ThaiAromaticRice.png"
                className=" bg-gra-purple"
                href="/product-detail"
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
                href="/product-detail"
              />
            </div>
          </div>
        </section> */}

        {/*----- All Product Old Code  -----*/}
        {/* <section className="container mx-auto my-20">
          <h1 className="my-4">
            {lang === "th" ? "สินค้าทั้งหมด" : "All Product"}
          </h1>
          <div className=" image-slider-container ">
            <Slider {...ProductSettings}>
              <ProductList
                src="/images/Banner/Hero/Jasmine.png"
                title={
                  lang === "th" ? "ข้าวขาวหอมมะลิ 100%" : "100% Jasmine Rice"
                }
                // content={lang === "th" ? "จำหน่ายโดย ข้าวเบญจรงค์" : ""}
                // price={lang === "th" ? "200 บาท" : "200 Bath"}
                // sale={lang === "th" ? "250 บาท" : "250 Bath"}
              />
              <ProductList
                src="/images/Banner/Hero/WhiteRice.png"
                title={
                  lang === "th" ? "ข้าวเสาไห้ 100%" : "Sao Hai Rice (100%)"
                }
                // price={lang === "th" ? "300 บาท" : "300 Bath"}
              />
              <ProductList
                src="/images/Banner/Hero/HealthyRice.png"
                title={lang === "th" ? "ข้าวแดงหอม" : "Daeng Hom Rice"}
                // price={lang === "th" ? "400 บาท" : "400 Bath"}
              />
              <ProductList
                src="/images/Banner/Hero/ThaiAromaticRice.png"
                title={
                  lang === "th" ? "ข้าวหอม 100%" : "Thai Aromatic Rice 100%"
                }
                // price={lang === "th" ? "500 บาท" : "500 Bath"}
              />
            </Slider>
          </div>
        </section> */}
      </main>

      {/*----------- Comment Old Design -------------*/}
      {/* <section className="bg-Lbrown2">
          <div className="container mx-auto flex justify-center py-10">
            <div className="flex flex-col gap-10">
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
        </section> */}

      <footer>
        {/*------- Subscribe our newsletter ------*/}
        <Subscibe />
        <Footer />
      </footer>
    </div>
  );
};
export default OurProduct;
