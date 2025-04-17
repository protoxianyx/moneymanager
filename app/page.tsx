
"use client"

import CustomButton from "./components/CustomButton";
import Users from "./components/Users";
import React from "react";







const page = () => {

  const Line:string = "You clicked this button"

  return (
    <div>
      <Users name="pushkar" age={21} isStudent={true} />


      <CustomButton label="Click" onClick={() => (console.log(`Clicked ${Line}`))} disabledState={false} />


      {/* //{" "}
      <Users>
        // <p>Hello</p>
        //{" "} */}
      
    </div>
    

  );
};

export default page;
