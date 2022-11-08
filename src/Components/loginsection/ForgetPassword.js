import React from "react";
import axios from "axios";

import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {
  const Navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const submitemail = (data) => {
    if (data.email !== "") {
      Navigate("/login");
    }
    axios
      .post(
        "https://uat.ordering-farmshop.ekbana.net/api/v4/auth/forgot-password",
        {
          email: localStorage.getItem("signup_email"),
        },

        {
          headers: {
            "Api-Key": "3uxpudnPFywb4AYZjjpbhOHRV3YMTNscyRF4AiVZi2go6brJMx",
            // Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      )
      .then((response) => {
        if (response.status === 200) {
          toast.info(
            "your password reset link is sent to your  provided email",
            {
              position: "top-right",
            }
          );
        } else {
          toast.error("Networkerror", { position: "top-right" });
        }
      })
      .catch((error) => {
        console.log(error, "forgetfail");
      });
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit(submitemail)}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          border: "1px solid gray",
          fontSize: "20px",
          width: "20%",
          margin: "auto",
        }}
      >
        <input
          {...register("email", { required: true })}
          Placeholder="EmailAddress"
        />
        {errors.email && (
          <p style={{ color: "red", fontSize: "14px" }}>Enter your email</p>
        )}

        <input type="submit" value="Next" />
      </form>
    </div>
  );
};

export default ForgetPassword;
