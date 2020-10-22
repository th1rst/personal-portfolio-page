import React, { useState, useEffect } from "react";
import Typical from "react-typical";
import Navigation from "../components/Navigation"

export default function Home() {
  const [introFinished, setIntroFinished] = useState(false);

  useEffect(() => {
    setTimeout(() => {
        setIntroFinished(true);
    }, 7000);

  }, [setIntroFinished]);

  return (
    <div>
      <div className="w-screen h-screen bg-black">
        {introFinished ? null : (
          <div className="text-center">
            <Typical
              className="text-white text-3xl"
              steps={[
                "Hi there!",
                2000,
                "I'm Marco.",
                1000,
                "Web Developer",
                1000,
              ]}
              loop={1}
              wrapper="p"
            />
            <button
              className="text-white"
              onClick={() => setIntroFinished(true)}
            >
              CLICKME
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
