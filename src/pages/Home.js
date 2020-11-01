import React from "react";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useSpring, animated } from "react-spring";
import ParticleBackground from "../components/ParticleBackground";
import ParticleBackgroundMobile from "../components/ParticleBackgroundMobile";
import useWindowDimensions from "../components/hooks/getWindowDimensions";
import { Text } from "../components/Multilanguage/Text";

export default function Home() {
  const { opacity } = useSpring({ opacity: 1, from: { opacity: 0 } });
  const { width } = useWindowDimensions();

  return (
    <animated.div style={{ opacity }}>
      <div className="w-screen min-h-screen">
        {width >= 800 ? <ParticleBackground /> : <ParticleBackgroundMobile />}

        <div className="absolute w-full h-screen flex justify-center pointer-events-none">
          <div className="px-8 md:px-0 mt-32 md:mt-64 my-auto mx-auto text-white flex flex-col pointer-events-none">
            <div className="self-center">
              <p className="font-semibold text-5xl leading-none">Hi, </p>
              <p className="font-dancing text-6xl">
                <Text tid="homeName" />
              </p>
            </div>

            <div className="mt-2 self-center">
              <p className="text-xl text-gray-300 font-serif font-semibold tracking-wider uppercase">
                Frontend Web Developer
              </p>
              <p className="text-lg font-semibold text-gray-600 text-justify">
                <Text tid="homeFrom" />
              </p>
            </div>

            <div className="mt-8 px-4 text-lg font-semibold tracking-wider text-blue-400 text-center">
              <Text tid="homeAbout1" />
              <br />
              <Text tid="homeAbout2" />
              <br />
              <Text tid="homeAbout3" />
            </div>
            <Link to="/projects">
              <button className="mt-20 mx-auto p-4 h-16 w-64 rounded-lg border-2 border-white flex flex-row items-center justify-center pointer-events-auto cursor-pointer hover:bg-gray-900">
                <p className="text-sm text-center font-semibold uppercase tracking-tight">
                  <Text tid="homeButtonText" />
                </p>
                <FaLongArrowAltRight size={24} className="ml-2 text-white" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </animated.div>
  );
}
