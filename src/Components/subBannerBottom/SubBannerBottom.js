import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SubBannerButtomData from "./SubBannerBottomData";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SubBannerBottom = () => {
  //   const RouterNavigate = useNavigate();
  //   const NavigateHAND = () => {
  //     RouterNavigate("/signup");
  //     console.log("hello");
  //   };
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  console.log(SubBannerButtomData.text, "has");
  return (
    <div>
      <Slider {...settings}>
        {SubBannerButtomData.map((dataa, index) => {
          return (
            <div>
              <div>
                {/* <Link to={dataa.path}> */}
                <img
                  className="image-slider"
                  src={dataa.image}
                  style={{ marginTop: "10px" }}
                  //   alt=""
                  //   onClick={dataa.path}
                />
                {/* </Link> */}
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default SubBannerBottom;
