import React, { useState, useEffect } from "react";
import { useSpring, useTrail, animated } from "react-spring";
import projectList from "../assets/data/ProjectList";

const projects = projectList;

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
    <div className="w-full min-h-screen bg-black">
      <h1 className="pt-4 text-3xl text-blue-400 font-semibold uppercase text-white text-center tracking-wider">
        Projects
      </h1>
      <h1 className="text-xs mb-12 uppercase text-white text-center">
        (newest to oldest)
      </h1>

      {/* PROJECTS CONTAINER */}
      <div className="m-1 p-1 md:p-4 md:m-4 flex flex-col">
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
