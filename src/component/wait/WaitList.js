import React from "react";
import { useNavigate } from "react-router-dom";

export default function WaitList({ data }) {
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
      {data.status === 2 ? (
        <div className="MyWait-Table-row">
          <p className="left">입장 시각</p>
          <p className="right">{data.enteredTime}</p>
        </div>
      ) : (
        <div className="MyWait-Table-row">
          <p className="left">대기번호</p>
          {data.status === 1 ? (
            <p>
              <span className="right orange">{data.waitingNum}번</span>
              {data.waitingBefore ? (
                <span>({data.waitingBefore}팀 남았어요)</span>
              ) : (
                <span>(곧 입장해요!)</span>
              )}
            </p>
          ) : (
            <p className="right">{data.waitingNum}번</p>
          )}
        </div>
      )}
      {data.status === 2 ? (
        <div className="More-Etc">
          <p onClick={() => navigate("/store/" + data.storeId)}>매장 상세</p>
          <p>리뷰 쓰기</p>
        </div>
      ) : (
        <div className="More-Etc">
          <p onClick={() => navigate("/store/" + data.storeId)}>매장 상세</p>
          <p className="Btn-Cancel-Wait">웨이팅 취소</p>
        </div>
      )}
    </div>
  );
}
