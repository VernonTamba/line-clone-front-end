import React from "react";
import Chats from "./Chats";
import "./List.css";

const List = () => {
  return (
    <div className="list">
      {/* ROUTE: PROFILE <--> CHATS (FOR NOW) */}
      <Chats />
    </div>
  );
};

export default List;
