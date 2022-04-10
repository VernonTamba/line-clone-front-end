import React from "react";
import "./MessageCard.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { InputLabel } from "@mui/material";

const MessageCard = ({ username, message }) => {
  const isUser = username === message.username;

  return (
    <div className={`messageCard ${isUser && "messageCard__user"}`}>
      <InputLabel className="messageCard__name">{message.username}</InputLabel>
      <Card
        className={`${
          isUser ? "messageCard__userCard" : "messageCard__guestCard"
        }`}
      >
        <CardContent>
          <Typography color="black" variant="p" component="div">
            {message.message}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default MessageCard;
