import React from "react";
import Counter from "./components/Counter";
import UserProfile from "./components/UserProfile";
import TodoList from "./components/TodoList";

const page = () => {
  return (
    <div>
      <Counter />
      <UserProfile />
      <br />
      <hr />
      <br />
      <TodoList/>
    </div>
  );
};

export default page;
