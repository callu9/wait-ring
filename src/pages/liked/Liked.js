import React from "react";
import List from "../../component/list/List.js";

import storage from "../../storage.js";
import "./Liked.css";

function Liked(props) {
  return (
    <div className="Liked">
      <div className="Header">
        <div>관심 맛집</div>
        <div className="FontSmall">좋아요 표시한 맛집에서 지금 웨이링 하세요!</div>
      </div>
      <div className="List-area">
        <List data={storage.storeData} />
      </div>
    </div>
  );
}

export default Liked;
