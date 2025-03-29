import { createFutureLoveTimeCapsule } from "../controllers/timeCapsuleController.js";
import express from "express";

const router = express.Router();

router.post("/createTimeCapsule/:userId", createFutureLoveTimeCapsule);

export default router;
