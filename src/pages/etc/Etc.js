import React from "react";
import { useNavigate } from "react-router-dom";

import "./Etc.scss";

import settingIcon from "../../image/setting.png";
import userIcon from "../../image/user.png";
import myWaitIcon from "../../image/my-wait-list.png";
import reviewIcon from "../../image/review-list.png";
import noticeIcon from "../../image/notice.png";
import qnaIcon from "../../image/qna.png";

import storage from "../../storage.js";

function Etc(props) {
  const navigate = useNavigate();

  let user = props.user;

  function movePage(path) {
    navigate(path);
  }

  return (
    <div className="Etc">
      <div className="Setting">
        {/* <Link to="/setting"> */}
        <img src={settingIcon} alt="Setting-icon" />
        {/* </Link> */}
      </div>
      {user ? (
        <div className="Header-etc">
          <p>
            <span className="Header-nickname">{user.nickname}</span>
            님,
          </p>
          <p>환영합니다.</p>
        </div>
      ) : (
        <div className="Header-etc">
          <p>로그인이</p>
          <p>필요합니다.</p>
        </div>
      )}
      {user ? (
        <div className="Activity-list">
          <div className="Activity-Item-Right">
            <p className="Activity-Gray">웨이팅</p>
            <p className="Activity-LightOrange">{user.wait}회</p>
          </div>
          <div className="Activity-Item-Right">
            <p className="Activity-Gray">예약</p>
            <p className="Activity-LightOrange">{user.reserve}회</p>
          </div>
          <div className="Activity-Item-Right">
            <p className="Activity-Gray">리뷰</p>
            <p className="Activity-LightOrange">{user.review}개</p>
          </div>
          <div className="Activity-Item-Left">
            <p className="Activity-Gray">포인트</p>
            <p className="Activity-Orange">{user.point}p</p>
          </div>
        </div>
      ) : (
        <></>
      )}
      <div className="Etc-List-area">
        <div className="Etc-List-Item">
          <img src={userIcon} alt="userIcon" />
          {user ? (
            <p>내 정보 수정</p>
          ) : (
            <p onClick={() => movePage("/login")}>로그인</p>
          )}
        </div>
        {user ? (
          <div className="Etc-List-Item" onClick={() => movePage("my-wait")}>
            <img src={myWaitIcon} alt="myWaitIcon" />
            <p>웨이팅/예약 내역</p>
          </div>
        ) : (
          <></>
        )}
        {user ? (
          <div className="Etc-List-Item" onClick={() => movePage("review")}>
            <img src={reviewIcon} alt="reviewIcon" />
            <p>리뷰 내역</p>
          </div>
        ) : (
          <></>
        )}
        <div className="Etc-List-Item">
          <img src={noticeIcon} alt="notice-Icon" />
          <p>공지사항</p>
        </div>
        <div className="Etc-List-Item">
          <img src={qnaIcon} alt="qna-Icon" />
          <p>1:1 문의</p>
        </div>
      </div>
      {/* <div className="How-To-Wait">
          <p className="questionMark">?</p>
          <p>원격 웨이팅 접수 방법</p>
      </div> */}
    </div>
  );
}

export default Etc;
