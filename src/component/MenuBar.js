import "./MenuBar.css";
import React from "react";
import { Link } from "react-router-dom";

import main from "../image/main.png";
import search from "../image/search.png";
import mywait from "../image/my-wait.png";
import liked from "../image/liked.png";
import etc from "../image/etc.png";

import mainActive from "../image/main-activate.png";
import searchActive from "../image/search-activate.png";
import mywaitActive from "../image/my-wait-activate.png";
import likedActive from "../image/liked-activate.png";
import etcActive from "../image/etc-activate.png";

let menus = [true, false, false, false, false];
const changeMenu = (idx) => {
  menus = [false, false, false, false, false];
  menus[idx] = true;
}

function MenuBar() {
  return (
      <div className="Menu">
        <Link to="/" onClick={() => changeMenu(0)} >
          <img src={menus[0]? mainActive:main} className="Menu-icon" alt="Main" />
        </Link>
        <Link to="/search" onClick={() => changeMenu(1)}>
          <img src={menus[1]? searchActive:search} className="Menu-icon" alt="Search" />
        </Link>
        <Link to="/my-wait" onClick={() => changeMenu(2)}>
          <img src={menus[2]? mywaitActive:mywait} className="Menu-icon" alt="My-Wait" />
        </Link>
        <Link to="/liked" onClick={() => changeMenu(3)}>
          <img src={menus[3]? likedActive:liked} className="Menu-icon" alt="Liked" />
        </Link>
        <Link to="/etc" onClick={() => changeMenu(4)}>
          <img src={menus[4]? etcActive:etc} className="Menu-icon" alt="Etc" />
        </Link>
      </div>
  );
}

export default MenuBar;
