import CodeEditorPage from "./CodeEditorPage";
// import ProblemStatement from "./components/ProblemStatement/ProblemStatement";
import ProblemStatementPage from "./ProblemStatementPage";
export default function Home() {
  return (
    <div className="flex">
      <div className="first w-1/2">
        <ProblemStatementPage />
      </div>
      <div className="second w-1/2">
        <CodeEditorPage />
      </div>
    </div>
  );
}
