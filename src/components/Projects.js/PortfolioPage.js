import React, { useState } from "react";
import { Transition } from "@tailwindui/react";
import { useSpring, animated } from "react-spring";
import { GradientPinkBlue as CircleGradient } from "@vx/gradient";

//Icons
import { SiTailwindcss } from "react-icons/si";
import { BiListCheck } from "react-icons/bi";
import { BsCheckCircle, BsTextCenter } from "react-icons/bs";
import { AiOutlineDown } from "react-icons/ai";
import { FaReact, FaGithub } from "react-icons/fa";

const features = [
  "User Authentication + Account",
  "Settings (Password reset, change Email)",
  "Customizable 'Quick Activities'",
  "Customizable Profile + Banner Picture",
  "Motivational Random Quote via API",
  "Data Visualization via ApexCharts",
  "Table overview (All Activities) incl. filtering",
  "'Live Activities' (Stopwatch, Counter)",
  "Manually enter activities with Date Picker",
];

export default function PortfolioPage() {
  const [moreInfoVisible, setMoreInfoVisible] = useState(false);
  const [hoveredFeaturesButton, setHoveredFeaturesButton] = useState(false);

  const [moveLeft, setMoveLeft] = useState(false);

  const { opacity } = useSpring({
    config: { duration: 500 },
    opacity: moveLeft ? 1 : 0,
  });

  return (
    <div className="mb-16">
      {/* HEADING */}
      <h3 className="mb-2 text-white text-xl text-center tracking-wide font-semibold">
        Personal Portfolio Page
      </h3>
      <div className="flex flex-col border border-gray-800 rounded-xl">
        <div className="p-2 mt-2 flex flex-row flex-wrap md:flex-no-wrap min-w-full h-auto max-w-6xl mx-auto">
          <div className="w-full md:w-1/2 h-64 m-2 my-auto">
            <div
              className="relative h-full w-full max-w-3xl rounded-lg border border-gray-900"
              onMouseEnter={() => setMoveLeft(true)}
              onMouseLeave={() => setMoveLeft(false)}
            >
              <svg className="mx-auto" width={300} height={250}>
                <CircleGradient id="gradient" />
                <circle
                  strokeWidth="4"
                  cx="150"
                  cy="125"
                  r="120"
                  stroke="url(#gradient)"
                  fill="none"
                />
              </svg>
              <animated.div
                style={{
                  config: { duration: 500 },
                  opacity: moveLeft ? 0 : 1,
                }}
              >
                <div className="absolute top-0 w-full h-full">
                  <div className="flex flex-row justify-center">
                    <svg width={300} height={250} viewBox="-60 -50 300 300">
                      <path
                        strokeWidth="3"
                        fill="white"
                        stroke="white"
                        d="m46.562 163.03c-1.4885-1.8246-1.4082-54.974 0.10663-70.55 0.43296-4.4519 1.1533-13.558 1.6007-20.236 1.2815-19.127 4.3263-38.378 6.6245-41.886 2.9172-4.4522 7.0088-6.5369 7.9608-4.0561 0.40106 1.0451-0.04677 2.5443-0.99519 3.3314-2.6526 2.2015-5.478 21.07-6.9867 46.658-0.48121 8.1618-1.0657 15.165-1.2989 15.562-0.83812 1.4285-2.305 48.518-1.5114 48.518 0.44666 0 3.2961-5.132 6.3321-11.404 3.036-6.2724 6.9666-13.536 8.7346-16.141 5.6204-8.2822 6.1538-9.8017 4.743-13.512-0.87571-2.3033-0.84072-4.702 0.10459-7.1709l1.4205-3.7099 2.6284 3.2282 2.6284 3.2282 11.095-11.389c12.43-12.754 18.35-17.129 34.13-25.224 11.996-6.1529 15.412-6.8486 15.412-3.1381 0 2.437-14.876 12.39-18.519 12.39-0.94435 0-1.717 0.70826-1.717 1.5739 0 0.86565-0.38077 1.1931-0.84616 0.72775-1.392-1.392-15.542 10.261-25.212 20.765-6.771 7.3539-8.8304 10.473-8.2088 12.431 0.5464 1.7216 0.31972 2.2991-0.66385 1.6912-2.7042-1.6713-1.5584 1.2174 2.0088 5.0645 5.9202 6.3847 38.969 27.314 50.421 31.93 10.729 4.3247 14.234 8.1104 7.5094 8.1104-3.0979 0-13.179-3.3949-20.96-7.0586-9.5136-4.4793-33.202-19.577-39.255-25.019-5.5225-4.9652-7.1389-5.8148-8.1089-4.2622-10.15 16.247-16.544 29.266-20.222 41.173-1.4708 4.7619-2.9037 8.6581-3.1842 8.6581s-1.373 0.33117-2.4278 0.73593-2.5594-0.0506-3.3435-1.0118z"
                      />
                    </svg>
                  </div>
                </div>
              </animated.div>

              {moveLeft ? (
                <animated.div style={{ opacity }}>
                  <div className="absolute top-0 w-full h-full">
                    <svg className="mx-auto" width={300} height={250}>
                      <CircleGradient id="gradient" />
                      <circle
                        strokeWidth="4"
                        cx="150"
                        cy="125"
                        r="120"
                        stroke="url(#gradient)"
                        fill="none"
                      />
                    </svg>
                  </div>

                  <div className="absolute top-0 w-full h-full flex flex-row justify-center items-center text-white">
                    <a
                      href="https://github.com/th1rst/learning/tree/master/Projects/personal-portfolio-page"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="flex flex-row items-center hover:text-gray-500 cursor-pointer">
                        <FaGithub size={64} className="object-center" />
                        <p className="ml-2 font-semibold">View Source</p>
                      </div>
                    </a>
                  </div>
                </animated.div>
              ) : null}
            </div>
          </div>
          {/* DESCRIPTION */}
          <div className="w-full md:w-1/2 m-2">
            <div className="w-full h-full flex flex-col justify-center text-white">
              {/* CONTAINER FOR MOBILE GITHUB / LIVE VERSION, HIDDEN >md breakpoint*/}
              <div className="md:hidden mt-8 mb-4 flex flex-row justify-evenly">
                <div className="hover:text-gray-500 cursor-pointer">
                  {/* GITHUB */}
                  <a
                    className="flex flex-col items-center "
                    href="https://github.com/th1rst/learning/tree/master/Projects/personal-portfolio-page"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="w-12 h-12" />
                    <p className="my-1 font-semibold">View Source</p>
                  </a>
                </div>
              </div>

              <p className="my-2 text-sm text-center font-semibold uppercase tracking-wide">
                Technologies used:
              </p>
              <div className="flex flex-row flex-wrap justify-evenly font-semibold">
                <div className="my-4 mx-4 flex flex-col items-center text-center">
                  <FaReact className="w-12 h-12" style={{ color: "#00b7ff" }} />
                  <div className="flex flex-col text-center">
                    <p className="mt-1 text-xl">React 17</p>
                    <p className="mt-1 text-xs">React Router</p>
                    <p className="mt-1 text-xs">Hooks</p>
                  </div>
                </div>

                <div className="my-4 mx-4 flex flex-col items-center">
                  <SiTailwindcss
                    className="w-12 h-12"
                    style={{ color: "#38b2ac" }}
                  />
                  <div className="flex flex-col items-center text-center">
                    <p className="mt-1 text-xl">Tailwind CSS</p>
                  </div>
                </div>

                <div className="my-4 mx-4 flex flex-col items-center text-center">
                  <img
                    className="w-12 h-12"
                    src="https://camo.githubusercontent.com/b271ecbaca87f7700f877081eb1b83b4b8c2a223/68747470733a2f2f692e696d6775722e636f6d2f515a6f776e68672e706e67"
                    alt="react-spring"
                  />
                  <p className="mt-1 text-xl">React-Spring</p>
                  <p className="mt-1 text-xs">Custom Animations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="my-4 mx-16 border border-gray-900" />
        <div className="mb-4 flex flex-row justify-center content-center text-white">
          <div
            className="w-auto cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1"
            onMouseEnter={() => setHoveredFeaturesButton(true)}
            onMouseLeave={() => setHoveredFeaturesButton(false)}
            onClick={() => setMoreInfoVisible(!moreInfoVisible)}
          >
            <AiOutlineDown className="inline-flex h-5 w-5 mr-1" />
            <span className="text-md font-semibold uppercase my-auto">
              More
            </span>
            <Transition
              show={hoveredFeaturesButton}
              enter="transition-all duration-200"
              enterFrom="w-0 opacity-0"
              enterTo="w-11/12 mx-auto opacity-100"
              leave="transition-all duration-200"
              leaveFrom="w-11/12 opacity-100"
              leaveTo="w-0 mx-auto opacity-0"
            >
              <div className="w-11/12 mx-auto h-px transition duration-300 ease-in-out bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500" />
            </Transition>
          </div>
        </div>

        {moreInfoVisible ? (
          <div className="flex flex-col items-center text-white ">
            <div className="mt-2 w-full">
              <div className="flex flex-row justify-center mx-auto my-4">
                <BsTextCenter className="inline-flex h-6 w-6 mr-1" />
                <span className="text-md text-blue-500 font-semibold uppercase my-auto">
                  About
                </span>
              </div>
              <div className="w-full text-sm font-semibold px-8 md:px-16 text-justify">
                After all, I needed a Website to showcase my skills and document
                my projects.
                <br />
                While there are no fancy technical things to implement (like
                User Authentication, API calls or Database implementation), I
                made sure to make it as visually appealing as I could - although
                I am not a design-savvy person at all. After a certain amount of
                research, I stumbled upon React-Spring, which is amazing albeit
                rather complicated. Ever since my last project ("Make Me
                Awesome"), TailwindCSS has kind of grown on me so I used it
                again. What I like about Tailwind is that it doesn't come with
                pre-opinionated components like Bootstrap so there's more room
                for creative freedom. <br /> <br />
                I was on the fence about making a general "Project" Component
                that accepts several props (so I don't violate the "DRY"
                principle), but after I thought about it, I thought that it
                would actually make more sense to copy + paste each project
                since there would've been so many props to pass (Arrays, Bools,
                Objects, Links, Images) that it would make the Code
                significantly less readable.
                <br /> <br />
                The entire page is open-sourced on Github and free for everyone
                to use. If there are any suggestions, just open a Pull Request
                or contact me via my Contact Form.
              </div>
            </div>

            <div className="mt-12 flex flex-row justify-center w-full">
              <BiListCheck className="inline-flex h-8 w-8 mr-1" />
              <span className="text-md text-blue-500 font-semibold uppercase my-auto">
                Features
              </span>
            </div>
            <ul className="w-full pb-4 grid grid-cols-1 lg:grid-cols-3 text-center text-sm font-semibold">
              {features.map((item) => (
                <li className="m-4 mx-auto text-md">
                  <BsCheckCircle className="inline-flex mx-2 my-auto" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
}