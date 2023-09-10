import React from "react";
import Avatar from "../avtar/avtar";
import {
  UilSearch,
  UilPhone,
  UilVideo,
  UilUserCircle,
  UilArrowLeft,
} from "@iconscout/react-unicons";

const ChatHeader = ({ chatUserName, setShowMainChat }) => {
  const handlePrevious = () => {
    setShowMainChat(false);
  };

  return chatUserName ? (
    <div className="navbar mt-4  border border-gray-200 shadow-sm w-full px-6 sm:px-2 flex justify-between items-center">
      <div className="sm:gap-0 gap-4">
        <div
          className={window.innerWidth >= 990 ? "hidden" : ""}
          onClick={handlePrevious}
        >
          <UilArrowLeft color="#000000" size="35px" />
        </div>
        <div className="flex">
          <Avatar image={"https://i.pravatar.cc/150?img=8"} />
          <div className="items-center">
            <h2 className="font-semibold text-violet-700">{chatUserName}</h2>
            <text className="font-sans text-green-600">Online</text>
          </div>
        </div>
      </div>
      <div className="items-center gap-2">
        <button className="bg-gray-300 rounded-full p-1 hover:bg-gray-600 transition-colors duration-300">
          <UilSearch color="#FFF" />
        </button>
        <button className="bg-gray-300 rounded-full p-1 hover:bg-gray-600 transition-colors duration-300">
          <UilPhone color="#FFF" />
        </button>
        <button className="bg-gray-300 rounded-full p-1 hover:bg-gray-600 transition-colors duration-300">
          <UilVideo color="#FFF" />
        </button>
        <button className="bg-gray-300 rounded-full p-1 hover:bg-gray-600 transition-colors duration-300">
          <UilUserCircle color="#FFF" />
        </button>
      </div>
    </div>
  ) : null;
};

export default ChatHeader;
