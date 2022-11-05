import React, { useEffect, useState } from "react";
import axios from "axios";
import "./product.css";
// import "../sellingOffer/sellingOffer.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cart";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const [catagorylist, setCategorylist] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [login, setLogin] = useState(localStorage.getItem("login"));

  const dispatch = useDispatch();

  const Navigate = useNavigate();

  const handleAddToCart = (data) => {
    if (localStorage.getItem("access_token") !== null) {
      dispatch(addToCart(data));
      Navigate("/mycart");
    } else {
      Navigate("/login");
    }
  };

  useEffect(() => {
    axios
      .get("https://uat.ordering-farmshop.ekbana.net/api/v4/product", {
        headers: {
          "Api-Key": "3uxpudnPFywb4AYZjjpbhOHRV3YMTNscyRF4AiVZi2go6brJMx",
          "warehouse-Id": "1",
        },
      })
      .then((response) => {
        console.log(response.data.data, "pro");
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
        <div className="category-containeror">
          {catagorylist.slice(0, 6).map((data, index) => {
            return (
              <>
                <div class="col-md-4 top_brand_left product-cart">
                  <div class="hover14 column">
                    <div class="agile_top_brand_left_grid">
                      <div class="agile_top_brand_left_grid_pos">
                        <img
                          src="assets/images/offer.png"
                          alt=" "
                          class="img-responsive"
                        />
                      </div>
                      <div class="product-Desc">
                        {data.images.map((imgdata, index) => {
                          return (
                            <>
                              <img
                                src={imgdata.imageName}
                                alt=""
                                width="100px"
                                height="70px"
                              />
                            </>
                          );
                        })}

                        <p
                          style={{
                            width: "220px",
                            height: "80px",
                            marginLeft: "15px",
                          }}
                        >
                          ItemName:{data.title}
                        </p>
                        <p style={{ marginTop: "-12px" }}>
                          Category: {data.categoryTitle}
                        </p>

                        {data.unitPrice.map((pricedata, index) => {
                          return (
                            <>
                              <p>
                                SellingPrice:
                                {pricedata.sellingPrice}
                              </p>
                              <p>MarkedPrice: {pricedata.markedPrice}</p>
                            </>
                          );
                        })}

                        <div class="snipcart-details top_brand_home_details">
                          <input
                            onClick={() => handleAddToCart(data)}
                            type="submit"
                            name="submit"
                            value="Add to cart"
                            class="button"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Product;
