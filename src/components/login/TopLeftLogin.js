import React from "react";
import "./TopLeftLogin.css";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import MenuIcon from "@mui/icons-material/Menu";

const TopLeftLogin = () => {
  return (
    <div className="topLeftLogin">
      <MenuIcon className="topLeftLogin__menu" />
      <HelpOutlineIcon className="topLeftLogin__help" />
    </div>
  );
};

export default TopLeftLogin;
