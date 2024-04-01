import { useState } from "react";
import { LanguageContext } from "./context";

const LanguageContextProvider = ({ children }) => {
  const [selectedLanguage, setSelectedLanguage] = useState("Python");

  return (
    <LanguageContext.Provider value={{ selectedLanguage, setSelectedLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContextProvider;
