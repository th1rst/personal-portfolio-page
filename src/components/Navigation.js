import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Transition } from "@tailwindui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useSpring, useTrail, animated } from "react-spring";
import AnimatedLogo from "./AnimatedLogo";

export default function Navigation() {
  const [hidden, setHidden] = useState(true);

  const [hoveredProjects, setHoveredProjects] = useState(false);
  const [hoveredAbout, setHoveredAbout] = useState(false);
  const [hoveredContact, setHoveredContact] = useState(false);

  const { opacity } = useSpring({
    config: { duration: 600 },
    opacity: hidden ? 0 : 1,
  });

  //items for react-spring to map over, mobile version
  const mobileNavItems = [
    <Link
      to="/projects"
      className="w-full px-3 py-2 rounded text-gray-300 items-center justify-center"
      onClick={() => setHidden(true)}
    >
      <span>Projects</span>
    </Link>,

    <Link
      to="/about"
      className="w-full px-3 py-2 rounded text-gray-300 items-center justify-center"
      onClick={() => setHidden(true)}
    >
      <span>About</span>
    </Link>,

    <Link
      to="/contact"
      className="w-full px-3 py-2 rounded text-gray-300 items-center justify-center"
      onClick={() => setHidden(true)}
    >
      <span>Contact</span>
    </Link>,
  ];
  const trail = useTrail(mobileNavItems.length, { opacity: hidden ? 0 : 1 });

  return (
    <div className="border-b border-gray-800 shadow-xl">
      <nav className="flex items-center bg-black p-3 flex-wrap transition duration-300 ease-in-out">
        <Link to="/" className="ml-2 inline-flex items-center">
          <AnimatedLogo />
        </Link>
        <div className="ml-1 flex flex-col items-start justify-center">
          <h1 className="text-white text-xl uppercase font-bold tracking-tighter leading-none">
            Marco Kochannek
          </h1>
          <h1 className="text-gray-400 text-md tracking-wider leading-none">
            Frontend Web Developer
          </h1>
        </div>

        <button
          className="text-white inline-flex p-3 rounded lg:hidden ml-auto outline-none nav-toggler"
          onClick={() => setHidden(!hidden)}
        >
          <GiHamburgerMenu className="text-xl" />
        </button>

        {/* DESKTOP VERSION */}
        <div className="hidden lg:inline-flex lg:flex-grow lg:w-auto">
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto lg:items-center items-start flex flex-col lg:h-auto">
            <Link
              name="link1"
              onMouseEnter={() => setHoveredProjects(true)}
              onMouseLeave={() => setHoveredProjects(false)}
              to="/projects"
              className="mx-1 w-full px-3 py-2 rounded text-gray-300 items-center justify-center transition duration-300 ease-in-out transform hover:-translate-y-1"
            >
              <span className="text-md uppercase font-semibold">Projects</span>

              <Transition
                show={hoveredProjects}
                enter="transition-all duration-200"
                enterFrom="w-0 opacity-0"
                enterTo="w-11/12 mx-auto opacity-100"
                leave="transition-all duration-200"
                leaveFrom="w-11/12 opacity-100"
                leaveTo="w-0 mx-auto opacity-0"
              >
                <div className="w-11/12 mx-auto h-px transition duration-300 ease-in-out bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500" />
              </Transition>
            </Link>

            <Link
              onMouseEnter={() => setHoveredAbout(true)}
              onMouseLeave={() => setHoveredAbout(false)}
              to="/about"
              className="mx-1 w-full px-3 py-2 rounded text-gray-300 items-center justify-center transition duration-300 ease-in-out transform hover:-translate-y-1 "
            >
              <span className="text-md uppercase font-semibold">About</span>

              <Transition
                show={hoveredAbout}
                enter="transition-all duration-200"
                enterFrom="w-0 opacity-0"
                enterTo="w-11/12 mx-auto opacity-100"
                leave="transition-all duration-200"
                leaveFrom="w-11/12 opacity-100"
                leaveTo="w-0 mx-auto opacity-0"
              >
                <div className="w-11/12 mx-auto h-px transition duration-300 ease-in-out bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500" />
              </Transition>
            </Link>

            <Link
              onMouseEnter={() => setHoveredContact(true)}
              onMouseLeave={() => setHoveredContact(false)}
              to="/contact"
              className="mx-1 w-full px-3 py-2 rounded text-gray-300 items-center justify-center transition duration-300 ease-in-out transform hover:-translate-y-1 "
            >
              <span className="text-md uppercase font-semibold">Contact</span>

              <Transition
                show={hoveredContact}
                enter="transition-all duration-200"
                enterFrom="w-0 opacity-0"
                enterTo="w-11/12 mx-auto opacity-100"
                leave="transition-all duration-200"
                leaveFrom="w-11/12 opacity-100"
                leaveTo="w-0 mx-auto opacity-0"
              >
                <div className="w-11/12 mx-auto h-px transition duration-300 ease-in-out bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500" />
              </Transition>
            </Link>
          </div>
        </div>

        {/* MOBILE VERSION */}
        {!hidden ? (
          <animated.div
            style={{ opacity }}
            className="w-full flex justify-center"
          >
            <ul>
              {trail.map(({ opacity }, i) => {
                const item = mobileNavItems[i];
                return (
                  <animated.li style={{ opacity }} key={Math.random() * 1000}>
                    <div className="w-full text-center flex flex-col">
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
