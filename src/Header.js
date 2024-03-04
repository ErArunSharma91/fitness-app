// Header.js
import React from "react";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "./Header.css";
import { Avatar } from "@mui/material";

const Header = () => {
  return (
    <div className="header">
      <IconButton
        edge="start"
        color="inherit"
        aria-label="back"
        style={{ width: "60px", height: "60px" }}
      >
        <ArrowBackIcon
          className="backButton"
          style={{ width: "20px", height: "20px" }}
        />
      </IconButton>

      <div className="rightSection">
        <IconButton
          color="inherit"
          aria-label="login"
          style={{ width: "60px", height: "60px" }}
        >
          <Avatar
            alt="Remy Sharp"
            src="/profile.png"
            style={{ width: "60px", height: "60px" }}
          />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
