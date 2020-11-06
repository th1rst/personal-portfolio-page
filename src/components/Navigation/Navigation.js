import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Transition } from "@tailwindui/react";
import { Text } from "../Multilanguage/Text";
import { LanguageSelector } from "../Multilanguage/LanguageSelector";
import { ThemeSelector } from "../DarkMode/ThemeSelector";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdSettings } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { useSpring, useTrail, animated } from "react-spring";
import { AnimatedLogoDark } from "./AnimatedLogoDark";
import { AnimatedLogoLight } from "./AnimatedLogoLight";
import { ThemeContext } from "../DarkMode/ThemeProvider";

export default function Navigation() {
  const [hidden, setHidden] = useState(true);
  const [settingsVisible, setsettingsVisible] = useState(false);
  const [hoveredProjects, setHoveredProjects] = useState(false);
  const [hoveredAbout, setHoveredAbout] = useState(false);
  const [hoveredContact, setHoveredContact] = useState(false);
  const { theme } = React.useContext(ThemeContext);

  const { opacity } = useSpring({
    config: { duration: 600 },
    opacity: hidden ? 0 : 1,
  });

  const { xyz } = useSpring({
    xyz: settingsVisible ? [0, 0, 0] : [120, 0, 0],
  });

  //items for react-spring to map over (for trailing), mobile version
  const mobileNavItems = [
    <div className="mt-4 w-screen px-8 mx-auto h-12 flex flex-row justify-between items-center">
      <ThemeSelector />
      <LanguageSelector />
    </div>,

    <Link
      to="/projects"
      className="w-full px-3 py-2 rounded text-gray-300 items-center justify-center"
      onClick={() => setHidden(true)}
    >
      <span className={`${theme === "dark" ? "text-white" : "text-black"}`}>
        <Text tid="navProjects" />
      </span>
    </Link>,

    <Link
      to="/about"
      className="w-full px-3 py-2 rounded text-gray-300 items-center justify-center"
      onClick={() => setHidden(true)}
    >
      <span className={`${theme === "dark" ? "text-white" : "text-black"}`}>
        <Text tid="navAbout" />
      </span>
    </Link>,

    <Link
      to="/contact"
      className="w-full px-3 py-2 rounded text-gray-300 items-center justify-center"
      onClick={() => setHidden(true)}
    >
      <span className={`${theme === "dark" ? "text-white" : "text-black"}`}>
        <Text tid="navContact" />
      </span>
    </Link>,
  ];
  const trail = useTrail(mobileNavItems.length, { opacity: hidden ? 0 : 1 });

  return (
    <div className="border-b border-gray-800 shadow-xl">
      <nav
        className={`${
          theme === "dark" ? "bg-black" : "bg-white"
        } flex items-center p-3 flex-wrap transition duration-300 ease-in-out`}
      >
        <Link to="/" className="ml-2 inline-flex items-center">
          {theme === "dark" ? <AnimatedLogoDark /> : <AnimatedLogoLight />}
        </Link>
        <div className="ml-1 flex flex-col items-start justify-center">
          <h1
            className={`${
              theme === "dark" ? "text-white" : "text-black"
            } text-xl uppercase font-bold tracking-tighter leading-none`}
          >
            Marco
            <div className="inline-flex mx-1 w-1 h-1 bg-red-500" />
            Kochannek
          </h1>
          <h1
            className={`${
              theme === "dark" ? "text-gray-400" : "text-gray-800"
            } text-md tracking-wider leading-none`}
          >
            Frontend Web Developer
          </h1>
        </div>

        <button
          className={`${
            theme === "dark" ? "text-white" : "text-black"
          } inline-flex p-3 rounded lg:hidden ml-auto outline-none nav-toggler`}
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
              className={`${
                theme === "dark" ? "text-gray-300" : "text-gray-800"
              } mx-1 w-full px-3 py-2 rounded items-center justify-center transition duration-300 ease-in-out transform hover:-translate-y-1`}
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
              className={`${
                theme === "dark" ? "text-gray-300" : "text-gray-800"
              } mx-1 w-full px-3 py-2 rounded items-center justify-center transition duration-300 ease-in-out transform hover:-translate-y-1`}
            >
              <span className="text-md pl-2 uppercase font-semibold">
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
                <div className="w-2/3 mx-auto h-px transition duration-300 ease-in-out bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500" />
              </Transition>
            </Link>

            <Link
              onMouseEnter={() => setHoveredContact(true)}
              onMouseLeave={() => setHoveredContact(false)}
              to="/contact"
              className={`${
                theme === "dark" ? "text-gray-300" : "text-gray-800"
              } mx-1 w-full px-3 py-2 rounded items-center justify-center transition duration-300 ease-in-out transform hover:-translate-y-1`}
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
              {!settingsVisible ? (
                <MdSettings
                  onClick={() => setsettingsVisible(!settingsVisible)}
                  size={20}
                  className={`${
                    theme === "dark"
                      ? "text-white hover:text-gray-500"
                      : "text-gray-800 hover:text-gray-500"
                  } cursor-pointer`}
                />
              ) : (
                <AiFillCloseCircle
                  onClick={() => setsettingsVisible(!settingsVisible)}
                  size={20}
                  className={`${
                    theme === "dark"
                      ? "text-white hover:text-gray-500"
                      : "text-gray-800 hover:text-gray-500"
                  } cursor-pointer`}
                />
              )}
            </div>
            {settingsVisible ? (
              <animated.div
                className="flex flex-row items-center"
                style={{
                  transform: xyz.interpolate(
                    (x, y, z) => `translate3d(${x}px, ${y}px, ${z}px)`
                  ),
                }}
              >
                <ThemeSelector />
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
                    <div className="w-full text-center font-semibold uppercase flex flex-col">
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
