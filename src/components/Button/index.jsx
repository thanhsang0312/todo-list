import React from "react";
import styled from "styled-components";

const StyleduButton = styled.button`
  padding: 10px;
  font-size: 16px;
  color: #fff;
  background-color: #007aff;
  border-radius: 5px;
  border: none;
  cursor: pointer;

  :hover {
    opacity: 0.7;
  }
`;

export const StyledBtnEdit = styled(StyleduButton)`
  background-color: #baa800;
`;

export const StyledBtnDelete = styled(StyleduButton)`
  background-color: #dc3545;
`;

export const StyledBtnDone = styled(StyleduButton)`
  background-color: ${(props) => (props.isDone ? "#baa800" : "#28a745")};
`;

const Button = ({ children, className = "btn", ...props }) => {
  return (
    <StyleduButton className={`btn ${className}`} {...props}>
      {children}
    </StyleduButton>
  );
};

export default Button;
