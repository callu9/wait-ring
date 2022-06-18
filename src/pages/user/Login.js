import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonLogin from "../../component/ButtonLogin";
import "./User.scss";

export default function Login() {
  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");
  const [btnFg, setBtnFg] = useState(false);
  const navigate = useNavigate();

  const changeId = ({ target: { value } }) => {
    setId(value);
    if (id && pwd) setBtnFg(true);
    else setBtnFg(false);
  };
  const changePwd = ({ target: { value } }) => {
    setPwd(value);
    if (id && pwd) setBtnFg(true);
    else setBtnFg(false);
  };

  function handleSubmit(event) {
    event.preventDefault();
    // if (id === "user01" && pwd === "user01") navigate("/");
    if (id && pwd) {
      const user = {
        id: "user01",
        nickname: "유저01",
        newAlarm: 1,
        wait: 3,
        reserve: 2,
        review: 3,
        point: 860,
      };
      window.sessionStorage.setItem("user", JSON.stringify(user));
      window.sessionStorage.setItem("menuNum", 0);
      window.location.pathname = "/";
    }
  }

  function movePage() {
    navigate("/signup");
  }

  return (
    <div className="Login">
      <form className="Login-form" onSubmit={handleSubmit}>
        <input type="text" value={id} placeholder="아이디" onChange={changeId} required />
        <input type="password" value={pwd} placeholder="비밀번호" onChange={changePwd} required />
        <ButtonLogin bgColor={btnFg ? "#FB974B" : "#FBC678"}>로그인</ButtonLogin>
        <div className="Login-etc">
          <span onClick={movePage}>회원가입</span> | <span>계정 찾기</span>
        </div>
      </form>
    </div>
  );
}
