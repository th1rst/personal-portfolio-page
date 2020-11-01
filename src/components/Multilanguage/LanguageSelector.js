import React, { useContext, useEffect } from "react";
import { LanguageContext } from "./LanguageProvider";

export default function LanguageSelector() {
  const { userLanguage, userLanguageChange } = useContext(LanguageContext);

  useEffect(() => {
    let defaultLanguage = window.localStorage.getItem("userLanguage");
    if (!defaultLanguage) {
      defaultLanguage = window.navigator.language.substring(0, 2);
    }
    userLanguageChange(defaultLanguage);
  }, [userLanguageChange]);

  return (
    <div className="ml-2 flex flex-row text-sm font-semibold">
      <p
        className={`mr-px ${
          userLanguage === "english"
            ? "text-white"
            : "text-gray-500 hover:text-white cursor-pointer"
        }`}
        onClick={() => userLanguageChange("english")}
      >
        EN
      </p>
      <div className="mx-1 h-4 my-auto w-px border-l border-gray-700" />
      <p
        className={`ml-px ${
          userLanguage === "german"
            ? "text-white"
            : "text-gray-500 hover:text-white cursor-pointer"
        }`}
        onClick={() => userLanguageChange("german")}
      >
        DE
      </p>
    </div>
  );
}

/* ORIGINAL 


import React, { useContext, useEffect } from "react";

import { languageOptions } from "./Dictionary";
import { LanguageContext } from "./LanguageProvider";

export default function LanguageSelector() {
  const { userLanguage, userLanguageChange } = useContext(LanguageContext);

  // set selected language by calling context method
  const handleLanguageChange = (e) => userLanguageChange(e.target.value);

  useEffect(() => {
    let defaultLanguage = window.localStorage.getItem("userLanguage");
    if (!defaultLanguage) {
      defaultLanguage = window.navigator.language.substring(0, 2);
    }
    userLanguageChange(defaultLanguage);
  }, [userLanguageChange]);

  return (
    <select onChange={handleLanguageChange} value={userLanguage}>
      {Object.entries(languageOptions).map(([id, name]) => (
        <option key={id} value={id}>
          {name}
        </option>
      ))}
    </select>
  );
}





*/
