import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../../constants/constant";

import Avatar from "../../avtar/avtar";

const ChatListItems = ({
  conversation,
  currentUser,
  animationDelay,
  setChatUserName,
  markUnread,
  showMainChat,
  setShowMainChat,
}) => {
  const [user, setUser] = useState();
  const [unreadCount, setUnreadCount] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef();

  const setChatName = (name) => {
    setChatUserName(name);
  };

  useEffect(() => {
    const friendId = conversation.members.find((m) => m !== currentUser);

    const getUser = async () => {
      try {
        const res = await axios.get(
          `${BASE_URL}/api/getone?userId=` + friendId
        );
        setUser(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();

    // Calculate the unread message count for this conversation
    const count = conversation.unreadMessages || 0;
    setUnreadCount(count);
  }, [conversation, currentUser]);

  // Filter unread messages based on the "offlineMessgaes" key
  const unreadMessages = conversation.messages.filter(
    (message) => message.offlineMessgaes
  );

  return (
    <div style={{ animationDelay: `0.${animationDelay}s` }}>
      <div className="flex items-center p-2 space-x-2 border-b border-gray-200 ">
        <Avatar image={"https://i.pravatar.cc/150?img=4"} />
        <div className="flex-grow" onClick={() => setChatName(user.name)}>
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold text-purple-950">
                {user && user?.name}
              </h3>
              {unreadCount > 0 && unreadMessages.length > 0 && markUnread ? (
                <text className="font-ligh text-gray-400">
                  {unreadMessages[unreadMessages.length - 1].text}
                </text>
              ) : null}
            </div>
            {/* <div className="relative"> */}
            <div
              className={`bg-blue-500 rounded-full text-white text-sm py-1 px-2 ${
                unreadCount > 0 ? "block" : "hidden"
              }`}
            >
              {unreadCount}
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatListItems;
