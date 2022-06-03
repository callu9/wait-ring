import React, { useState } from "react";
import "./Modal.scss";
import cancel from "../../image/cancel.png";

export default function ModalWait(props) {
  const changeModalFlag = function () {
    props.func(false);
  };

  const [adult, setAdult] = useState(0);
  const [child, setChild] = useState(0);
  const [buttonFg, setButtonFg] = useState(false);

  function minus(param) {
    if (param === "adult" && adult > 0) {
      if (adult <= 1) setButtonFg(false);
      setAdult(adult - 1);
    }
    if (param === "child" && child > 0) setChild(child - 1);
  }
  function plus(param) {
    if (param === "adult") {
        if (!buttonFg) setButtonFg(true);
        setAdult(adult + 1);
    }
    if (param === "child") setChild(child + 1);
  }

  return (
    <>
      {props.modalFlag && (
        <div className="Modal-Wait-Background">
          <div className="Modal-Wait">
            <div className="Modal-Cancel">
              <img
                src={cancel}
                className="Modal-Photo-Cancel-Image"
                alt="Modal-Cancel"
                onClick={changeModalFlag}
              />
            </div>
            <div className="Modal-Notice">
              현재 원격 웨이팅 신청 시 <br />
              대기 예상 시간은 <strong className="right-orange">25분</strong>
              입니다.
            </div>
            <div className="Modal-Wait-People">
              <div>대기 신청하실 인원을 선택하세요</div>
              <table>
                <tbody>
                  <tr className="MyWait-Table-row">
                    <td className="left">성인</td>
                    <td className="right">
                      <span className="minus" onClick={() => minus("adult")}>
                        -
                      </span>
                      <span>{adult}</span>
                      <span className="plus" onClick={() => plus("adult")}>
                        +
                      </span>
                    </td>
                  </tr>
                  <tr className="MyWait-Table-row">
                    <td className="left">아동</td>
                    <td className="right">
                      <span className="minus" onClick={() => minus("child")}>
                        -
                      </span>
                      <span>{child}</span>
                      <span className="plus" onClick={() => plus("child")}>
                        +
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div
              className={
                buttonFg ? "Modal-Wait-Button-active" : "Modal-Wait-Button"
              }
            >
              웨이팅 신청하기
            </div>
          </div>
        </div>
      )}
    </>
  );
}
