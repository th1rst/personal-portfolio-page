import React, { useState } from "react";
import Typical from "react-typical";
import { useSpring, animated } from "react-spring";

export default function Home() {
  const { opacity } = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <animated.div style={{ opacity }}>
      <div className="w-screen h-screen bg-black">
        <div className="my-auto text-center">
          <Typical
            className="text-white font-dancing text-6xl"
            steps={["Hi.", 2000, "I'm Marco.", 1300]}
            loop={1}
            wrapper="p"
          />
        </div>
      </div>
    </animated.div>
  );
}
