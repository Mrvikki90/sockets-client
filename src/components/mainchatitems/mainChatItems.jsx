import React from "react";

const ChatItems = (props) => {
  return (
    <div className="mt-8 ">
      <div
        className={`chat ${
          props.user && props.user.sender === props.loginId
            ? "chat-start"
            : "chat-end"
        }`}
      >
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src="https://i.pravatar.cc/150?img=8" alt="avtar" />
          </div>
        </div>
        <div className="chat-bubble chat-bubble-info">{props.msg}</div>
        <div className="chat-footer opacity-50">Seen</div>
      </div>
    </div>
  );
};

export default ChatItems;
