import React, { useState } from "react";
import "./Calendar.scss";

export default function Calendar(props) {
  const [year, setYear] = useState(props.year);
  const [month, setMonth] = useState(props.month);
  const [date, setDate] = useState(props.todayDate);

  function changeMonth(param) {
    if (param === -1) {
      if (month > 1) {
        // setTodayFlag(month - 1 !== props.month ? false : true);
        if (year === props.year && month - 1 === props.month && date < props.todayDate)
          setDate(props.todayDate);
        setMonth(month - 1);
      } else {
        setMonth(12);
        setYear(year - 1);
      }
    } else if (param === 1) {
      if (month < 12) {
        // setTodayFlag(month + 1 !== props.month ? false : true);
        setMonth(month + 1);
      } else {
        setMonth(1);
        setYear(year + 1);
      }
    }
  }

  function changeDate(d) {
    if (year === props.year && month - 1 === props.month && date < props.todayDate) return;
    setDate(d);
  }

  function changeDateName(d) {
    if (year === props.year && month === props.month && d < props.todayDate) return "cal_none";
    if (d === date) return "cal_today";
    return "cal_day";
  }

  const Rows = () => {
    const startDay = new Date(year, month - 1, 1);
    const lastDay = new Date(year, month, 0);
    const rows = [];
    let date = 1;
    for (let row = 0; row <= (startDay.getDay() + lastDay.getDate()) / 7; row++) {
      let dates = [];
      if (row === 0) {
        for (let i = 0; i < startDay.getDay(); i++) {
          dates[i] = "";
        }
      }
      for (let i = dates.length; i < 7; i++) {
        if (date <= lastDay.getDate()) dates[i] = date++;
        else dates[i] = "";
      }
      rows.push(
        <tr className="Calendar-Body-Row">
          {dates.map((d, index) => (
            <td key={index} className={changeDateName(d)} onClick={() => changeDate(d)}>
              {d}
            </td>
          ))}
        </tr>
      );
    }
    return rows;
  };

  return (
    <div className="Calendar">
      <div className="Calendar-Header">
        {year > props.year || month > props.month ? (
          <div className="prev" onClick={() => changeMonth(-1)}>
            ＜
          </div>
        ) : (
          <div className="prev-none">＜</div>
        )}
        <div>
          {year}.{month}
        </div>
        <div className="next" onClick={() => changeMonth(1)}>
          ＞
        </div>
      </div>
      <div className="Calendar-Body">
        <table className="Calendar-Body-Table">
          <thead className="cal_week">
            <tr>
              <th>일</th>
              <th>월</th>
              <th>화</th>
              <th>수</th>
              <th>목</th>
              <th>금</th>
              <th>토</th>
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
