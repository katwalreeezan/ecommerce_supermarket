import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialData from "./TestimonialData";

const Testimonial = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div class="col-md-4 about-wthree-grids">
      <div class="offic-time">
        <div class="time-top">
          <h4>Praesentium :</h4>
        </div>
        <div class="time-bottom">
          <h5>At vero eos </h5>
          <h5>Accusamus et</h5>
          <p>
            Dignissimos at vero eos et accusamus et iusto odio ducimus qui
            accusamus et.{" "}
          </p>
        </div>
      </div>
      <div class="testi">
        <h3 class="w3_agile_header">Testimonial</h3>
        <div class="rslides" id="slider5">
          <Slider {...settings}>
            {TestimonialData.map((data, index) => {
              return (
                <div>
                  <div
                    style={{
                      backgroundColor: "lightblue",
                      height: "200px",
                      widht: "800px",
                    }}
                  >
                    <h3
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        fontSize: "24px",
                      }}
                    >
                      {data.heading}
                    </h3>
                    <p>{data.paragraph}</p>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
