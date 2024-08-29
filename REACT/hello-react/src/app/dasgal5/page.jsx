"use client";

import { useState } from "react";

const Page = () => {
  const [color, setColor] = useState("#ccc");

  return (
    <div style={{ padding: "100px" }}>
      <button
        onClick={() => {
          setColor("green");
        }}
      >
        green
      </button>
      <button
        onClick={() => {
          setColor("blue");
        }}
      >
        blue
      </button>
      <button>red</button>
      <button>yellow</button>
      <div style={{ width: "100px", height: "100px", background: color }}></div>
    </div>
  );
};

export default Page;
