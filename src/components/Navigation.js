import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Transition } from "@tailwindui/react";
import { Text } from "./Multilanguage/Text";
import { LanguageProvider } from "./Multilanguage/LanguageProvider";
import LanguageSelector from "./Multilanguage/LanguageSelector";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdSettings } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import { CgSun } from "react-icons/cg";
import { useSpring, useTrail, animated } from "react-spring";
import AnimatedLogo from "./AnimatedLogo";

export default function Navigation(props) {
  const [hidden, setHidden] = useState(true);
  const [settingsVisible, setsettingsVisible] = useState(false);
  const [hoveredProjects, setHoveredProjects] = useState(false);
  const [hoveredAbout, setHoveredAbout] = useState(false);
  const [hoveredContact, setHoveredContact] = useState(false);

  const { opacity } = useSpring({
    config: { duration: 600 },
    opacity: hidden ? 0 : 1,
  });

  const { xyz } = useSpring({
    xyz: settingsVisible ? [0, 0, 0] : [120, 0, 0],
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
            Marco
            <div className="inline-flex mx-1 w-1 h-1 bg-red-500" />
            Kochannek
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
              <span className="text-md uppercase font-semibold">
                <Text tid="navProjects" />
              </span>

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
              <span className="text-md uppercase font-semibold">
                <Text tid="navAbout" />
              </span>

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
              <span className="text-md uppercase font-semibold">
                <Text tid="navContact" />
              </span>

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

            <div className="mx-2 h-4 w-2 border-l border-gray-700" />
            <div className="mx-2">
              <MdSettings
                onClick={() => setsettingsVisible(!settingsVisible)}
                size={20}
                className="text-white hover:text-gray-500 cursor-pointer"
              />
            </div>
            {settingsVisible ? (
              <animated.div
                className="flex flex-row"
                style={{
                  transform: xyz.interpolate(
                    (x, y, z) => `translate3d(${x}px, ${y}px, ${z}px)`
                  ),
                }}
              >
                <div className="ml-4 mr-2">
                  <CgSun
                    size={20}
                    className="text-white hover:text-gray-500 cursor-pointer"
                  />
                </div>
                <LanguageSelector />
              </animated.div>
            ) : null}
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
