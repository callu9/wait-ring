import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import noticeIcon from "../../image/notice-none.png";
import noticeIconNew from "../../image/notice-new.png";

export default function AlarmListItem({ item, deleteItem }) {
  const [touchPosition, setTouchPosition] = useState({});
  const [swipeFg, setSwipeFg] = useState(0);
  const navigate = useNavigate();

  function handleSwipe(e) {
    const distX = touchPosition.x - e.changedTouches[0].clientX;
    
    const sleep = (ms) => {
      return new Promise((resolve) => setTimeout(resolve, ms));
    };

    if (distX >= 100) {
      if (swipeFg === 1) {
        setSwipeFg(2);
        sleep(500).then(() => deleteItem(item));
      } else 
        setSwipeFg(1);
    } else if (distX < 0) {
      setSwipeFg(-1);
    }
  }

  function makeItemName(swipeFg) {
    switch (swipeFg) {
      case -1:
        return "unswiped";
      case 1:
        return "swiped";
      case 2:
        return "deleted";
      default:
        return "";
    }
  }

  function makeContent(wait, reserve, storeName) {
    let alarmStr = "";
    if (reserve > 0) alarmStr = "예약 완료";
    else {
      if (wait === 1) alarmStr = "원격 웨이팅 등록";
      else alarmStr = "입장 안내";
    }
    return storeName + " " + alarmStr;
  }

  return (
    <div className="Alarm-List-Item-area">
      <div
        className={`Alarm-List-Item ${makeItemName(swipeFg)}`}
        onTouchStart={(e) =>
          setTouchPosition({
            x: e.changedTouches[0].pageX,
            y: e.changedTouches[0].pageY,
          })
        }
        onTouchEnd={(e) => handleSwipe(e)}
      >
        {item.unread ? (
          <img src={noticeIconNew} className="notice-icon" alt="notice-icon" />
        ) : (
          <img src={noticeIcon} className="notice-icon" alt="notice-icon" />
        )}
        <div className="Alarm-List-Item-body">
          <p
            className="Alarm-List-Item-content"
            onClick={() =>
              navigate(item.reserve > 0 ? "/my-wait/reserve" : "/my-wait")
            }
          >
            {makeContent(item.wait, item.reserve, item.storName)}
          </p>
          <p className="Alarm-List-Item-foot">
            {item.datetime} {item.people}
          </p>
        </div>
      </div>
      <div
        className={`btn-delete ${swipeFg <= 0 ? "off": swipeFg>1? "active":"on"}`}
        onClick={() => deleteItem(item)}
      >
        <p>지우기</p>
      </div>
    </div>
  );
}
