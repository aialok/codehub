import React from "react";

function ProblemStatementList() {
  const problems = [
    {
      id: 1,
      problem: "Route Optimization",
      title: "Finding the shortest route to visit multiple locations",
      solution:
        "Various algorithms such as Dijkstra's algorithm, A* algorithm, or Genetic Algorithms",
      acceptance: "Logistics companies, delivery services, ride-sharing apps",
      difficulty: "Medium to Hard",
    },
    {
      id: 2,
      problem: "Inventory Management",
      title:
        "Optimizing inventory levels based on demand forecasts and storage costs",
      solution:
        "Inventory control models like EOQ, JIT, or sophisticated algorithms incorporating machine learning",
      acceptance: "Retailers, manufacturers, supply chain companies",
      difficulty: "Medium",
    },
    {
      id: 3,
      problem: "Recommendation Systems",
      title:
        "Suggesting relevant items to users based on their preferences and behavior",
      solution:
        "Collaborative filtering, content-based filtering, or hybrid approaches",
      acceptance:
        "E-commerce platforms, streaming services, social media platforms",
      difficulty: "Medium",
    },
    {
      id: 4,
      problem: "Network Routing",
      title:
        "Determining the most efficient paths for data packets in a network",
      solution:
        "Routing algorithms like OSPF, BGP, or dynamic programming-based approaches",
      acceptance:
        "Internet service providers, telecommunications companies, networking equipment manufacturers",
      difficulty: "Hard",
    },
    {
      id: 5,
      problem: "Job Scheduling",
      title: "Scheduling tasks on machines to minimize completion time",
      solution:
        "Algorithms such as Shortest Job First (SJF), Round Robin, or Genetic Algorithms",
      acceptance:
        "Manufacturing companies, data centers, project management software",
      difficulty: "Medium",
    },
    {
      id: 6,
      problem: "Image Recognition",
      title: "Identifying objects or patterns in images",
      solution:
        "Deep learning models like Convolutional Neural Networks (CNNs), feature extraction algorithms",
      acceptance: "Security systems, medical imaging, autonomous vehicles",
      difficulty: "Hard",
    },
  ];

  return (
    <div className="text-white w-full h-screen  p-10">
      <h1 className="text-white text-4xl mb-10">Problem Statement List</h1>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2 border">Id</th>
            <th className="px-4 py-2 border">Title</th>
            <th className="px-4 py-2 border">Solution</th>
            <th className="px-4 py-2 border">Acceptance</th>
            <th className="px-4 py-2 border">Difficulty</th>
          </tr>
        </thead>
        <tbody>
          {problems.map((problem) => {
            return (
              <tr key={problem.id}>
                <td className="border px-4 py-2">{problem.id}</td>
                <td className="border px-4 py-2">{problem.problem}</td>
                <td className="border px-4 py-2">{problem.solution}</td>
                <td className="border px-4 py-2">{problem.acceptance}</td>
                <td className="border px-4 py-2">{problem.difficulty}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ProblemStatementList;
