import DemoContext from "@/components/MyContextFLComponents/DemoContext";
import MyProvider from "@/context/MyContext";
import React from "react";

const MyContextFL = () => {
  return (
    <div>
      <MyProvider>
        <DemoContext />
      </MyProvider>
    </div>
  );
};

export default MyContextFL;
