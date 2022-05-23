import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 

import "./Search.scss";
import SearchBar from "../../component/SearchBar";

function Search() {
  const [focusFlag, setFocusFlag] = useState(false);
  const navigate = useNavigate();

  const initSearchBar = (fg) => {
    setFocusFlag(fg);
  };

  const searchKeyword = (keyword) => {
    navigate("/search/" + keyword);
  };

  const best = [
    { id: 1, keyword: "고든램지" },
    { id: 2, keyword: "버거" },
    { id: 3, keyword: "함바그" },
    { id: 4, keyword: "곱창" },
    { id: 5, keyword: "영등포" },
  ];

  const bestStyle = function (id) {
    if (id === 1) return "firstNum";
    else if (id <= 3) return "secondNum";
    else return "thirdNum";
  };

  const bestList = best.map((item) => (
    <tr key={item.id}>
      <td className="Best-List-Item" onClick={() => searchKeyword(item.keyword)}>
        <p className={bestStyle(item.id)}>{item.id}</p>
        <p>{item.keyword}</p>
      </td>
    </tr>
  ));

  const recommend = [
    { id: 1, keyword: "키워드" },
    { id: 2, keyword: "키워드" },
    { id: 3, keyword: "함바그" },
  ];

  const recommendList = recommend.map((item) => (
    <div key={item.id} className="keyword" onClick={() => searchKeyword(item.keyword)}>
      <span>#</span>
      <span className="keyword-content">{item.keyword}</span>
    </div>
  ));

  return (
    <>
      <div className="Search">
        {!focusFlag ? (
          <div className="Header">
            <div>검색</div>
            <div className="FontSmall">오늘은 어느 맛집에서 웨이링 할까요?</div>
          </div>
        ) : (
          <></>
        )}
        <SearchBar keyword="" focusFlag={focusFlag} func={initSearchBar} />
        {!focusFlag ? (
          <>
            <div className="Best-area">
              <div className="SmallHeader">인기 검색어</div>
              <table className="Best-List">
                <tbody>{bestList}</tbody>
              </table>
            </div>
            <div className="Recommend-area">
              <div className="SmallHeader">추천 검색어</div>
              <div className="Recommend-List-area">{recommendList}</div>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

export default Search;
