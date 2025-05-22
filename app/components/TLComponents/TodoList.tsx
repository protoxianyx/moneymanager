"use client";

import React, { useState } from "react";

interface Task {
  id: number
  task:string
}

const TodoList = () => {

  const [data, setData] = useState<Task[]>([]);
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (input.trim() === '') return;

    const addedTask: Task = {
      id: Math.random() * 100, 
      task: input.trim()
    }

    setData(prev => [...prev, addedTask])
    setInput('')
    
  };


  return (
    <div>
      <div className="flex flex-col justify-center items-center m-2">
        <div className="px-2 py-1">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Input Task"
              className="border-none bg-amber-300 m-2"
              value={input}
              onChange={e => setInput(e.target.value)}
            />
            <button>Submit</button>
          </form>
        </div>

        <div className="border-2 bg-amber-200 border-black px-2 py-1">
          <ul>
            {data.map((task) => (
              <li key={task.id}>{task.task}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
