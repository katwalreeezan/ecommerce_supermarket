import React from "react";

const AboutDetail = () => {
  return (
    <div>
      <div class="breadcrumbs">
        <div class="container">
          <ol
            class="breadcrumb breadcrumb1 animated wow slideInLeft"
            data-wow-delay=".5s"
          >
            <li>
              <a href="index.html">
                <span
                  class="glyphicon glyphicon-home"
                  aria-hidden="true"
                ></span>
                Home
              </a>
            </li>
            <li class="active">About</li>
          </ol>
        </div>
      </div>

      <div class="about">
        <div class="container">
          <h3 class="w3_agile_header">About Us</h3>
          <div class="about-agileinfo w3layouts">
            <div class="col-md-8 about-wthree-grids grid-top">
              <h4>Blanditiis praesentium deleniti atque corrupti quos </h4>
              <p class="top">
                Gnissimos voluptatum deleniti atque corrupti quos dolores et
                quas molestias excepturi. atque corrupti quos dolores et quas
                molestias excepturi sint occaecat officia deserunt mollitia
                laborum et dolorum fuga
              </p>
              <p>
                Dignissimos at vero eos et accusamus et iusto odio ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecat officia
                deserunt mollitia laborum et dolorum fuga. At vero eos et
                accusamus et iusto odio dignissimos ducimus qui blanditiis
                praesentium voluptatum deleniti atque corrupti quos dolores et
                quas molestias excepturi sint occaecat atque corrupti quos
                dolores et quas molestias excepturi sint occaecat officia
                deserunt mollitia laborum et dolorum{" "}
              </p>
              <div class="about-w3agilerow">
                <div class="col-md-4 about-w3imgs">
                  <img
                    src="assets/images/p3.jpg"
                    alt=""
                    class="img-responsive zoom-img"
                  />
                </div>
                <div class="col-md-4 about-w3imgs">
                  <img
                    src="assets/images/p4.jpg"
                    alt=""
                    class="img-responsive zoom-img"
                  />
                </div>
                <div class="col-md-4 about-w3imgs">
                  <img
                    src="assets/images/p3.jpg"
                    alt=""
                    class="img-responsive zoom-img"
                  />
                </div>
                <div class="clearfix"> </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutDetail;
