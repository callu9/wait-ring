import React from "react";
import { useNavigate } from "react-router-dom";
import ButtonLogin from "../../component/ButtonLogin";
import "./User.scss";

export default function Signup() {
  const navigate = useNavigate();
  return (
    <div className="Signup">
      <div className="Signup-form">
        <form>
          <ButtonLogin width="60vw" bgColor="#2DB400">
            네이버로 시작하기
          </ButtonLogin>
          <ButtonLogin width="60vw" bgColor="#FAE100" color="black">
            카카오로 시작하기
          </ButtonLogin>
          <ButtonLogin width="60vw">일반 회원가입 하기</ButtonLogin>
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
