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

  const addTodo = (task: string) => {
    const newTodo: Todos = {
      id: todos.length + 1,
      task,
      completed: false,
    };

    setTodos((previousTodos) => [...previousTodos, newTodo]);
  };

  return (
    <div>
      <h1>Enter the task:</h1>
      <button
        onClick={() => addTodo("New Todo")}
        className="newborder hover:bg-amber-200"
      >
        Add todo
      </button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.task} {todo.completed ? "Completed" : "Not Completed"}
          </li>
        ))}
      </ul>


    </div>
  );
};

export default TodoList;
