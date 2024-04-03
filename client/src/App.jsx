import "./App.css";
import CodeEditorPage from "./pages/CodeEditorPage";
import ProblemStatementPage from "./pages/ProblemStatementPage";
import Home from "./pages/Home";
import Submissiom from "./components/ProblemStatement/Submissiom";
import ProblemStatementList from "./components/ProblemStatement/ProblemStatementList";
import { Route, Routes } from "react-router-dom";
import ContestPage from "./pages/ContestPage/ContestPage";

export default function App() {
  return (
    <div className="flex h-screen">
      <div className="w-full bg-gradient-to-b from-black to-gray-900 ">
        <div className="h-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/problem-statements" element={<ProblemStatementList />} />
            <Route path="/code-editor" element={<CodeEditorPage />} />
            <Route path="/submission" element={<Submissiom />} />
            <Route path="/contest" element={<ContestPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
