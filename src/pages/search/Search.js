import React, { useState } from "react";
import "./Search.scss";
import SearchBar from "../../component/SearchBar";

function Search() {
  const [focusFlag, setFocusFlag] = useState(false);

  const initSearchBar = (fg) => {
    setFocusFlag(fg);
  };

  const best = [
    { id: 1, content: "고든램지" },
    { id: 2, content: "버거" },
    { id: 3, content: "연돈" },
    { id: 4, content: "해운대" },
    { id: 5, content: "곱창" },
  ];

  const bestStyle = function (id) {
    if (id === 1) return "firstNum";
    else if (id <= 3) return "secondNum";
    else return "thirdNum";
  };

  const bestList = best.map((item) => (
    <tr key={item.id}>
      <td className="Best-List-Item">
        <p className={bestStyle(item.id)}>{item.id}</p>
        <p>{item.content}</p>
      </td>
    </tr>
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
              <div className="Recommend-List-area">
                <div className="keyword">#키워드</div>
                <div className="keyword">#키워드</div>
                <div className="keyword">#키워드</div>
                <div className="keyword">#키워드</div>
              </div>
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
