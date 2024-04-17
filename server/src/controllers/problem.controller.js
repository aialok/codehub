import problemServices from "../services/problem.services.js";

const createProblem = async (req, res) => {
  try {
    const problem = await problemServices.createProblem(req.body);

    return res.status(201).json({
      data: problem,
      message: "Problem created successfully",
      success: true,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      message: error.message || "Error creating problem",
      success: false,
      err: error,
    });
  }
};
const getProblemById = async (req, res) => {
  try {
    const problem = await problemServices.getProblemById(req.params.problemId);
    return res.status(200).json({
      data: problem,
      message: "Problem retrieved successfully",
      success: true,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      message: error.message || "Error retrieving problem",
      success: false,
      err: error,
    });
  }
};


export default {createProblem, getProblemById};   