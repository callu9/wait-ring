import React, { useState } from "react";
import "./Calendar.scss";

export default function Calendar(props) {
  const [year, setYear] = useState(props.year);
  const [month, setMonth] = useState(props.month);
  const [date, setDate] = useState(props.todayDate + 1);

  function changeCalDate(calText) {
    props.func1(calText);
    props.func2(null);
    props.func3(false);
  }
  function makeCalText(num) {
    return num < 10 ? "0" + num : num;
  }

  function isValidDate(m, d) {
    const lastDay = new Date(year, m, 0);
    return (
      !(year === props.year && m === props.month && d <= props.todayDate) &&
      d <= lastDay.getDate()
    );
  }

  function changeDate(d) {
    if (!d || !isValidDate(month, d)) return;
    setDate(d);
    changeCalDate(`${year}.${makeCalText(month)}.${makeCalText(d)}`);
  }
  function changeDateName(d) {
    if (!isValidDate(month, d)) return "cal_none";
    if (d === date) return "cal_today";
    return "cal_day";
  }

  function prevMonth() {
    if (month > 1) {
      if (isValidDate(month-1, date)) {
        setMonth(month - 1);
        changeCalDate(`${year}.${makeCalText(month - 1)}.${makeCalText(date)}`);
      } else {
        setDate(props.todayDate + 1);
        setMonth(month - 1);
        changeCalDate(
          `${year}.${makeCalText(month - 1)}.${makeCalText(
            props.todayDate + 1
          )}`
        );
      }
    } else {
      setMonth(12);
      setYear(year - 1);
      changeCalDate(`${year - 1}.12.${makeCalText(date)}`);
    }
  }

  function nextMonth() {
    if (month < 12) {
      setMonth(month + 1);
      changeCalDate(`${year}.${makeCalText(month + 1)}.${makeCalText(date)}`);
    } else {
      setMonth(1);
      setYear(year + 1);
      changeCalDate(`${year + 1}.01.${makeCalText(date)}`);
    }
  }

  const Rows = () => {
    const startDay = new Date(year, month - 1, 1);
    const lastDay = new Date(year, month, 0);
    let rows = [];
    let dateNum = 1;
    for (
      let row = 0;
      row <= (startDay.getDay() + lastDay.getDate()) / 7;
      row++
    ) {
      let dates = [];
      if (row === 0) {
        for (let i = 0; i < startDay.getDay(); i++) {
          dates[i] = "";
        }
      }
      for (let i = dates.length; i < 7; i++) {
        if (dateNum <= lastDay.getDate()) dates[i] = dateNum++;
        else dates[i] = "";
      }
      rows = [
        ...rows,
        <tr className="Calendar-Body-Row">
          {dates.map((d, index) => (
            <td
              key={index}
              className={changeDateName(d)}
              onClick={() => changeDate(d)}
            >
              {d}
            </td>
          ))}
        </tr>,
      ];
    }
    return rows;
  };

  const calHeader = ["일", "월", "화", "수", "목", "금", "토"];

  return (
    <div className="Calendar">
      <div className="Calendar-Header">
        {year > props.year || month > props.month ? (
          <div className="prev" onClick={prevMonth}>
            ＜
          </div>
        ) : (
          <div className="prev-none">＜</div>
        )}
        <div>
          {year}.{month}
        </div>
        <div className="next" onClick={nextMonth}>
          ＞
        </div>
      </div>
      <div className="Calendar-Body">
        <table className="Calendar-Body-Table">
          <thead className="cal_week">
            <tr>
              {calHeader.map((cal, index) => (
                <th key={index}>{cal}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <Rows />
          </tbody>
        </table>
      </div>
    </div>
  );
}
