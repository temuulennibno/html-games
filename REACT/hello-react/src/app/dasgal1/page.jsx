"use client";

import { useState } from "react";

const Page = () => {
  const [counter, setCounter] = useState(0);

  const handleAdd = () => {
    setCounter(counter + 1);
  };

  const handleMinus = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <button onClick={handleMinus}>-</button>
      {counter}
      <button onClick={handleAdd}>+</button>
    </>
  );
};

export default Page;
