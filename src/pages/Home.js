import React from "react";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useSpring, animated } from "react-spring";
import ParticleBackground from "../components/ParticleBackground";
import ParticleBackgroundMobile from "../components/ParticleBackgroundMobile";
import useWindowDimensions from "../components/hooks/getWindowDimensions";

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
              <p className="font-dancing text-6xl"> I'm Marco.</p>
            </div>

            <div className="mt-2 self-center">
              <p className="text-xl text-gray-300 font-serif font-semibold tracking-wider uppercase">
                Frontend Web Developer
              </p>
              <p className="text-lg font-semibold text-gray-600 text-justify">
                based in Hessen, Germany.
              </p>
            </div>

            <div className="mt-8 px-4 text-lg font-semibold tracking-wider text-blue-400 text-center">
              A passionate nerd who creates user-centric
              <br />
              and accessible digital experiences.
              <br />I also love React. And dogs.
            </div>
            <Link to="/projects">
              <button className="mt-20 mx-auto p-4 h-16 w-64 rounded-lg border-2 border-white flex flex-row items-center justify-center pointer-events-auto cursor-pointer hover:bg-gray-900">
                <p className="text-sm text-center font-semibold uppercase tracking-tight">
                  Take a look at my work
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
