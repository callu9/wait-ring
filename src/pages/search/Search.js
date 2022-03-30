import React from "react";
import "./Search.scss";
import searchIcon from "../../image/search-bar.png";
import cancel from "../../image/cancel.png";
import cancelSearch from "../../image/cancel-search.png";

export default class Search extends React.Component {
  constructor() {
    super();

    this.state = {
      keyword: "",
      focusFlag: false,
      keywordFlag: false,
      recentKeyword: [
        { id: 0, content: "고든램지" },
        { id: 1, content: "버거" },
        { id: 2, content: "신사동" },
      ],
    };
  }

  render() {
    const { keyword, focusFlag, keywordFlag, recentKeyword } = this.state;

    const setSearchBar = () => {
      this.setState({ focusFlag: !focusFlag });
    };

    const initKeyword = () => {
      this.setState({ keyword: "" });
      this.setState({keywordFlag: false});
    };

    let cancelKeyword = (id) => {
      let tmp = recentKeyword;
      const idx = recentKeyword.findIndex((r) => {
        return r.id === id;
      });
      tmp.splice(idx, 1);
      this.setState({ recentKeyword: tmp });
    };

    const recent = recentKeyword.map((r) => (
      <tr key={r.id} className="Search-Recent-Keyword-Item">
        <td className="Search-Recent-Keyword">{r.content}</td>
        <td className="Search-Recent-Cancel">
          <img src={cancel} alt="cancle" onClick={() => cancelKeyword(r.id)} />
        </td>
      </tr>
    ));

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

    const setKeyword = (e) => {
      this.setState({ keyword: e.target.value });
      if (keyword.length > 0) this.setState({ keywordFlag: true });
    };

    let hidden = (
      <div className="Search">
        <div className="Search-Area-All">
          <div className="Search-Area">
            <input
              type="text"
              className="Search-Bar-Area"
              placeholder="검색어를 입력하세요."
              onChange={setKeyword}
            />
            <div className="Search-Icon-Area">
              <img src={searchIcon} className="Search-Icon" alt="search-icon" />
            </div>
            <div className="Search-Keyword-Cancel-Area">
              {keywordFlag &&
              <img
                src={cancelSearch}
                className="Cancel-Icon"
                alt="Cancel-icon"
                onClick={initKeyword}
              />}
            </div>
          </div>
          <div>
            {focusFlag && (
              <div className="Search-Cacel" onClick={setSearchBar}>
                취소
              </div>
            )}
          </div>
        </div>
        <div className="Search-Area-Hidden">
          <table className="Search-Recent-Keyword-Area">
            <tbody>{recent}</tbody>
          </table>
        </div>
      </div>
    );

    return (
      <>
        {focusFlag ? (
          hidden
        ) : (
          <div className="Search">
            <div className="Header">
              <div>검색</div>
              <div className="FontSmall">
                오늘은 어느 맛집에서 웨이링 할까요?
              </div>
            </div>
            <div className="Search-Area">
              <input
                type="text"
                className="Search-Bar-Area"
                placeholder="검색어를 입력하세요."
                onFocus={setSearchBar}
              />
              <div className="Search-Icon-Area">
                <img
                  src={searchIcon}
                  className="Search-Icon"
                  alt="search-icon"
                />
              </div>
            </div>
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
          </div>
        )}
      </>
    );
  }
}
