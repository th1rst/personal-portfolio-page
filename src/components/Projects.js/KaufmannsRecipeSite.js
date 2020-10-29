import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { Transition } from "@tailwindui/react";

//Icons
import { BiListCheck } from "react-icons/bi";
import { BsCheckCircle, BsTextCenter } from "react-icons/bs";
import { AiOutlineDown } from "react-icons/ai";
import { FaReact, FaGithub, FaGlobe, FaCss3Alt } from "react-icons/fa";

//Pictures
import overview from "../../assets/pictures/KaufmannsRecipeSite/overview.png";
import back from "../../assets/pictures/KaufmannsRecipeSite/back.png";

const features = [
  "Over 180 real recipes from my grandfather",
  "Including 237 page Ebook made in Photoshop",
  "'Real' Website (German Content)",
  "11 Recipe Categories",
  "Contentful Database API",
  "Searchable Recipes",
  "Logic set up for X amount of recipes (expandable)",
  "Custom CSS and React-Bootstrap",
  "Social Media Share funtion",
];

export default function KaufmannsRecipeSite() {
  const [flipped, setFlipped] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });
  const [moreInfoVisible, setMoreInfoVisible] = useState(false);
  const [hoveredFeaturesButton, setHoveredFeaturesButton] = useState(false);

  //materialUI Popover
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handlePopoverClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);

  return (
    <div className="mb-16">
      {/* HEADING */}
      <h3 className="mb-2 text-white text-xl text-center tracking-wide font-semibold">
        Kaufmanns Recipe Site
      </h3>
      <div className="flex flex-col border border-gray-800 rounded-xl">
        <div className="p-2 mt-2 flex flex-row flex-wrap md:flex-no-wrap min-w-full h-auto max-w-6xl mx-auto">
          <div className="w-full md:w-1/2 h-64 m-2 my-auto">
            {/* IMAGE */}

            <div
              className="relative h-full w-full max-w-3xl rounded-lg"
              onMouseEnter={() => setFlipped(true)}
              onMouseLeave={() => setFlipped(false)}
            >
              <animated.div
                className="absolute w-full h-full object-cover rounded-lg"
                style={{
                  opacity: opacity.interpolate((o) => 1 - o),
                  transform,
                }}
              >
                {/* IMAGE FRONT */}
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src={overview}
                  alt="overview"
                />
              </animated.div>
              <animated.div
                className="absolute w-full h-full rounded-lg"
                style={{
                  opacity,
                  transform: transform.interpolate(
                    (t) => `${t} rotateX(180deg)`
                  ),
                }}
              >
                {/* IMAGE BACK, WITH LINKS TO PROJECT */}
                <div>
                  <img
                    className="opacity-50 absolute w-full h-full object-cover rounded-lg"
                    src={back}
                    alt="backside"
                  />
                  <div className="absolute w-full h-full flex flex-col justify-center">
                    <div className="flex flex-col">
                      <div className="flex flex-row justify-evenly">
                        <div className="text-white hover:text-gray-500 cursor-pointer">
                          {/* GITHUB */}
                          <a
                            className="flex flex-col items-center "
                            href="https://github.com/th1rst/learning/tree/master/Projects/kaufmanns-recipe-site"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaGithub className="w-12 h-12" />
                            <p className="mt-1 font-semibold">View Source</p>
                          </a>
                        </div>

                        <div
                          className="text-white hover:text-gray-500 cursor-pointer"
                          aria-owns={open ? "mouse-over-popover" : undefined}
                          aria-haspopup="true"
                          onMouseEnter={handlePopoverOpen}
                          onMouseLeave={handlePopoverClose}
                        >
                          {/* LIVE VERSION INCL. POPOVER FOR CREDENTIALS */}
                          <a
                            className="flex flex-col items-center "
                            href="https://kochannek.com/portfolio/kaufmanns-rezeptsammlung/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaGlobe className="w-12 h-12" />
                            <p className="mt-1 font-semibold">
                              View Live Version
                            </p>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </animated.div>
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
                    href="https://github.com/th1rst/learning/tree/master/Projects/make-me-awesome"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="w-12 h-12" />
                    <p className="my-1 font-semibold">View Source</p>
                  </a>
                </div>

                <div className="hover:text-gray-500">
                  {/* LIVE VERSION */}
                  <a
                    className="flex flex-col items-center cursor-pointer"
                    href="https://kochannek.com/portfolio/make-me-awesome/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGlobe className="w-12 h-12" />
                    <p className="my-1 font-semibold">View Live Version</p>
                  </a>
                </div>
              </div>

              <p className="mt-4 text-center font-semibold uppercase tracking-wide">
                Over 180 real family recipes.
              </p>
              <p className="my-2 text-sm text-center font-semibold uppercase tracking-wide">
                Technologies used:
              </p>
              <div className="flex flex-row flex-wrap justify-evenly font-semibold">
                <div className="my-4 mx-4 flex flex-col items-center text-center">
                  <FaReact className="w-12 h-12" style={{ color: "#00b7ff" }} />
                  <div className="flex flex-col text-center">
                    <p className="mt-1 text-xl">React 16</p>
                    <p className="mt-1 text-xs">React Router</p>
                    <p className="mt-1 text-xs">Context API</p>
                  </div>
                </div>

                <div className="my-4 mx-4 flex flex-col items-center">
                  <FaCss3Alt
                    className="w-12 h-12"
                    style={{ color: "#258ec8" }}
                  />
                  <div className="flex flex-col items-center text-center">
                    <p className="mt-1 text-xl">CSS 3</p>
                    <p className="mt-1 text-xs">Custom CSS</p>
                    <p className="mt-1 text-xs">React-Bootstrap</p>
                  </div>
                </div>

                <div className="my-4 mx-4 flex flex-col items-center text-center">
                  <img
                    className="w-12 h-12"
                    src="https://avatars1.githubusercontent.com/u/472182?s=280&v=4"
                    alt="tailwind"
                  />
                  <p className="mt-1 text-xl">Contentful</p>
                  <p className="mt-1 text-xs">Database API</p>
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
                Our family loves to cook - and since I use cooking websites
                frequently, and also use my grandfather's recipes frequently, I
                thought I'd make the best of both worlds and combine the two.{" "}
                <br />
                Kaufmanns Recipe Site (or "Kaufmanns-Rezeptsammlung" in German)
                is a real Website with my grandfather's collection of ~180
                phenomenal recipes collected over the last 50 years - some of
                which were even made by my great-great-grandmother. The recipes
                were once used in a Print-On-Demand book that was sold on Amazon
                KDP and a 237-page PDF version in print-quality of said book is
                available to download for free (make sure to use Dual Page
                Layout when reading). Since it's a "real" Website including
                real-world content, everything is written in German.
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
