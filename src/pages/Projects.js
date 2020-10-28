import React, { useState, useEffect } from "react";
import MakeMeAwesome from "../components/Projects.js/MakeMeAwesome";
import { useSpring, useTrail, animated } from "react-spring";

const projects = [
  <MakeMeAwesome />,
  <MakeMeAwesome />,
  <MakeMeAwesome />,
  <MakeMeAwesome />,
];

export default function Projects() {
  const [hidden, setHidden] = useState(true);
  const { opacity } = useSpring({
    config: { duration: 1000 },
    opacity: hidden ? 0 : 1,
  });

  const trail = useTrail(projects.length, { opacity: hidden ? 0 : 1 });

  useEffect(() => {
    setHidden(false);
  }, [setHidden]);

  return (
    <div className="w-full h-full bg-black">
      <h1 className="pt-4 text-3xl font-semibold uppercase text-white text-center tracking-wider">
        Projects
      </h1>
      <h1 className="text-xs uppercase text-white text-center">
        (newest to oldest)
      </h1>

      {/* PROJECTS CONTAINER */}
      <div className="m-4 p-4 flex flex-col">
        {!hidden ? (
          <animated.div style={{ opacity }}>
            <ul>
              {trail.map(({ opacity }, i) => {
                return (
                  <animated.li style={{ opacity }} key={Math.random() * 1000}>
                    {projects[i]}
                  </animated.li>
                );
              })}
            </ul>
          </animated.div>
        ) : null}
      </div>
    </div>
  );
}
