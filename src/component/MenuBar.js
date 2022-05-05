import "./MenuBar.scss";
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

export default class MenuBar extends React.Component {
  constructor() {
    super();

    const menuNum = window.localStorage.getItem("menuNum");

    function makeMenuFg(menuNum) {
      let fgArr = [false, false, false, false, false];
      fgArr[menuNum] = true;
      return fgArr;
    }

    function makeMenuFgWhenNull() {
      let fgArr = [false, false, false, false, false];
      let pathName = window.location.pathname.split("/")[1];
      let num = 0;
      switch (pathName) {
        case "":
          num = 0;
          break;
        case "search":
          num = 1;
          break;
        case "my-wait":
          num = 2;
          break;
        case "liked":
          num = 3;
          break;
        case "etc":
          num = 4;
          break;
      }
      fgArr[num] = true;
      return fgArr;
    }

    this.state = {
      menuFlag: menuNum === null ? makeMenuFgWhenNull() : makeMenuFg(menuNum),
    };
  }

  render() {
    const { menuFlag } = this.state;

    let changeMenu = (idx) => {
      let arr = [false, false, false, false, false];
      arr[idx] = true;
      this.setState({ menuFlag: arr });
      window.localStorage.setItem("menuNum", idx);
    };

    return (
      <div className="Menu">
        <Link to="/" onClick={() => changeMenu(0)}>
          <img src={menuFlag[0] ? mainActive : main} className="Menu-icon" alt="Main" />
        </Link>
        <Link to="/search" onClick={() => changeMenu(1)}>
          <img src={menuFlag[1] ? searchActive : search} className="Menu-icon" alt="Search" />
        </Link>
        <Link to="/my-wait" onClick={() => changeMenu(2)}>
          <img src={menuFlag[2] ? mywaitActive : mywait} className="Menu-icon" alt="My-Wait" />
        </Link>
        <Link to="/liked" onClick={() => changeMenu(3)}>
          <img src={menuFlag[3] ? likedActive : liked} className="Menu-icon" alt="Liked" />
        </Link>
        <Link to="/etc" onClick={() => changeMenu(4)}>
          <img src={menuFlag[4] ? etcActive : etc} className="Menu-icon" alt="Etc" />
        </Link>
      </div>
    );
  }
}
