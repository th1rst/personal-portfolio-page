import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../components/DarkMode/ThemeProvider";
import firebaseLogo from "../assets/pictures/firebaseLogo.png";
import { BookSVG } from "../assets/svg/components/BookSVG.js";
import { CodeSVG } from "../assets/svg/components/CodeSVG.js";
import SpringContainer from "../components/SpringContainer";
import { FaHtml5, FaCss3Alt, FaReact, FaGithub } from "react-icons/fa";
import { DiJavascript, DiPhotoshop } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { BsFillBootstrapFill } from "react-icons/bs";
import DogSVG from "../assets/svg/components/DogSVG";
import { Text } from "../components/Multilanguage/Text";
import { BookList } from "../assets/data/BookList";

export default function About() {
  const { theme } = React.useContext(ThemeContext);
  const [visibleText, setvisibleText] = useState("coding");

  return (
    <div className="w-screen min-h-screen">
      <div
        className={`${
          theme === "dark" ? "bg-black text-white" : "bg-white text-black"
        } absolute w-full h-auto flex justify-center`}
      >
        <div className="p-12 w-full flex flex-col">
          <div className="flex flex-row justify-start items-center">
            <div className="w-10 h-1 inline-flex bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-lg" />
            <p className="text-2xl font-bold uppercase ml-10 inline-flex">
              <Text tid="whoIam" />
            </p>
          </div>

          <div className="mt-6 flex flex-col md:flex-row items-center mb-12">
            <div className="self-start h-40 w-full flex items-center justify-center">
              <img
                className="h-32 w-32 rounded-full object-cover shadow-xl"
                src="https://kochannek.com/profile.jpg"
                alt="profile"
              />
            </div>
            <p className="font-semibold tracking-tight leading-7 text-justify md:p-4 md:ml-10 inline-flex">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Exercitationem, sit rem natus quos repudiandae saepe, neque a
              culpa eius autem sunt tempore, ab nemo omnis! Blanditiis ipsa modi
              placeat maiores, libero expedita accusantium nostrum delectus
              nesciunt temporibus voluptate, id sapiente saepe obcaecati illum
              incidunt officiis tempore dolorum, quidem dignissimos dolore.
            </p>
          </div>

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
                    Coding Text Coding Text Coding Text Coding Text Coding Text
                    Coding Text Coding Text Coding Text Coding Text Coding Text
                    Coding Text Coding Text Coding Text Coding Text Coding Text
                    Coding Text
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
                  {BookList.map((item) => (
                    <>
                      <div className="w-auto h-auto">
                        <p
                          className={`${
                            theme === "dark" ? "text-white" : "text-black"
                          } text-base `}
                        >
                          {item.role}
                        </p>
                        <div className="w-full h-full px-4 flex flex row items-center justify-center">
                          <img
                            className="transition duration-200 ease-in-out"
                            src={item.coverURL}
                            alt={item.name}
                          />
                        </div>
                      </div>
                      <Link to={`/previewer/${item.shortName}`}>
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
                    Dogs Text Dogs Text Dogs Text Dogs Text Dogs Text Dogs Text
                    Dogs Text Dogs Text Dogs Text Dogs Text Dogs Text Dogs Text
                    Dogs Text Dogs Text Dogs Text Dogs Text Dogs Text
                  </p>
                </div>
              </div>
              <div className="hidden md:flex flex-row w-full px-12 py-4 font-semibold tracking-tight leading-7 text-justify">
                {visibleText === "coding" ? (
                  <p>
                    CODING TEXT CODING TEXT CODING TEXT CODING TEXT CODING TEXT
                    CODING TEXT CODING TEXT CODING TEXT CODING TEXT CODING TEXT
                    CODING TEXT CODING TEXT CODING TEXT CODING TEXT CODING TEXT
                    CODING TEXT
                  </p>
                ) : null}

                {visibleText === "writing" ? (
                  <div className="w-full h-full">
                    <SpringContainer />
                  </div>
                ) : null}

                {visibleText === "dogs" ? (
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Delectus neque quam exercitationem! Possimus fugit commodi a
                    itaque, dolorum praesentium esse quidem veritatis et
                    reiciendis mollitia dolore ipsam ex doloremque, eius
                    excepturi. Quidem voluptatibus, asperiores pariatur
                    consectetur officiis eligendi veniam inventore.
                  </p>
                ) : null}
              </div>
            </div>
          </div>

          <div className="flex flex-row justify-start items-center">
            <div className="w-10 h-1 inline-flex bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-lg" />
            <p className="text-2xl font-bold uppercase ml-10 inline-flex">
              Skills
            </p>
          </div>

          <div className="text-white font-bold uppercase mt-6 w-full border-2 border-gray-800 rounded-lg flex flex-row flex-wrap justify-around items-center mb-12 shadow-xl">
            <div className="m-4 h-32 w-32 border-2 border-gray-800 bg-gray-900 rounded-full flex flex-col justify-center items-center">
              <FaReact className="w-16 h-16" style={{ color: "#00b7ff" }} />
              <p className="tracking-wider text-lg uppercase">React</p>
            </div>
            <div className="m-4 h-32 w-32 border-2 border-gray-800 bg-gray-900 rounded-full flex flex-col justify-center items-center">
              <DiJavascript
                className="w-16 h-16"
                style={{ color: "#ddb440" }}
              />
              <p className="tracking-wider text-sm">JavaScript</p>
            </div>
            <div className="m-4 h-32 w-32 border-2 border-gray-800 bg-gray-900 rounded-full flex flex-col justify-center items-center">
              <img className="w-16 h-16" src={firebaseLogo} alt="firebase" />
              <p className="tracking-wider">Firebase</p>
            </div>
            <div className="m-4 h-32 w-32 border-2 border-gray-800 bg-gray-900 rounded-full flex flex-col justify-center items-center">
              <SiTailwindcss
                className="w-16 h-16"
                style={{ color: "#38b2ac" }}
              />
              <p className="text-sm">TailwindCSS</p>
            </div>
            <div className="m-4 h-32 w-32 border-2 border-gray-800 bg-gray-900 rounded-full flex flex-col justify-center items-center">
              <BsFillBootstrapFill
                className="w-16 h-16"
                style={{ color: "#563d7c" }}
              />
              <p className="text-sm">Bootstrap</p>
            </div>
            <div className="m-4 h-32 w-32 border-2 border-gray-800 bg-gray-900 rounded-full flex flex-col justify-center items-center">
              <FaGithub className="w-16 h-16" style={{ color: "#ffffff" }} />
              <p>GitHub</p>
            </div>

            <div className="m-4 h-32 w-32 border-2 border-gray-800 bg-gray-900 rounded-full flex flex-col justify-center items-center">
              <img
                className="w-24 h-16"
                src="https://camo.githubusercontent.com/234f6fe1b4fdef71cd8e1f5fbad043093d023dba/68747470733a2f2f617065786368617274732e636f6d2f6d656469612f72656163742d617065786368617274732e706e67"
                alt="apexcharts"
              />
              <p className="text-sm">ApexCharts</p>
            </div>

            <div className="m-4 h-32 w-32 border-2 border-gray-800 bg-gray-900 rounded-full flex flex-col justify-center items-center">
              <img
                className="w-16 h-16"
                src="https://avatars1.githubusercontent.com/u/472182?s=280&v=4"
                alt="contentful"
              />
              <p className="tracking-wider text-sm">Contentful</p>
            </div>

            <div className="m-4 h-32 w-32 border-2 border-gray-800 bg-gray-900 rounded-full flex flex-col justify-center items-center">
              <DiPhotoshop className="w-16 h-16" style={{ color: "#00b7ff" }} />
              <p className="text-sm">Photoshop</p>
            </div>
            <div className="m-4 h-32 w-32 border-2 border-gray-800 bg-gray-900 rounded-full flex flex-col justify-center items-center">
              <FaCss3Alt className="w-16 h-16" style={{ color: "#258ec8" }} />
              <p className="tracking-wider">CSS 3</p>
            </div>
            <div className="m-4 h-32 w-32 border-2 border-gray-800 bg-gray-900 rounded-full flex flex-col justify-center items-center">
              <FaHtml5 className="w-16 h-16" style={{ color: "#dc4d25" }} />
              <p className="tracking-wider">Html 5</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
