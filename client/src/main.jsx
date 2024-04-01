import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import CodeEditorProvider from "./context/Provider/CodeEditorProvider.jsx";
import LanguageContextProvider from "./context/Provider/LanguageContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CodeEditorProvider>
      <LanguageContextProvider>
        <App />
      </LanguageContextProvider>
    </CodeEditorProvider>
  </React.StrictMode>
);
