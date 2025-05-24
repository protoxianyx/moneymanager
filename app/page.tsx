import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex items-center justify-center m-10">
      <Link
        href={"/Todo"}
        className="border-2 border-black hover:bg-accent bg-emerald-400 rounded-xs py-2 px-10 m-2"
      >
        Todo Page
      </Link>
    </div>
  );
};

export default page;
