import React from "react";
import Link from 'next/link';

export function NavBar() {
  return (
    <div className="navbar flex justify-end items-center bg-amber-50 p-3">
      <ul className="flex menu menu-horizontal space-x-4">
        <li>
          <div className="link-box">
            <Link href="/">Home</Link>
          </div>
        </li>
        <li>
          <div className="link-box">
            <Link href="/findbychords">Find By Chords</Link>
          </div>
        </li>
        <li>
          <div className="link-box">
            <Link href="/discover">Discover a new song</Link>
          </div>
        </li>
      </ul>
      <style jsx>{`
        .link-box {
          border: 1px solid black;
          padding: 0.5rem;
        }
      `}</style>
    </div>
  );
};


