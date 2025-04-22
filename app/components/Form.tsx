"use client";

import React, { FormEvent, useRef, useState } from "react";

interface FormData {
  name: string;
  email: string;
  password: string;
}

const Form = () => {
  const [submittedData, setSubmittedData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
  });

  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nameValue = name.current!.value;
    const emailValue = email.current!.value;
    const passwordValue = password.current!.value;

    setSubmittedData({
      name: nameValue,
      email: emailValue,
      password: passwordValue,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your name"
        ref={name}
        className="m-1"
      />
      <input
        type="text"
        placeholder="Enter your email"
        ref={email}
        className="m-1"
      />
      <input
        type="text"
        placeholder="Enter your password"
        ref={password}
        className="m-1"
      />

      <button type="submit" className="newborderw">
        Submit
      </button>

      <section>
        <h1>Name:{submittedData.name}</h1>
        <h1>Email:{submittedData.email}</h1>
        <h1>Password:{submittedData.password}</h1>
      </section>
    </form>
  );
};

export default Form;
