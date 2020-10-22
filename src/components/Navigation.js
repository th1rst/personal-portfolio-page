import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navigation() {
  const HOMEPAGE_NAME = process.env.REACT_APP_HOMEPAGE_NAME;

  const [menuOpen, setmenuOpen] = useState(false);

  return (
    <div>
      <nav class="flex items-center bg-black p-3 flex-wrap">
        <Link to="/" class="p-2 mr-4 inline-flex items-center">
          <span class="text-xl text-white font-bold tracking-wide">
            {HOMEPAGE_NAME}
          </span>
        </Link>
        <button
          class="text-white inline-flex p-3 hover:bg-gray-900 rounded lg:hidden ml-auto hover:text-white outline-none nav-toggler"
          data-target="#navigation"
        >
          <i class="material-icons" onClick={() => setmenuOpen(true)}>
            <GiHamburgerMenu />
          </i>
        </button>
        <div
          class="hidden top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto"
          id="navigation"
        >
          <div class="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
            <Link
              to="/projects"
              class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
            >
              <span>Projects</span>
            </Link>
            <Link
              to="/about"
              class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
            >
              <span>About</span>
            </Link>
            <Link
              to="/contact"
              class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
            >
              <span>Contact</span>
            </Link>
          </div>
        </div>
      </nav>
      <div className="w-full h-1 bg-white" />
    </div>
  );
}
