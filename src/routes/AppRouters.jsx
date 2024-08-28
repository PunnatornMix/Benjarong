import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import ProductDatail from "../pages/ProductDatail";
import OurProduct from "../pages/OurProduct";
import CSR from "../pages/CSR";

const AppRouters = () => (
  <Fragment>
    <Routes>
      <Route path="/" exact element={<Home />} />

      <Route path="/about-us" exact element={<AboutUs />} />
      <Route path="/our-product" exact element={<OurProduct />} />
      <Route
        path="/product-detail/:subpage?"
        exact
        element={<ProductDatail />}
      />
      <Route path="/CSR" exact element={<CSR />} />
      {/* <Route path="/review" exact element={<Reviews />} /> */}

      {/* <Route path="/shareholding/:mainpage?" exact element={<Shareholding />} /> */}
      {/* <Route path="*" exact element={<NotFound />} /> */}
    </Routes>
  </Fragment>
);

export default AppRouters;
