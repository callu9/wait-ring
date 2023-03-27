import React from "react";
import { useNavigate } from "react-router-dom";

export default function ReserveList({ data = {} }) {
  const navigate = useNavigate();

  return (
    <div className="MyWait-Table-Etc">
      <div className="MyWait-Table-row-first">
        <p className="left">매장명</p>
        <p className="right" onClick={() => navigate("/store/" + data.storeId)}>
          {data.storeName}
        </p>
      </div>
      <div className="MyWait-Table-row">
        <p className="left">인원</p>
        <p className="right">
          성인 {data.adult}명
          {data.child > 0 ? " / 아동 " + data.child + "명" : ""}
        </p>
      </div>
      <div className="MyWait-Table-row">
        <p className="left">예약일시</p>
        <p className={data.status === 1 ? "right orange" : "right"}>
          {data.reserveDate}
        </p>
      </div>
      {data.status === 2 ? (
        <div className="More-Etc">
          <p onClick={() => navigate("/store/" + data.storeId)}>매장 상세</p>
          <p>리뷰 쓰기</p>
        </div>
      ) : (
        <div className="More-Etc">
          <p onClick={() => navigate("/store/" + data.storeId)}>매장 상세</p>
          <p className="Btn-Cancel-Reserve">예약 취소</p>
        </div>
      )}
    </div>
  );
}
