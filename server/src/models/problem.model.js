import mongoose from "mongoose";

const problemSchema = new mongoose.Schema({
  title: {
    type: string,
    required: true,
  },
  description: {
    type: string,
    required: true,
  },

  input: {
    type: string,
    required: true,
  },

  output: {
    type: string,
    required: true,
  },

  sampleInput: [
    {
      type: string,
      required: true,
    },
  ],

  sampleOutput: [
    {
      type: string,
      required: true,
    },
  ],
});

const Problem = mongoose.model("Problem", problemSchema);

export default Problem;
