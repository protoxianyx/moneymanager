"use client";

import React, { useRef, useState } from "react";

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

  return (
    <form>
      <input type="text" placeholder="Enter your name" ref={name} className="m-1"/>
      <input type="text" placeholder="Enter your name" ref={email} className="m-1"/>
          <input type="text" placeholder="Enter your name" ref={password} className="m-1" />
          <button type="submit"> Submit</button>
    </form>
  );
};

export default Form;
