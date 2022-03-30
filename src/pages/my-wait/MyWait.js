import React from "react";
import "./MyWait.scss";

import iconNone from "../../image/waitring-none.png";
import iconIncomplete from "../../image/waitring-incomplete.png";
import iconComplete from "../../image/waitring-complete.png";

export default class MyWait extends React.Component {
  constructor() {
    super();

    this.state = {
      waitFlag: true,
    };
  }

  render() {
    const { waitFlag } = this.state;

    let changeTab = (flag) => {
      this.setState({ waitFlag: flag });
    };

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
            <div className="MyWait-Body-None">
              <div className="MyWait-Body-None-Icon">
                <img src={iconNone} alt="icon-none" />
              </div>
              <div className="MyWait-Body-None-Content">
                {waitFlag? "원격 웨이팅 신청한 매장이 없습니다":"방문 예약 매장이 없습니다"}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
