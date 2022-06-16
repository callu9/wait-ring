import React from "react";
import { useNavigate } from "react-router-dom";

export default function ReserveList({ data = {} }) {
  const navigate = useNavigate();

  return (
    <table className="MyWait-Table-Etc">
      <tbody>
        <tr className="MyWait-Table-row-first">
          <td className="left">매장명</td>
          <td
            className="right"
            onClick={() => navigate("/store/" + data.storeId)}
          >
            {data.storeName}
          </td>
        </tr>
        <tr className="MyWait-Table-row">
          <td className="left">인원</td>
          <td className="right">
            성인 {data.adult}명
            {data.child > 0 ? " / 아동 " + data.child + "명" : ""}
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
              <div
                className="Two-Buttons"
                onClick={() => navigate("/store/" + data.storeId)}
              >
                매장 상세
              </div>
              <div className="Two-Buttons">리뷰 쓰기</div>
            </td>
          ) : (
            <td className="More-Etc" colSpan="2">
              <div
                className="One-Button"
                onClick={() => navigate("/store/" + data.storeId)}
              >
                매장 상세
              </div>
            </td>
          )}
        </tr>
      </tbody>
    </table>
  );
}
