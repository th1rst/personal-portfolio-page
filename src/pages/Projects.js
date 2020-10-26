import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import login from "../assets/pictures/MakeMeAwesome/login.png";
import overview from "../assets/pictures/MakeMeAwesome/overview.png";

export default function Projects() {
  const [flipped, setFlipped] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  return (
    <div className="w-full h-full bg-black">
      <h1 className="pt-4 text-3xl font-semibold uppercase text-white text-center tracking-wider">
        Projects
      </h1>
      <h1 className="text-xs font-semibold uppercase text-white text-center">
        (newest to oldest)
      </h1>

      {/* CONTAINER */}
      <div className="m-4 p-4 flex flex-col flex-wrap border-2 border-blue-500">
        {/* HEADING */}
        <h3 className="mb-2 text-white text-center tracking-wide font-semibold">
          MakeMeAwesome
        </h3>

        <div className="p-2 flex w-full h-64 max-w-6xl mx-auto flex-row border border-gray-800 rounded-xl">
            
          <div className="w-1/2 mx-2">
            <div className="w-full h-full">
              {/* IMAGE */}

              <div
                className="relative w-full h-full object-cover rounded-lg"
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
                    className="absolute w-full h-full object-cover rounded-lg"
                    src={login}
                    alt="login"
                  />
                </animated.div>
                <animated.div
                  className="absolute w-full h-full object-cover rounded-lg"
                  style={{
                    opacity,
                    transform: transform.interpolate(
                      (t) => `${t} rotateX(180deg)`
                    ),
                  }}
                >
                  {/* IMAGE BACK */}
                  <img
                    className="absolute w-full h-full object-cover rounded-lg"
                    src={overview}
                    alt="overview"
                  />
                </animated.div>
              </div>
            </div>
          </div>
          {/* DESCRIPTION */}
          <div className="w-1/2 mx-2">
            <div className="w-full h-full flex flex-col justify-center">
              <p className="text-white text-center font-semibold uppercase tracking-wide">
                A personal activity and productivity tracker.
              </p>
              <p className="mt-2 text-sm text-white text-center font-semibold uppercase tracking-wide">
                Technologies used:
              </p>
              <div className="mt-1 flex flex-row justify-evenly">
                <div className="flex flex-col items-center">
                  <FaReact className="w-12 h-12" style={{ color: "#00b7ff" }} />
                  <div className="flex flex-col text-center">
                    <p className="mt-1 text-white font-semibold text-xl">
                      React 16
                    </p>
                    <p className="mt-1 text-white text-xs font-semibold">React Router</p>
                    <p className="mt-1 text-white text-xs font-semibold">Context API</p>
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <SiTailwindcss
                    className="w-12 h-12"
                    style={{ color: "#38b2ac" }}
                  />
                  <div className="flex flex-col items-center">
                    <p className="mt-1 text-white font-semibold text-xl">
                      Tailwind CSS
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <img
                    className="w-12 h-12"
                    src="https://png2.cleanpng.com/sh/a9d2c3dc4d3936284b440d384d94c2f7/L0KzQYm3VMI3N5RBfZH0aYP2gLBuTfZqepZneeVuLXPvf8brTf1me6Rmf9t3Zz3qf7FujPUubJZ7fd54cHX1g376jBZ1f5J3RadqZUHnSbfrgcQ6PGEARqkCMEm0SYmAUcUzPGg6SKo9NUa6RIK1kP5o/kisspng-firebase-cloud-messaging-google-developers-softwar-5ae1d9fda49409.7709198715247508456741.png"
                    alt="tailwind"
                  />
                  <p className="mt-1 text-white font-semibold text-xl">
                    Firebase
                  </p>
                  <p className="mt-1 text-white text-xs font-semibold">Firebase Auth</p>
                  <p className="mt-1 text-white text-xs font-semibold">Firestore</p>
                </div>

                <div className="flex flex-col items-center">
                  <img
                    className="w-16 h-12"
                    src="https://camo.githubusercontent.com/234f6fe1b4fdef71cd8e1f5fbad043093d023dba/68747470733a2f2f617065786368617274732e636f6d2f6d656469612f72656163742d617065786368617274732e706e67"
                    alt="apexcharts"
                  />
                  <div className="flex flex-col items-center">
                    <p className="mt-1 text-white font-semibold text-xl">
                      Apexcharts
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
