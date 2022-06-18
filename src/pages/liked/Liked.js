import React from "react";
import { useNavigate } from "react-router-dom";
import ButtonLogin from "../../component/ButtonLogin";
import List from "../../component/list/List";

import storage from "../../storage.js";
import likedNone from "../../image/liked-list-none.png";
import "./Liked.scss";

function Liked(props) {
  const navigate = useNavigate();
  return (
    <div className="Liked">
      <div className="Header">
        <div>관심 맛집</div>
        <div className="FontSmall">좋아요 표시한 맛집에서 지금 웨이링 하세요!</div>
      </div>
      {props.user?.id ? (
        <div className="List-area">
          {storage.storeData?.length ? (
            <List data={storage.storeData} />
          ) : (
            <div className="Liked-List-None">좋아요한 맛집 내역이 없습니다</div>
          )}
        </div>
      ) : (
        <div className="user-none">
          <img src={likedNone} alt="likedBg" />
          <ButtonLogin className="LoginBtn" bgColor="#fb974b" onClick={() => navigate("/login")}>
            로그인하러 가기
          </ButtonLogin>
        </div>
      )}
    </div>
  );
}

export default Liked;
