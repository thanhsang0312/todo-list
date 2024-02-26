import React, { useState } from "react";
import Button from "../Button";
import styled from "styled-components";

const StyledForm = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const StyledInput = styled.input`
  flex: 1;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: none;
`;

const Form = ({
  handleSubmit,
  btnText = "Submit",
  value = "",
  ...restProps
}) => {
  const [input, setInput] = useState(value); // Stored input value

  const _onInputChange = (e) => {
    //Bắt sự kiện onChange của input và update input state
    setInput(e?.target.value);
  };

  const _onSubmit = (e) => {
    e.preventDefault();
    // handleSubmit?.(input);
    // setInput("");
    handleSubmit?.(input, () => {
      setInput("");
    });
  };

  return (
    <StyledForm className="form" onSubmit={_onSubmit}>
      <StyledInput
        autoFocus
        className="input"
        type="text"
        onChange={_onInputChange}
        value={input}
        {...restProps}
      />
      <Button className="btn">{btnText}</Button>
    </StyledForm>
  );
};

export default Form;
