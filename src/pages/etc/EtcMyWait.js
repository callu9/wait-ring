import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import "./Etc.scss";
import storage from "../../storage.js";
import WaitList from "../../component/wait/WaitList.js";
import ReserveList from "../../component/wait/ReserveList.js";

import exit from "../../image/exit.png";

export default function EtcMyWait(props) {
  const tabFlag = useLocation().pathname.includes("/reserve") ? false : true;
  const waits = storage.EtcWaitingDetail;
  const reserves = storage.EtcReservationDetail;

  const navigate = useNavigate();
  const [waitFlag, setWaitFlag] = useState(tabFlag);
  function changeTab(flag) {
    setWaitFlag(flag);
  }

  const EtcWait = () => {
    if (waits?.length)
      return (
        <div>
          {waits.map((reserve, i) => (
            <WaitList key={i} data={reserve} />
          ))}
        </div>
      );
    else
      return (
        <div className="MyWait-Body-Content">
          <div className="MyWait-Body-None">원격 웨이팅 신청 내역이 없습니다</div>
        </div>
      );
  };

  const EtcReserve = () => {
    if (reserves?.length)
      return (
        <div>
          {reserves.map((reserve, i) => (
            <ReserveList key={i} data={reserve} />
          ))}
        </div>
      );
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
        <div className="Etc-MyWait-Body-Content">{waitFlag ? <EtcWait /> : <EtcReserve />}</div>
      </div>
    </div>
  );
}
