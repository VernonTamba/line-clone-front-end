import React from "react";
import "./Main.css";
import Nav from "./Nav";
import List from "./List";
import Messages from "./Messages";

const Main = () => {
  return (
    <div className="main">
      {/* LEFT - NAVBAR */}
      <Nav />
      {/* MIDDLE - LIST OF CONTACTS, CHAT => ROUTER? */}
      <List />
      {/* RIGHT - CHAT MESSAGES */}
      <Messages />
    </div>
  );
};

export default Main;
