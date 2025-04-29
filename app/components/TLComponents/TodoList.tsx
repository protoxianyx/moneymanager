"use client";

import React, { useState } from "react";

interface Task {
  id: string
  task:string
}

const TodoList = () => {

  const [data, setData] = useState<Task[]>([])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const arr: number[] = [1, 2, 3, 4, 5, 6];

  return (
    <div>
      <div className="flex flex-col justify-center items-center m-2">
        <div className="px-2 py-1">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Input Task"
              className="border-none bg-amber-300 m-2"
            />
            <button>Submit</button>
          </form>
        </div>

        <div className="border-2 bg-amber-200 border-black px-2 py-1">
          <ul>
            {arr.map((arr) => (
              <li key={Math.random() * 100}>{arr}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
