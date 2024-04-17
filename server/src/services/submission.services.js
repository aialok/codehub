import Submission from "../models/submission.model";

const createSubmission = async (submission) => {
  try {
    const newSubmission = await Submission.create(submission);
    return newSubmission;
  } catch (error) {
    console.log("There is error in submission.services.js: createSubmission()");
    throw error;
  }
};

const getSubmissionById = async (submissionId) => {
  try {
    const submission = await Submission.findById(submissionId).lean();
    return submission;
  } catch (error) {
    console.log(
      "There is error in submission.services.js: getSubmissionById()"
    );
    throw error;
  }
};

const getAllSubmissionsByUserId = async (userId) => {
  try {
    const submissions = await Submission.find({ userId }).lean();
    return submissions;
  } catch (error) {
    console.log(
      "There is error in submission.services.js: getAllSubmissionsByUserId()"
    );
    throw error;
  }
};

export default {createSubmission, getSubmissionById, getAllSubmissionsByUserId};
