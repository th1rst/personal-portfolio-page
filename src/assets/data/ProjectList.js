import React from "react";
import PortfolioPage from "../../components/Projects/CustomProjects/PortfolioPage";
import DefaultProject from "../../components/Projects/DefaultProject";
import { Text } from "../../components/Multilanguage/Text";

//Icons
import { SiTailwindcss } from "react-icons/si";
import { FaReact, FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";

//Pictures
import mmaLogin from "../pictures/MakeMeAwesome/mmaLogin.png";
import mmaOverview from "../pictures/MakeMeAwesome/mmaOverview.png";
import ksrOverview from "../pictures/KaufmannsRecipeSite/ksrOverview.png";
import ksrBack from "../pictures/KaufmannsRecipeSite/ksrBack.png";
import ltFront from "../pictures/LambertTravel/ltFront.png";
import ltBack from "../pictures/LambertTravel/ltBack.png";
import gcFront from "../pictures/GiphyClone/gcFront.png";
import gcBack from "../pictures/GiphyClone/gcBack.png";
import spFront from "../pictures/StartPage/spFront.png";
import spBack from "../pictures/StartPage/spBack.png";
import ppFront from "../pictures/PizzaPlace/ppFront.png";
import ppBack from "../pictures/PizzaPlace/ppBack.png";
import firebaseLogo from "../pictures/firebaseLogo.png";
import nodeLogo from "../pictures/nodelogo.png";
import expressLogo from "../pictures/expresslogo.png";
import arbOverview from "../pictures/Arbitunity/arbOverview.png";
import arbServerMap from "../pictures/Arbitunity/arbServerMap.png";

const projectList = [
  <DefaultProject
  name={"Make Me Awesome"}
  imageFront={mmaOverview}
  imageBack={mmaLogin}
  githubLink={"https://github.com/th1rst/make-me-awesome"}
  liveVersionLink={"https://kochannek.com/portfolio/make-me-awesome/"}
  hasLoginCredentials={true}
  userLogin={"john@doe.com"}
  passwordLogin={"testuser123"}
  projectShortDescription={<Text tid="mmaSubheading" />}
  aboutProjectText={
    <div>
      <Text tid="aboutMma1" />
      <br /> <br />
      <Text tid="aboutMma2" />
      <br /> <br />
      <Text tid="aboutMma3" />{" "}
      <a
        className="text-blue-400 underline"
        href="https://kochannek.com/portfolio/make-me-awesome-ionic"
        rel="noopener noreferrer"
      >
        App-Version
      </a>{" "}
      <Text tid="aboutMma4" />
    </div>
  }
  features={[
    <Text tid="mmaFeature1" />,
    <Text tid="mmaFeature2" />,
    <Text tid="mmaFeature3" />,
    <Text tid="mmaFeature4" />,
    <Text tid="mmaFeature5" />,
    <Text tid="mmaFeature6" />,
    <Text tid="mmaFeature7" />,
    <Text tid="mmaFeature8" />,
    <Text tid="mmaFeature9" />,
  ]}
  techStack={[
    {
      name: "React 17",
      logo: <FaReact className="w-12 h-12" style={{ color: "#00b7ff" }} />,
      subtexts: ["Hooks", "React Router", "Context API"],
    },
    {
      name: "Tailwind CSS",
      logo: (
        <SiTailwindcss className="w-12 h-12" style={{ color: "#38b2ac" }} />
      ),
      subtexts: ["Windmill UI", "Rainbow Components"],
    },
    {
      name: "Firebase",
      logo: <img className="w-12 h-12" src={firebaseLogo} alt="firebase" />,
      subtexts: ["User Authentication", "Firestore"],
    },
    {
      name: "ApexCharts",
      logo: (
        <img
          className="w-16 h-12"
          src="https://camo.githubusercontent.com/234f6fe1b4fdef71cd8e1f5fbad043093d023dba/68747470733a2f2f617065786368617274732e636f6d2f6d656469612f72656163742d617065786368617274732e706e67"
          alt="apexcharts"
        />
      ),
      subtexts: ["Custom Sorting Algorithm"],
    },
  ]}
/>,
  
  <DefaultProject
    name={"Arbitunity"}
    imageFront={arbServerMap}
    imageBack={arbOverview}
    githubLink={"https://github.com/th1rst/arbitunity"}
    liveVersionLink={"https://kochannek.com/portfolio/arbitunity/"}
    hasLoginCredentials={false}
    projectShortDescription={<Text tid="arbSubheading" />}
    aboutProjectText={
      <div>
        <Text tid="aboutArb1" />
        <br /> <br />
        <Text tid="aboutArb2" />
        <br />
        <Text tid="aboutArb3" />
        <br /> <br />
        <Text tid="aboutArb4" />
        <br />
        <Text tid="aboutArb5" />
        <br /> <br />
        <Text tid="aboutArb6" />
      </div>
    }
    features={[
      <Text tid="arbFeature1" />,
      <Text tid="arbFeature2" />,
      <Text tid="arbFeature3" />,
      <Text tid="arbFeature4" />,
      <Text tid="arbFeature5" />,
      <Text tid="arbFeature6" />,
    ]}
    techStack={[
      {
        name: "React 17",
        logo: <FaReact className="w-12 h-12" style={{ color: "#00b7ff" }} />,
        subtexts: ["Hooks"],
      },
      {
        name: "Tailwind CSS",
        logo: (
          <SiTailwindcss className="w-12 h-12" style={{ color: "#38b2ac" }} />
        ),
        subtexts: ["Tailwind 2.0"],
      },
      {
        name: "Material UI",
        logo: (
          <img
            className="w-20 h-12"
            src="https://camo.githubusercontent.com/58423e406b227112756822122631d9eca5ab83334a6f0d8f2a6305b086815747/68747470733a2f2f6d6174657269616c2d75692e636f6d2f7374617469632f6c6f676f2e737667"
            alt="ExpressJS"
          />
        ),
        subtexts: ["Components", "Transitions"],
      },
      {
        name: "NodeJS",
        logo: <img className="w-10 h-12" src={nodeLogo} alt="NodeJS" />,
        subtexts: ["Proxy Server on VPS"],
      },
      {
        name: "Express",
        logo: <img className="w-22 h-12" src={expressLogo} alt="ExpressJS" />,
      },
    ]}
  />,

  <PortfolioPage />,

  <DefaultProject
    name={<Text tid="krsHeading" />}
    imageFront={ksrOverview}
    imageBack={ksrBack}
    githubLink={"https://github.com/th1rst/kaufmanns-recipe-site"}
    liveVersionLink={
      "https://kochannek.com/portfolio/kaufmanns-rezeptsammlung/"
    }
    hasLoginCredentials={false}
    projectShortDescription={<Text tid="krsSubheading" />}
    aboutProjectText={
      <div>
        <Text tid="aboutKrs1" />
        <br /> <br />
        <Text tid="aboutKrs2" />
      </div>
    }
    features={[
      <Text tid="krsFeature1" />,
      <Text tid="krsFeature2" />,
      <Text tid="krsFeature3" />,
      <Text tid="krsFeature4" />,
      <Text tid="krsFeature5" />,
      <Text tid="krsFeature6" />,
      <Text tid="krsFeature7" />,
      <Text tid="krsFeature8" />,
      <Text tid="krsFeature9" />,
    ]}
    techStack={[
      {
        name: "React 16",
        logo: <FaReact className="w-12 h-12" style={{ color: "#00b7ff" }} />,
        subtexts: ["React Router", "Context API"],
      },
      {
        name: "CSS 3",
        logo: <FaCss3Alt className="w-12 h-12" style={{ color: "#258ec8" }} />,
        subtexts: ["Custom CSS", "React-Bootstrap"],
      },
      {
        name: "Contentful",
        logo: (
          <img
            className="w-12 h-12"
            src="https://avatars1.githubusercontent.com/u/472182?s=280&v=4"
            alt="contentful"
          />
        ),
        subtexts: ["Database API"],
      },
    ]}
  />,
  <DefaultProject
    name={"Lambert Travel"}
    imageFront={ltFront}
    imageBack={ltBack}
    githubLink={
      "https://github.com/th1rst/learning/tree/master/Projects/lamberttravel"
    }
    liveVersionLink={"https://kochannek.com/portfolio/lamberttravel/"}
    hasLoginCredentials={false}
    projectShortDescription={<Text tid="ltSubheading" />}
    aboutProjectText={
      <div>
        <Text tid="aboutLt1" />
        <br />
        <Text tid="aboutLt2" />
        <br />
        <Text tid="aboutLt3" />
        <br />
        <br />
        <Text tid="aboutLt4" />
      </div>
    }
    features={[
      <Text tid="ltFeature1" />,
      <Text tid="ltFeature2" />,
      <Text tid="ltFeature3" />,
    ]}
    techStack={[
      {
        name: "React 16",
        logo: <FaReact className="w-12 h-12" style={{ color: "#00b7ff" }} />,
        subtexts: ["React Router", "Context API"],
      },
      {
        name: "CSS 3",
        logo: <FaCss3Alt className="w-12 h-12" style={{ color: "#258ec8" }} />,
        subtexts: ["Custom CSS"],
      },
      {
        name: "Contentful",
        logo: (
          <img
            className="w-12 h-12"
            src="https://avatars1.githubusercontent.com/u/472182?s=280&v=4"
            alt="contentful"
          />
        ),
        subtexts: ["Database API"],
      },
    ]}
  />,
  <DefaultProject
    name={"Giphyclone"}
    imageFront={gcBack}
    imageBack={gcFront}
    githubLink={
      "https://github.com/th1rst/learning/tree/master/Projects/giphyclone"
    }
    liveVersionLink={"https://kochannek.com/portfolio/giphyclone/"}
    hasLoginCredentials={false}
    projectShortDescription={<Text tid="gcSubheading" />}
    aboutProjectText={
      <div>
        <Text tid="aboutGc1" />
        <br />
        <Text tid="aboutGc2" />
        <br />
        <br />
        <Text tid="aboutGc3" />
      </div>
    }
    features={[
      <Text tid="gcFeature1" />,
      <Text tid="gcFeature2" />,
      <Text tid="gcFeature3" />,
    ]}
    techStack={[
      {
        name: "React 16",
        logo: <FaReact className="w-12 h-12" style={{ color: "#00b7ff" }} />,
        subtexts: ["React Router", "Context API"],
      },
      {
        name: "CSS 3",
        logo: <FaCss3Alt className="w-12 h-12" style={{ color: "#258ec8" }} />,
      },
    ]}
  />,
  <DefaultProject
    name={"Start Page"}
    imageFront={spFront}
    imageBack={spBack}
    githubLink={
      "https://github.com/th1rst/learning/tree/master/Projects/StartPage"
    }
    liveVersionLink={"https://kochannek.com/portfolio/startpage/"}
    hasLoginCredentials={false}
    projectShortDescription={<Text tid="spSubheading" />}
    aboutProjectText={
      <div>
        <Text tid="aboutSp1" />
        <br />
        <br />
        <div className="text-center">
          <Text tid="aboutSp2" />
          <br />
          <br />
          <ul>
            <li>
              - <Text tid="spListItem1" />
            </li>
            <li>
              - <Text tid="spListItem2" />
            </li>
            <li>
              - <Text tid="spListItem3" />
            </li>
            <li>
              - <Text tid="spListItem4" />
            </li>
            <li>
              - <Text tid="spListItem5" />
            </li>
            <li>
              - <Text tid="spListItem6" />
            </li>
          </ul>
        </div>
        <br />
        <br />
        <Text tid="aboutSp3" />
        <br />
        <Text tid="aboutSp4" />
        <br />
        <br />
        <Text tid="aboutSp5" />
        <br />
        <br />
        <Text tid="aboutSp6" />
      </div>
    }
    features={[
      <Text tid="spFeature1" />,
      <Text tid="spFeature2" />,
      <Text tid="spFeature3" />,
      <Text tid="spFeature4" />,
      <Text tid="spFeature5" />,
      <Text tid="spFeature6" />,
    ]}
    techStack={[
      {
        name: "HTML 5",
        logo: <FaHtml5 className="w-12 h-12" style={{ color: "#dc4d25" }} />,
      },
      {
        name: "JavaScript",
        logo: (
          <DiJavascript className="w-12 h-12" style={{ color: "#ddb440" }} />
        ),
      },
      {
        name: "CSS 3",
        logo: <FaCss3Alt className="w-12 h-12" style={{ color: "#258ec8" }} />,
        subtexts: ["Custom CSS"],
      },
    ]}
  />,
  <DefaultProject
    name={<Text tid="jppHeading" />}
    imageFront={ppBack}
    imageBack={ppFront}
    githubLink={
      "https://github.com/th1rst/learning/tree/master/Projects/SampleRestaurant"
    }
    liveVersionLink={"https://kochannek.com/portfolio/restaurant/"}
    hasLoginCredentials={false}
    projectShortDescription={<Text tid="jppSubheading" />}
    aboutProjectText={
      <div>
        <Text tid="aboutJpp1" />
        <br />
        <br />
        <Text tid="aboutJpp2" />
        <br />
        <br />
        <Text tid="aboutJpp3" />
      </div>
    }
    features={[
      <Text tid="jppFeature1" />,
      <Text tid="jppFeature2" />,
      <Text tid="jppFeature3" />,
    ]}
    techStack={[
      {
        name: "HTML 5",
        logo: <FaHtml5 className="w-12 h-12" style={{ color: "#dc4d25" }} />,
      },
      {
        name: "CSS 3",
        logo: <FaCss3Alt className="w-12 h-12" style={{ color: "#258ec8" }} />,
        subtexts: ["Custom CSS"],
      },
    ]}
  />,
];

export default projectList;
