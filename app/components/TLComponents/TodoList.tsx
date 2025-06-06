"use client";

import React, { useState } from "react";
// import Holder from "./Holder";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableRow,
  TableHeader
} from "../ui/table";

interface Task {
  id: string;
  task: string;
}

const TodoList = () => {
  const [data, setData] = useState<Task[]>([]);
  const [input, setInput] = useState("");
  const [numerator, setNumerator] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (input.trim() === "") return;

    const addedTask: Task = {
      id: Math.floor(Math.random() * 1e6).toString(),
      task: input.trim(),
    };

    setData((prev) => [...prev, addedTask]);
    setInput("");
    setNumerator(numerator + 1);
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
              onChange={(e) => setInput(e.target.value)}
            />
            <button>Submit</button>
          </form>
        </div>

        <div className="flex flex-row flex-nowrap">
          {/* <div className="border-2 bg-amber-200 border-black px-2 py-1">
            <ul>
              {data.map((task) => (
                <li key={task.id}>
                  <Holder numerator={numerator} task={task.task} />
                </li>
              ))}
            </ul>
          </div> */}

          <div>
            <Table>
              <TableCaption>Task Table</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>No.</TableHead>
                  <TableHead className="text-center">Task</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.map((task) => (
                  <TableRow key={task.id}>
                    <TableCell>{numerator}</TableCell>
                    <TableCell>{task.task}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
