import React from "react";
import PortfolioPage from "../../components/Projects/CustomProjects/PortfolioPage";
import DefaultProject from "../../components/Projects/DefaultProject";
import { SiTailwindcss } from "react-icons/si";
import { FaReact, FaCss3Alt } from "react-icons/fa";

//Pictures
import mmaLogin from "../pictures/MakeMeAwesome/mmaLogin.png";
import mmaOverview from "../pictures/MakeMeAwesome/mmaOverview.png";
import ksrOverview from "../pictures/KaufmannsRecipeSite/ksrOverview.png";
import ksrBack from "../pictures/KaufmannsRecipeSite/ksrBack.png";

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
    projectShortDescription={"A personal activity and productivity tracker."}
    aboutProjectText={
      <div>
        A while ago, a friend of mine asked me if I could build a "personal
        improvement" Webapp for him where he could track his activities and see
        where he spends his time on (productive tasks vs. unproductive tasks) so
        he could improve himself and his time management. It sounded boring at
        first, but the more I thought about it, the more I liked the idea
        because it's more "interactive" than the Sites I've built before... and
        since I was looking for a new project idea anyways, I thought I'd go for
        it. <br /> <br />
        Realistically, the App won't have many users, so learning to build a
        complete Backend for it would be too much - instead, I used Google
        Firebase Auth and Firestore as a Backend, which, in retrospect, were
        more than enough new technologies to learn at once. For Firebase auth, I
        stuck to a Tutorial by Rwieruch which was super helpful and teached me
        lots of things. While this project took me significantly longer than
        anticipated (because after Covid Lockdowns I started working full time
        again), it was SO much fun and although this wasn't my first React
        project, it finally "clicked" to the point where I could work my way
        through the different Documentations to finish this project and had to
        google a lot less.
      </div>
    }
    features={[
      "User Authentication + Account",
      "Settings (Password reset, change Email)",
      "Customizable 'Quick Activities'",
      "Customizable Profile + Banner Picture",
      "Motivational Random Quote via API",
      "Data Visualization via ApexCharts",
      "Table overview (All Activities) incl. filtering",
      "'Live Activities' (Stopwatch, Counter)",
      "Manually enter activities with Date Picker",
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
            alt="tailwind"
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
    name={"Kaufmanns Recipe Site"}
    imageFront={ksrOverview}
    imageBack={ksrBack}
    githubLink={
      "https://github.com/th1rst/learning/tree/master/Projects/kaufmanns-recipe-site"
    }
    liveVersionLink={
      "https://kochannek.com/portfolio/kaufmanns-rezeptsammlung/"
    }
    hasLoginCredentials={false}
    projectShortDescription={"Over 180 real family recipes."}
    aboutProjectText={
      <div>
        Our family loves to cook - and since I use cooking websites frequently,
        and also use my grandfather's recipes frequently, I thought I'd make the
        best of both worlds and combine the two. <br /> <br />
        Kaufmanns Recipe Site (or "Kaufmanns-Rezeptsammlung" in German) is a
        real Website with my grandfather's collection of ~180 phenomenal recipes
        collected over the last 50 years - some of which were even made by my
        great-great-grandmother. The recipes were once used in a Print-On-Demand
        book that was sold on Amazon KDP and a 237-page PDF version in
        print-ready quality of said book is available to download for free (make
        sure to use Dual Page Layout when reading). Since it's a "real" Website
        including real-world content, everything is written in German.
      </div>
    }
    features={[
      "Over 180 real recipes from my grandfather",
      "Including 237 page Ebook made in Photoshop",
      "'Real' Website (German Content)",
      "11 Recipe Categories",
      "Contentful Database API",
      "Searchable Recipes",
      "Logic set up for X amount of recipes (expandable)",
      "Custom CSS and React-Bootstrap",
      "Social Media Share funtion",
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
            alt="tailwind"
          />
        ),
        subtexts: ["Database API"],
      },
    ]}
  />,
];

export default projectList;
