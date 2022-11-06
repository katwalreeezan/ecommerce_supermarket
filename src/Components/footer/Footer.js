import React from "react";

const Footer = () => {
  return (
    <div>
      <div class="footer">
        <div class="container">
          <div class="w3_footer_grids">
            <div class="col-md-3 w3_footer_grid">
              <h3>Contact</h3>

              <ul class="address">
                <li>
                  <i
                    class="glyphicon glyphicon-map-marker"
                    aria-hidden="true"
                  ></i>
                  1234k Avenue, 4th block, <span>New York City.</span>
                </li>
                <li>
                  <i
                    class="glyphicon glyphicon-envelope"
                    aria-hidden="true"
                  ></i>
                  <a href="mailto:info@example.com">info@example.com</a>
                </li>
                <li>
                  <i
                    class="glyphicon glyphicon-earphone"
                    aria-hidden="true"
                  ></i>
                  +1234 567 567
                </li>
              </ul>
            </div>
            <div class="col-md-3 w3_footer_grid">
              <h3>Information</h3>
              <ul class="info">
                <li>
                  <i class="fa fa-arrow-right" aria-hidden="true"></i>
                  <a href="/aboutus">About Us</a>
                </li>
                <li>
                  <i class="fa fa-arrow-right" aria-hidden="true"></i>
                  <a href="/contactUS">Contact Us</a>
                </li>
                <li>
                  <i class="fa fa-arrow-right" aria-hidden="true"></i>
                  <a href="/shortcodes">Short Codes</a>
                </li>
                <li>
                  <i class="fa fa-arrow-right" aria-hidden="true"></i>
                  <a href="/faq">FAQ's</a>
                </li>
                <li>
                  <i class="fa fa-arrow-right" aria-hidden="true"></i>
                  <a href="/privacypolicy">Privacy policy</a>
                </li>
                <li>
                  <i class="fa fa-arrow-right" aria-hidden="true"></i>
                  <a href="/sellingoffer">Special Products</a>
                </li>
              </ul>
            </div>
            <div class="col-md-3 w3_footer_grid">
              <h3>Category</h3>
              <ul class="info">
                <li>
                  <i class="fa fa-arrow-right" aria-hidden="true"></i>
                  <a href="/category">Groceries</a>
                </li>
                <li>
                  <i class="fa fa-arrow-right" aria-hidden="true"></i>
                  <a href="/category">Household</a>
                </li>
                <li>
                  <i class="fa fa-arrow-right" aria-hidden="true"></i>
                  <a href="/category">Personal Care</a>
                </li>
                <li>
                  <i class="fa fa-arrow-right" aria-hidden="true"></i>
                  <a href="/category">Packaged Foods</a>
                </li>
                <li>
                  <i class="fa fa-arrow-right" aria-hidden="true"></i>
                  <a href="/category">Beverages</a>
                </li>
              </ul>
            </div>
            <div class="col-md-3 w3_footer_grid">
              <h3>Profile</h3>
              <ul class="info">
                <li>
                  <i class="fa fa-arrow-right" aria-hidden="true"></i>
                  <a href="/product">Store</a>
                </li>
                <li>
                  <i class="fa fa-arrow-right" aria-hidden="true"></i>
                  <a href="/mycart">My Cart</a>
                </li>
                <li>
                  <i class="fa fa-arrow-right" aria-hidden="true"></i>
                  <a href="/login">Login</a>
                </li>
                <li>
                  <i class="fa fa-arrow-right" aria-hidden="true"></i>
                  <a href="/signup">Create Account</a>
                </li>
              </ul>
            </div>
            <div class="clearfix"> </div>
          </div>
        </div>

        <div class="footer-copy">
          <div class="container">
            <p>
              © 2017 Super Market. All rights reserved | Design by{" "}
              <a href="http://w3layouts.com/">W3layouts</a>
            </p>
          </div>
        </div>
      </div>
      <div class="footer-botm">
        <div class="container">
          <div class="w3layouts-foot">
            <ul>
              <li>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  class="w3_agile_facebook"
                >
                  <i class="fa fa-facebook" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  class="agile_twitter"
                >
                  <i class="fa fa-twitter" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#" target="_blank" class="w3_agile_dribble">
                  <i class="fa fa-dribbble" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.vimeo.com"
                  target="_blank"
                  class="w3_agile_vimeo"
                >
                  <i class="fa fa-vimeo" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
          <div class="payment-w3ls">
            <img src="assets/images/card.png" alt=" " class="img-responsive" />
          </div>
          <div class="clearfix"> </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
