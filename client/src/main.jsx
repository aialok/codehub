import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import CodeEditorProvider from "./context/Provider/CodeEditorProvider.jsx";
import LanguageContextProvider from "./context/Provider/LanguageContextProvider.jsx";
import { BrowserRouter, RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CodeEditorProvider>
      <LanguageContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </LanguageContextProvider>
    </CodeEditorProvider>
  </React.StrictMode>
);
