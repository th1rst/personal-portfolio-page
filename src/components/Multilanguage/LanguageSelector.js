import React, { useContext, useEffect } from "react";
import { LanguageContext } from "./LanguageProvider";

export function LanguageSelector() {
  const { userLanguage, userLanguageChange } = useContext(LanguageContext);

  useEffect(() => {
    let userLanguage = window.localStorage.getItem("userLanguage");
    if (!userLanguage) {
      userLanguage = "english";
    }
    userLanguageChange(userLanguage);
  }, [userLanguageChange]);

  return (
    <div className="ml-2 flex flex-row text-sm font-semibold">
      <span
        className={`mr-px text-xl ${
          userLanguage === "english" ? null : "cursor-pointer opacity-50"
        }`}
        onClick={() => userLanguageChange("english")}
        role="img"
        aria-label="british-flag"
      >
        🇬🇧
      </span>

      <div className="mx-1 h-4 my-auto w-px border-l border-gray-700" />

      <span
        className={`ml-px text-xl ${
          userLanguage === "german" ? null : "cursor-pointer opacity-50"
        }`}
        onClick={() => userLanguageChange("german")}
        role="img"
        aria-label="german-flag"
      >
        🇩🇪
      </span>
    </div>
  );
}
