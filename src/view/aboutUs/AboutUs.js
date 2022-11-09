import React from "react";
import Detailpage from "../../Components/Detailpage/Detailpage";
import AboutSlider from "../../Components/Sliderpage/AboutSlider";
import MeetOurTeam from "../../Components/meetOurTeam/MeetOurTeam";
import Testimonial from "../../Components/testimonialsection/Testimonial";


const AboutUs = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
        }}
      >
        <div style={{ width: "40%" }}>
          <Detailpage />
        </div>
        <div style={{ width: "100%", marginLeft: "280px", marginTop: "350px" }}>
          <Testimonial/>
        </div>
      </div>

      <AboutSlider />
      <MeetOurTeam />
    </div>
  );
};

export default AboutUs;
