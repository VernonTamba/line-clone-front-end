import React, { useEffect, useState } from "react";
// import "./Messages.css";
import "./Messages_2.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ArticleIcon from "@mui/icons-material/Article";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import SendIcon from "@mui/icons-material/Send";
import MessageCard from "./MessageCard";
// import db from "../../firebase";

const Messages = () => {
  const [inputMessage, setInputMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      username: "Admin",
      message: "Welcome to LINE!",
    },
    {
      username: "Me",
      message: "Hello there, admin!",
    },
    {
      username: "Me",
      message: "Good day!",
    },
    {
      username: "Admin",
      message: "Good day to you too!",
    },
    {
      username: "Me",
      message: "This is so fun!",
    },
    {
      username: "Admin",
      message: "I know, right?!",
    },
    {
      username: "Me",
      message: "This is very exciting!",
    },
  ]);
  const [username, setUsername] = useState("Me");

  const sendMessage = (event) => {
    event.preventDefault();

    // setUsername(prompt("Enter a username: "));

    setMessages([...messages, { username: username, message: inputMessage }]);
    setInputMessage("");
  };

  // TODO: FIX FIREBASE TO CONTINUE WITH THIS!
  // useEffect(() => {
  //   db.collection("messages").onSnapshot((snapshot) => {
  //     setMessages(snapshot.docs.map((doc) => doc.data()));
  //   });
  // }, []);

  // // Temporary username (login)
  // useEffect(() => {
  //   setUsername(prompt("Enter your username:"));
  // }, []);

  return (
    <div className="messages">
      <div className="messages__header">
        {/* <div className="messages__headerContent"> */}
        <div className="messages__headerLeft">
          <h1 className="messages__headerName">Test Account</h1>
        </div>
        <div className="messages__headerRight">
          <SearchOutlinedIcon className="messages__headerIcons" />
          <ArticleIcon className="messages__headerIcons" />
          <MoreVertIcon className="messages__headerIcons" />
        </div>
        {/* </div> */}
      </div>
      <div className="messages__content">
        {messages.map((message, index) => (
          <MessageCard
            key={index}
            username={username}
            message={message}
          ></MessageCard>
        ))}
      </div>
      {/* <div className="messages__message"> */}
      <div className="messages__messageContent">
        <div className="messages__messageLeft">
          <AttachFileIcon className="messages__messageIcons" />
          <BookmarkBorderIcon className="messages__messageIcons" />
        </div>
        <form className="messages__messageForm">
          <input
            value={inputMessage}
            onChange={(event) => setInputMessage(event.target.value)}
            type="message"
            placeholder="Enter a message"
          />
          <button
            disabled={!inputMessage}
            className="messages__messageSendButton"
            type="submit"
            onClick={sendMessage}
          >
            <SendIcon className="messages__sendIcons" />
          </button>
          <SentimentSatisfiedAltIcon className="messages__messageIcons" />
        </form>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Messages;
