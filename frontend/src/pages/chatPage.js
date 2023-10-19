import React, { useEffect, useState } from "react";
import axios from "axios";

const ChatPage = () => {
  const [chats, setChats] = useState([]);
  const fetchChats = async () => {
    const { data } = await axios.get("api/v1/chats");
    console.log("This is the data :-", data);
    setChats(data);
  };
  useEffect(() => {
    fetchChats();
  }, []);
  console.log(chats, "this is object.keys output", Object.keys(chats));
  // http://192.168.1.6:3000   for personal wifi
  return (
    <div>
      {Object.keys(chats).map((chatKey) => {
        const chatMessageObj = chats[chatKey];
        return (
          <>
            <p key={chatKey}>
              <strong>{chatKey}:</strong> {chatMessageObj.msg}
            </p>
          </>
        );
      })}
    </div>
  );
};

export default ChatPage;
