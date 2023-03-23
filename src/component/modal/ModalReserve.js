import React, { useState } from "react";
import "./Modal.scss";
import Calendar from "../Calendar";
import cancel from "../../image/cancel.png";
import iconIncomplete from "../../image/waitring-incomplete.png";

export default function ModalReserve(props) {
  const changeModalFlag = function () {
    props.func(false);
  };
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const todayDate = date.getDate();

  function makeCalText(num) {
    return num < 10 ? "0" + num : num;
  }
  const [calendar, setCalendar] = useState(
    `${year}.${makeCalText(month)}.${makeCalText(todayDate + 1)}`
  );
  const [time, setTime] = useState(null);
  const [buttonFg, setButtonFg] = useState(false);

  const timeList = [
    "10:00",
    "11:30",
    "13:00",
    "14:30",
    "17:00",
    "18:30",
    "19:00",
  ];
  function changeTime(t) {
    setTime(t);
    setButtonFg(true);
  }

  return (
    <>
      {props.modalFlag && (
        <div className="Modal-Reserve">
          <div className="Modal-Reserve-Content">
            <div className="Modal-Cancel">
              <img
                src={cancel}
                className="Modal-Photo-Cancel-Image"
                alt="Modal-Cancel"
                onClick={changeModalFlag}
              />
            </div>
            <div className="Modal-Reserve-Calendar">
              <div className="notice">
                <img src={iconIncomplete} alt="notice-icon" />
                <div>예약 날짜를 선택해주세요</div>
              </div>
              <Calendar
                year={year}
                month={month}
                todayDate={todayDate}
                func1={setCalendar}
                func2={setTime}
                func3={setButtonFg}
              />
            </div>
            <div className="Modal-Reserve-Time">
              <div className="notice">
                <img src={iconIncomplete} alt="notice-icon" />
                <div>예약 시간을 선택해주세요</div>
              </div>
              <div className="Modal-Reserve-Time-List">
                {timeList.map((item, index) => (
                  <div
                    className={
                      item === time
                        ? "Modal-Reserve-Time-List-item-active"
                        : "Modal-Reserve-Time-List-item"
                    }
                    onClick={() => changeTime(item)}
                    key={index}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="Modal-Reserve-Button-area">
              <div
                className={
                  buttonFg
                    ? "Modal-Reserve-Button-active"
                    : "Modal-Reserve-Button"
                }
              >
                예약 신청하기
              </div>
            </div>
          </div>
          <div
            className="Modal-Reserve-Background"
            onClick={changeModalFlag}
          ></div>
        </div>
      )}
    </>
  );
}
