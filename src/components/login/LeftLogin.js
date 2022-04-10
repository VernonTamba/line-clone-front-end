import React from "react";
import "./LeftLogin.css";
import BottomLeftLogin from "./BottomLeftLogin";
import MidLeftLogin from "./MidLeftLogin";
import TopLeftLogin from "./TopLeftLogin";

const LeftLogin = () => {
  return (
    <div className="leftLogin">
      <TopLeftLogin />
      <MidLeftLogin />
      <BottomLeftLogin />
    </div>
  );
};

export default LeftLogin;
