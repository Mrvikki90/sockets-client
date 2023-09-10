import React, { useState, useEffect, useRef } from "react";
import { UilEdit } from "@iconscout/react-unicons";
import Avatar from "../avtar/avtar";
// import SimpleBar from "simplebar-react";
// import "simplebar/dist/simplebar.min.css";
import "./recentchat.css";
import ChatListItems from "../chatlist/recentchatListItems/recentChatListItems";

const RecentChats = ({
  conversation,
  currentUser,
  setChatUserName,
  handleSelectChat,
  markUnread,
  showMainChat,
  setShowMainChat,
}) => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 991);

  useEffect(() => {
    // Add event listener to update isSmallScreen on window resize
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 991);
    };

    // Attach the event listener
    window.addEventListener("resize", handleResize);

    // Cleanup: Remove the event listener when component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const users = [
    {
      name: "David",
      message: "Hello!",
      avatar: "https://i.pravatar.cc/150?img=1", // Random avatar image
    },
    {
      name: "Alex",
      message: "Hi there!",
      avatar: "https://i.pravatar.cc/150?img=2", // Random avatar image
    },
    {
      name: "Sophia",
      message: "Hey!",
      avatar: "https://i.pravatar.cc/150?img=3", // Random avatar image
    },
    {
      name: "Olivia",
      message: "Good morning!",
      avatar: "https://i.pravatar.cc/150?img=4", // Random avatar image
    },
    {
      name: "James",
      message: "How are you?",
      avatar: "https://i.pravatar.cc/150?img=5", // Random avatar image
    },
    {
      name: "Emma",
      message: "Nice to meet you!",
      avatar: "https://i.pravatar.cc/150?img=6", // Random avatar image
    },
    {
      name: "William",
      message: "What's up?",
      avatar: "https://i.pravatar.cc/150?img=7", // Random avatar image
    },
    {
      name: "Mia",
      message: "I'm doing great!",
      avatar: "https://i.pravatar.cc/150?img=8", // Random avatar image
    },
    {
      name: "Liam",
      message: "See you later!",
      avatar: "https://i.pravatar.cc/150?img=9", // Random avatar image
    },
    {
      name: "Ava",
      message: "Take care!",
      avatar: "https://i.pravatar.cc/150?img=10", // Random avatar image
    },
  ];

  return (
    <div className="mt-2 lg:mt-4 w-full flex flex-col items-center ">
      <div className="flex justify-between items-center w-80 lg:w-full lg:px-4">
        <h3 className="font-semibold font-sans">RECENT CHATS</h3>
        <button className="bg-pink-700 rounded-full p-1 ">
          <UilEdit color="#fff" width="20px" height="18px" />
        </button>
      </div>
      <div
        className={`w-full flex ${isSmallScreen ? "flex-col" : "flex-row"} `}
      >
        <div
          className="bg-white p-4 chat-content"
          style={{
            maxHeight: isSmallScreen ? "457px" : "660px",
            flex: isSmallScreen ? "none" : "1",
            maxWidth: "100%",
          }}
        >
          {conversation &&
            conversation.map((item, index) => (
              <div onClick={() => handleSelectChat(item)}>
                <ChatListItems
                  conversation={item}
                  currentUser={currentUser}
                  animationDelay={index + 1}
                  setChatUserName={setChatUserName}
                  markUnread={markUnread}
                  showMainChat={showMainChat}
                  setShowMainChat={setShowMainChat}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default RecentChats;
