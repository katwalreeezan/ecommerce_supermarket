import React from "react";
import BrandStoreData from "./BrandStoreData";
import "./BrandStore.css";

const BrandStore = () => {
  return (
    <div>
      <div class="brands">
        <div class="container">
          <h3>Brand Store</h3>
          {BrandStoreData.map((datas, index) => {
            return (
              <div class="brands-agile " className="band-card">
                <div class="col-md-2 w3layouts-brand">
                  <div class="brands-w3l">
                    <p>
                      <a href="/home" target="_blank">
                        {datas.text}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BrandStore;
