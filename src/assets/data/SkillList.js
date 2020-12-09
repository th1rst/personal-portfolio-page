import React from "react";

import firebaseLogo from "../pictures/firebaseLogo.png";
import { FaHtml5, FaCss3Alt, FaReact, FaGithub } from "react-icons/fa";
import { DiJavascript, DiPhotoshop } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { BsFillBootstrapFill } from "react-icons/bs";
import { IoLogoIonic } from "react-icons/io";

export const SkillList = [
  {
    name: "React",
    logo: <FaReact className="w-16 h-16" style={{ color: "#00b7ff" }} />,
  },
  {
    name: "JavaScript",
    logo: <DiJavascript className="w-16 h-16" style={{ color: "#ddb440" }} />,
  },
  {
    name: "Firebase",
    logo: <img className="w-16 h-16" src={firebaseLogo} alt="firebase" />,
  },
  {
    name: "Ionic",
    logo: <IoLogoIonic className="w-16 h-16" style={{ color: "#367cf7" }} />,
  },
  {
    name: "TailwindCSS",
    logo: <SiTailwindcss className="w-16 h-16" style={{ color: "#38b2ac" }} />,
  },
  {
    name: "Bootstrap",
    logo: (
      <BsFillBootstrapFill className="w-16 h-16" style={{ color: "#563d7c" }} />
    ),
  },
  {
    name: "GitHub",
    logo: <FaGithub className="w-16 h-16" style={{ color: "#ffffff" }} />,
  },
  {
    name: "ApexCharts",
    logo: (
      <img
        className="w-24 h-16"
        src="https://camo.githubusercontent.com/234f6fe1b4fdef71cd8e1f5fbad043093d023dba/68747470733a2f2f617065786368617274732e636f6d2f6d656469612f72656163742d617065786368617274732e706e67"
        alt="apexcharts"
      />
    ),
  },
  {
    name: "Contentful",
    logo: (
      <img
        className="w-16 h-16"
        src="https://avatars1.githubusercontent.com/u/472182?s=280&v=4"
        alt="contentful"
      />
    ),
  },
  {
    name: "Photoshop",
    logo: <DiPhotoshop className="w-16 h-16" style={{ color: "#00b7ff" }} />,
  },
  {
    name: "CSS 3",
    logo: <FaCss3Alt className="w-16 h-16" style={{ color: "#258ec8" }} />,
  },
  {
    name: "HTML 5",
    logo: <FaHtml5 className="w-16 h-16" style={{ color: "#dc4d25" }} />,
  },
];
