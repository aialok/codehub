import React from "react";
import { Link } from "react-router-dom";

function ProblemStatementNavBar() {
  return (
    <div>
      <ul className="flex space-x-4 p-8 ml-4">
        <Link to="/problem-statements">
          {" "}
          <li className="font-semibold text-xl text-white">
            Problem Statements
          </li>
        </Link>
        <Link to="/submission">
          {" "}
          <li className="font-semibold text-xl text-white">Submissions</li>
        </Link>
      </ul>
    </div>
  );
}

export default ProblemStatementNavBar;
