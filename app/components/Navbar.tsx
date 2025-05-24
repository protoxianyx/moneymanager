import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex flex-row mb-2 border-y-1 border-black p-2">
      <Link href={"/"} className="px-2 border-2 border-black rounded-xs mx-1">
        Home
      </Link>

      <Link
        href={"/Todo"}
        className="px-2 border-2 border-black rounded-xs mx-1"
      >
        Todo
      </Link>

      <Link
        href={"/moneymanager"}
        className="px-2 border-2 border-black rounded-xs mx-1"
      >
        Money Manager
      </Link>
    </div>
  );
};

export default Navbar;
