"use client";

import React from "react";
import { MMRadioGroup } from "./MMRadioGroup";

const MMInput = () => {
  return (
    <div className="flex justify-center px-2">
      <form className="space-x-4" action="">
        <span>Tag:</span>
        <MMRadioGroup/>
        <span>Amount:</span>
        <input
          type="text"
          className="border-0 border-b-2 border-amber-800 focus:outline-none px-1 "
        />
        <span>Note:</span>
        <input
          type="text"
          className="border-0 border-b-2 border-amber-800 focus:outline-none px-1 "
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default MMInput;
