import Problem from "../models/problem.model.js";

const createProblem = async (problem) => {
  try {
    const newProblem = await Problem.create(problem);
    return newProblem;
  } catch (error) {
    console.log("There is error in problem.services.js: createProblem()");
    throw error;
  }
};

const getProblemById = async (problemId) => {
  try {
    const problem = await Problem.findById(problemId).lean();
    return problem;
  } catch (error) {
    console.log("There is error in problem.services.js: getProblemById()");
    throw error;
  }
};

const getAllProblems = async () => {
  try {
    const problems = await Problem.find().lean();
    return problems;
  } catch (error) {
    console.log("There is error in problem.services.js: getAllProblems()");
    throw error;
  }
};

export default {createProblem, getProblemById, getAllProblems};
