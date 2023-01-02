import React from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Avatar, IconButton } from "@mui/material";
const Header = () => {
  return (
    <div className="header">
      {/* Header left */}
      <div className="header_left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img src="img/gmailLogo.png" alt="" />{" "}
        {/*Come back to add a image linke */}
      </div>
      {/* Header middle */}
      <div className="header_middle">
        <SearchIcon />
        <input placeholder="Search mail" type="text" />
        <ArrowDropDownIcon className="header_inputCaret" />
      </div>
      {/* Header right */}
      <div className="header_right">
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <Avatar />
      </div>
    </div>
  );
};

export default Header;
