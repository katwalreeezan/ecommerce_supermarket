import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const Navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onsubmit = (data) => {
    if (data.email !== "" && data.password !== "") {
      toast.success("Login Sucessfully");
      reset();
      Navigate("/");
    } else {
      toast.error("Sorry login failed");
    }

    axios

      .post("https://uat.ordering-farmshop.ekbana.net/api/v4/auth/login", {
        // body ko Element asare send garne
        client_id: "2",
        client_secret: "2TJrcyMbXT6gDQXVqeSlRbOKvtTfMsuxfuK6vpey",
        grant_type: "password",
        username: data.email,
        password: data.password,
      })
      .then((response) => {
        console.log(response, "loginSuccess");
        // tyo bata aako response(access_token) lai localStorage ma save garne
        localStorage.setItem("access_token", response.data.access_token);
      })
      .catch((error) => {
        console.log(error, "loginfailed");
      });
  };
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
                <form onSubmit={handleSubmit(onsubmit)}>
                  <input
                    {...register("email", { required: true })}
                    type="email"
                    placeholder="Email Address"
                  />
                  {errors.email && (
                    <p style={{ color: "red", fontSize: "14px" }}>
                      Enter your valid emailaddress
                    </p>
                  )}
                  <input
                    {...register("password")}
                    type="password"
                    placeholder="Password"
                  />
                  {errors.password && (
                    <p style={{ color: "red", fontSize: "14px" }}>
                      Enter your password
                    </p>
                  )}
                  <div class="forgot">
                    <a href="#">Forgot Password?</a>
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
