import React, { useState, useEffect } from "react";
import { useSpring, useTrail, animated } from "react-spring";
import projectList from "../assets/data/ProjectList";
import { Text } from "../components/Multilanguage/Text";
import { ThemeContext } from "../components/DarkMode/ThemeProvider";

const projects = projectList;

export default function Projects() {
  const { theme } = React.useContext(ThemeContext);
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
    <div
      className={`${
        theme === "dark" ? "bg-black" : "bg-white"
      } w-full min-h-screen`}
    >
      <h1
        className={`${
          theme === "dark" ? "text-blue-400" : "text-blue-600"
        } pt-4 text-3xl font-semibold uppercase text-white text-center tracking-wider`}
      >
        <Text tid="projectsHeading" />
      </h1>
      <h1
        className={`${
          theme === "dark" ? "text-white" : "text-black"
        } text-xs font-semibold mb-12 uppercase text-center`}
      >
        <Text tid="projectsSubheading" />
      </h1>

      {/* PROJECTS CONTAINER */}
      <div className="p-1 md:p-4 flex flex-col">
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
