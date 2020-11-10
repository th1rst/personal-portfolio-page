import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSpring, useTrail, animated } from "react-spring";
import { ThemeContext } from "../components/DarkMode/ThemeProvider";
import { Text } from "../components/Multilanguage/Text";
import { BookList } from "../assets/data/BookList";
import { SkillList } from "../assets/data/SkillList";
import SpringContainer from "../components/SpringContainer";

//SVGs + PNGs
import { BookSVG } from "../assets/svg/components/BookSVG.js";
import { CodeSVG } from "../assets/svg/components/CodeSVG.js";
import { DogSVG } from "../assets/svg/components/DogSVG";
import { ProfilePicture } from "../assets/pictures/ProfilePicture";

export default function About() {
  const { theme } = React.useContext(ThemeContext);
  const [visibleText, setvisibleText] = useState("coding");
  const [hidden, setHidden] = useState(true);
  const { opacity } = useSpring({
    config: { duration: 1000 },
    opacity: hidden ? 0 : 1,
  });

  useEffect(() => {
    setHidden(false);
  }, [setHidden]);

  const trailItems = [
    <div>
      {/* ----- ITEM 1 -----*/}
      <div className="flex flex-row justify-start items-center">
        <div className="w-10 h-1 inline-flex bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-lg" />
        <p className="text-2xl font-bold uppercase ml-10 inline-flex">
          <Text tid="whoIamHeading" />
        </p>
      </div>
      <div className="mt-6 flex flex-col md:flex-row items-center mb-12">
        <div className="justify-self-start self-center h-40 w-full flex items-center justify-center">
          <ProfilePicture />
        </div>
        <p className="font-semibold tracking-tight leading-7 text-justify md:p-4 md:ml-10 inline-flex">
          <Text tid="whoIamText1" />
          <br />
          <Text tid="whoIamText2" />
          <br />
        </p>
      </div>
    </div>,
    <div>
      {/* ----- ITEM 2 -----*/}
      <div className="flex flex-row justify-start items-center">
        <div className="w-10 h-1 inline-flex bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-lg" />
        <p className="text-2xl font-bold uppercase ml-10 inline-flex">
          <Text tid="passions" />
        </p>
      </div>
      <div className="mt-6 mb-12 w-full flex flex-row border-2 border-gray-800 rounded-lg shadow-xl">
        <div className="flex flex-col w-full">
          <div className="flex flex-col md:flex-row flex-wrap w-full justify-around items-center font-bold tracking-wide text-2xl uppercase">
            <div
              className="h-40 w-40 m-4 flex flex-col justify-center items-center cursor-pointer"
              onMouseEnter={() => setvisibleText("coding")}
            >
              <CodeSVG />
              <Text tid="codingHeading" />
            </div>

            <div className="md:hidden mb-8">
              {/* MOBILE VERSION, HIDDEN >md BREAKPOINT*/}
              <p className="px-2 font-semibold font-normal text-base normal-case text-sm text-justify">
                <Text tid="codingText1" />
                <br />
                <Text tid="codingText2" />
              </p>
            </div>

            <div
              className="h-40 w-40 m-4 flex flex-col justify-center items-center cursor-pointer"
              onMouseEnter={() => setvisibleText("writing")}
            >
              <BookSVG />
              <Text tid="writingHeading" />
            </div>
            <div className="md:hidden mb-8">
              {/* MOBILE VERSION, HIDDEN >md BREAKPOINT*/}
              {BookList.map((book) => (
                <>
                  <div className="w-auto h-auto">
                    <p
                      className={`${
                        theme === "dark" ? "text-white" : "text-black"
                      } text-base `}
                    >
                      {book.role}
                    </p>
                    <div className="w-full h-full px-4 flex flex row items-center justify-center">
                      <img
                        className="transition duration-200 ease-in-out"
                        src={book.coverURL}
                        alt={book.name}
                      />
                    </div>
                  </div>
                  <Link to={`/previewer/${book.shortName}`}>
                    <div className="mt-2 mb-10 flex flex-row items-center justify-center mx-auto bg-blue-400 h-10 w-32 rounded-xl p-4 text-white">
                      <p className="font-semibold text-base tracking-wide">
                        <Text tid="readNow" />
                      </p>
                    </div>
                  </Link>
                </>
              ))}
            </div>
            <div
              className="h-40 w-40 m-4 flex flex-col justify-center items-center cursor-pointer"
              onMouseEnter={() => setvisibleText("dogs")}
            >
              <DogSVG />
              <Text tid="dogsHeading" />
            </div>
            <div className="md:hidden mb-8">
              {/* MOBILE VERSION, HIDDEN >md BREAKPOINT*/}
              <p className="px-2 font-semibold font-normal text-base normal-case text-sm text-justify">
                <Text tid="dogsText1" />
                <br />
                <Text tid="dogsText2" />{" "}
                <a
                  className="underline"
                  href="https://kochannek.com/teddy.jpg"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Teddy
                </a>
                <Text tid="dogsText3" />
                <br />
                <Text tid="dogsText4" />
                <br />
                <Text tid="dogsText5" />
                <br />
                <br />
                <p className="italic text-center">
                  &quot;
                  <Text tid="dogsText6" />
                  &quot;
                </p>
              </p>
            </div>
          </div>
          <div className="hidden md:flex flex-row w-full px-12 py-4 font-semibold tracking-tight leading-7 text-justify">
            {visibleText === "coding" ? (
              <>
                <Text tid="codingText1" />
                <br />
                <Text tid="codingText2" />
              </>
            ) : null}

            {visibleText === "writing" ? (
              <div className="w-full h-full">
                <SpringContainer />
              </div>
            ) : null}

            {visibleText === "dogs" ? (
              <p className="px-2 font-semibold font-normal text-base normal-case text-sm text-justify">
                <Text tid="dogsText1" />
                <br />
                <Text tid="dogsText2" />{" "}
                <a
                  className="underline"
                  href="https://kochannek.com/teddy.jpg"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Teddy
                </a>
                <Text tid="dogsText3" />
                <br />
                <Text tid="dogsText4" />
                <br />
                <Text tid="dogsText5" />
                <br />
                <br />
                <p className="italic text-center">
                  &quot;
                  <Text tid="dogsText6" />
                  &quot;
                </p>
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </div>,
    <div>
      {/* ----- ITEM 3 -----*/}
      <div className="flex flex-row justify-start items-center">
        <div className="w-10 h-1 inline-flex bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-lg" />
        <p className="text-2xl font-bold uppercase ml-10 inline-flex">Skills</p>
      </div>
      <div className="text-white font-bold uppercase mt-6 w-full border-2 border-gray-800 rounded-lg flex flex-row flex-wrap justify-around items-center mb-12 shadow-xl">
        {SkillList.map((skill) => (
          <div className="m-4 h-32 w-32 border-2 border-gray-800 bg-gray-900 rounded-full flex flex-col justify-center items-center">
            {skill.logo}
            <p className="tracking-wider text-sm uppercase">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>,
  ];

  const trail = useTrail(trailItems.length, { opacity: hidden ? 0 : 1 });

  return (
    <div
      className={`${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      }
    w-screen min-h-screen`}
    >
      <div className="w-full h-auto flex justify-center">
        <div className="p-12 w-full flex flex-col">
          {!hidden ? (
            <animated.div style={{ opacity }}>
              <ul>
                {trail.map(({ opacity }, i) => {
                  return (
                    <animated.li style={{ opacity }} key={Math.random() * 1000}>
                      {trailItems[i]}
                    </animated.li>
                  );
                })}
              </ul>
            </animated.div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
