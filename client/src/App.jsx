import "./App.css";
import CodeEditorPage from "./pages/CodeEditorPage";
// import ProblemStatement from "./components/ProblemStatement/ProblemStatement";
import ProblemStatementPage from "./pages/ProblemStatementPage";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
export default function App() {
  return (
    <div className="flex">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/problem-statement" element={<ProblemStatementPage />} />
        <Route path="/code-editor" element={<CodeEditorPage />} />
      </Routes>
    </div>
  );
}
