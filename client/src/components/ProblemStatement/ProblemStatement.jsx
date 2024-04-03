import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import dummyData from "../../apis/dummyData";

function ProblemStatement() {
  const [visible, setVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  const data = dummyData[2];

  useEffect(() => {
    if (inView) {
      setVisible(true);
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      className={`w-full p-8 h-screen  text-white ${
        visible ? "animate-fadeIn" : "opacity-0"
      }`}
    >
      <div className="rounded-lg  p-4 mb-8">
        <h2 className="text-3xl font-bold mb-6">{data.title}</h2>
        <p className="text-lg font-medium mb-6">{data.description}</p>
        <div className="grid grid-cols-2 gap-4 mb-8 text-black">
          <div className="rounded-lg bg-gray-200 p-4 shadow-sm  overflow-x-scroll">
            <h3 className="text-lg font-semibold ">Input</h3>{" "}
            {data.sampleInput.map((input, index) => (
              <p key={index} className="text-lg font-medium mb-2">
                {" "}
                {input}{" "}
              </p>
            ))}
          </div>
          <div className="rounded-lg bg-gray-200 p-4 shadow-sm overflow-x-scroll">
            <h3 className="text-lg font-semibold mb-2 ">Output</h3>
            {data.sampleOutput.map((output, index) => (
              <p key={index} className="text-lg font-medium mb-2">
                {" "}
                {output}{" "}
              </p>
            ))}
          </div>
        </div>
        <div>
          <div className="rounded-lg bg-gray-800 p-4 mb-8">
            <h3 className="text-lg font-semibold mb-2 text-white">Topics</h3>

            {data.topics.map((topic, index) => (
              <p key={index} className="text-lg font-medium mb-2">
                {" "}
                {topic}{" "}
              </p>
            ))}
          </div>
          <div className="rounded-lg bg-gray-800 p-4 mb-8">
            <h3 className="text-lg font-semibold mb-2 text-white">
              Submissions
            </h3>
            <p className="text-lg font-medium mb-4 text-white">
              {data.submissions}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProblemStatement;
