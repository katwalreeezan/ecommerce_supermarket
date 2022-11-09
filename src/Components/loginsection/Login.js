import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  

  return (
    <>
      <div>
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
                <li class="active">Login Page</li>
              </ol>
            </div>
          </div>

          <div class="login">
            <div class="container">
              <h2>Login Form</h2>

              <div
                class="login-form-grids animated wow slideInUp"
                data-wow-delay=".5s"
              >
                <form onSubmit={""}>
                  <input
                    
                    type="email"
                    placeholder="Email Address"
                  />
                 
                  <input
                    
                    type="password"
                    placeholder="Password"
                  />
                 
                  <div class="forgot">
                    <a href="/fpassword">Forgot Password?</a>
                  </div>
                  <input type="submit" value="Login" />
                </form>
              </div>
              <h4>For New People</h4>
              <p>
                <a href="/signup">Register Here</a> (Or) go back to{" "}
                <a href="/home">
                  Home
                  <span
                    class="glyphicon glyphicon-menu-right"
                    aria-hidden="true"
                  ></span>
                </a>
              </p>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default Login;
