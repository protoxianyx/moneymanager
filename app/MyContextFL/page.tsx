// import DemoContext from "@/components/MyContextFLComponents/DemoContext";
import DemoCounter from "@/components/MyContextFLComponents/DemoCounter";
import MyProvider from "@/context/MyContext";
import React from "react";

const MyContextFL = () => {
  return (
    <div>
      <MyProvider>
        {/* <DemoContext /> */}
        <DemoCounter />
      </MyProvider>
    </div>
  );
};

export default MyContextFL;
