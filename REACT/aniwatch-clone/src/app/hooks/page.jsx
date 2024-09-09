"use client";

import { useEffect, useState } from "react";
import { Products } from "./products";

const Hooks = () => {
  const [shown, setShown] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setShown(!shown);
        }}
      >
        toggle products
      </button>
      {shown ? <Products /> : <></>}
    </div>
  );
};

export default Hooks;
