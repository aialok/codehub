import React, { useRef } from "react";
import Editor from "@monaco-editor/react";
import { useContext } from "react";
import { CodeEditorContext } from "../../context/Provider/context";
import { LanguageContext } from "../../context/Provider/context";

function CodeEditor() {
  const { code, setCode } = useContext(CodeEditorContext);
  const { selectedLanguage } = useContext(LanguageContext);
  const editorRef = useRef(null);

  const handleEditorMount = (editor, monaco) => {
    editorRef.current = editor;
  };

  const onChangeCodeValue = (value) => {
    setCode(value);
  };

  return (
    <div className="flex flex-col h-60vh">
      <div className="flex-grow">
        <Editor
          height="40vh"
          loading={"Loading..."}
          defaultLanguage={selectedLanguage}
          language={selectedLanguage}
          defaultValue={code}
          onChange={onChangeCodeValue}
          onMount={handleEditorMount}
          theme="vs-dark"
          // You can change the theme as needed
        />
      </div>
      {/* You can add additional components below the editor if needed */}
    </div>
  );
}

export default CodeEditor;
