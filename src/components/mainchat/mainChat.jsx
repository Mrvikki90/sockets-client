import React, { useEffect, useRef } from "react";
import ChatHeader from "../mainChatHeader/chatHeader";
import ChatItems from "../mainchatitems/mainChatItems";
import MessageInput from "./../messageInput/messageinput";
import "../mainchatitems/css/items.css";
import WelcomeText from "../welcome/welcome";

const MainChat = ({
  chatUserName,
  loginId,
  userMessages,
  sendMessages,
  setMsg,
  msg,
  isNewChat,
  hasNewMessage,
  showMainChat,
  setShowMainChat,
}) => {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    scrollToBottom();
  }, [userMessages]);

  useEffect(() => {
    scrollToBottom();
  }, [msg]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className={`mx-2 flex flex-col h-[100vh] md:h-[90vh] flex-1 lg:${
        showMainChat ? "block" : "hidden"
      }`}
    >
      <div className="px-8 rounded-lg flex flex-col h-full">
        <ChatHeader
          chatUserName={chatUserName}
          setShowMainChat={setShowMainChat}
        />
        <div
          className="overflow-y-auto scrollbar-style flex-1"
          style={{
            animationDelay: `0.8s`,
            maxHeight: "calc(100% - 80px)", // Adjust the height as needed
            paddingRight: "20px", // Add padding for scrollbar
          }}
        >
          {userMessages.map((itm, index) => {
            return (
              <ChatItems
                animationDelay={index + 2}
                key={itm._id}
                user={itm}
                loginId={loginId}
                msg={itm.text}
              />
            );
          })}
          <div ref={messagesEndRef} />
        </div>
        {chatUserName ? (
          <div className="sticky bottom-0">
            <MessageInput
              setMsg={setMsg}
              msg={msg}
              sendMessages={sendMessages}
            />
          </div>
        ) : (
          <WelcomeText />
        )}
      </div>
      <style>
        {`
          .scrollbar-style {
            /* Define the scrollbar styles for webkit browsers (Chrome, Safari) */
            scrollbar-width: thin;
            scrollbar-color: skyblue transparent;
          }

          .scrollbar-style::-webkit-scrollbar {
            width: 4px;
          }

          .scrollbar-style::-webkit-scrollbar-thumb {
            background-color: skyblue;
            border-radius: 4px;
          }

          .scrollbar-style::-webkit-scrollbar-thumb:hover {
            background-color: royalblue;
            transition: background-color 0.3s;
          }
        `}
      </style>
    </div>
  );
};

export default MainChat;
