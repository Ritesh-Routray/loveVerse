import express from "express";
import { createAIlovePredictionAns } from "../controllers/AIlovePredictionController.js";

const router = express.Router();

router.post("/AIlovePrediction", createAIlovePredictionAns);

export default router;