import React from "react";
import AboutDetail from "../../Components/aboutDetail/AboutDetail";
import AboutSlider from "../../Components/aboutSlider/AboutSlider";
import MeetOurTeam from "../../Components/meetOurTeam/MeetOurTeam";
import Testimonial from "../../Components/testimonial/Testimonial";

const AboutUs = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          //   justifyContent: "space-around",
        }}
      >
        <div style={{ width: "40%" }}>
          <AboutDetail />
        </div>
        <div style={{ width: "100%", marginLeft: "280px", marginTop: "350px" }}>
          <Testimonial />
        </div>
      </div>

      <AboutSlider />
      <MeetOurTeam />
    </div>
  );
};

export default AboutUs;
