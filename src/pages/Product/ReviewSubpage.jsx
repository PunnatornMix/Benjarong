import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductItem from "../../components/ProductList/ProductItem";
const lang = localStorage.getItem("i18nextLng");

const list = [
  <ProductItem
    src={"/images/product/review01.png"}
    title={lang === "th" ? "ข้าวหน้าปลาไหลญี่ปุ่น" : ""}
    content={
      lang === "th"
        ? "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias asperiores, sunt sint eaque doloremque nostrum quia mollitia ipsum at deserunt rem earum fuga, corporis praesentium. Doloribus quidem consectetur illo. Facere!"
        : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias asperiores, sunt sint eaque doloremque nostrum quia mollitia ipsum at deserunt rem earum fuga, corporis praesentium. Doloribus quidem consectetur illo. Facere!"
    }
  />,
  <ProductItem
    src={"/images/product/review02.png"}
    title={lang === "th" ? "ข้าวสเต็กเนื้อสันใน" : ""}
    content={
      lang === "th"
        ? "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias asperiores, sunt sint eaque doloremque nostrum quia mollitia ipsum at deserunt rem earum fuga, corporis praesentium. Doloribus quidem consectetur illo. Facere!"
        : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias asperiores, sunt sint eaque doloremque nostrum quia mollitia ipsum at deserunt rem earum fuga, corporis praesentium. Doloribus quidem consectetur illo. Facere!"
    }
  />,
];
console.log("list.lenght", list.length);

function ReviewSubpage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return list.length > 1 ? (
    <Slider {...settings}>{list.map((item, index) => item)}</Slider>
  ) : list.length >= 1 ? (
    <>{list.map((item, index) => item)}</>
  ) : (
    ""
  );
}

export default ReviewSubpage;
