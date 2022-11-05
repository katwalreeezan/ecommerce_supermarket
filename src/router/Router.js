import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "../Components/header/Header";
import Footer from "../Components/footer/Footer";
import Home from "../view/home/Home";
import Navbar from "../Components/navbar/Navbar";
import SubHeader from "../Components/subHeader/SubHeader";
import Login from "../Components/login/Login";
import Signup from "../Components/signup/Signup";
import ContactUs from "../Components/contactUs/ContactUs";
import AdvertiseOffer from "../view/advertiseOffer/AdvertiseOffer";

import ShortCodes from "../Components/shortCodes/ShortCodes";
import FAQ from "../Components/faq/FAQ";
import Categories from "../Components/categories/Categories";
import NotFound from "../Components/notFound/NotFound";

import GroceryCatlog from "../Components/grocery/GroceryCatlog";
import MyCart from "../Components/mycart/MyCart";
import AboutUs from "../view/aboutUs/AboutUs";
import Checkout from "../view/checkout/Checkout";
import Product from "../Components/productAll/Product";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Header />
        <SubHeader />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/advertiseoffer" element={<AdvertiseOffer />} />
          <Route path="/offer" element={<Navigate to="/advertiseoffer" />} />

          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />

          {/* privating routing for signup starts */}
          {/* <Route
            path="/login"
            element={Auth ? <Login /> : <Navigate to="/signup" />}
          /> */}
          {/* privating routing for signup ends*/}

          <Route path="/category" element={<Categories />} />

          <Route path="/productlist" element={<GroceryCatlog />} />

          <Route path="/mycart" element={<MyCart />} />

          <Route path="/shortcodes" element={<ShortCodes />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/product" element={<Product />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default Router;
