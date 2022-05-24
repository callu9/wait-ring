import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SearchBar.scss";

import cancel from "../image/cancel.png";
import searchIcon from "../image/search-bar.png";
import cancelSearch from "../image/cancel-search.png";

const SearchBar = (props) => {
  const navigate = useNavigate();

  const recentList = [
    { id: 0, content: "고든램지" },
    { id: 1, content: "버거" },
    { id: 2, content: "신사동" },
  ];
  const [keyword, setKeyword] = useState(props.keyword);
  const [keywordFlag, setKeywordFlag] = useState(
    props.keyword !== "" ? true : false
  );
  const [recentKeyword, setRecentKeyword] = useState(recentList);

  const initSearchBar = () => {
    props.func(!props.focusFlag);
  };

  const initKeyword = (e) => {
    document.getElementById("Search-Bar-Area").value = "";
    setKeyword("");
    setKeywordFlag(false);
    if (props.focusFlag) initSearchBar();
  };

  const typeKeyword = (e) => {
    setKeyword(e.target.value);
    if (keyword !== null && keyword.length > 0) setKeywordFlag(true);
    else setKeywordFlag(false);
  };

  const searchKeyword = (e) => {
    if ((e === "click" || e.key === "Enter") && keyword.length > 0)
      navigate("/search/" + keyword);
  };

  const cancelKeyword = (id) => {
    let tmp = recentKeyword;
    setRecentKeyword(tmp.filter((item) => item.id !== id));
  };

  const recent = recentKeyword.map((r) => (
    <tr key={r.id} className="Search-Recent-Keyword-Item">
      <td className="Search-Recent-Keyword">
        <Link
          to={"/search/" + r.content}
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          {r.content}
        </Link>
      </td>
      <td className="Search-Recent-Cancel">
        <img src={cancel} alt="cancel" onClick={() => cancelKeyword(r.id)} />
      </td>
    </tr>
  ));

  return (
    <div className={props.focusFlag ? "Search-Bar-area-Hidden" : "Search-Bar-area"}>
      <div
        className={
          props.focusFlag ? "Search-Area-All-Hidden" : "Search-Area-All"
        }
      >
        <div className={props.focusFlag ? "Search-Area-Hidden" : "Search-Area"}>
          <input
            type="text"
            className="Search-Bar-Area"
            id="Search-Bar-Area"
            placeholder="검색어를 입력하세요."
            value={keyword}
            onFocus={initSearchBar}
            onChange={typeKeyword}
            onKeyPress={(e) => searchKeyword(e)}
          />
          <div className="Search-Icon-Area">
            <img
              src={searchIcon}
              className="Search-Icon"
              alt="search-icon"
              onClick={() => searchKeyword("click")}
            />
          </div>
          <div className="Search-Keyword-Cancel-Area">
            {keywordFlag ? (
              <img
                src={cancelSearch}
                className="Cancel-Icon"
                alt="Cancel-icon"
                onClick={initKeyword}
              />
            ) : (
              <div className="Cancel-Icon"></div>
            )}
          </div>
        </div>
        {props.focusFlag && (
          <div className="Search-Cacel" onClick={initSearchBar}>
            취소
          </div>
        )}
      </div>

      {props.focusFlag && (
        <div className="Search-Area-Recent-Keyword-Hidden">
          <table className="Search-Recent-Keyword-Area">
            <tbody>{recent}</tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
