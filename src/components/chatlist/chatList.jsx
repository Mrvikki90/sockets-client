/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect, useRef } from "react";
import SearchBox from "../searchbar/SerachBox";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import RecentChats from "../recentChats/recentChats";
import "./css/chatlist.css";
import { BASE_URL } from "../../constants/constant";
import axios from "axios";
import _ from "lodash";
import { SERVE_STATIC_IMAGES_PATH } from "../../constants/constant";

const ChatListPage = ({
  setChatUserName,
  setCurrentChat,
  currentUser,
  allUsers,
  currentChat,
  setIsNewChat,
  isNewChat,
  setCurrentGroup,
  showMainChat,
  setShowMainChat,
  onlineUsers,
}) => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 991);

  const [loading, setLoading] = useState(true); // Added loading state
  const [conversations, setConversations] = useState();
  const [markUnread, setMarkUnread] = useState(false);
  const chatListRef = useRef();
  const [isChatDelete, setIsChatDelete] = useState(false);
  const [groupsData, setGroupsData] = useState();
  const [selectedTab, setSelectedTab] = useState("Chats");

  const handleSelectChat = async (conversation) => {
    // When a chat is selected, store its ID in localStorage
    localStorage.setItem("selectedChatId", conversation._id);
    setIsNewChat(false); // Reset isNewChat state before selecting a chat

    // Check if the screen width is below 990px and showMainChat is false
    if (window.innerWidth < 990 && !showMainChat) {
      setShowMainChat(true); // Show the main chat content
    }
    if (!conversation) {
      setIsNewChat(true);
      return; // If it's a new chat, return without setting the current chat
    }
    setCurrentChat(conversation);
    try {
      // Added a check for loginId
      if (conversation) {
        const res = await axios.put(
          `${BASE_URL}/messages/mark-message-as-read/${conversation._id}`
        );
        setMarkUnread(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleOpenChat = async (user) => {
    setIsNewChat(true); // Set isNewChat state for new chat
    // Check if a conversation already exists between the current user and the selected user
    const existingConversation = await axios.post(`${BASE_URL}/conversation`, {
      senderId: currentUser,
      receiverId: user._id,
    });

    setCurrentChat(existingConversation.data);
  };

  useEffect(() => {
    // Scroll to the bottom of the chat list when a new chat is started
    if (isNewChat) {
      chatListRef.current.scrollTop = chatListRef.current.scrollHeight;
    }
  }, [isNewChat]);

  useEffect(() => {
    const getConversation = async () => {
      try {
        if (currentUser) {
          // Added a check for loginId
          const res = await axios.get(
            `${BASE_URL}/conversation/${currentUser}/'null'`
          );
          setConversations(res.data);
        }
        setLoading(false); // Set loading to false after API call
      } catch (error) {
        console.log(error);
        setLoading(false); // Set loading to false in case of error
      }
    };
    getConversation();
  }, [currentUser, markUnread, currentChat, isChatDelete]);

  return (
    <div className="h-screen w-1/5 lg:w-full min-w-min items-center lg:items-start gap-4 flex flex-col">
      <div>
        <h1 className="font-bold text-xl m-4 from-indigo-600">CHATS</h1>
      </div>
      <SearchBox />
      <div className="flex items-center justify-center w-full lg:w-full px-2 md:px-0 h-24 lg:h-52">
        <Swiper
          slidesPerView="auto"
          spaceBetween={isSmallScreen ? 0 : 10}
          className="swiper-container"
        >
          {allUsers &&
            allUsers?.map((item, index) => {
              return item._id !== currentUser ? (
                <SwiperSlide
                  className="w-1/4 lg:w-1/8" // Adjust width as needed
                  key={index}
                >
                  <div className="flex flex-col justify-center gap-2 items-center">
                    <img
                      className="w-16 h-16 object-cover rounded-full"
                      src={`${SERVE_STATIC_IMAGES_PATH}${item.profileImg}`}
                      alt="no image"
                    />
                    <text className="font-semibold lg:text-lg ">
                      {item.name}
                    </text>
                  </div>
                </SwiperSlide>
              ) : null;
            })}
        </Swiper>
      </div>

      {/* <div className="flex justify-between w-80 min-w-min"> */}
      <RecentChats
        conversation={conversations}
        currentUser={currentUser}
        setChatUserName={setChatUserName}
        handleSelectChat={handleSelectChat}
        markUnread={markUnread}
        showMainChat={showMainChat}
        setShowMainChat={setShowMainChat} // Pass the showMainChat state
      />
      {/* </div> */}
    </div>
  );
};

export default ChatListPage;
