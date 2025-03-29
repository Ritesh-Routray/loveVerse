import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./backend/config/db.js";



// Importing the routes
import futureTimeCapsule from "./backend/routes/futureLoveTimeCapsule.js";
import AIlovePrediction from "./backend/routes/AIlovePredictionRoute.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());


// Routes
app.use("/api", futureTimeCapsule);
app.use("/api", AIlovePrediction);

app.listen(process.env.PORT, () => {
  connectDB();
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
