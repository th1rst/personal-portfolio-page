import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useSpring, animated } from "react-spring";
import ParticleBackground from "../components/ParticleBackground";

export default function Home() {
  const { opacity } = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <animated.div style={{ opacity }}>
      <div className="w-screen min-h-screen">
        <ParticleBackground />
        <div className="absolute w-full h-screen flex justify-center pointer-events-none">
          <div className="mt-64 mx-auto pointer-events-none">
            <p className="text-white text-6xl">Hi,</p>
            <p className="text-white font-dancing text-6xl">I'm Marco</p>
            <p className="text-white text-3xl">Frontend Web Developer</p>
          </div>
        </div>
        <button className="h-16 w-56 rounded-xl flex flex-row items-center justify-center bg-gradient-to-r from-blue-600 via-purple-700 to-pink-800">
          <p className="text-white text-center tracking-tight">
            Take a look at my work
          </p>
          <FaLongArrowAltRight size={24} className="ml-2 text-white" />
        </button>
      </div>
    </animated.div>
  );
}
