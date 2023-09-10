import React from "react";

import { FormControl, FormErrorMessage } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import userSchema from "../../../Schema/FormSchema";
import "./page.css";
import { BASE_URL } from "../../../constants/constant";
import Styles from "./css/signup.module.css";

const Signup = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(userSchema),
  });

  const HandleAddData = async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("profileImg", data.profileImg[0]);

    console.log(formData);

    const response = await axios.post(`${BASE_URL}/api/post`, formData);
    reset();
    if (response.status === 200) {
      return toast(response.data.message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <div className={Styles["login-box"]}>
      <p>Register</p>
      <form onSubmit={handleSubmit(HandleAddData)}>
        <FormControl isInvalid={errors.name}>
          <div className={Styles["user-box"]}>
            <input required type="text" {...register("name")} />
            <label>Name</label>
          </div>
          <FormErrorMessage mb="2">
            {errors && errors.name?.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.email}>
          <div className={Styles["user-box"]}>
            <input required type="text" {...register("email")} />
            <label>Email</label>
          </div>

          <FormErrorMessage mb="2">
            {errors && errors.email?.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.password}>
          <div className={Styles["user-box"]}>
            <input required type="password" {...register("password")} />
            <label>Password</label>
          </div>
          <FormErrorMessage mb="2">
            {errors && errors.password?.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.profileImg}>
          <div className={Styles["user-box"]}>
            <input type="file" {...register("profileImg")} />
            <label>Upload Image</label>
          </div>
          <FormErrorMessage>
            {errors && errors.profileImg?.message}
          </FormErrorMessage>
        </FormControl>
        <a>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Register
        </a>
      </form>
      <p>
        Already have an account?{" "}
        <a href="/login" className={Styles["a2"]}>
          Login
        </a>
      </p>
    </div>
  );
};

export default Signup;
