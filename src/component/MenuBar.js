import "./MenuBar.css";
import React from "react";
// import { Link } from "react-router-dom";

import main from "../image/main.png";
import search from "../image/search.png";
import mywait from "../image/my-wait.png";
import liked from "../image/liked.png";
import etc from "../image/etc.png";

function Menu() {
  return (
    <div className="Menu">
      <div><img src={main} className="Menu-icon" alt="Main" /></div>
      <div><img src={search} className="Menu-icon" alt="Search" /></div>
      <div><img src={mywait} className="Menu-icon" alt="My-Wait" /></div>
      <div><img src={liked} className="Menu-icon" alt="Liked" /></div>
      <div><img src={etc} className="Menu-icon" alt="Etc" /></div>
    </div>
  );
}

export default Menu;
