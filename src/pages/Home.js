import React, { useState } from "react";
import Typical from "react-typical";
import { useSpring, animated } from "react-spring";

export default function Home() {
  const [introFinished, setIntroFinished] = useState(false);

  const { opacity } = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <animated.div style={{ opacity }}>
      <div className="w-screen h-screen bg-black">
        {introFinished ? null : (
          <div className="text-center">
            <Typical
              className="text-white text-3xl"
              steps={[
                "Hi there!",
                2000,
                "I'm Marco.",
                1000,
                "Web Developer",
                1000,
              ]}
              loop={1}
              wrapper="p"
            />
            <button
              className="text-white"
              onClick={() => setIntroFinished(true)}
            >
              CLICKME
            </button>
          </div>
        )}
      </div>
    </animated.div>
  );
}
