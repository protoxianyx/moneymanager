import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center m-10">
      <Link
        href={"/Todo"}
        className="border-2 border-black hover:bg-accent bg-emerald-400 rounded-xs py-2 px-10 m-2 "
      >
        Todo Page
      </Link>
      <Link
        href={"/Todo"}
        className="border-2 border-black hover:bg-accent bg-emerald-400 rounded-xs py-2 px-10 m-2"
      >
        Money Manager Page
      </Link>
    </div>
  );
};

export default page;
