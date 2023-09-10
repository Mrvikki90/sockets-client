import React, { useState, useEffect } from "react";
import {
  FormControl,
  FormErrorMessage,
  useDisclosure,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import loginSchema from "../../../Schema/loginSchema";
// import ForgetPasswordModal from "../../modals/forgetPasswordModal";
import { BASE_URL } from "../../../constants/constant";
import Styles from "./css/login.module.css";

const Login = () => {
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => {
        setShowAlert(false);
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [showAlert]);

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  // Function to fetch the last selected chat for the logged-in user
  const fetchLastSelectedChat = async (userId) => {
    try {
      const response = await axios.get(`/api/get-last-selected-chat/${userId}`);
      return response.data;
    } catch (error) {
      console.log("Error:", error);
      return null;
    }
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(loginSchema),
  });

  const handleLogin = async (data) => {
    try {
      const response = await axios.post(`${BASE_URL}/api/login`, {
        data,
      });
      reset();
      localStorage.setItem("token", response.data.token);
      if (response.status === 200) {
        const userId = response.data.user._id;
        // Fetch the last selected chat data for the logged-in user
        const lastChat = await fetchLastSelectedChat(userId);

        navigate("/home", { state: { ...response.data, lastChat } });
        return toast(`${response.data.message}`, {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } catch (error) {
      return toast(`${error.response.data.message}`, {
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
    <>
      {showAlert && (
        <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4">
          Please check your inbox. If the user exists, you will receive a reset
          password link
        </div>
      )}
      <div className="h-screen flex  items-center  justify-center">
        <div class="border shadow-xl w-full max-w-xs">
          <form
            class="bg-white  rounded px-8 pt-6 pb-8 mb-4"
            onSubmit={handleSubmit(handleLogin)}
          >
            <FormControl isInvalid={errors.email}>
              <div class="mb-4">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="username"
                >
                  Email
                </label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Enter your email"
                  {...register("email")}
                />
                <FormErrorMessage mb="2">
                  {errors && errors.email?.message}
                </FormErrorMessage>
              </div>
            </FormControl>
            <FormControl isInvalid={errors.password}>
              <div class="mb-6">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="password"
                >
                  Password
                </label>
                <input
                  class="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  {...register("password")}
                />
                <FormErrorMessage mb="2">
                  {errors && errors.password?.message}
                </FormErrorMessage>
              </div>
            </FormControl>
            <div class="flex items-center justify-between">
              <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Login
              </button>
              <a
                class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                href=""
              >
                Forgot Password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
