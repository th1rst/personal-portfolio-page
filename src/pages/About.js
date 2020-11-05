import React from "react";
import { ThemeContext } from "../components/DarkMode/ThemeProvider";
import firebaseLogo from "../assets/pictures/firebaseLogo.png";
import SpringContainer from "../components/SpringContainer";
import { FaCode, FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { DiJavascript, DiPhotoshop } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { BsBook } from "react-icons/bs";

export default function About() {
  const { theme } = React.useContext(ThemeContext);

  return (
    <div className="w-screen min-h-screen">
      <div
        className={`${
          theme === "dark" ? "bg-black" : "bg-white"
        } absolute w-full h-screen flex justify-center border-2 border-red-500`}
      >
        <div className="p-12 w-full flex flex-col border-2 border-blue-500">
          <div className="flex flex-row justify-start items-center">
            <div className="w-10 h-1 inline-flex bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-lg" />
            <p className="text-white text-2xl font-bold uppercase ml-10 inline-flex">
              Who I am
            </p>
          </div>

          <div className="flex flex-row mb-12">
            <div className="my-auto self-start h-40 w-full flex items-center justify-center">
              <img
                className="h-32 w-32 rounded-full object-cover"
                src="https://kochannek.com/profile.jpg"
                alt="profile"
              />
            </div>
            <p className="text-white font-semibold tracking-tight leading-7 text-justify p-4 ml-10 inline-flex">
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
            <p className="text-white text-2xl font-bold uppercase ml-10 inline-flex">
              Passions
            </p>
          </div>

          <div className="w-full border-2 border-red-500 flex flex-row flex-wrap justify-around items-center mb-12">
            <div className="h-40 w-40 border-2 border-blue-500 flex flex-col justify-center items-center">
              <FaCode className="text-blue-400" size={96} />
              <p className="text-white font-bold tracking-wide text-2xl uppercase">
                CODING
              </p>
            </div>

            <div className="h-40 w-40 border-2 border-blue-500"></div>
            <div className="h-40 w-40 border-2 border-blue-500"></div>
          </div>

          <div className="flex flex-row justify-start items-center">
            <div className="w-10 h-1 inline-flex bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-lg" />
            <p className="text-white text-2xl font-bold uppercase ml-10 inline-flex">
              Skills
            </p>
          </div>

          <div className="w-full border-2 border-red-500 flex flex-row flex-wrap justify-around items-center mb-12">
          <div className="m-4 h-32 w-32 border-2 border-gray-800 bg-gray-900 rounded-full flex flex-col justify-center items-center">
              <FaReact className="w-16 h-16" style={{ color: "#00b7ff" }} />
              <p className="text-white font-bold tracking-wider text-lg uppercase">
                React
              </p>
            </div>
            <div className="m-4 h-32 w-32 border-2 border-gray-800 bg-gray-900 rounded-full flex flex-col justify-center items-center">
              <DiJavascript
                className="w-16 h-16"
                style={{ color: "#ddb440" }}
              />
              <p className="text-white font-bold tracking-wider text-sm uppercase">
                JavaScript
              </p>
            </div>
            <div className="m-4 h-32 w-32 border-2 border-gray-800 bg-gray-900 rounded-full flex flex-col justify-center items-center">
              <SiTailwindcss
                className="w-16 h-16"
                style={{ color: "#38b2ac" }}
              />
              <p className="text-white font-bold text-sm uppercase">
                TailwindCSS
              </p>
            </div>
            <div className="m-4 h-32 w-32 border-2 border-gray-800 bg-gray-900 rounded-full flex flex-col justify-center items-center">
              <FaCss3Alt className="w-16 h-16" style={{ color: "#258ec8" }} />
              <p className="text-white font-bold tracking-wider text-lg uppercase">
                CSS 3
              </p>
            </div>
            <div className="m-4 h-32 w-32 border-2 border-gray-800 bg-gray-900 rounded-full flex flex-col justify-center items-center">
              <img className="w-16 h-16" src={firebaseLogo} alt="firebase" />
              <p className="text-white font-bold tracking-wider text-md uppercase">
                Firebase
              </p>
            </div>
            <div className="m-4 h-32 w-32 border-2 border-gray-800 bg-gray-900 rounded-full flex flex-col justify-center items-center">
              <img
                className="w-16 h-16"
                src="https://avatars1.githubusercontent.com/u/472182?s=280&v=4"
                alt="contentful"
              />
              <p className="text-white font-bold tracking-wider text-sm uppercase">
                Contentful
              </p>
            </div>
            
            <div className="m-4 h-32 w-32 border-2 border-gray-800 bg-gray-900 rounded-full flex flex-col justify-center items-center">
              <FaHtml5 className="w-16 h-16" style={{ color: "#dc4d25" }} />
              <p className="text-white font-bold tracking-wider text-lg uppercase">
                Html 5
              </p>
            </div>
            
            
            
            

            

           

            <div className="m-4 h-32 w-32 border-2 border-gray-800 bg-gray-900 rounded-full flex flex-col justify-center items-center">
              <img
                className="w-24 h-16"
                src="https://camo.githubusercontent.com/234f6fe1b4fdef71cd8e1f5fbad043093d023dba/68747470733a2f2f617065786368617274732e636f6d2f6d656469612f72656163742d617065786368617274732e706e67"
                alt="apexcharts"
              />
              <p className="text-white font-bold text-sm uppercase">
                ApexCharts
              </p>
            </div>
            <div className="m-4 h-32 w-32 border-2 border-gray-800 bg-gray-900 rounded-full flex flex-col justify-center items-center">
              <DiPhotoshop className="w-16 h-16" style={{ color: "#00b7ff" }} />
              <p className="text-white font-bold text-sm uppercase">
                Photoshop
              </p>
            </div>
          </div>
        </div>
        {/* 
        
         <div
          className={`${
            theme === "dark" ? "text-white" : "text-black"
          } w-1/2 h-full px-8 md:px-0 mt-32 md:mt-64 my-auto mx-auto flex flex-col border-2 border-green-500`}
        >
          <div className="border-2 border-blue-500 w-full h-full">
            <SpringContainer />
          </div>
        </div>
        */}
      </div>
    </div>
  );
}
