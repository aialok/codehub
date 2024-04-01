import {CodeEditorContext} from "./context";
import { useState } from "react";
const CodeEditorProvider = ({ children }) => {
  const [code, setCode] = useState("");

  return (
    <CodeEditorContext.Provider value={{ code, setCode }}>
      {children}
    </CodeEditorContext.Provider>
  );
};

export default CodeEditorProvider;
