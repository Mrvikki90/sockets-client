import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/homepage/homepage";
import PrivateRoutes from "../hoc/privateRoutes";
import Login from "../pages/Auth/login/login";
import SignUp from "../pages/Auth/signup/signup";
// import ResetPasswordPage from "../components/reset-password/resetPassword";

const Router = () => {
  return (
    <>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route element={<HomePage />} path="/home" />
        </Route>
        <Route path="/" element={<Login />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        {/* <Route path="/reset-password" element={<ResetPasswordPage />}></Route> */}
      </Routes>
    </>
  );
};

export default Router;
