"use client"

import React from "react";

const TodoList = () => {

  const handleSubmit = () => {
    return "handle"
  }

  const  arr:number[] = [1,2,3,4,5,6]

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
            {arr.map(arr => (
              <li key={Math.random.length}>{arr}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
