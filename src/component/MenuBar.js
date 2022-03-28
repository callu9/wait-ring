import "./MenuBar.css";
import React from "react";
import { Link } from "react-router-dom";

import main from "../image/main.png";
import search from "../image/search.png";
import mywait from "../image/my-wait.png";
import liked from "../image/liked.png";
import etc from "../image/etc.png";

function MenuBar() {
  return (
      <div className="Menu">
        <Link to="/">
          <img src={main} className="Menu-icon" alt="Main" />
        </Link>
        <Link to="/search">
          <img src={search} className="Menu-icon" alt="Search" />
        </Link>
        <Link to="/my-wait">
          <img src={mywait} className="Menu-icon" alt="My-Wait" />
        </Link>
        <Link to="/liked">
          <img src={liked} className="Menu-icon" alt="Liked" />
        </Link>
        <Link to="/etc">
          <img src={etc} className="Menu-icon" alt="Etc" />
        </Link>
      </div>
  );
}

export default MenuBar;
