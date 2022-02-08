import './MenuBar.css';
import React from "react";
import { Link } from "react-router-dom";

import main from "../image/main.png"
import search from "../image/search.png"
import mywait from "../image/my-wait.png"
import liked from "../image/liked.png"
import etc from "../image/etc.png"

function Menu() {
    return(
        <div className="Menu">
            <Link to="/">
                <img src={main} alt="Main" />
            </Link>
            <Link to="/search">
                <img src={search} alt="Search" />
            </Link>
            <Link to="/my-wait">
                <img src={mywait} alt="My-Wait" />
            </Link>
            <Link to="/liked">
                <img src={liked} alt="Liked" />
            </Link>
            <Link to="/etc">
                <img src={etc} alt="Etc" />
            </Link>
        </div>
    );
}

export default Menu; 