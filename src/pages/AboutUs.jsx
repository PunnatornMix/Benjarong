import React, { Fragment, useState, useEffect } from "react";

import { useTranslation } from "react-i18next";

import { Box, FormControl, MenuItem, Select } from "@mui/material";

import SEO from "../components/Seo/Seo";
import MenuNavBar from "../components/Navbar/MenuNavBar";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../components/Footer/Footer";

import Subscibe from "../components/Subscibe/Subscibe";

const AboutUs = () => {
  const [lang, setLang] = useState(localStorage.getItem("i18nextLng") || "th");
  const { t, i18n } = useTranslation();

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
          title="About-us"
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
        <section className="container mx-auto py-20">
          <div className="flex gap-20">
            <img src="/images/aboutus/about1.jpg" />
            <div className="flex flex-col items-center gap-8">
              <img src="/images/logo/band.png" />
              <p className="indent-16">
                {lang === "th"
                  ? "ความเป็นมาของ บริษัท เอเชีย อินเตอร์ ไรซ์ จำกัด ผู้ก่อตั้ง นำโดยคุณถาวร ทองพิทักษ์ถาวรและกลุ่มผู้บริหาร ซึ่งทุกท่าน ล้วนมีประสบการณ์ที่เกี่ยวข้องกับธุรกิจข้าวสารและมีความสัมพันธ์อันดีกับเครือข่ายโรงสีทั่วประเทศ มาเป็นระยะเวลามากกว่า 10 ปี ก่อนที่จะเริ่มก่อตั้งบริษัทฯ คณะผู้บริหารผ่านการทำงานที่เกี่ยวข้องกับสายธุรกิจข้าวสารด้านต่างๆ ได้แก่ หยงหรือนายหน้าข้าวสาร ธุรกิจกระสอบ-บรรจุภัณฑ์ จากนั้น ได้เริ่มดำเนินธุรกิจผู้ส่งออกข้าวได้ระยะหนึ่ง จึงมีแนวคิดว่า ข้าวเป็นสินค้าหลักที่สำคัญของประเทศไทย หากสินค้าข้าวจะเข้มแข็งจำเป็นต้องมีตราสินค้าที่เป็นที่ยอมรับของคนไทยก่อน จึงมุ่งความสำคัญในการ ขยายธุรกิจข้าวสารบรรจุถุงในนาม บริษัท เอเชีย อินเตอร์ ไรซ์ จำกัด ในปี 2538 เป็นต้นมา"
                  : "Asia Inter Rice Group, Asia Inter Rice CO., LTD. We are the leading manufacturer company in domestic rice business in Thailand under our brand Benjarong , Supanahong, Mittrapap and other customer’s brand. For more than 20 years' experience, we are advantage in Bag Packed Rice in variety channel for domestic market, especially Super especially, Super – Hyper market (Lotus, Big C, Supermatket >> Macro), Supermarketing Supermarket - Chain Store, and rural Traditional Trade in Thailand. However, we are dedicated to our continuous improvement in product and service standards to meet the increasing needs and demands of all our customers , and now we have GMP & HACCP certifications by Bureau Veritas. So that, we pride to offer all of the product which It’s produced by us must come from excellent source in Thailand and pack in Standard processing for all of our customers."}
              </p>
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
export default AboutUs;
