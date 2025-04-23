import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className="flex flex-row">
      <Link href={"/Todo"} className="p-2 border-2 border-black">
        Todo
      </Link>
      <Link href={"/Todo"} className="p-2 border-2 border-black">
        Todo
      </Link>
      <Link href={"/Todo"} className="p-2 border-2 border-black">
        Todo
      </Link>
    </div>
  );
}

export default Navbar