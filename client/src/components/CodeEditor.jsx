import React, { useState, useRef } from "react";
import Editor from "@monaco-editor/react";
import { useContext } from "react";
import CodeEditorContext from "../context/Provider/context";

function CodeEditor() {
  const { code, setCode } = useContext(CodeEditorContext);
  const editorRef = useRef(null);

  const handleEditorMount = (editor, monaco) => {
    editorRef.current = editor;
  };

  const onChangeCodeValue = (value) => {
    setCode(value);
  };

  return (
    <div className="flex flex-col h-70vh">
      <div className="flex-grow">
        <Editor
          height="50vh"
          defaultLanguage="javascript"
          defaultValue={code}
          onChange={onChangeCodeValue}
          onMount={handleEditorMount}
          theme="vs-dark" // You can change the theme as needed
        />
      </div>
      {/* You can add additional components below the editor if needed */}
    </div>
  );
}

export default CodeEditor;
