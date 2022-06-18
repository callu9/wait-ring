import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import "./User.scss";

const SignupButton = styled.button`
  width: 60vw;
  padding: 10px 15px 10px 15px;
  margin: 5px 0 5px 0;
  border-radius: 15px;
  border: 0px;
  font-size: 12pt;
  font-weight: 600;
  color: ${(props) => props.textColor || "white"};
  background: ${(props) => props.color || "#8C8C8C"};
`;

export default function Signup() {
  const navigate = useNavigate();
  return (
    <div className="Signup">
      <div className="Signup-form">
        <form>
          <SignupButton color="#2DB400">네이버로 시작하기</SignupButton>
          <SignupButton color="#FAE100" textColor="black">
            카카오로 시작하기
          </SignupButton>
          <SignupButton>일반 회원가입 하기</SignupButton>
        </form>
        <div className="Signup-etc">
          <div>이미 계정이 있으신가요?</div>
          <div className="to-login" onClick={() => navigate("/login")}>
            로그인 하기
          </div>
        </div>
      </div>
    </div>
  );
}
