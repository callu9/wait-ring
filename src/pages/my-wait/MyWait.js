import React, { useState } from "react";
import Wait from "../../component/wait/Wait.js";
import Reserve from "../../component/wait/Reserve.js";
import { useLocation } from "react-router-dom";

import "./MyWait.scss";
import storage from "../../storage.js";

function MyWait() {
  const tabFlag = useLocation().pathname.includes("/reserve") ? false : true;
  const [waitFlag, setWaitFlag] = useState(tabFlag);
  function changeTab() {
    setWaitFlag(!waitFlag);
  }

  return (
    <div className="MyWait">
      <div className="Header">
        <div>나의 웨이링</div>
        <div className="FontSmall">웨이팅/예약 내역을 확인하세요!</div>
      </div>
      <div className="MyWait-Body">
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
        <div className="MyWait-Body-Content">
          {waitFlag ? (
            <Wait data={storage.waitingData} />
          ) : (
            <Reserve data={storage.reservationData} />
          )}
        </div>
      </div>
    </div>
  );
}

export default MyWait;
