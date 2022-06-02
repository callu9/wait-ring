import React from "react";
import { useNavigate } from "react-router-dom";

import "./Alarm.scss";
import noticeIcon from "../../image/notice-none.png";
import noticeIconNew from "../../image/notice-new.png";

const data = [
  {
    id: 1,
    wait: 0,
    reserve: 1,
    storeId: 1,
    storName: "고든램지버거",
    datetime: "2022.00.00(월) 00:00",
    people: "성인 0명",
    unread: true,
  },
  {
    id: 2,
    wait: 2,
    reserve: 0,
    storeId: 1,
    storName: "고든램지버거",
    datetime: "2022.00.00(월) 00:00",
    people: "성인 0명",
    unread: false,
  },
  {
    id: 3,
    wait: 1,
    reserve: 0,
    storeId: 1,
    storName: "고든램지버거",
    datetime: "2022.00.00(월) 00:00",
    people: "성인 0명",
    unread: false,
  },
];

export default function Alarm(props) {
  const navigate = useNavigate();

  function makeContent(wait, reserve, storeName) {
    let alarmStr = "";
    if(reserve>0)
    alarmStr = "예약 완료";
    else {
      if(wait===1) alarmStr = "원격 웨이팅 등록";
      else if(wait===2) alarmStr = "입장 안내";
    }
    return storeName+" "+alarmStr;
  }
  
  const list = data.map((item) => (
    <tr key={item.id}>
      <td className="Alarm-List-Item">
        <div className="Alarm-List-Item-img">
          {item.unread ? (
            <img src={noticeIconNew} className="notice-icon" alt="notice-icon" />
          ) : (
            <img src={noticeIcon} className="notice-icon" alt="notice-icon" />
          )}
        </div>
        <div className="Alarm-List-Item-body">
          <div className="Alarm-List-Item-content" onClick={() => navigate(item.reserve>0?"/my-wait/reserve":"/my-wait")}>{makeContent(item.wait, item.reserve, item.storName)}</div>
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
        <table>
          <tbody>{list}</tbody>
        </table>
      </div>
    </div>
  );
}