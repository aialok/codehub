import React, { useState, useContext } from "react";
import { LanguageContext } from "../context/Provider/context";
function LanguageSelect({ onChange }) {
  
    const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext);

  const handleLanguageChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedLanguage(selectedValue);
    // onChange(selectedValue);
  };

  return (
    <div>
      <label htmlFor="language-select">Select a language:</label>
      <select
        id="language-select"
        value={selectedLanguage}
        onChange={handleLanguageChange}
      >
        <option value="">Select</option>
        <option value="javascript">JavaScript</option>
        <option value="python">Python</option>
        <option value="java">Java</option>
        <option value="csharp">C#</option>
        <option value="ruby">Ruby</option>
        <option value="php">PHP</option>
        {/* Add more language options as needed */}
      </select>
    </div>
  );
}

export default LanguageSelect;
