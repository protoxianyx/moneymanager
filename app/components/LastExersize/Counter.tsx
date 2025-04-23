"use client";

import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState<number>(0);
  return (
    <div>
      <h1>Counter GO</h1>
      <p>{count}</p>
      <button
        onClick={() => setCount(count + 1)}
        className="border border-amber-950 px-2 m-2 hover:bg-amber-300 "
      >
        Increment
      </button>
      <button
        onClick={() => setCount(count - 1)}
        className="border border-amber-950 px-2 m-2 hover:bg-amber-900"
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;
