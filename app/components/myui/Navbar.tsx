import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="border-y-2 border-black py-2 mb-2">
      <Link href={"/"}>Home</Link>
    </div>
  );
};

export default Navbar;
