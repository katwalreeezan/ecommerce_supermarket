
import React from "react";


const ContactUs = () => {
  

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
            <li class="active">ContactUs</li>
          </ol>
        </div>
      </div>

      <div class="about">
        <div class="w3_agileits_contact_grids">
          <div class="col-md-6 w3_agileits_contact_grid_left">
            
            <div class="agileits_w3layouts_map_pos">
              <div class="agileits_w3layouts_map_pos1">
                <h3>Contact Info</h3>
                <p>1234k Avenue, 4th block, New York City.</p>
                <ul class="wthree_contact_info_address">
                  <li>
                    <i class="fa fa-envelope" aria-hidden="true"></i>
                    <a href="mailto:info@example.com">info@example.com</a>
                  </li>
                  <li>
                    <i class="fa fa-phone" aria-hidden="true"></i>+(0123) 232
                    232
                  </li>
                </ul>
                <div class="w3_agile_social_icons w3_agile_social_icons_contact">
                  <ul>
                    <li>
                      <a href="#" class="icon icon-cube agile_facebook"></a>
                    </li>
                    <li>
                      <a href="#" class="icon icon-cube agile_rss"></a>
                    </li>
                    <li>
                      <a href="#" class="icon icon-cube agile_t"></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 w3_agileits_contact_grid_right">
            <h2 class="w3_agile_header">
              Leave a<span> Message</span>
            </h2>

            <form onSubmit={""}>
              <span class="input input--ichiro">
                <input
                  
                  class="input__field input__field--ichiro"
                  type="text"
                  id="input-25"
                  name="Name"
                  placeholder=" "
                  required=""
                />
                <label class="input__label input__label--ichiro" for="input-25">
                  <span class="input__label-content input__label-content--ichiro">
                    Your Name
                  </span>
                </label>
              </span>
              <span class="input input--ichiro">
                <input
                  
                  class="input__field input__field--ichiro"
                  type="email"
                  id="input-26"
                  name="Email"
                  placeholder=" "
                  required=""
                />
                <label class="input__label input__label--ichiro" for="input-26">
                  <span class="input__label-content input__label-content--ichiro">
                    Your Email
                  </span>
                </label>
              </span>
              <span class="input input--ichiro">
                <input
                  
                  class="input__field input__field--ichiro"
                  type="text"
                  id="input-27"
                  name="Phone"
                  placeholder=" "
                  required=""
                />
                <label class="input__label input__label--ichiro" for="input-27">
                  <span class="input__label-content input__label-content--ichiro">
                    Your Phone
                  </span>
                </label>
              </span>
              <span class="input input--ichiro">
                <input
                  
                  class="input__field input__field--ichiro"
                  type="text"
                  id="input-28"
                  name="Subject"
                  placeholder=" "
                  required=""
                />
                <label class="input__label input__label--ichiro" for="input-28">
                  <span class="input__label-content input__label-content--ichiro">
                    Your Subject
                  </span>
                </label>
              </span>
              <textarea
                
                name="Message"
                placeholder="Your message here..."
                required=""
              ></textarea>
              <input type="submit" value="Submit" />
            </form>
          </div>
          <div class="clearfix"> </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
