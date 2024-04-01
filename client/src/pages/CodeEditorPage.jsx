import React, { useState } from "react";
import { useContext } from "react";
import CodeEditorContext from "../context/Provider/context";
import axios from "axios";
import CodeEditor from "../components/CodeEditor";

function CodeEditorPage() {
  const { code } = useContext(CodeEditorContext);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [output, setOutput] = useState(""); // State to hold the output

  const sendCodeToServer = async (code) => {
    try {
      setIsSubmitting(true);
      const response = await axios.post(
        "http://localhost:3000/api/v1/submit-code",
        {
          language: "javascript",
          code: code,
        }
      );
      console.log("Response from server: ", response);
      // Assuming server sends back the output
      setOutput(response.data.message.stdout);
    } catch (error) {
      console.error("Error occurred while submitting code: ", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const onSubmitCode = () => {
    console.log("Submitted code: ", code);
    sendCodeToServer(code);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-400 to-purple-500">
      <div className="w-full max-w-4xl text-center mb-12">
        <h1 className="text-5xl font-extrabold text-white mt-8 mb-4">
          Welcome to the Code Editor
        </h1>
        <p className="text-lg text-white">
          Write, compile, and execute your code with ease!
        </p>
      </div>
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
        <CodeEditor />
      </div>
      <div className="w-full max-w-4xl bg-white rounded-b-lg py-8">
        <div className="flex justify-center mt-4">
          <button
            className={`bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={onSubmitCode}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
        {/* Output Section */}
        <div className="mt-8">
          <h2 className="text-3xl font-bold text-gray-800 text-center">
            Output
          </h2>
          <div className="bg-gray-200 p-4 rounded-lg mt-4">
            {output ? (
              <pre className="whitespace-pre-wrap">{output}</pre>
            ) : (
              <p className="text-gray-600">No output yet.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CodeEditorPage;
