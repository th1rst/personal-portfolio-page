import React from "react";
import { useSpring, animated } from "react-spring";
import ParticleBackground from "../components/ParticleBackground";
import ParticleBackgroundMobile from "../components/ParticleBackgroundMobile";
import useWindowDimensions from "../components/hooks/getWindowDimensions";
import { Text } from "../components/Multilanguage/Text";
import { ThemeContext } from "../components/DarkMode/ThemeProvider";
import { CTAbutton } from "../components/CTAbutton";

export default function Home() {
  const { opacity } = useSpring({ opacity: 1, from: { opacity: 0 } });
  const { width } = useWindowDimensions();
  const { theme } = React.useContext(ThemeContext);

  return (
    <animated.div style={{ opacity }}>
      <div className="w-full min-h-screen">
        {width >= 800 ? <ParticleBackground /> : <ParticleBackgroundMobile />}

        <div className="absolute w-full h-screen flex justify-center pointer-events-none">
          <div
            className={`${
              theme === "dark" ? "text-white" : "text-black"
            } px-8 md:px-0 mt-32 md:mt-64 mx-auto flex flex-col pointer-events-none`}
          >
            <div className="self-center">
              <p className="font-semibold text-5xl leading-none">Hi, </p>
              <p className="font-dancing text-6xl">
                <Text tid="homeName" />
              </p>
            </div>

            <div className="mt-2 self-center">
              <p
                className={`${
                  theme === "dark" ? "text-gray-300" : "text-gray-800"
                } text-xl font-serif font-semibold tracking-wider uppercase`}
              >
                Frontend Web Developer
              </p>
              <p className="text-gray-600 text-lg font-semibold text-justify">
                <Text tid="homeFrom" />
              </p>
            </div>

            <div
              className={`${
                theme === "dark" ? "text-blue-400" : "text-blue-600"
              } mt-8 px-4 text-lg font-semibold tracking-wider text-center`}
            >
              <Text tid="homeAbout1" />
              <br />
              <Text tid="homeAbout2" />
              <br />
              <Text tid="homeAbout3" />
            </div>
            <CTAbutton />
          </div>
        </div>
      </div>
    </animated.div>
  );
}
