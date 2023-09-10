/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { UilLockAlt } from "@iconscout/react-unicons";

const WelcomeText = () => {
  return (
    <div className="border w-full  h-screen flex  justify-center  lg:hidden items-center bg-gray-100">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col items-center gap-6">
          <img
            src="https://previews.123rf.com/images/seamartini/seamartini1812/seamartini181200526/114196035-letter-s-icon-for-social-network-or-dating-and-online-chat-application-design-vector-letter-s-flat.jpg"
            alt="Welcome Image"
            className="w-32 h-32 rounded-full shadow-lg"
          />

          <p className="font-mono text-lg mt-4 text-center">
            Welcome to our chat app! Start connecting with friends and stay
            connected.
          </p>
        </div>

        <div className="flex items-center justify-center text-lg text-gray-600">
          <span className="font-serif mr-2">End-to-end encrypted</span>
          <UilLockAlt />
        </div>
      </div>
    </div>
  );
};

export default WelcomeText;
