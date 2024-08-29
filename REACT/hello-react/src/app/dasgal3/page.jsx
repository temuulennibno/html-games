"use client";

import { useState } from "react";

const Page = () => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [operation, setOperation] = useState("+");

  let result = 0;

  switch (operation) {
    case "+":
      result = Number(number1) + Number(number2);
      break;
    case "-":
      result = Number(number1) - Number(number2);
      break;
    case "*":
      result = Number(number1) * Number(number2);
      break;
    case "/":
      result = Number(number1) / Number(number2);
      break;
  }

  return (
    <div style={{ padding: "100px" }}>
      <input
        value={number1}
        type="text"
        onChange={(e) => {
          setNumber1(e.target.value);
        }}
      />
      <select
        value={operation}
        onChange={(e) => {
          setOperation(e.target.value);
        }}
      >
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <input
        value={number2}
        onChange={(e) => {
          setNumber2(e.target.value);
        }}
        type="text"
      />
      = {result}
    </div>
  );
};

export default Page;
