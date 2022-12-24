import React from "react";
import axios from "axios";

const Logout = () => {
  const handlelogout = () => {
    axios
      .get("https://uat.ordering-farmshop.ekbana.net/api/v4/auth/logout", {
        headers: {
          "Api-Key": "3uxpudnPFywb4AYZjjpbhOHRV3YMTNscyRF4AiVZi2go6brJMx",
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      })
      .then((response) => {
        console.log(response, "logoutsucess");
      })
      .catch((error) => {
        console.log(error, "logoutfail");
      });
  };

  return (
    <div>
      <button onClick={() => handlelogout()}>Logout</button>
    </div>
  );
};

export default Logout;
