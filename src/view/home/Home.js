import React from "react";
import Banner from "../../Components/sliderbanner/Banner";
import BannerBottom from "../../Components/bottomBanner/BannerBottom";
import BrandStore from "../../Components/brandStore/BrandStore";
import SellingOffer from "../../Components/topSellingOffer/SellingOffer";
import SubBannerBottom from "../../Components/subBannerBottom/SubBannerBottom";

const Home = () => {
  return (
    <div>
      <Banner />
      <SellingOffer />
      <SubBannerBottom />
      <BannerBottom />
      <BrandStore />
    </div>
  );
};

export default Home;
