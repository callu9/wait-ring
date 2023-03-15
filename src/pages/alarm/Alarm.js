import React, { useState } from "react";

import "./Alarm.scss";
import storage from "../../storage.js";
import AlarmListItem from "../../component/alarm/AlarmListItem";

export default function Alarm(props) {
  const [datas, setDatas] = useState(storage.alarmList);

  function deleteItem(item) {
    const idx = datas.indexOf(item);
    setDatas([...datas.slice(0, idx), ...datas.slice(idx+1, datas.length)]);
  }

  return (
    <div className="Alarm">
      <div className="Header">
        <div>알림</div>
      </div>
      <div className="Alarm-List-area">
        {datas.length ? (
          datas.map((item) => <AlarmListItem key={item.id} item={item} deleteItem={deleteItem} />)
        ) : (
          <div className="Alarm-List-None">도착한 알림 내역이 없습니다.</div>
        )}
      </div>
    </div>
  );
}
