import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Bannerdata from "./Bannerdata";
import "./banner.css";
import { useState, useEffect } from "react";
import axios from "axios";

const Banner = () => {
  const [bannerdata, setBannerdata] = useState([]);

  axios
    .get("https://uat.ordering-farmshop.ekbana.net/api/v4/banner?type=home", {
      headers: {
        "Api-Key": "3uxpudnPFywb4AYZjjpbhOHRV3YMTNscyRF4AiVZi2go6brJMx",
        "warehouse-Id": "1",
      },
    })

    .then((response) => {
      console.log(response, "banner success");
    })
    .catch((error) => {
      console.log(error, "banner fail");
    });

  const settings = {
    // dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div>
      <Slider {...settings}>
        {Bannerdata.map((dataa, index) => {
          return (
            <div>
              <div>
                <img className="image-slider" src={dataa.image} alt="" />
                <div class="slide-desc">
                  <p>{dataa.text}</p>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Banner;
