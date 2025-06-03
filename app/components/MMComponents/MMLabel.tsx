"use client";

import { useSelectionStore } from "@/lib/selectionStore";
import React from "react";



const MMLabel = () => {

  const label = useSelectionStore((state) => state.selected);
  // const tailwindClasses: string = "border-black rounded-r-md rounded-br-md text-center";
  return (
    <div className="bg-amber-300 border-2 border-black rounded-r-md rounded-br-md text-center">
      {label}
    </div>
  );
};

export default MMLabel;
