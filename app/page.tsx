import React from "react";
import Counter from "./components/Counter";
import UserProfile from "./components/UserProfile";
import TodoList from "./components/TodoList";
import Form from "./components/Form";

const page = () => {
  return (
    <div>
      <Counter />
      <UserProfile />
      <br />
      <hr />
      <br />
      <TodoList />
      <br />
      <Form/>
    </div>
  );
};

export default page;
