import mongoose from "mongoose";

const problemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },

  input: {
    type: String,
    required: true,
  },

  output: {
    type: String,
    required: true,
  },

  sampleInput: [
    {
      type: String,
      required: true,
    },
  ],

  sampleOutput: [
    {
      type: String,
      required: true,
    },
  ],
  topic: [
    {
      type: String,
      required: true,
    },
  ],
  difficulty: {
    type: String,
    required: true,
  },
});

const Problem = mongoose.model("Problem", problemSchema);

export default Problem;
