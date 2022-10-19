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
  const [sortFlag, setSortFlag] = useState(0);
  const [resultArr, setResultArr] = useState(
    storage.storeData.filter(
      (item) =>
        (item.name.includes(keyword) ||
          item.areaDong.includes(keyword) ||
          item.keyword.includes(keyword)) &&
        (filterFlag[0] ||
          (filterFlag[1] && item.waitingFlag) ||
          (filterFlag[2] && item.reservationFlag))
    )
  );

  const initFocusFlag = (fg) => {
    setFocusFlag(fg);
  };

  function changeFilterFlag(idx) {
    let tmpArr = [false, false, false];
    tmpArr[idx] = true;
    setFilterFlag(tmpArr);
    getResult(tmpArr, sortFlag);
  }

  function changeSortFlag(e) {
    setSortFlag(e.target.value);
    getResult(filterFlag, e.target.value);
  }

  function getResult(filterFlag, sortFlag) {
    let result = storage.storeData.filter(
      (item) =>
        (item.name.includes(keyword) ||
          item.areaDong.includes(keyword) ||
          item.keyword.includes(keyword)) &&
        (filterFlag[0] ||
          (filterFlag[1] && item.waitingFlag) ||
          (filterFlag[2] && item.reservationFlag))
    );

    if(sortFlag === "1") {
      result.sort(function (a, b) {
        return b.review - a.review;
      });
    } else if (sortFlag === "2") {
      result.sort(function (a, b) {
        return b.liked - a.liked;
      });
    }
    
    setResultArr(result);
  }

  return (
    <div className="Search-Result">
      <div className="Search-Result-Bar">
        <SearchBar
          keyword={keyword}
          focusFlag={focusFlag}
          func={initFocusFlag}
        />
      </div>
      {!focusFlag && (
        <div className="Search-Result-Content">
          <div className="Search-Filter-Sort-Area">
            <div className="Search-Result-Filter-Area">
              <div
                className={filterFlag[0] ? "keyword-activated" : "keyword"}
                onClick={() => changeFilterFlag(0)}
              >
                전체
              </div>
              <div
                className={filterFlag[1] ? "keyword-activated" : "keyword"}
                onClick={() => changeFilterFlag(1)}
              >
                웨이팅 가능
              </div>
              <div
                className={filterFlag[2] ? "keyword-activated" : "keyword"}
                onClick={() => changeFilterFlag(2)}
              >
                예약 가능
              </div>
            </div>
            {resultArr.length > 0 && (
              <div className="Search-Result-Sort-Area">
                <select onChange={(e) => changeSortFlag(e)}>
                  <option value="0">기본 순</option>
                  <option value="1">인기 순</option>
                  <option value="2">좋아요 순</option>
                </select>
              </div>
            )}
          </div>
          <div className="Search-Result-Body">
            {resultArr.length > 0 ? (
              <List data={resultArr} />
            ) : (
              <div className="Search-Result-Body-None">
                검색 결과가 없습니다.
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchResult;
