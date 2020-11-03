import React from "react";
import { ThemeContext } from "./ThemeProvider";
import { FaMoon } from "react-icons/fa";
import { ImSun } from "react-icons/im";

export function ThemeSelector() {
  const { theme, setTheme } = React.useContext(ThemeContext);
  return (
    <div>
      <div className="ml-4 mr-2">
        {theme === "dark" ? (
          <ImSun
            size={20}
            className="text-white hover:text-gray-500 cursor-pointer"
            onClick={() => setTheme("light")}
          />
        ) : (
          <FaMoon
            size={20}
            className="text-gray-800 hover:text-gray-500 cursor-pointer"
            onClick={() => setTheme("dark")}
          />
        )}
      </div>
    </div>
  );
}
