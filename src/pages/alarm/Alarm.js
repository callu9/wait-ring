import React from "react";

import "./Alarm.scss";
import noticeIcon from "../../image/notice-none.png";
import noticeIconNew from "../../image/notice-new.png";

const data = [
  {
    id: 1,
    content: "고든램지 버거 예약 완료",
    datetime: "2022.00.00(월) 00:00",
    people: "성인 0명",
    unread: true,
  },
  {
    id: 2,
    content: "고든램지 버거 입장 안내",
    datetime: "2022.00.00(월) 00:00",
    people: "성인 0명",
    unread: false,
  },
  {
    id: 3,
    content: "고든램지 버거 원격 웨이팅 등록",
    datetime: "2022.00.00(월) 00:00",
    people: "성인 0명",
    unread: false,
  },
];

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
        <div className="Alarm-List-Item-content">{item.content}</div>
        <div className="Alarm-List-Item-foot">
          {item.datetime} {item.people}
        </div>
      </div>
    </td>
  </tr>
));

function Alarm(props) {
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

export default Alarm;
