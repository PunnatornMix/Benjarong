import React, { Fragment, useState, useEffect } from "react";

import { useTranslation } from "react-i18next";

import { Box, FormControl, MenuItem, Select } from "@mui/material";

import SEO from "../components/Seo/Seo";
import MenuNavBar from "../components/Navbar/MenuNavBar";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../components/Footer/Footer";

import Subscibe from "../components/Subscibe/Subscibe";
import LogoNavBar from "../components/Navbar/logoNavBar";
// import ProductList from "../components/ProductList/ProductList";
import CSRItem from "../components/Navbar/CSRItem";
import CSRPost from "../components/Navbar/CSRPost";

const CSR = () => {
  const [lang, setLang] = useState(localStorage.getItem("i18nextLng") || "th");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const { t, i18n } = useTranslation();

  const CSRContent = {
    A: {
      img: "/images/CSR/CSR01.png",
      title:
        lang === "th"
          ? "ข้าวกล้องหอมมะลิแดง แหล่งรวมวิตามิน คุณประโยชน์ที่เราคัดสรรมาเพื่อคุณ"
          : "",
      date: lang === "th" ? "มกรา 09, 2024" : "Jan 09, 2024",

      content:
        lang === "th"
          ? "หลายคนอาจจะเคยได้ยินชื่อของข้าวกล้องหอมมะลิแดง ซึ่งก่อนหน้านี้ข้าวกล้องชนิดนี้ไม่ค่อยได้รับความนิยมมากนัก เพราะมีเทคโนโลยีใหม่ๆ ในการแปรรูปข้าวให้ขาวสะอาด ดูน่ากิน แต่คุณค่าของข้าวก็ถูกลดลงไปอย่างน่าเสียดาย สุดท้ายแล้วความนิยมในการรับประทานก็กลับมาอีกครั้ง เมื่อค้นพบว่า ข้าวกล้องหอมมะลิแดงมีสารอาหารต่างๆ ที่มีประโยชน์ต่อร่างกายอย่างมากมายค่ะ"
          : "",
    },
    B: {
      img: "/images/CSR/CSR02.png",

      title:
        lang === "th"
          ? "“ข้าวไรซ์เบอร์รี่” ต้านสารพัดโรคร้าย คุณประโยชน์ที่เราคัดสรรมาเพื่อคุณ"
          : "",
      date: lang === "th" ? "มีนา 15, 2024" : "Mar 15, 2024",
      content:
        lang === "th"
          ? "หากจะพูดถึงข้าวที่ให้คุณค่าทางโภชนาการได้อย่างครบถ้วน 3 อันดับแรกย่อมต้องมีชื่อของข้าวไรซ์เบอร์รี่อย่างแน่นอนค่ะ นอกจากนี้ข้าวไรซ์เบอร์รี่ยังมีกลิ่นหอมเฉพาะตัว และรสชาติยังหอมมัน ให้เนื้อสัมผัสที่เหนียวนุ่ม วันนี้เบญจรงค์จะมาให้ความรู้เกี่ยวกับข้าวไรซ์เบอร์รี่ว่ามีต้นกำเนิดและมีคุณค่าทางโภชนาการมากขนาดไหน"
          : "",
    },
  };
  const CSRList = [
    <CSRItem
      src={CSRContent.A.img}
      title={CSRContent.A.title}
      date={CSRContent.A.date}
      content={CSRContent.A.content}
    />,
    <CSRItem
      src={CSRContent.B.img}
      title={CSRContent.B.title}
      date={CSRContent.B.date}
      content={CSRContent.B.content}
    />,
    <CSRItem
      src={CSRContent.A.img}
      title={CSRContent.A.title}
      date={CSRContent.A.date}
      content={CSRContent.A.content}
    />,
    <CSRItem
      src={CSRContent.B.img}
      title={CSRContent.B.title}
      date={CSRContent.B.date}
      content={CSRContent.B.content}
    />,
  ];

  useEffect(() => {
    // Sync language with i18n
    const storedLang = localStorage.getItem("i18nextLng");
    if (storedLang !== lang) {
      setLang(storedLang);
    }
  }, [i18n, lang]);

  useEffect(() => {
    // Filter products when lang or category changes
    setFilteredProducts(
      selectedCategory
        ? CSRList.filter(
            (product) => product.props.category === selectedCategory
          )
        : CSRList
    );
  }, [lang, selectedCategory]);

  const handleOnClick = (category) => {
    // const filtered = productList.filter(
    //   (product) => product.category === category
    // );
    setSelectedCategory(category);
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
    <div id="CSR">
      <header>
        <SEO
          title="กิจกรรม CSR ของบริษัทเบญจรงค์ - การสนับสนุนและการมีส่วนร่วมในสังคม"
          description="เรียนรู้เกี่ยวกับกิจกรรม CSR ของบริษัทเบญจรงค์ การสนับสนุนสังคมและโครงการต่างๆ ที่เรามีส่วนร่วมเพื่อพัฒนาสังคมและชุมชน"
          name="เบญจรงค์"
          type="article"
          keywords="CSR, กิจกรรมสังคม, บริษัทเบญจรงค์, การสนับสนุนชุมชน, โครงการสังคม"
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
      </header>

      <main>
        <section className="container mx-auto flex gap-10 py-14 first-letter:*:">
          <div className="w-1/4">
            {lang === "th" ? "" : ""}

            <div className="flex flex-col gap-4 min-w-[280px] rounded-md p-4 mr-3 bg-white border ">
              <div className="border-b-2 ">
                <h3 className="font-medium underline-title">
                  {lang === "th" ? "หมวดหมู่" : "Categories"}
                </h3>
              </div>
              {/* <div
                onClick={() => setFilteredProducts(productList)}
                className="flex items-center gap-4 cursor-pointer"
              >
                <i class="fa-solid fa-list mt-1 ml-1"></i>
                <p>{lang === "th" ? "สินค้าทั้งหมด" : "All Product"}</p>
              </div> */}
              <div
                onClick={() => handleOnClick("Jasmine Rice")}
                value="Jasmine Rice"
              >
                <LogoNavBar content={lang === "th" ? "ข่าวสาร" : "News"}>
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
                      d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
                    />
                  </svg>
                </LogoNavBar>
              </div>
              <div
                onClick={() => handleOnClick("White Rice, Sao Hai Rice")}
                value="White Rice, Sao Hai Rice"
              >
                <LogoNavBar
                  // src="/images/Banner/Hero/WhiteRice.png"
                  content={lang === "th" ? "กิจกรรม" : "Activity"}
                >
                  <i className="pt-1 fa-solid fa-list-check"></i>
                </LogoNavBar>
              </div>
              <div onClick={() => handleOnClick("Healthy Rice")}>
                <LogoNavBar
                  // src="/images/Banner/Hero/HealthyRice.png"
                  content={lang === "th" ? "CSR" : "CSR"}
                >
                  <i className="pt-1 fa-regular fa-clipboard"></i>
                </LogoNavBar>
              </div>
            </div>

            <div className="flex flex-col gap-4 min-w-[280px] rounded-md p-4 mr-3 bg-white border mt-12">
              <div className="border-b-2 ">
                <h3 className="font-medium underline-title ">
                  {lang === "th" ? "ข่าวยอดนิยม" : "Trending News"}
                </h3>
              </div>

              <div className="flex flex-col gap-4">
                <CSRPost
                  src={CSRContent.A.img}
                  title={CSRContent.A.title}
                  date={CSRContent.A.date}
                />
                <CSRPost
                  src={CSRContent.B.img}
                  title={CSRContent.B.title}
                  date={CSRContent.B.date}
                />
                <CSRPost
                  src={CSRContent.A.img}
                  title={CSRContent.A.title}
                  date={CSRContent.A.date}
                />
                <CSRPost
                  src={CSRContent.B.img}
                  title={CSRContent.B.title}
                  date={CSRContent.B.date}
                />
              </div>
            </div>
            <div className="flex flex-col gap-4 min-w-[280px] rounded-md p-4 mr-3 bg-white border mt-12">
              <div className="border-b-2 ">
                <h3 className="font-medium underline-title ">
                  {lang === "th" ? "แท็กยอดนิยม" : "Popular tag"}
                </h3>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-16 w-3/4">
            {CSRList.map((item) => item)}
          </div>
        </section>
      </main>

      {/*------- Subscribe our newsletter ------*/}
      <footer>
        <Subscibe />

        <Footer />
      </footer>
    </div>
  );
};
export default CSR;
