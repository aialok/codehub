import CodeEditorContext from "./context";
import { useState } from "react";
const CodeEditorProvider = ({ children }) => {
  const [code, setCode] = useState("// Start your code here!");

  return (
    <CodeEditorContext.Provider value={{ code, setCode }}>
      {children}
    </CodeEditorContext.Provider>
  );
};

export default CodeEditorProvider;
