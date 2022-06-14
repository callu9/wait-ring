import React from "react";
// import React, { useState } from "react";
import "./Modal.scss";
import Calendar from "../Calendar";
import cancel from "../../image/cancel.png";

export default function ModalReserve(props) {
  const changeModalFlag = function () {
    props.func(false);
  };
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const todayDate = date.getDate();

  return (
    <>
      {props.modalFlag && (
        <div className="Modal-Reserve-Background">
          <div className="Modal-Reserve">
            <div className="Modal-Cancel">
              <img
                src={cancel}
                className="Modal-Photo-Cancel-Image"
                alt="Modal-Cancel"
                onClick={changeModalFlag}
              />
            </div>
            <Calendar year={year} month={month} todayDate={todayDate} />
          </div>
        </div>
      )}
    </>
  );
}
