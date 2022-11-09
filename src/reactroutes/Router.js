import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "../Components/headersection/Header";
import Home from "../view/home/Home";
import FAQ from "../Components/frequentlyaskedQA/FAQ";
import Categories from "../Components/allcategory/Categories";
import GroceryList from "../Components/groceryItem/GroceryList";
import MyCart from "../Components/mycartsection/MyCart";
import AboutUs from "../view/aboutUs/AboutUs";
import Checkout from "../view/checkout/Checkout";
import Product from "../Components/productAll/Product";
import Navbar from "../Components/navbarsection/Navbar";
import SecHeader from "../Components/secHeader/SecHeader";
import Login from "../Components/loginsection/Login";
import Signup from "../Components/signup/Signup";
import ContactUs from "../Components/contactUs/ContactUs";
import Footer from "../Components/footer/Footer";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Header />
        <SecHeader />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />

          <Route path="/category" element={<Categories />} />

          <Route path="/productlist" element={<GroceryList />} />

          <Route path="/mycart" element={<MyCart />} />
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
