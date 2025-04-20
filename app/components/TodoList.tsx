"use client";

import React, { useState } from "react";

// interface TaskTable {
//   task: string[];
// }

interface Todos {
  id: number;
  task: string;
  completed: boolean;
}

const TodoList = () => {
  //   const [row, setRow] = useState<TaskTable>({
  //     task: [],
  //   });

  //   const addrow = (row: string) => {
  //     setRow((table) => ({ ...table, row }));
  //   };

  const [todos, setTodos] = useState<Todos[]>([]);

  addTodo = (task: string) => {
    const newTodo: Todos = {
      id: todos.length + 1,
      task,
    };
  };

  return (
    <div>
      <h1>Enter the task:</h1>
      <button className="newborder hover:bg-amber-200">Add todo</button>
      {/* <input
        type="text"
        placeholder="Enter the task"
        className="newborder"
        value={row.task.push()}
        onChange={(e) => addrow(e.target.value)}
          />
          
          <p>{row.task.map(()=>(row.task))}</p> */}
    </div>
  );
};

export default TodoList;
