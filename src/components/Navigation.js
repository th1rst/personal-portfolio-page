import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useSpring, useTrail, animated } from "react-spring";

const mobileNavItems = [
  <Link
    to="/projects"
    className="w-full px-3 py-2 rounded text-gray-300 items-center justify-center hover:bg-gray-900 hover:text-white"
  >
    <span>Projects</span>
  </Link>,

  <Link
    to="/about"
    className="w-full px-3 py-2 rounded text-gray-300 items-center justify-center hover:bg-gray-900 hover:text-white"
  >
    <span>About</span>
  </Link>,

  <Link
    to="/contact"
    className="w-full px-3 py-2 rounded text-gray-300 items-center justify-center hover:bg-gray-900 hover:text-white"
  >
    <span>Contact</span>
  </Link>,
];

export default function Navigation() {
  const HOMEPAGE_NAME = process.env.REACT_APP_HOMEPAGE_NAME;

  const [isHidden, setHidden] = useState(true);

  const trail = useTrail(mobileNavItems.length, { opacity: isHidden ? 0 : 1 });
  const { opacity } = useSpring({
    config: { duration: 600 },
    opacity: isHidden ? 0 : 1,
  });

  return (
    <div className="border-b">
      <nav className="flex items-center bg-black p-3 flex-wrap">
        <Link to="/" className="p-2 mr-4 inline-flex items-center">
          <span className="text-xl text-white font-bold tracking-wide">
            {HOMEPAGE_NAME}
          </span>
        </Link>
        <button
          className="text-white inline-flex p-3 hover:bg-gray-900 rounded lg:hidden ml-auto hover:text-white outline-none nav-toggler"
          onClick={() => setHidden(!isHidden)}
        >
          <GiHamburgerMenu />
        </button>

        {/* DESKTOP VERSION */}
        <div className="hidden lg:inline-flex lg:flex-grow lg:w-auto">
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto lg:items-center items-start flex flex-col lg:h-auto">
            <Link
              to="/projects"
              className="w-full px-3 py-2 rounded text-gray-300 items-center justify-center hover:bg-gray-900 hover:text-white"
            >
              <span>Projects</span>
            </Link>

            <Link
              to="/about"
              className="w-full px-3 py-2 rounded text-gray-300 items-center justify-center hover:bg-gray-900 hover:text-white"
            >
              <span>About</span>
            </Link>
            <Link
              to="/contact"
              className="w-full px-3 py-2 rounded text-gray-300 items-center justify-center hover:bg-gray-900 hover:text-white"
            >
              <span>Contact</span>
            </Link>
          </div>
        </div>

        {/* MOBILE VERSION */}
        {!isHidden ? (
          <animated.div style={{ opacity }} className="w-full">
            <ul>
              {trail.map(({ opacity }, i) => {
                const item = mobileNavItems[i];
                return (
                  <animated.li style={{ opacity }} key={item}>
                    <div className="w-full items-start flex flex-col">
                      {item}
                    </div>
                  </animated.li>
                );
              })}
            </ul>
          </animated.div>
        ) : null}
      </nav>
    </div>
  );
}
