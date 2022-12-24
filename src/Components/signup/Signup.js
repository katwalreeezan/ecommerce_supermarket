// import { useState } from "react";
import { useForm } from "react-hook-form";
// import Login from "../login/Login";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
// import { Center } from "@chakra-ui/react";

const Signup = () => {
  const Navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  // const [signupData, setsignupData] = useState();
  const onSubmit = (data) => {
    if (data.password !== data.c_password) {
      toast.error("password doesnot match");
    }
    if (
      data.first_name !== "" &&
      data.last_name !== "" &&
      data.mobile_number !== "" &&
      data.email !== "" &&
      data.password !== "" &&
      data.c_password !== "" &&
      data.password === data.c_password
    ) {
      toast.success("successfully submitted");
      reset();
      Navigate("/login");
    } else {
      toast.error("Fill form again");
    }

    const signUpData = {
      first_name: data.first_name,
      last_name: data.last_name,
      mobile_number: data.mobile_number,
      email: data.email,
      password: data.password,
    };
    axios
      .post(
        "https://uat.ordering-farmshop.ekbana.net/api/v4/auth/signup",
        signUpData
      )

      .then((response) => {
        console.log(response, "sucess");
        // setsignupData(data);
        localStorage.setItem("signup_email", data.email);

        localStorage.setItem(
          "info",
          JSON.stringify({
            email: data.email,
            mobile_number: data.mobile_number,
            password: data.password,
            signupId: response.data.data.id,
          })
        );
      })
      .catch((error) => {
        console.log(error, "sorryyyyy");
      });
  };
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
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type="text"
                placeholder="First Name..."
                {...register("first_name", { required: true })}
              />
              {errors.first_name && (
                <p style={{ color: "red", fontSize: "14px" }}>
                  first name is required.
                </p>
              )}

              <input
                {...register("last_name", { required: true })}
                type="text"
                placeholder="Last Name..."
              />
              {errors.last_name && (
                <p style={{ color: "red", fontSize: "14px" }}>
                  last name is required.
                </p>
              )}

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
                {...register("email", { required: true })}
                type="email"
                placeholder="Email Address"
              />
              {errors.email && (
                <p style={{ color: "red", fontSize: "14px" }}>
                  email is required
                </p>
              )}
              <br />
              <input
                {...register("mobile_number", { pattern: /\d+/ })}
                type="text"
                placeholder="Mobile Number"
              />
              {errors.mobile_number && (
                <p
                  style={{
                    color: "red",
                    fontSize: "14px",
                  }}
                >
                  mobile number must consists digit
                </p>
              )}

              <input
                {...register("password", {
                  pattern: /(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
                })}
                type="password"
                placeholder="Password"
              />
              {errors.password && (
                <p style={{ color: "red", fontSize: "14px" }}>
                  password must consist atleast 6 character, must include number
                </p>
              )}
              <input
                {...register("c_password", { pattern: /[A-Za-z]\w{6}$/ })}
                type="password"
                placeholder="Password Confirmation"
              />
              {errors.c_password && (
                <p style={{ color: "red", fontSize: "14px" }}>
                  password and confirm password must be same
                </p>
              )}
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
