import React from "react";
import { Outlet, Link } from "react-router-dom";

import "./Main.css";
import Alarm from "../alarm/Alarm";

import notice from "../../image/notice-none.png";
import map from "../../image/location-logout.png";
import ListSlide from "../../component/list/ListSlide.js";
import ReviewListSlide from "../../component/review/ReviewListSlide.js";

import storage from "../../storage.js";

const Main = (props) => {
  return (
    <div className="Main">
      <div className="Alarm">
        <p className="Alarm-icon-area">
          <Link to="/alarm">
            <img src={notice} alt="Notice" />
          </Link>
        </p>
      </div>
      <div className="Header-main">
        <div>쉽고 빠른 원격 웨이팅,</div>
        <div className="FontOrange">웨이링</div>
      </div>
      <div className="Body">
        <div className="Best-area">
          <div>인기 웨이팅 맛집</div>
          <div className="Item-list-slide">
            <ListSlide data={storage.storeData} />
          </div>
        </div>
        <div className="Location-area">
          <div>내 주변 웨이팅 맛집</div>
          <div className="Map">
            <img src={map} alt="temp" />
          </div>
        </div>
        <div className="Review-area">
          <div>최근 작성된 리뷰</div>
          <div className="Review-list-slide">
            <ReviewListSlide data={storage.reviewData} />
          </div>
        </div>
      </div>
      {/* <Outlet /> */}
    </div>
  );
};

export default Main;
