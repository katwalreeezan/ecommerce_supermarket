import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "../Components/headersection/Header";
import Footer from "../Components/footer/Footer";
import Home from "../view/home/Home";
import Navbar from "../Components/navbarsection/Navbar";
import SubHeader from "../Components/subHeader/SubHeader";
import Login from "../Components/loginsection/Login";
import Signup from "../Components/signup/Signup";
import ContactUs from "../Components/contactUs/ContactUs";
import AdvertiseOffer from "../view/advertiseOffer/AdvertiseOffer";

import ShortCodes from "../Components/shortCodes/ShortCodes";
import FAQ from "../Components/frequentlyaskedQA/FAQ";
import Categories from "../Components/allcategory/Categories";


import GroceryList from "../Components/groceryItem/GroceryList";
import MyCart from "../Components/mycartsection/MyCart";
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

          <Route path="/category" element={<Categories />} />

          <Route path="/productlist" element={<GroceryList />} />

          <Route path="/mycart" element={<MyCart />} />

          <Route path="/shortcodes" element={<ShortCodes />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/product" element={<Product />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default Router;
