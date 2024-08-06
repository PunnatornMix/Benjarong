import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

const AppRouters = () => (
  <Fragment>
    <Routes>
      <Route path="/" exact element={<Home />} />

      {/* <Route path="/about-us" exact element={<AboutUs />} />
      <Route path="/product-list" exact element={<ProductList />} />
      <Route path="/news-activity" exact element={<News />} />
      <Route path="/contact-us" exact element={<ContactUs />} /> */}

      {/* <Route path="/shareholding/:mainpage?" exact element={<Shareholding />} /> */}
      {/* <Route path="*" exact element={<NotFound />} /> */}
    </Routes>
  </Fragment>
);

export default AppRouters;
