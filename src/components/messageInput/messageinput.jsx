import React from "react";
import { UilMessage } from "@iconscout/react-unicons";

const MessageInput = ({ setMsg, msg, sendMessages }) => {
  return (
    <div className="w-full p-4 relative">
      <div className="flex w-full">
        <input
          type="text"
          placeholder="Type here"
          className="input border border-sky-400 w-full max-w-full pr-12 focus:outline-none" // Add focus:outline-none
          value={msg}
          onChange={(e) => {
            setMsg(e.target.value);
          }}
        />
        <button
          className="bg-blue-500 text-white rounded-full py-2 px-4 hover:bg-blue-600 cursor-pointer absolute right-0 top-0 mt-5 mr-6" // Adjust positioning
          onClick={sendMessages}
        >
          <UilMessage />
        </button>
      </div>
    </div>
  );
};

export default MessageInput;
