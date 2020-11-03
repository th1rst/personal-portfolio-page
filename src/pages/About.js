import React from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../components/DarkMode/ThemeProvider";

export default function About() {
  const { theme } = React.useContext(ThemeContext);
  return (
    <div className="w-screen min-h-screen">
      <div
        className={`${
          theme === "dark" ? "bg-black" : "bg-white"
        } absolute w-full h-screen flex justify-center border-2 border-red-500`}
      >
        <div
          className={`${
            theme === "dark" ? "text-white" : "text-black"
          } px-8 md:px-0 mt-32 md:mt-64 my-auto mx-auto flex flex-col `}
        >
          <h1>
            When I'm not writing code, I love to write{" "}
            <Link
              className="underline"
              to={{
                pathname: "/previewer/kaufmanns-rezeptsammlung",
                state: { pageCount: 237, bookShortName: "ksr", coverURL: "https://kochannek.com/books/ksr/jpg/cover.jpg" },
              }}
            >
              books
            </Link>{" "}
          </h1>
        </div>
      </div>
    </div>
  );
}
