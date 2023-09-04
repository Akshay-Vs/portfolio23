import React from "react";
import "./Nav.scss";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="text-red-400">
      <ul>
        <li className="mx-10">
          <Link href="#">About Me</Link>
        </li>
        <li>
          <Link href="#">Projects</Link>
        </li>
        <li>
          <Link href="#">Freelance</Link>
        </li>
        <li>
          <Link href="#">Contact Me</Link>
        </li>
        <li>
          <Link href="#">Download CV</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
