// "Call To Action" Button on the main page.
// Text: "Take a look at my work ->"

import React from "react";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Text } from "./Multilanguage/Text";
import { ThemeContext } from "./DarkMode/ThemeProvider";

export function CTAbutton() {
  const { theme } = React.useContext(ThemeContext);
  return (
    <>
      <Link to="/projects">
        <button
          className={`${
            theme === "dark"
              ? "hover:bg-gray-900 text-white border-white"
              : "hover:bg-black hover:text-white text-black border-black"
          } mt-20 mx-auto p-4 h-16 w-64 rounded-lg border-2 flex flex-row items-center justify-center pointer-events-auto cursor-pointer transition duration-300 ease-in-out`}
        >
          <p className="text-sm text-center font-semibold uppercase tracking-tight">
            <Text tid="homeButtonText" />
          </p>
          <FaLongArrowAltRight size={24} className="ml-2" />
        </button>
      </Link>
    </>
  );
}
