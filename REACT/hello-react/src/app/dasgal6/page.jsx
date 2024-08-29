"use client";

import { useState } from "react";

const Page = () => {
  const [shown, setShown] = useState(true);

  return (
    <div style={{ padding: "100px" }}>
      <button onClick={() => setShown(!shown)}>toggle</button>
      {shown && <p>Hi i am hidden text</p>}
    </div>
  );
};

export default Page;
