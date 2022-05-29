import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./Main.scss";

import notice from "../../image/notice-none.png";
import noticeNew from "../../image/notice-new.png";
import map from "../../image/location-logout.png";
import ListSlide from "../../component/list/ListSlide.js";
import ReviewListSlide from "../../component/review/ReviewListSlide.js";

import storage from "../../storage.js";
import Map from "../../component/map/Map";
const Main = () => {
  const user = storage.user;
  const [userLocation, setUserLocation] = useState({});
  const [alarmFlag, setAlarmFlag] = useState(
    user.id != undefined && user.newAlarm > 0 ? true : false
  );

  useEffect(() => {
    if (user.id !== undefined && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (pos) {
        // console.log(pos);
        setUserLocation({ lat: pos.coords.latitude, lng: pos.coords.longitude });
      });
    }
    return () => {};
  }, []);

  const MainMap = ({ user: {} }) => {
    if (user.id !== undefined) {
      return <Map data={userLocation} />;
    } else {
      return (
        <div className="Map">
          <img src={map} alt="temp" />
        </div>
      );
    }
  };

  return (
    <div className="Main">
      <div className="Alarm">
        <p className="Alarm-icon-area">
          <Link to="/alarm">
            <img src={alarmFlag ? noticeNew : notice} alt="Notice" />
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
          <div>
            <MainMap user={user} />
          </div>
        </div>
        <div className="Review-area">
          <div>최근 작성된 리뷰</div>
          <div className="Review-list-slide">
            <ReviewListSlide data={storage.reviewData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
