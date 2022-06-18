import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import "./User.scss";

const LoginButton = styled.button`
  width: 45vw;
  padding: 10px 15px 10px 15px;
  border-radius: 15px;
  border: 0px;
  font-size: 12pt;
  font-weight: 600;
  color: white;
  background: ${(props) => (props.fg ? "#FB974B" : "#FBC678")};
`;

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
    if (id && "user01") navigate("/");
  }

  function movePage() {
    navigate("/signup");
  }

  return (
    <div className="Login">
      <form className="Login-form" onSubmit={handleSubmit}>
        <input type="text" value={id} placeholder="아이디" onChange={changeId} required />
        <input type="password" value={pwd} placeholder="비밀번호" onChange={changePwd} required />
        <LoginButton fg={btnFg}>로그인</LoginButton>
        <div className="Login-etc">
          <span onClick={movePage}>회원가입</span> | <span>계정 찾기</span>
        </div>
      </form>
    </div>
  );
}
