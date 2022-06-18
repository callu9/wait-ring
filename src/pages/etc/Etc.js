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
        <p className="Setting-icon-area">
          {/* <Link to="/setting"> */}
          <img src={settingIcon} alt="Setting-icon" />
          {/* </Link> */}
        </p>
      </div>
      <div className="Header-etc">
        {user ? (
          <div>
            <p className="Header-nickname">{user.nickname}</p>
            님,
            <br />
            환영합니다.
          </div>
        ) : (
          <div>
            로그인이
            <br />
            필요합니다.
          </div>
        )}
      </div>
      {user ? (
        <table className="Activity-table">
          <tbody>
            <tr className="Activity-area">
              <td className="Activity-Item-Right">
                <div className="Activity-Gray">웨이팅</div>
                <div className="Activity-LightOrange">{user.wait}회</div>
              </td>
              <td className="Activity-Item-Right">
                <div className="Activity-Gray">예약</div>
                <div className="Activity-LightOrange">{user.reserve}회</div>
              </td>
              <td className="Activity-Item-Right">
                <div className="Activity-Gray">리뷰</div>
                <div className="Activity-LightOrange">{user.review}개</div>
              </td>
              <td className="Activity-Item-Left">
                <div className="Activity-Gray">포인트</div>
                <div className="Activity-Orange">{user.point}p</div>
              </td>
            </tr>
          </tbody>
        </table>
      ) : (
        <></>
      )}
      <div className="Etc-List-area">
        <table>
          <tbody>
            <tr className="Etc-List-Item">
              <td>
                <p>
                  <img src={userIcon} alt="userIcon" />
                </p>
                {user ? <p>내 정보 수정</p> : <p onClick={() => movePage("/login")}>로그인</p>}
              </td>
            </tr>
            {user ? (
              <tr className="Etc-List-Item" onClick={() => movePage("my-wait")}>
                <td>
                  <p>
                    <img src={myWaitIcon} alt="myWaitIcon" />
                  </p>
                  <p>웨이팅/예약 내역</p>
                </td>
              </tr>
            ) : (
              <></>
            )}
            {user ? (
              <tr className="Etc-List-Item" onClick={() => movePage("review")}>
                <td>
                  <p>
                    <img src={reviewIcon} alt="reviewIcon" />
                  </p>
                  <p>리뷰 내역</p>
                </td>
              </tr>
            ) : (
              <></>
            )}
            <tr className="Etc-List-Item">
              <td>
                <p>
                  <img src={noticeIcon} alt="notice-Icon" />
                </p>
                <p>공지사항</p>
              </td>
            </tr>
            <tr className="Etc-List-Item">
              <td>
                <p>
                  <img src={qnaIcon} alt="qna-Icon" />
                </p>
                <p>1:1 문의</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* <div className="How-To-Wait">
          <p className="questionMark">?</p>
          <p>원격 웨이팅 접수 방법</p>
      </div> */}
    </div>
  );
}

export default Etc;
