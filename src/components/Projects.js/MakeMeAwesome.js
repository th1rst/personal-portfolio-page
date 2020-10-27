import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import Popover from "@material-ui/core/Popover";
import { makeStyles } from "@material-ui/core/styles";
import { SiTailwindcss } from "react-icons/si";
import { FaReact, FaGithub, FaGlobe } from "react-icons/fa";
import login from "../../assets/pictures/MakeMeAwesome/login.png";
import overview from "../../assets/pictures/MakeMeAwesome/overview.png";

const useStyles = makeStyles((theme) => ({
  popover: {
    pointerEvents: "none",
  },
  paper: {
    padding: theme.spacing(1),
  },
}));

export default function MakeMeAwesome() {
  const [flipped, setFlipped] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

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

  return (
    <div>
      {/* HEADING */}
      <h3 className="mb-2 text-white text-xl text-center tracking-wide font-semibold">
        MakeMeAwesome
      </h3>

      <div className="p-2 flex flex-row flex-wrap md:flex-no-wrap min-w-full h-auto max-w-6xl mx-auto border border-gray-800 rounded-xl">
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
                transform: transform.interpolate((t) => `${t} rotateX(180deg)`),
              }}
            >
              {/* IMAGE BACK, WITH LINKS TO PROJECT */}
              <div>
                <img
                  className="opacity-50 absolute w-full h-full object-cover rounded-lg"
                  src={login}
                  alt="login"
                />
                <div className="absolute w-full h-full flex flex-col justify-center">
                  <div className="flex flex-col">
                    <div className="flex flex-row justify-evenly">
                      <div className="text-white hover:text-gray-500 cursor-pointer">
                        {/* GITHUB */}
                        <a
                          className="flex flex-col items-center "
                          href="https://github.com/th1rst/learning/tree/master/Projects/make-me-awesome"
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
                          href="https://kochannek.com/portfolio/make-me-awesome/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaGlobe className="w-12 h-12" />
                          <p className="mt-1 font-semibold">
                            View Live Version
                          </p>
                        </a>
                      </div>
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
                            <p className="text-black font-semibold">Login:</p>
                            <p className="ml-1 text-blue-500">john@doe.com</p>
                          </div>
                          <div className="flex flex-row">
                            <p className="text-black font-semibold">
                              Password:
                            </p>
                            <p className="ml-1 text-blue-500">testuser123</p>
                          </div>
                        </div>
                      </Popover>
                    </div>
                  </div>
                </div>
              </div>
            </animated.div>
          </div>
        </div>
        {/* DESCRIPTION */}
        <div className="w-full md:w-1/2 m-2">
          <div className="w-full h-full flex flex-col justify-center">
            {/* CONTAINER FOR MOBILE GITHUB / LIVE VERSION, HIDDEN >md breakpoint*/}
            <div className="md:hidden mt-8 mb-4 flex flex-row justify-evenly">
              <div className="text-white hover:text-gray-500 cursor-pointer">
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

              <div className="text-white hover:text-gray-500">
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
                <div className="text-center">
                  <p className="mt-2 text-sm text-white font-semibold">
                    Login:
                  </p>
                  <p className="text-xs text-white italic">john@doe.com</p>
                  <p className="mt-2 text-sm text-white font-semibold">
                    Password:
                  </p>
                  <p className="text-xs text-white italic">testuser123</p>
                </div>
              </div>
            </div>

            <p className="mt-4 text-white text-center font-semibold uppercase tracking-wide">
              A personal activity and productivity tracker.
            </p>
            <p className="my-2 text-sm text-white text-center font-semibold uppercase tracking-wide">
              Technologies used:
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4">
              <div className="mt-4 mx-2 flex flex-col items-center text-center">
                <FaReact className="w-12 h-12" style={{ color: "#00b7ff" }} />
                <div className="flex flex-col text-center">
                  <p className="mt-1 text-white font-semibold text-xl">
                    React 16
                  </p>
                  <p className="mt-1 text-white text-xs font-semibold">
                    React Router
                  </p>
                  <p className="mt-1 text-white text-xs font-semibold">
                    Context API
                  </p>
                </div>
              </div>

              <div className="mt-4 mx-2 flex flex-col items-center">
                <SiTailwindcss
                  className="w-12 h-12"
                  style={{ color: "#38b2ac" }}
                />
                <div className="flex flex-col items-center text-center">
                  <p className="mt-1 text-white font-semibold text-xl">
                    Tailwind CSS
                  </p>
                  <p className="mt-1 text-white text-xs font-semibold">
                    Windmill UI
                  </p>
                  <p className="mt-1 text-white text-xs font-semibold">
                    Rainbow Components
                  </p>
                </div>
              </div>

              <div className="mt-4 mx-2 flex flex-col items-center text-center">
                <img
                  className="w-12 h-12"
                  src="https://png2.cleanpng.com/sh/a9d2c3dc4d3936284b440d384d94c2f7/L0KzQYm3VMI3N5RBfZH0aYP2gLBuTfZqepZneeVuLXPvf8brTf1me6Rmf9t3Zz3qf7FujPUubJZ7fd54cHX1g376jBZ1f5J3RadqZUHnSbfrgcQ6PGEARqkCMEm0SYmAUcUzPGg6SKo9NUa6RIK1kP5o/kisspng-firebase-cloud-messaging-google-developers-softwar-5ae1d9fda49409.7709198715247508456741.png"
                  alt="tailwind"
                />
                <p className="mt-1 text-white font-semibold text-xl">
                  Firebase
                </p>
                <p className="mt-1 text-white text-xs font-semibold">
                  Firebase Auth
                </p>
                <p className="mt-1 text-white text-xs font-semibold">
                  Firestore
                </p>
              </div>

              <div className="mt-4 mx-2 flex flex-col items-center text-center">
                <img
                  className="w-16 h-12"
                  src="https://camo.githubusercontent.com/234f6fe1b4fdef71cd8e1f5fbad043093d023dba/68747470733a2f2f617065786368617274732e636f6d2f6d656469612f72656163742d617065786368617274732e706e67"
                  alt="apexcharts"
                />
                <div className="flex flex-col items-center">
                  <p className="mt-1 text-white font-semibold text-xl">
                    ApexCharts
                  </p>
                  <p className="mt-1 text-white text-xs font-semibold">
                    Custom Sorting Algorithm
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
