import React from "react";
import "./subHeader.css";

const SubHeader = () => {
  return (
    <div>
      <div class="navigation-agileits">
        <div class="container " style={{ padding: ".5rem", height: "3rem" }}>
          <div class="dropdown">
            <div>
              <a href="/" style={{ color: "white" }}>
                Home
              </a>
            </div>
          </div>
          <div class="dropdown">
            <h2> Groceries</h2>
            <div class="dropdown-content">
              <ul class="multi-column-dropdown">
                <h6>All Groceries</h6>
                <li>
                  <a href="/category">Dals & Pulses</a>
                </li>
                <li>
                  <a href="/category">Almonds</a>
                </li>
                <li>
                  <a href="/category">Cashews</a>
                </li>
                <li>
                  <a href="/category">Dry Fruit</a>
                </li>
                <li>
                  <a href="/category"> Mukhwas </a>
                </li>
                <li>
                  <a href="/category">Rice & Rice Products</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="dropdown">
            <h2>Household</h2>
            <div class="dropdown-content">
              <ul class="multi-column-dropdown">
                <h6>All Household</h6>
                <li>
                  <a href="/category">Cookware</a>
                </li>
                <li>
                  <a href="/category">Dust Pans</a>
                </li>
                <li>
                  <a href="/category">Scrubbers</a>
                </li>
                <li>
                  <a href="/category">Dust Cloth</a>
                </li>
                <li>
                  <a href="/category"> Mops </a>
                </li>
                <li>
                  <a href="/category">Kitchenware</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="dropdown">
            <span>
              <h2>Personal Care</h2>
            </span>
            <div class="dropdown-content">
              <ul class="multi-column-dropdown">
                <h6>Baby Care</h6>
                <li>
                  <a href="/category">Baby Soap</a>
                </li>
                <li>
                  <a href="/category">Baby Care Accessories</a>
                </li>
                <li>
                  <a href="/category">Baby Oil & Shampoos</a>
                </li>
                <li>
                  <a href="/category">Baby Creams & Lotion</a>
                </li>
                <li>
                  <a href="/category"> Baby Powder</a>
                </li>
                <li>
                  <a href="/category">Diapers & Wipes</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="dropdown">
            <h2>Package Foods</h2>
            <div class="dropdown-content">
              <ul class="multi-column-dropdown">
                <h6>All Accessories</h6>
                <li>
                  <a href="/category">Baby Food</a>
                </li>
                <li>
                  <a href="/category">Dessert Items</a>
                </li>
                <li>
                  <a href="/category">Biscuits</a>
                </li>
                <li>
                  <a href="/category">Breakfast Cereals</a>
                </li>
                <li>
                  <a href="/category"> Canned Food </a>
                </li>
                <li>
                  <a href="/category">Chocolates & Sweets</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="dropdown">
            <h2>Beverages</h2>
            <div class="dropdown-content">
              <ul class="multi-column-dropdown">
                <h6>Tea & Coeffe</h6>
                <li>
                  <a href="/category">Green Tea</a>
                </li>
                <li>
                  <a href="/category">Ground Coffee</a>
                </li>
                <li>
                  <a href="/category">Herbal Tea</a>
                </li>
                <li>
                  <a href="/category">Instant Coffee</a>
                </li>
                <li>
                  <a href="/category"> Tea </a>
                </li>
                <li>
                  <a href="/category">Tea Bags</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="dropdown">
            <div>
              <a href="/gourmet" style={{ color: "white" }}>
                Gourmet
              </a>
            </div>
          </div>
          <div class="dropdown">
            <div>
              <a href="/offer" style={{ color: "white" }}>
                Offer
              </a>
            </div>
          </div>
          <div class="dropdown">
            <div>
              <a href="/contactus" style={{ color: "white" }}>
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
