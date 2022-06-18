import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Wait from "../../component/wait/Wait.js";
import Reserve from "../../component/wait/Reserve.js";
import ButtonLogin from "../../component/ButtonLogin";
import { useLocation } from "react-router-dom";

import "./MyWait.scss";
import storage from "../../storage.js";
import mywaitNone from "../../image/mywait-store-none.png";

function MyWait(props) {
  const navigate = useNavigate();
  const tabFlag = useLocation().pathname.includes("/reserve") ? false : true;
  const [waitFlag, setWaitFlag] = useState(tabFlag);
  function changeTab(flag) {
    setWaitFlag(flag);
  }

  return (
    <div className="MyWait">
      <div className="Header">
        <div>나의 웨이링</div>
        <div className="FontSmall">웨이팅/예약 내역을 확인하세요!</div>
      </div>
      {props.user?.id ? (
        <div className="MyWait-Body">
          <div className="MyWait-Body-Tab">
            <div
              className={waitFlag ? "MyWait-Tab-Active" : "MyWait-Tab-Inactive"}
              onClick={() => changeTab(true)}
            >
              웨이팅
            </div>
            <div
              className={waitFlag ? "MyWait-Tab-Inactive" : "MyWait-Tab-Active"}
              onClick={() => changeTab(false)}
            >
              예약
            </div>
          </div>
          <div className="MyWait-Body-Content">
            {waitFlag ? (
              <Wait data={storage.waitingData} />
            ) : (
              <Reserve data={storage.reservationData} />
            )}
          </div>
        </div>
      ) : (
        <div className="user-none">
          <img src={mywaitNone} alt="likedBg" />
          <ButtonLogin className="LoginBtn" bgColor="#fb974b" onClick={() => navigate("/login")}>
            로그인하러 가기
          </ButtonLogin>
        </div>
      )}
    </div>
  );
}

export default MyWait;
