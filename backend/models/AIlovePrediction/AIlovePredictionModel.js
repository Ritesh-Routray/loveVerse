import mongoose from "mongoose";
import User from "../user/user.js";

const AIlovePredictionSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: User,
  },
  Q1: {
    type: String,
    required: true,
    question: "What is your current relationship status?",
    answer: [
      "Single",
      "Dating",
      "Married",
      "Engaged",
      "Recently Broken Up",
      "Complicated",
    ],
  },
  Q2: {
    type: String,
    required: true,
    question: "How would you describe your connection with your partner?",
    answer: ["Strong", "Growing", "Complicated", "Confusing", "Distant"],
  },
  Q3: {
    type: String,
    required: true,
    question:
      "Describe your first interaction with your partner or your most memorable romantic moment",
    answer: "",
  },
  Q4: {
    type: String,
    required: true,
    question: "What do you hope for in your love life in the next year?",
    answer: "",
  },
  Q5: {
    type: String,
    required: true,
    question: "What is your biggest fear in your love life?",
    answer: "",
  },
  Q6: {
    type: String,
    required: true,
    question: "What is your biggest strength in your love life?",
    answer: "",
  },
  Q7: {
    type: String,
    required: true,
    question: "What is your biggest weakness in your love life?",
    answer: "",
  },
  Q8: {
    type: String,
    required: true,
    question: "What is your biggest regret in your love life?",
    answer: "",
  },
    Q9: {
        type: String,
        required: true,
        question: "What do you expect from your partner?",
        answer: "",
    },
    Q10: {
        type: String,
        required: true,
        question: "What do you think your partner expects from you?",
        answer: "",
    },
});

const AIlovePrediction = mongoose.model("AIlovePrediction", AIlovePredictionSchema);
export default AIlovePrediction;
