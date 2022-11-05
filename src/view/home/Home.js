import React from "react";
import Banner from "../../Components/banner/Banner";
import BannerBottom from "../../Components/bannerBottom/BannerBottom";
import BrandStore from "../../Components/brandStore/BrandStore";
import SellingOffer from "../../Components/sellingOffer/SellingOffer";
import SubBannerBottom from "../../Components/subBannerBottom/SubBannerBottom";

const Home = () => {
  return (
    <div>
      <Banner />
      <SellingOffer />

      {/* <BrandStore /> */}
      <SubBannerBottom />
      <BannerBottom />
    </div>
  );
};

export default Home;
