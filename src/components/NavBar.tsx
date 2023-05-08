// components/Navbar.tsx
import React from "react";
import Link from "next/link";


export function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">My Website</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/contact">Find By Chords</Link>
          </li>
          <li>
            <Link href="/about">Discover a new song</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
