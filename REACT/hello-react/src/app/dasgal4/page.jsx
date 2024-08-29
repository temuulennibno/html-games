"use client";

import { useState } from "react";

const Page = () => {
  const [input, setInput] = useState("");
  const [digit, setDigit] = useState(0);

  return (
    <div style={{ padding: "100px" }}>
      <textarea
        value={input}
        onChange={(e) => {
          if (e.target.value.length <= 100) {
            setInput(e.target.value);
          }
        }}
      ></textarea>

      <input
        value={digit}
        onChange={(e) => {
          if (!isNaN(Number(e.target.value)) && e.target.value.length <= 8) {
            setDigit(e.target.value);
          }
        }}
        type="text"
      />

      <span>{input.length}/100</span>
    </div>
  );
};

export default Page;
