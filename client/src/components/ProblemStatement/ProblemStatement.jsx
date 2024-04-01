import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

function ProblemStatement() {
  const [visible, setVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  
  useEffect(() => {
    if (inView) {
      setVisible(true);
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      className={`w-full p-8 h-screen  text-white ${
        visible ? 'animate-fadeIn' : 'opacity-0'
      }`}
    >
      <div className="rounded-lg  p-4 mb-8">
        <h2 className="text-3xl font-bold mb-6">Description</h2>
        <p className="text-lg font-medium mb-6">
          Write a function that takes in a string and returns the string with all of the vowels removed.
        </p>
        <div className="grid grid-cols-2 gap-4 mb-8 text-black">
          <div className="rounded-lg bg-gray-200 p-4 shadow-sm">
            <h3 className="text-lg font-semibold mb-2">Input</h3>
            <p className="text-lg font-medium">A string of any length.</p>
          </div>
          <div className="rounded-lg bg-gray-200 p-4 shadow-sm">
            <h3 className="text-lg font-semibold mb-2">Output</h3>
            <p className="text-lg font-medium">A string with all the vowels removed.</p>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Example</h3>
          <p className="text-lg font-medium my-4">
            <strong>Input:</strong> "Hello, World!"<br />
            <strong>Output:</strong> "Hll, Wrld!"
          </p>
          <p className="text-lg font-medium my-4">
            <strong>Input:</strong> "Hello, World!"<br />
            <strong>Output:</strong> "Hll, Wrld!"
          </p>
          <p className="text-lg font-medium my-4">
            <strong>Input:</strong> "Hello, World!"<br />
            <strong>Output:</strong> "Hll, Wrld!"
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProblemStatement;
