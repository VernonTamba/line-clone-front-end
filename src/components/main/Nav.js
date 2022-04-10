import React from "react";
import "./Nav.css";
import PersonIcon from "@mui/icons-material/Person";
import SmsIcon from "@mui/icons-material/Sms";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import CropIcon from "@mui/icons-material/Crop";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import VolumeDownOutlinedIcon from "@mui/icons-material/VolumeDownOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <div className="nav__top">
        <Link to="/login">
          <img
            className="nav__logo"
            src="https://logodownload.org/wp-content/uploads/2017/04/line-logo.png"
            alt="LINE logo"
          />
        </Link>

        <PersonIcon className="nav__icon" />
        <SmsIcon className="nav__icon" />
        <PersonAddAlt1Icon className="nav__icon" />
        <DynamicFeedIcon className="nav__icon" />
      </div>
      <div className="nav__bottom">
        <VideoCallOutlinedIcon className="nav__icon" />
        <CropIcon className="nav__icon" />
        <BookmarkBorderIcon className="nav__icon" />
        <VolumeDownOutlinedIcon className="nav__icon" />
        <MoreHorizIcon className="nav__icon" />
      </div>
    </div>
  );
};

export default Nav;
