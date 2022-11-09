import React from "react";


const Signup = () => {
  
  return (
    <>
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
            <li class="active">Register Page</li>
          </ol>
        </div>
      </div>

      <div class="register">
        <div class="container">
          <h2>Register Here</h2>
          <div class="login-form-grids">
            <h5>profile information</h5>
            <form onSubmit={" "}>
              <input
                type="text"
                placeholder="First Name..."
                
              />
             

              <input
                
                type="text"
                placeholder="Last Name..."
              />
              

              <div class="register-check-box">
                <div class="check">
                  <label class="checkbox">
                    <input type="checkbox" name="checkbox" />
                    <i> </i>Subscribe to Newsletter
                  </label>
                </div>
              </div>
              <h6>Login information</h6>

              <input
                
                type="email"
                placeholder="Email Address"
              />
             
              <br />
              <input
               
                type="text"
                placeholder="Mobile Number"
              />
             

              <input
                
                type="password"
                placeholder="Password"
              />
             
              <input
                
                type="password"
                placeholder="Password Confirmation"
              />
            
              <div class="register-check-box">
                <div class="check">
                  <label class="checkbox">
                    <input type="checkbox" name="checkbox" />
                    <i> </i>I accept the terms and conditions
                  </label>
                </div>
              </div>
              <input type="submit" value="Register" />
            </form>
          </div>
          <div class="register-home">
            <a href="/home">Home</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
