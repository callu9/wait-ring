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
      <div><img src={main} alt="Main" /></div>
      <div><img src={search} alt="Search" /></div>
      <div><img src={mywait} alt="My-Wait" /></div>
      <div><img src={liked} alt="Liked" /></div>
      <div><img src={etc} alt="Etc" /></div>
    </div>
  );
}

export default Menu;
