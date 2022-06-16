import React from "react";
import { useNavigate } from "react-router-dom";

import "./Alarm.scss";
import noticeIcon from "../../image/notice-none.png";
import noticeIconNew from "../../image/notice-new.png";
import storage from "../../storage.js";

const data = storage.alarmList;

export default function Alarm(props) {
  const navigate = useNavigate();

  function makeContent(wait, reserve, storeName) {
    let alarmStr = "";
    if (reserve > 0) alarmStr = "예약 완료";
    else {
      if (wait === 1) alarmStr = "원격 웨이팅 등록";
      else alarmStr = "입장 안내";
    }
    return storeName + " " + alarmStr;
  }

  const list = data.map((item) => (
    <tr key={item.id}>
      <td className="Alarm-List-Item">
        <div className="Alarm-List-Item-img">
          {item.unread ? (
            <img
              src={noticeIconNew}
              className="notice-icon"
              alt="notice-icon"
            />
          ) : (
            <img src={noticeIcon} className="notice-icon" alt="notice-icon" />
          )}
        </div>
        <div className="Alarm-List-Item-body">
          <div
            className="Alarm-List-Item-content"
            onClick={() =>
              navigate(item.reserve > 0 ? "/my-wait/reserve" : "/my-wait")
            }
          >
            {makeContent(item.wait, item.reserve, item.storName)}
          </div>
          <div className="Alarm-List-Item-foot">
            {item.datetime} {item.people}
          </div>
        </div>
      </td>
    </tr>
  ));

  return (
    <div className="Alarm">
      <div className="Header">
        <div>알림</div>
      </div>
      <div className="Alarm-List-area">
        {data.length ? (
          <table>
            <tbody>{list}</tbody>
          </table>
        ) : (
          <div className="Alarm-List-None">도착한 알림 내역이 없습니다.</div>
        )}
      </div>
    </div>
  );
}
