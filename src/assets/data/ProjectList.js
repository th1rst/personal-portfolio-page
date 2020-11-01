import React from "react";
import PortfolioPage from "../../components/Projects/CustomProjects/PortfolioPage";
import DefaultProject from "../../components/Projects/DefaultProject";
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
import { Text } from "../../components/Multilanguage/Text"

const projectList = [
  <PortfolioPage />,

  <DefaultProject
    name={"Make Me Awesome"}
    imageFront={mmaOverview}
    imageBack={mmaLogin}
    githubLink={
      "https://github.com/th1rst/learning/tree/master/Projects/make-me-awesome"
    }
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
      <Text tid="mmaFeature9" />
    ]}
    techStack={[
      {
        name: "React 16",
        logo: <FaReact className="w-12 h-12" style={{ color: "#00b7ff" }} />,
        subtexts: ["React Router", "Context API"],
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
        logo: (
          <img
            className="w-12 h-12"
            src="https://png2.cleanpng.com/sh/a9d2c3dc4d3936284b440d384d94c2f7/L0KzQYm3VMI3N5RBfZH0aYP2gLBuTfZqepZneeVuLXPvf8brTf1me6Rmf9t3Zz3qf7FujPUubJZ7fd54cHX1g376jBZ1f5J3RadqZUHnSbfrgcQ6PGEARqkCMEm0SYmAUcUzPGg6SKo9NUa6RIK1kP5o/kisspng-firebase-cloud-messaging-google-developers-softwar-5ae1d9fda49409.7709198715247508456741.png"
            alt="firebase"
          />
        ),
        subtexts: ["Firebase Auth", "Firestore"],
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
    name={<Text tid="krsHeading" />}
    imageFront={ksrOverview}
    imageBack={ksrBack}
    githubLink={
      "https://github.com/th1rst/learning/tree/master/Projects/kaufmanns-recipe-site"
    }
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
      <Text tid="krsFeature9" />
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
        subtexts: ["CSS 3", "Custom CSS", "React-Bootstrap"],
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
    projectShortDescription={"A Mockup Travel Agency Site in React."}
    aboutProjectText={
      <div>
        My second attempt of using React. A mockup Travel agency Website that
        displays backend data from Contentful and lets the user filter through
        it. For each section (Double Economy, Beachfront Luxurious etc.) there
        is a Hero-component.
        <br />
        The pictures are copyright-free pictures from Unsplash and may or may
        not be accurate representations of their categories and/or be related.
        <br />
        The whole Project has been inspired by "Coding Addict"'s Youtube video,
        though I only got inspired by the Layout - everything else is built from
        scratch. In the end, I wanted to learn something and not just copy his
        code (which is most likely significantly more elegant than mine).
        <br />
        <br />
        Note: I did not "beautify" the Code after months of gaining more
        knowledge (after all, I want to document my improvements), so the code
        quality is not up-to-date.
      </div>
    }
    features={[
      "Searchable Rooms (filtering)",
      "One 'Single Room' Component that accepts props (expandable)",
      "Realistic Looking Design",
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
    projectShortDescription={"A very simple Giphy Clone using their API."}
    aboutProjectText={
      <div>
        My first React Project that I built for training purposes.
        <br />
        By default "Trending" GIF's are pulled from the Giphy API and get
        displayed in a Flexbox grid. There's a search bar on top where users can
        input they Keyword and the content on the page gets re-rendered
        accordingly. It's a simple Site but it works perfectly.
        <br />
        <br />
        Note: I did not "beautify" the Code after months of gaining more
        knowledge (after all, I want to document my improvements), so the code
        quality is not up-to-date.
      </div>
    }
    features={[
      "Searchable Giphy API",
      "Fully Responsive using Flexbox",
      "Modern Design",
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
    projectShortDescription={
      "A customizable Startpage using Privacy-Friendly alternatives."
    }
    aboutProjectText={
      <div>
        Since I don't like the privacy-invading nature of Google and other big
        tech companies alike, I liked the idea of making a privacy Startpage
        which provides access to great open source alternatives without the need
        to look for them. Just add them to the Startpage and that's it.
        <br />
        <br />
        <div className="text-center">
          Available "Widgets":
          <br />
          <br />
          <ul>
            <li>- DuckDuckGo Search Bar</li>
            <li>- Openstreetmap (Openroute) Directions</li>
            <li>- WeatherWidget.io</li>
            <li>- Euronews WorldNews Widget</li>
            <li>- Invidious Search Bar</li>
            <li>- DeepL Translate Link</li>
          </ul>
        </div>
        <br />
        <br />
        Using Gridstack.js, every item (Search Bar, News Widget etc.) can be
        dragged, dropped and resized according to preference. The Grid can be
        locked and the Layout is stored in LocalStorage.
        <br />
        The Site is not mobile-friendly on purpose as I saw no need for
        something like a Start Page on mobile.
        <br />
        <br />
        Even in hindsight, this project was a cool idea and a lot of fun. Still,
        after adding countless event listeners and onclick functions, I quickly
        saw the need for something like React.
        <br />
        <br />
        Note: I did not "beautify" the Code after months of gaining more
        knowledge (after all, I want to document my improvements), so the code
        quality is not up-to-date.
      </div>
    }
    features={[
      "Privacy-friendly 'Widgets'",
      "Fully customizable",
      "Layout stored in LocalStorage",
      "DuckDuckGo instead of Google Search",
      "OpenStreetMap instead of Google Maps",
      "Invidous Frontend instead of Youtube",
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
    name={"Joey's Pizza Place"}
    imageFront={ppBack}
    imageBack={ppFront}
    githubLink={
      "https://github.com/th1rst/learning/tree/master/Projects/SampleRestaurant"
    }
    liveVersionLink={"https://kochannek.com/portfolio/restaurant/"}
    hasLoginCredentials={false}
    projectShortDescription={"A mockup Single Page Website of a Restaurant"}
    aboutProjectText={
      <div>
        This was my first real project after leaving "Tutorial Hell".
        <br />
        <br />
        A very simple Single Page Website using only HTML5 and CSS3 (and some
        Bootstrap for the Slideshow) that resembles a fictional Pizza and Pasta
        Restaurant called "Joey's".
        <br />
        <br />
        Note: I did not "beautify" the Code after months of gaining more
        knowledge (after all, I want to document my improvements), so the code
        quality is not up-to-date.
      </div>
    }
    features={[
      "Responsive",
      "Image Slideshow",
      "Attention to detail in funny descriptions",
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
