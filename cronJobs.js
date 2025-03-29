import cron from "node-cron";
import dotenv from "dotenv";
import connectDB from "./backend/config/db.js";
import { sendFutureLoveTimeCapsule } from "./backend/utils/sendEmail.js";
import FutureLoveTimeCapsuleModel from "./backend/models/futureLoveTimeCapsule/futureLoveTimeCapsule.js";

dotenv.config();

(async () => {
  await connectDB();
  console.log("✅ Database connected.");

  cron.schedule("* * * * *", async () => {
    console.log("⏳ Checking for scheduled love letters...");

    const now = new Date();

    const pendingCapsules = await FutureLoveTimeCapsuleModel.find({
      isDelivered: false,
    });

    for (const capsule of pendingCapsules) {
      await sendFutureLoveTimeCapsule(capsule.User);
      await FutureLoveTimeCapsuleModel.findByIdAndUpdate(capsule._id, {
        isDelivered: true,
        deliveredAt: now,
      });
      console.log(`✅ Processed capsule with ID: ${capsule._id}`);
    }
  });
})();
