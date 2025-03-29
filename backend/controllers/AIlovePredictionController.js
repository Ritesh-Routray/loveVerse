import AIlovePredictionAns from "../models/AIlovePrediction/AIlovePredictionAns.js";
import AIlovePrediction from "../models/AIlovePrediction/AIlovePredictionModel.js";

export const createAIlovePredictionAns = async (req, res) => {
    try {
        const { Q1Ans, Q2Ans, Q3Ans, Q4Ans, Q5Ans, Q6Ans, Q7Ans, Q8Ans, Q9Ans, Q10Ans, AIreview, AIlovePrediction, user } = req.body;
        if(!Q1Ans || !Q2Ans || !Q3Ans || !Q4Ans || !Q5Ans || !Q6Ans || !Q7Ans || !Q8Ans || !Q9Ans || !Q10Ans || !AIreview || !AIlovePrediction) {
            return res.status(400).json({ success: false, message: "All fields are required" });
        }

        const AIlovePredictionAnswers = new AIlovePredictionAns({
          user,
          Q1Ans,
          Q2Ans,
          Q3Ans,
          Q4Ans,
          Q5Ans,
          Q6Ans,
          Q7Ans,
          Q8Ans,
          Q9Ans,
          Q10Ans,
          AIreview,
          AIlovePrediction,
        });

        await AIlovePredictionAnswers.save();
        res.status(201).json({ success: true, message: "AI love prediction created successfully" });
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal server error" });
        console.log(error);
    }
}