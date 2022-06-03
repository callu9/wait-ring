// import logo from "./logo.svg";
// import "./App.css";

import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route exact path="/search" element={<Search />} />
          <Route path="/my-wait/*" element={<MyWait />} />
          <Route path="/liked" element={<Liked />} />
          <Route path="/etc" element={<Etc />} />
          <Route path="/etc/my-wait/*" element={<EtcMyWait />} />
          <Route path="/etc/review" element={<EtcReview />} />
          <Route path="/alarm" element={<Alarm />} />
          <Route path="/store/*" element={<Store />} />
          <Route path="/search/:keyword" element={<SearchResult />} />
        </Routes>
        <MenuBar />
      </Router>
    );
  }
}

export default App;
