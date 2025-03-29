import mongoose from "mongoose";
import User from "../user/user.js";

const AIlovePredictionAnsSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User,
    required: true,
  },
  Q1Ans: {
    type: String,
    required: true,
  },
  Q2Ans: {
    type: String,
    required: true,
  },
  Q3Ans: {
    type: String,
    required: true,
  },
  Q4Ans: {
    type: String,
    required: true,
  },
  Q5Ans: {
    type: String,
    required: true,
  },
  Q6Ans: {
    type: String,
    required: true,
  },
  Q7Ans: {
    type: String,
    required: true,
  },
  Q8Ans: {
    type: String,
    required: true,
  },
  Q9Ans: {
    type: String,
    required: true,
  },
  Q10Ans: {
    type: String,
    required: true,
  },
  AIreview: {
    type: String,
    required: true,
  },
  AIlovePrediction: {
    type: String,
    required: true,
  },
});

const AIlovePredictionAns = mongoose.model("AIlovePredictionAns", AIlovePredictionAnsSchema);
export default AIlovePredictionAns;