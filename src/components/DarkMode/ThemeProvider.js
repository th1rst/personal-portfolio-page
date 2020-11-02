import React from "react";
import { getTheme } from "./getTheme";

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = React.useState(getTheme);

  const rawSetTheme = (theme) => {
    if (theme === "dark") {
      localStorage.setItem("darkMode", "dark");
    } else if (theme === "light") {
      localStorage.setItem("darkMode", "light");
    }
  };

  React.useEffect(() => {
    rawSetTheme(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
