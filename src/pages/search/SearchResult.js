import React, { useState } from "react";
import { useParams } from "react-router-dom";
import SearchBar from "../../component/SearchBar";
import List from "../../component/list/List.js";

import storage from "../../storage.js";
import "./Search.scss";

function SearchResult() {
  const { keyword } = useParams();
  const [focusFlag, setFocusFlag] = useState(false);
  const [filterFlag, setFilterFlag] = useState([true, false, false]);

  const initFocusFlag = (fg) => {
    setFocusFlag(fg);
  };

  function changeFilterFlag(idx) {
    let tmpArr = [false, false, false];
    tmpArr[idx] = true;
    setFilterFlag(tmpArr);
  }

  const stores = storage.storeData;
  const result = stores.filter(
    (item) => (item.name.includes(keyword) || item.areaDong.includes(keyword) || item.keyword.includes(keyword)) && (filterFlag[0] || (filterFlag[1]&&item.waitingFlag) || (filterFlag[2]&&item.reservationFlag))
  );
  return (
    <div className="Search-Result">
      <div className="Search-Result-Bar">
        <SearchBar keyword={keyword} focusFlag={focusFlag} func={initFocusFlag} />
      </div>
      {!focusFlag && (
        <div className="Search-Result-Content">
          <div className="Search-Result-Filter-Area">
            <div className={filterFlag[0]?"keyword-activated":"keyword"} onClick={() => changeFilterFlag(0)}>전체</div>
            <div className={filterFlag[1]?"keyword-activated":"keyword"} onClick={() => changeFilterFlag(1)}>웨이팅 가능</div>
            <div className={filterFlag[2]?"keyword-activated":"keyword"} onClick={() => changeFilterFlag(2)}>예약 가능</div>
          </div>
          <div className="Search-Result-Body">
            {result.length > 0 ? <List data={result} /> : <div className="Search-Result-Body-None">검색 결과가 없습니다.</div>}
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchResult;
