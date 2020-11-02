import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import Popover from "@material-ui/core/Popover";
import { Transition } from "@tailwindui/react";
import { makeStyles } from "@material-ui/core/styles";
import { Text } from "../Multilanguage/Text";
import { ThemeContext } from "../DarkMode/ThemeProvider";

//Icons
import { BiListCheck } from "react-icons/bi";
import { BsCheckCircle, BsTextCenter } from "react-icons/bs";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { FaGithub, FaGlobe, FaCode } from "react-icons/fa";

const useStyles = makeStyles((theme) => ({
  popover: {
    pointerEvents: "none",
  },
  paper: {
    padding: theme.spacing(1),
  },
}));

const DefaultProject = (props) => {
  const { theme } = React.useContext(ThemeContext);
  const [flipped, setFlipped] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });
  const [moreInfoVisible, setMoreInfoVisible] = useState(false);
  const [hoveredFeaturesButton, setHoveredFeaturesButton] = useState(false);

  //materialUI Popover
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handlePopoverClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);

  const {
    name,
    imageFront,
    imageBack,
    githubLink,
    liveVersionLink,
    hasLoginCredentials,
    userLogin,
    passwordLogin,
    projectShortDescription,
    aboutProjectText,
    features,
    techStack,
  } = props;

  return (
    <div className="mb-16 shadow-xl">
      {/* HEADING */}
      <div className="mb-1 flex flex-row justify-center items-center">
        <FaCode size={40} className="text-blue-400" />
        <h3
          className={`${
            theme === "dark" ? "text-white" : "text-black"
          } ml-4 text-2xl tracking-wide font-semibold`}
        >
          {name}
        </h3>
      </div>
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
                  src={imageFront}
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
                    className="absolute w-full h-full object-cover rounded-lg"
                    src={imageBack}
                    alt="login"
                  />
                  <div className="absolute w-full h-full flex flex-col justify-center">
                    <div className="flex flex-col">
                      <div className="flex flex-row justify-evenly">
                        <div
                          className={`${
                            theme === "dark"
                              ? "text-white hover:text-gray-500"
                              : "text-gray-500 hover:text-gray-800"
                          } cursor-pointer`}
                        >
                          {/* GITHUB */}
                          <a
                            className="flex flex-col items-center "
                            href={githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaGithub className="w-12 h-12" />
                            <p className="mt-1 font-semibold">
                              <Text tid="viewSource" />
                            </p>
                          </a>
                        </div>

                        <div
                          className={`${
                            theme === "dark"
                              ? "text-white hover:text-gray-500"
                              : "text-gray-500 hover:text-gray-800"
                          } cursor-pointer`}
                          aria-owns={open ? "mouse-over-popover" : undefined}
                          aria-haspopup="true"
                          onMouseEnter={handlePopoverOpen}
                          onMouseLeave={handlePopoverClose}
                        >
                          {/* LIVE VERSION INCL. POPOVER FOR CREDENTIALS */}
                          <a
                            className="flex flex-col items-center "
                            href={liveVersionLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaGlobe className="w-12 h-12" />
                            <p className="mt-1 font-semibold">
                              <Text tid="viewLiveVersion" />
                            </p>
                          </a>
                        </div>
                        {hasLoginCredentials ? (
                          <Popover
                            id="mouse-over-popover"
                            className={classes.popover}
                            classes={{
                              paper: classes.paper,
                            }}
                            open={open}
                            anchorEl={anchorEl}
                            anchorOrigin={{
                              vertical: "bottom",
                              horizontal: "left",
                            }}
                            transformOrigin={{
                              vertical: "top",
                              horizontal: "left",
                            }}
                            style={{ marginTop: "10px" }}
                            onClose={handlePopoverClose}
                            disableRestoreFocus
                          >
                            <div className="flex flex-col">
                              <div className="flex flex-row">
                                <p className="text-black font-semibold">
                                  Login:
                                </p>
                                <p className="ml-1 text-blue-500">
                                  {userLogin}
                                </p>
                              </div>
                              <div className="flex flex-row">
                                <p className="text-black font-semibold">
                                  <Text tid="password" />
                                </p>
                                <p className="ml-1 text-blue-500">
                                  {passwordLogin}
                                </p>
                              </div>
                            </div>
                          </Popover>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              </animated.div>
            </div>
          </div>
          {/* DESCRIPTION */}
          <div className="w-full md:w-1/2 m-2">
            <div
              className={`${
                theme === "dark" ? "text-white" : "text-black"
              } w-full h-full flex flex-col justify-center`}
            >
              {/* CONTAINER FOR MOBILE GITHUB / LIVE VERSION, HIDDEN >md breakpoint*/}
              <div className="md:hidden mt-8 mb-4 flex flex-row justify-evenly">
                <div className="hover:text-gray-500 cursor-pointer">
                  {/* GITHUB */}
                  <a
                    className="flex flex-col items-center "
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="w-12 h-12" />
                    <p className="my-1 font-semibold">
                      <Text tid="viewSource" />
                    </p>
                  </a>
                </div>

                <div className="hover:text-gray-500">
                  {/* LIVE VERSION */}
                  <a
                    className="flex flex-col items-center cursor-pointer"
                    href={liveVersionLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGlobe className="w-12 h-12" />
                    <p className="my-1 font-semibold">
                      <Text tid="viewLiveVersion" />
                    </p>
                  </a>
                  {hasLoginCredentials ? (
                    <div className="text-center">
                      <p className="mt-2 text-sm font-semibold">Login:</p>
                      <p className="text-xs italic">{userLogin}</p>
                      <p className="mt-2 text-sm font-semibold">
                        <Text tid="password" />
                      </p>
                      <p className="text-xs italic">{passwordLogin}</p>
                    </div>
                  ) : null}
                </div>
              </div>

              <p className="mt-4 text-xl text-center font-semibold uppercase tracking-wide text-blue-400">
                {projectShortDescription}
              </p>
              <p className="mt-8 mb-2 text-sm text-center font-semibold uppercase tracking-wide">
                <Text tid="technologiesUsed" />
              </p>
              <div className="flex flex-row flex-wrap justify-evenly font-semibold">
                {techStack
                  ? techStack.map((item) => (
                      <div className="my-4 mx-4 flex flex-col items-center text-center">
                        {item.logo}
                        <div className="flex flex-col text-center">
                          <p className="mt-1 text-xl">{item.name}</p>
                          {item.subtexts
                            ? item.subtexts.map((subtext) => (
                                <p className="mt-1 text-xs">{subtext}</p>
                              ))
                            : null}
                        </div>
                      </div>
                    ))
                  : null}
              </div>
            </div>
          </div>
        </div>
        <div className="my-4 mx-16 border border-gray-900" />
        <div
          className={`${
            theme === "dark" ? "text-white" : "text-black"
          } mb-4 flex flex-row justify-center content-center`}
        >
          <div
            className="w-auto cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1"
            onMouseEnter={() => setHoveredFeaturesButton(true)}
            onMouseLeave={() => setHoveredFeaturesButton(false)}
            onClick={() => setMoreInfoVisible(!moreInfoVisible)}
          >
            {!moreInfoVisible ? (
              <div>
                <AiOutlineDown className="inline-flex h-6 w-6 mr-1 pb-1" />
                <span className="text-lg mr-1 font-semibold uppercase my-auto">
                  <Text tid="more" />
                </span>
              </div>
            ) : (
              <div>
                <AiOutlineUp className="inline-flex h-6 w-6 mr-1 pb-1" />
                <span className="text-lg mr-1 font-semibold uppercase my-auto">
                  <Text tid="less" />
                </span>
              </div>
            )}

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
          <div
            className={`${
              theme === "dark" ? "text-white" : "text-black"
            } flex flex-col items-center`}
          >
            <div className="mt-2 w-full">
              <div className="flex flex-row justify-center mx-auto my-4">
                <BsTextCenter className="inline-flex h-6 w-6 mr-1" />
                <span className="text-lg text-blue-500 font-semibold uppercase my-auto">
                  <Text tid="aboutProject" />
                </span>
              </div>
              <div className="w-full text-md font-semibold px-8 md:px-16 text-justify">
                {aboutProjectText}
              </div>
            </div>

            <div className="mt-12 flex flex-row justify-center w-full">
              <BiListCheck className="inline-flex h-8 w-8 mr-1" />
              <span className="text-lg text-blue-500 font-semibold uppercase my-auto">
                Features
              </span>
            </div>
            <ul className="w-full pb-4 grid grid-cols-1 lg:grid-cols-3 text-center text-sm font-semibold">
              {features.map((item) => (
                <li className="m-4 mx-auto text-md" key={item}>
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
};

export default DefaultProject;
