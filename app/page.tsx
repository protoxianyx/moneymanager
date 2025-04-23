import React from "react";
import Counter from "./components/LastExersize/Counter";
import UserProfile from "./components/LastExersize/UserProfile";
import TodoList from "./components/LastExersize/TodoList";
import Form from "./components/LastExersize/Form";

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
