import "./App.css";
import CodeEditorPage from "./pages/CodeEditorPage";
import ProblemStatementPage from "./pages/ProblemStatementPage";
import Home from "./pages/Home";
import Submissiom from "./components/ProblemStatement/Submissiom";
import ProblemStatementList from "./components/ProblemStatement/ProblemStatementList";
import { Route, Routes } from "react-router-dom";
import ContestPage from "./pages/ContestPage/ContestPage";
import Navbar from "./components/Navbar/Navbar";
import Home2 from "./pages/Home2";

export default function App() {
  return (
    <div className=" min-h-screen top-0 left-0 w-full h-full bg-[#1A1A1A] ">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home2 />} />
        <Route path="/problem-statements" element={<ProblemStatementList />} />
        <Route path="/code-editor" element={<CodeEditorPage />} />
        <Route path="/submission" element={<Submissiom />} />
        <Route path="/contest" element={<ContestPage />} />
      </Routes>
    </div>
  );
}
