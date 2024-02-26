import React, { useState } from "react";
import styled from "styled-components";

const CounterWrapped = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  font-size: 1.5rem;
  padding: 0.5rem, 1rem;
  color: #000;
  background-color: #eee;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #ddd;
  }

  &:focus {
    outline: none;
  }
`;

const CountDisplay = styled.span`
  font-size: 1.5rem;
  margin: 0 1rem;
`;

const multipleCount = (count) => {
  console.log("multipleCount ", count);
  return count * 2;
};

const Counter = ({ defaultCount }) => {
  const [count, setCount] = useState(() => multipleCount(0));
  const [background, setBackground] = useState("");

  console.log("count", count);

  const incrementCount = () => {
    setCount(count + 1);
    setBackground("green");
  };

  const decrementCount = () => {
    setCount(count - 1);
    setBackground("red");
  };
  return (
    <CounterWrapped style={{ backgroundColor: background }}>
      <Button onClick={decrementCount}>-</Button>
      <CountDisplay>{count}</CountDisplay>
      <Button onClick={incrementCount}>+</Button>
    </CounterWrapped>
  );
};

export default Counter;
