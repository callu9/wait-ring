import React from "react";
import List from "../../component/list/List.js";

import storage from "../../storage.js";
import "./Liked.scss";

function Liked(props) {
  return (
    <div className="Liked">
      <div className="Header">
        <div>관심 맛집</div>
        <div className="FontSmall">좋아요 표시한 맛집에서 지금 웨이링 하세요!</div>
      </div>
      <div className="List-area">
        {storage.storeData?.length? <List data={storage.storeData} />: <div className="Liked-List-None">좋아요한 맛집 내역이 없습니다</div>}
      </div>
    </div>
  );
}

export default Liked;
