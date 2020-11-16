import React from "react";
import Particles from "react-tsparticles";
import codeSVG from "../assets/svg/raw/code.svg"
import { ThemeContext } from "../components/DarkMode/ThemeProvider"

export default function ParticleBackground() {
  const { theme } = React.useContext(ThemeContext);
  
  return (
    <>
      <Particles
        id="tsparticles"
        className="absolute w-full min-h-screen h-full"
        options={{
          detectRetina: false,
          fpsLimit: 30,
          interactivity: {
            detectsOn: "canvas",
            events: {
              onClick: {
                enable: false,
                mode: "push"
              },
              onDiv: {
                elementId: "repulse-div",
                enable: false,
                mode: "repulse"
              },
              onHover: {
                enable: false,
                mode: "bubble",
                parallax: {
                  enable: false,
                  force: 2,
                  smooth: 10
                }
              },
              resize: true
            },
            modes: {
              bubble: {
                distance: 60,
                duration: 2,
                opacity: 8,
                size: 6,
                speed: 3
              },
              connect: {
                distance: 80,
                lineLinked: {
                  opacity: 0.7
                },
                radius: 60
              },
              grab: {
                distance: 400,
                lineLinked: {
                  opacity: 1
                }
              },
              push: {
                quantity: 4
              },
              remove: {
                quantity: 2
              },
              repulse: {
                distance: 200,
                duration: 0.4
              },
              slow: {
                active: false,
                radius: 0,
                factor: 1
              }
            }
          },
          particles: {
            color: {
              value: ["#351CAB", "#621A61"]
            },
            lineLinked: {
              blink: false,
              color: "random",
              consent: false,
              distance: 25,
              enable: true,
              opacity: 2,
              width: 1
            },
            move: {
              attract: {
                enable: false,
                rotate: {
                  x: 600,
                  y: 1200
                }
              },
              bounce: false,
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 0.5,
              straight: false
            },
            number: {
              density: {
                enable: false,
                area: 2000
              },
              limit: 0,
              value: 200
            },
            opacity: {
              animation: {
                enable: true,
                minimumValue: 0.5,
                speed: 1,
                sync: false
              },
              random: false,
              value: 5
            },
            size: {
              animation: {
                enable: false,
                minimumValue: 0.1,
                speed: 20,
                sync: false
              },
              random: true,
              value: 1
            }
          },
          polygon: {
            draw: {
              enable: false,
              lineColor: "rgba(255,255,255,0.2)",
              lineWidth: 1
            },
            enable: true,
            move: {
              radius: 3
            },
            position: {
              x: 50,
              y: 30
            },
            inlineArrangement: "equidistant",
            scale: 4,
            type: "inline",
            url: codeSVG
          },
          background: {
            color: `${theme === "dark" ? "#000000" : "#ffffff"}`,
            repeat: "no-repeat",
            size: "cover"
          }
        }}
      />
    </>
  );
}
