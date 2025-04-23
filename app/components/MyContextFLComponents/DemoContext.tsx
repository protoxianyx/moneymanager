"use client";

import React, { FC } from "react";
import { useContext } from "react";
import { MyContext } from "@/context/MyContext";

const DemoContext: FC = () => {
  const { count, increment, decrement } = useContext(MyContext);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default DemoContext;
