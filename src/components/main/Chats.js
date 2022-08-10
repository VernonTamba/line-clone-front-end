import React from "react";
import "./Chats.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const Chats = () => {
  return (
    <div className="chats">
      <div className="chats__input">
        <SearchOutlinedIcon />
        <input type="text" placeholder="Search for chats and messages" />
      </div>
      {/* MAKE A NEW COMPONENT "CHAT" & USE MAP() ? */}
      <div className="chats__chat">
        <img
          className="chats__avatar"
          src="https://pluspng.com/img-png/png-face-profile--700.png"
          alt="Profile avatar"
        />
        <div className="chats__chatContent">
          <h1 className="chats__username">Global Chat</h1>
          <h3 className="chats__latestChat">
            Hello, this is a test message!
          </h3>{" "}
          {/* We can add the ... feature (Sunny Netflix) */}
        </div>
      </div>
    </div>
  );
};

export default Chats;
