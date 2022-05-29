import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Etc.scss";
import storage from "../../storage.js";

import exit from "../../image/exit.png";

export default function EtcMyWait(props) {
  const waits = storage.EtcWaitingDetail;
  const reserves = storage.EtcReservationDetail;

  const navigate = useNavigate();
  const [waitFlag, setWaitFlag] = useState(true);
  function changeTab() {
    setWaitFlag(!waitFlag);
  }

  const EtcWait = () => {
    if (waits.length > 0) return <div></div>;
    else
      return (
        <div className="MyWait-Body-Content">
          <div className="MyWait-Body-None">원격 웨이팅 신청 내역이 없습니다</div>
        </div>
      );
  };
  const EtcReserve = () => {
    if (reserves.length > 0) return <div></div>;
    else
      return (
        <div className="MyWait-Body-Content">
          <div className="MyWait-Body-None">예약 신청 내역이 없습니다</div>
        </div>
      );
  };

  return (
    <div className="Etc MyWait">
      <div className="Exit">
        <img src={exit} alt="Exit-Icon" onClick={() => navigate(-1)} />
      </div>
      <div className="Header">
        <div>웨이팅/예약 내역</div>
        <div className="FontSmall">지난 웨이팅/예약 내역을 확인하세요!</div>
      </div>
      <div className="Etc-MyWait-Body">
        <div className="MyWait-Body-Tab">
          <div
            className={waitFlag ? "MyWait-Tab-Active" : "MyWait-Tab-Inactive"}
            onClick={changeTab}
          >
            웨이팅
          </div>
          <div
            className={waitFlag ? "MyWait-Tab-Inactive" : "MyWait-Tab-Active"}
            onClick={changeTab}
          >
            예약
          </div>
        </div>
        <div className="Etc-MyWait-Body-Content">{waitFlag ? <EtcWait /> : <EtcReserve />}</div>
      </div>
    </div>
  );
}
