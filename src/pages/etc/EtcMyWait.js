import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import "./Etc.scss";
import storage from "../../storage.js";

import exit from "../../image/exit.png";

export default function EtcMyWait(props) {
  const tabFlag = useLocation().pathname.includes("/reserve") ? false : true;
  const waits = storage.EtcWaitingDetail;
  const reserves = storage.EtcReservationDetail;

  const navigate = useNavigate();
  const [waitFlag, setWaitFlag] = useState(tabFlag);
  function changeTab() {
    setWaitFlag(!waitFlag);
  }

  const Wait = ({ data = {} }) => {
    return (
      <table className="MyWait-Table-Etc">
        <tbody>
          <tr className="MyWait-Table-row-first">
            <td className="left">매장명</td>
            <td className="right" onClick={() => navigate("/store/" + data.storeId)}>
              {data.storeName}
            </td>
          </tr>
          <tr className="MyWait-Table-row">
            <td className="left">대기번호</td>
            <td className="right">
              {data.status !== 1 ? (
                <div>
                  <span className="right-orange">{data.waitingNum}번 </span>
                  {data.waitingBefore > "0" ? (
                    <span>({data.waitingBefore}팀 남았어요)</span>
                  ) : (
                    <span>(곧 입장해요!)</span>
                  )}
                </div>
              ) : (
                <span className="right">{data.waitingNum}번</span>
              )}
            </td>
          </tr>
          <tr className="MyWait-Table-row">
            <td className="left">인원</td>
            <td className="right">
              성인 {data.adult}명{data.child > 0 ? " / 아동 " + data.child + "명" : ""}
            </td>
          </tr>
          <tr className="MyWait-Table-row-last">
            {data.status === 1 ? (
              <td className="More-Etc" colSpan="2">
                <div className="Two-Buttons" onClick={() => navigate("/store/" + data.storeId)}>
                  매장 상세
                </div>
                <div className="Two-Buttons">리뷰 쓰기</div>
              </td>
            ) : (
              <td className="More-Etc" colSpan="2">
                <div className="One-Button" onClick={() => navigate("/store/" + data.storeId)}>
                  매장 상세
                </div>
              </td>
            )}
          </tr>
        </tbody>
      </table>
    );
  };

  const Reserve = ({ data = {} }) => {
    return (
      <table className="MyWait-Table-Etc">
        <tbody>
          <tr className="MyWait-Table-row-first">
            <td className="left">매장명</td>
            <td className="right" onClick={() => navigate("/store/" + data.storeId)}>
              {data.storeName}
            </td>
          </tr>
          <tr className="MyWait-Table-row">
            <td className="left">인원</td>
            <td className="right">
              성인 {data.adult}명{data.child > 0 ? " / 아동 " + data.child + "명" : ""}
            </td>
          </tr>
          <tr className="MyWait-Table-row">
            <td className="left">예약일시</td>
            <td className="right">
              <span className={data.status === 1 ? "right-orange" : "right"}>
                {data.reserveDate}
              </span>
            </td>
          </tr>
          <tr className="MyWait-Table-row-last">
            {data.status === 2 ? (
              <td className="More-Etc" colSpan="2">
                <div className="Two-Buttons" onClick={() => navigate("/store/" + data.storeId)}>
                  매장 상세
                </div>
                <div className="Two-Buttons">리뷰 쓰기</div>
              </td>
            ) : (
              <td className="More-Etc" colSpan="2">
                <div className="One-Button" onClick={() => navigate("/store/" + data.storeId)}>
                  매장 상세
                </div>
              </td>
            )}
          </tr>
        </tbody>
      </table>
    );
  };

  const EtcWait = () => {
    if (waits.length > 0)
      return (
        <div>
          {waits.map((reserve, i) => (
            <Wait key={i} data={reserve} />
          ))}
        </div>
      );
    else
      return (
        <div className="MyWait-Body-Content">
          <div className="MyWait-Body-None">원격 웨이팅 신청 내역이 없습니다</div>
        </div>
      );
  };
  const EtcReserve = () => {
    if (reserves.length > 0)
      return (
        <div>
          {reserves.map((reserve, i) => (
            <Reserve key={i} data={reserve} />
          ))}
        </div>
      );
    else
      return (
        <div className="MyWait-Body-Content">
          <div className="MyWait-Body-None">예약 신청 내역이 없습니다</div>
        </div>
      );
  };

  return (
    <div className="Etc MyWait">
      <div className="Exit">
        <img src={exit} alt="Exit-Icon" onClick={() => navigate(-1)} />
      </div>
      <div className="Header">
        <div>웨이팅/예약 내역</div>
        <div className="FontSmall">지난 웨이팅/예약 내역을 확인하세요!</div>
      </div>
      <div className="Etc-MyWait-Body">
        <div className="MyWait-Body-Tab">
          <div
            className={waitFlag ? "MyWait-Tab-Active" : "MyWait-Tab-Inactive"}
            onClick={changeTab}
          >
            웨이팅
          </div>
          <div
            className={waitFlag ? "MyWait-Tab-Inactive" : "MyWait-Tab-Active"}
            onClick={changeTab}
          >
            예약
          </div>
        </div>
        <div className="Etc-MyWait-Body-Content">{waitFlag ? <EtcWait /> : <EtcReserve />}</div>
      </div>
    </div>
  );
}
