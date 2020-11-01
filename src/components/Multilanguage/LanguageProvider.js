import React, { useState, createContext } from "react";
import { languageOptions, dictionaryList } from "./Dictionary";

export const LanguageContext = createContext({
  userLanguage: "english",
  dictionary: dictionaryList.english,
});

export function LanguageProvider({ children }) {
  const [userLanguage, setUserLanguage] = useState("english");

  const provider = {
    userLanguage,
    dictionary: dictionaryList[userLanguage],
    userLanguageChange: (selected) => {
      const newLanguage = languageOptions[selected] ? selected : "english";
      setUserLanguage(newLanguage);
      window.localStorage.setItem("userLanguage", newLanguage);
    },
  };

  return (
    <LanguageContext.Provider value={provider}>
      {children}
    </LanguageContext.Provider>
  );
}
