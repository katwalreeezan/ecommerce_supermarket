import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import sellingData from "./sellingData";
import "./sellingOffer.css";
// import sellingData1 from "./sellingData2";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cart";

const SellingOffer = () => {
  const Navigate = useNavigate();
  const [offer1, setOffer1] = useState(false);

  const handler1 = () => {
    setOffer1(!offer1);
  };
  const dispatch = useDispatch();
  const handleAddToCart = (data) => {
    if (localStorage.getItem("access_token") !== null) {
      dispatch(addToCart(data));
      Navigate("/mycart");
    } else {
      Navigate("/login");
    }
  };
  const handleAddToCart1 = (data1) => {
    if (localStorage.getItem("access_token") !== null) {
      dispatch(addToCart(data1));
      Navigate("/mycart");
    } else {
      Navigate("/login");
    }
  };

  const [sellingitem, setSellingitem] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        "https://uat.ordering-farmshop.ekbana.net/api/v4/product?allProduct=1",
        {
          headers: {
            "Api-Key": "3uxpudnPFywb4AYZjjpbhOHRV3YMTNscyRF4AiVZi2go6brJMx",
            "Warehouse-Id": "1",
          },
        }
      )
      .then((res) => {
        console.log(res.data.data);
        setSellingitem(res.data.data.slice(0, 6));
        setIsLoading(!isLoading);
      })
      .catch((err) => {
        console.log(err, "sorry");
      });
  }, [setSellingitem]);

  return (
    <div class="top-brands">
      <div class="container">
        <div className="container-offer">
          <h2>Top selling offers</h2>
          <div class="grid_3 grid_5">
            <div
              class="bs-example bs-example-tabs"
              role="tabpanel"
              data-example-id="togglable-tabs"
            >
              <ul id="myTab" class="nav nav-tabs" role="tablist">
                <li role="presentation" class="active">
                  <a
                    href="#expeditions"
                    id="expeditions-tab"
                    role="tab"
                    data-toggle="tab"
                    aria-controls="expeditions"
                    aria-expanded="true"
                    onClick={() => handler1()}
                  >
                    Advertised offers
                  </a>
                </li>
                <li role="presentation">
                  <a
                    href="#tours"
                    role="tab"
                    id="tours-tab"
                    data-toggle="tab"
                    aria-controls="tours"
                    onClick={() => handler1()}
                  >
                    Today Offers
                  </a>
                </li>
              </ul>
              {isLoading ? (
                <>
                  <p
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      fontSize: "32px",
                    }}
                  >
                    Loading....
                  </p>
                </>
              ) : (
                <>
                  {offer1 === false ? (
                    <div>
                      <div id="myTabContent" class="tab-content">
                        <div
                          role="tabpanel"
                          class="tab-pane fade in active"
                          id="expeditions"
                          aria-labelledby="expeditions-tab"
                        >
                          <div class="agile-tp">
                            <h5>Advertised this week</h5>
                            <p class="w3l-ad">
                              We've pulled together all our advertised offers
                              into one place, so you won't miss out on a great
                              deal.
                            </p>
                          </div>
                        </div>
                      </div>

                      {sellingitem.map((data, index) => {
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

                                    <p>ItemName:{data.title}</p>
                                    <p>Category: {data.categoryTitle}</p>

                                    {data.unitPrice.map((pricedata, index) => {
                                      return (
                                        <>
                                          <p>
                                            SellingPrice:
                                            {pricedata.sellingPrice}
                                          </p>
                                          <p>
                                            MarkedPrice: {pricedata.markedPrice}
                                          </p>
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
                  ) : (
                    <>
                      <div id="myTabContent" class="tab-content">
                        <div
                          role="tabpanel"
                          class="tab-pane fade in active"
                          id="expeditions"
                          aria-labelledby="expeditions-tab"
                        >
                          <div class="agile-tp">
                            <h5> this week</h5>
                            <p class="w3l-ad">
                              We've pulled together all our advertised offers
                              into one place, so you won't miss out on a great
                              deal.
                            </p>
                          </div>
                        </div>
                      </div>

                      {sellingitem.map((data1, index) => {
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
                                    {data1.images.map((imgdata1, index) => {
                                      return (
                                        <>
                                          <img
                                            src={imgdata1.imageName}
                                            alt=""
                                            width="100px"
                                            height="70px"
                                          />
                                        </>
                                      );
                                    })}

                                    <p>ItemName:{data1.title}</p>
                                    <p>Category: {data1.categoryTitle}</p>

                                    {data1.unitPrice.map(
                                      (pricedata1, index) => {
                                        return (
                                          <>
                                            <p>
                                              SellingPrice:{" "}
                                              {pricedata1.sellingPrice}
                                            </p>
                                            <p>
                                              MarkedPrice:{" "}
                                              {pricedata1.markedPrice}
                                            </p>
                                          </>
                                        );
                                      }
                                    )}
                                    <div class="snipcart-details top_brand_home_details">
                                      <input
                                        onClick={() => handleAddToCart1(data1)}
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
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellingOffer;
