import { Schema, model } from "mongoose";

const submissionSchema = new Schema({
  problemId: {
    type: Schema.Types.ObjectId,
    ref: "Problem",
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  verdict: {
    type: String,
    required: true,
  },
});

const Submission = model("Submission", submissionSchema);

export default Submission;
