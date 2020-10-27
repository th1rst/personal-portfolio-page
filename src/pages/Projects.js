import React from "react";
import MakeMeAwesome from "../components/Projects.js/MakeMeAwesome";

export default function Projects() {
  return (
    <div className="w-full h-full bg-black">
      <h1 className="pt-4 text-3xl font-semibold uppercase text-white text-center tracking-wider">
        Projects
      </h1>
      <h1 className="text-xs uppercase text-white text-center">
        (newest to oldest)
      </h1>

      {/* PROJECTS CONTAINER */}
      <div className="m-4 p-4 flex flex-col">
        <MakeMeAwesome />
      </div>
    </div>
  );
}
