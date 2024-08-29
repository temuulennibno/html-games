"use client";

import { useState } from "react";

const Page = () => {
  return (
    <div style={{ padding: "100px" }}>
      <div>
        <label>
          Password
          <br />
          <input type="password" />
          <button>show/hide</button>
        </label>
      </div>
      <div>
        <label>
          Password Repeat
          <br />
          <input type="password" />
          <button>show/hide</button>
        </label>
      </div>
      <p>
        <input type="checkbox" /> Atleast 8 characters
      </p>
      <p>
        <input type="checkbox" /> Atleast 1 upper case letter
      </p>
      <p>
        <input type="checkbox" /> Atleast 1 lower case letter
      </p>
      <p>
        <input type="checkbox" /> Atleast 1 contains one of those (!@#$%^&*.,/_-)
      </p>
      <p>
        <input type="checkbox" /> Repeat password match
      </p>
    </div>
  );
};

export default Page;
