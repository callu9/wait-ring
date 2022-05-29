import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Etc.scss";
import storage from "../../storage.js";

import exit from "../../image/exit.png";

export default function EtcMyWait(props) {
  const reviews = storage.EtcReviewDetail;

  const navigate = useNavigate();

  const EtcReviews = () => {
    if (reviews.length > 0) return <div></div>;
    else
      return (
        <div className="MyWait-Body-Content">
          <div className="MyWait-Body-None">리뷰 작성 내역이 없습니다</div>
        </div>
      );
  };

  return (
    <div className="Etc Review">
      <div className="Exit">
        <img src={exit} alt="Exit-Icon" onClick={() => navigate(-1)} />
      </div>
      <div className="Header">
        <div>리뷰 내역</div>
        <div className="FontSmall">작성한 리뷰 내역을 확인하세요!</div>
      </div>
      <EtcReviews />
    </div>
  );
}
