import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Category.css";

import { useNavigate } from "react-router-dom";
import GroceryCatlog from "../grocery/GroceryCatlog";

const Categories = () => {
  const [catagorylist, setCategorylist] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const Navigate = useNavigate();

  const handleAddToCart = (data) => {
    Navigate("/product");
  };

  useEffect(() => {
    axios
      .get("https://uat.ordering-farmshop.ekbana.net/api/v4/category", {
        headers: {
          "Api-Key": "3uxpudnPFywb4AYZjjpbhOHRV3YMTNscyRF4AiVZi2go6brJMx",
        },
      })
      .then((response) => {
        console.log(response.data.data, "catagory");
        setCategorylist(response.data.data);
        // console.log(catagorylist, "nepal");
        setIsLoading(!isLoading);
      })
      .catch((error) => {
        console.log(error, "faileddd");
      });
  }, [setCategorylist]);

  return (
    <>
      {isLoading ? (
        <p
          style={{
            display: "flex",
            justifyContent: "center",
            fontSize: "32px",
          }}
        >
          Loading....
        </p>
      ) : (
        <div className="category-card">
          <div className="allcategorylist">
            <GroceryCatlog />
          </div>
         
        </div>
      )}
    </>
  );
};

export default Categories;
