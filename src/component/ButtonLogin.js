import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 10px 15px 10px 15px;
  margin: 10px 0 10px 0;
  border-radius: 15px;
  border: 0px;
  font-size: 12pt;
  font-weight: 600;
  background: #fb974b;
  box-shadow: 0 0 5px 2px #cecece;
  width: ${(props) => props.width || "45vw"};
  color: ${(props) => props.color || "white"};
  background: ${(props) => props.bgColor || "#8C8C8C"};
`;

export default function ButtonLogin({ children, ...props }) {
  return <StyledButton {...props}>{children}</StyledButton>;
}
