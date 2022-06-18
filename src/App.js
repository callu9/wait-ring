// import logo from "./logo.svg";
// import "./App.css";

import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/user/Login";
import Signup from "./pages/user/Signup";

import Main from "./pages/main/Main";
import Search from "./pages/search/Search";
import MyWait from "./pages/my-wait/MyWait";
import Liked from "./pages/liked/Liked";
import Etc from "./pages/etc/Etc";
import EtcMyWait from "./pages/etc/EtcMyWait";
import EtcReview from "./pages/etc/EtcReview";

import Alarm from "./pages/alarm/Alarm";
import SearchResult from "./pages/search/SearchResult";
import Store from "./pages/store/Store";
import MenuBar from "./component/MenuBar";
import Calendar from "./component/Calendar";

class App extends Component {
  render() {
    const user = JSON.parse(window.sessionStorage.getItem("user"));
    return (
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Main user={user} />} />
          <Route exact path="/search" element={<Search />} />
          <Route path="/my-wait/*" element={<MyWait user={user} />} />
          <Route path="/liked" element={<Liked user={user} />} />
          <Route path="/etc" element={<Etc user={user} />} />
          <Route path="/etc/my-wait/*" element={<EtcMyWait />} />
          <Route path="/etc/review" element={<EtcReview />} />
          <Route path="/alarm" element={<Alarm />} />
          <Route path="/store/*" element={<Store />} />
          <Route path="/search/:keyword" element={<SearchResult />} />
          <Route path="/cal" element={<Calendar />} />
        </Routes>
        <MenuBar />
      </Router>
    );
  }
}

export default App;
