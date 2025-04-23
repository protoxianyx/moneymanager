"use client";
import React, { MouseEvent } from "react";

const EventHandling = () => {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    console.log("buttonclicked", e.currentTarget);
  };

  const handleMouseEnter = (e: MouseEvent<HTMLDivElement>) => {
    console.log("Mouse entered", e.currentTarget);
  };

  return (
    <div onMouseEnter={handleMouseEnter}>
      <h2>Event handling example</h2>
      <button onClick={handleClick}>Click ME</button>
    </div>
  );
};

export default EventHandling;
