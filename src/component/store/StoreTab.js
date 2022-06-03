import React from "react";

export default function StoreTab(props) {
  const changeWaitModalFlag = function () {
    props.func1(true);
  };

  return (
    <div className="Store-Tab">
      {props.wait ? (
        <div className="Store-Tab-Wait" onClick={changeWaitModalFlag}>
          웨이팅 가능
        </div>
      ) : (
        <div className="Store-Tab-Wait-None">웨이팅 불가</div>
      )}
      {props.reserve ? (
        <div className="Store-Tab-Reserve">예약 가능</div>
      ) : (
        <div className="Store-Tab-Reserve-None">예약 불가</div>
      )}
    </div>
  );
}
