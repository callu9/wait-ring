// import logo from "./logo.svg";
// import "./App.css";

import React from "react";
import Main from "./pages/main/Main";
import Search from "./pages/search/Search";
import MyWait from "./pages/my-wait/MyWait";
import Liked from "./pages/liked/Liked";
import Etc from "./pages/etc/Etc";
import Alarm from "./pages/alarm/Alarm";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import MenuBar from "./component/MenuBar";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/search" element={<Search />} />
        <Route path="/my-wait" element={<MyWait />} />
        <Route path="/liked" element={<Liked />} />
        <Route path="/etc" element={<Etc />} />
        <Route path="/alarm" element={<Alarm />} />
      </Routes>
      <MenuBar />
    </Router>
  );
}

export default App;
